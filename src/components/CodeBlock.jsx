import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

export default function CodeBlock({ 
  tabs = [], 
  activeTab = 0, 
  onTabChange, 
  title = '', 
  children 
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    let textToCopy = '';
    if (tabs && tabs.length > 0 && tabs[activeTab]?.code) {
      textToCopy = tabs[activeTab].code;
    } else if (typeof children === 'string') {
      textToCopy = children;
    }
    
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="code-window shadow-xl overflow-hidden text-xs">
      {/* Top Header Bar */}
      <div className="px-4 py-2.5 bg-black/5 dark:bg-black/40 border-b border-[#E2E8F0] dark:border-white/10 flex items-center justify-between select-none">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          {title && (
            <span className="text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8] ml-2">
              {title}
            </span>
          )}
        </div>

        {/* Tab Switcher if tabs provided */}
        {tabs && tabs.length > 1 && (
          <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-0.5 rounded-lg">
            {tabs.map((tab, idx) => (
              <button
                key={tab.name || idx}
                onClick={() => onTabChange && onTabChange(idx)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#2563EB] text-white font-semibold shadow-sm'
                    : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <FiCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <FiCopy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display Area */}
      <div className="p-4 overflow-x-auto leading-relaxed font-mono">
        {tabs && tabs.length > 0 ? tabs[activeTab]?.content : children}
      </div>
    </div>
  );
}
