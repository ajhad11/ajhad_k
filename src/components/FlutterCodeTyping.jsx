import { useState, useEffect } from 'react';
import { FiCopy, FiCheck, FiTerminal } from 'react-icons/fi';
import { SiFlutter } from 'react-icons/si';

const FLUTTER_CODE = `import 'package:flutter/material.dart';

void main() => runApp(const AjhadApp());

class AjhadApp extends StatelessWidget {
  const AjhadApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(),
      home: const Scaffold(
        body: Center(
          child: Text(
            'Hi, I am Ajhad K 👋\\nFlutter & Full-Stack Developer',
            textAlign: TextAlign.center,
          ),
        ),
      ),
    );
  }
}`;

// Dart syntax token highlighter
const highlightLine = (line) => {
  const commentIdx = line.indexOf('//');
  let codePart = line;
  let commentPart = null;
  if (commentIdx !== -1) {
    codePart = line.slice(0, commentIdx);
    commentPart = line.slice(commentIdx);
  }

  const tokenRegex = /('(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*")|(@[a-zA-Z0-9_]+)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*\s*:)|(\b(?:import|class|extends|abstract|const|final|return|super|void|true|false|new|this|async|await)\b)|(\b(?:Widget|BuildContext|StatelessWidget|StatefulWidget|MaterialApp|ThemeData|Scaffold|Center|Text|TextAlign|AjhadApp|String|int|double|bool)\b)|(\b(?:build|runApp|main)\b)|(\b\d+(?:\.\d+)?\b)|([{}()[\]<>,;.<>=+*\/!?:&|~^-])|(\s+)|([a-zA-Z_$][a-zA-Z0-9_$]*)/g;

  const tokens = [];
  let match;
  while ((match = tokenRegex.exec(codePart)) !== null) {
    const [full, str, annotation, prop, keyword, type, method, num, punct, space, ident] = match;
    let cls = 'text-slate-800 dark:text-slate-200';
    if (str) {
      cls = 'text-emerald-600 dark:text-emerald-400';
    } else if (annotation) {
      cls = 'text-amber-600 dark:text-amber-400 font-semibold';
    } else if (prop) {
      cls = 'text-sky-600 dark:text-sky-300';
    } else if (keyword) {
      cls = 'text-purple-600 dark:text-purple-400 font-semibold';
    } else if (type) {
      cls = 'text-amber-600 dark:text-yellow-300 font-semibold';
    } else if (method) {
      cls = 'text-blue-600 dark:text-blue-400';
    } else if (num) {
      cls = 'text-pink-600 dark:text-pink-400 font-mono';
    } else if (punct) {
      cls = 'text-slate-400 dark:text-slate-400';
    } else if (space) {
      cls = '';
    } else if (ident) {
      cls = 'text-[#172033] dark:text-slate-200';
    }
    tokens.push({ text: full, cls });
  }

  if (commentPart) {
    tokens.push({ text: commentPart, cls: 'text-slate-400 dark:text-slate-500 italic' });
  }

  return tokens;
};

export default function FlutterCodeTyping() {
  const [charIndex, setCharIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (charIndex >= FLUTTER_CODE.length) {
      setIsCompleted(true);
      const restartTimer = setTimeout(() => {
        setCharIndex(0);
        setIsCompleted(false);
      }, 10000);
      return () => clearTimeout(restartTimer);
    }

    const currentChar = FLUTTER_CODE[charIndex];
    let step = 1;
    let delay = 18;

    if (currentChar === ' ') {
      let nextIdx = charIndex;
      while (nextIdx < FLUTTER_CODE.length && FLUTTER_CODE[nextIdx] === ' ') {
        nextIdx++;
      }
      step = Math.max(1, nextIdx - charIndex);
      delay = 6;
    } else if (currentChar === '\n') {
      delay = 55;
    } else if (currentChar === ';' || currentChar === '{') {
      delay = 35;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => Math.min(FLUTTER_CODE.length, prev + step));
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex]);

  const handleCopy = () => {
    navigator.clipboard.writeText(FLUTTER_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const typedText = FLUTTER_CODE.slice(0, charIndex);
  const lines = typedText.split('\n');

  return (
    <div className="relative w-full max-w-lg lg:max-w-none">
      {/* Background Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#2563EB]/15 via-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl pointer-events-none" />

      {/* Code Window */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-[#070D18] shadow-xl">
        
        {/* Simple macOS Header Bar */}
        <div className="px-4 py-3 bg-[#F8FAFC] dark:bg-[#0B1120] border-b border-[#E2E8F0] dark:border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-[#101B33] text-[#172033] dark:text-white border border-[#E2E8F0] dark:border-white/10 text-xs font-mono font-medium shadow-sm">
              <SiFlutter className="w-3.5 h-3.5 text-[#02569B]" />
              <span>main.dart</span>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer border border-[#E2E8F0] dark:border-white/10"
            title="Copy code"
          >
            {copied ? (
              <>
                <FiCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 text-[11px]">Copied</span>
              </>
            ) : (
              <>
                <FiCopy className="w-3.5 h-3.5" />
                <span className="text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-[1.7] select-text min-h-[290px] max-h-[320px] overflow-hidden bg-white dark:bg-[#070D18]">
          {lines.map((line, idx) => {
            const isCurrentLine = idx === lines.length - 1;
            const lineTokens = highlightLine(line);

            return (
              <div 
                key={idx} 
                className={`flex items-start ${
                  isCurrentLine && !isCompleted ? 'bg-blue-500/5 -mx-4 px-4 rounded' : ''
                }`}
              >
                <span className="w-6 sm:w-8 text-right pr-3 select-none text-[11px] text-slate-400/70 dark:text-slate-600 font-mono shrink-0">
                  {idx + 1}
                </span>

                <div className="flex-1 whitespace-pre break-words font-mono">
                  {lineTokens.map((token, tIdx) => (
                    <span key={tIdx} className={token.cls}>
                      {token.text}
                    </span>
                  ))}
                  {isCurrentLine && !isCompleted && (
                    <span className="inline-block w-2 h-4 bg-[#2563EB] ml-0.5 animate-pulse align-middle" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Bottom Status Bar */}
        <div className="px-4 py-2 bg-[#F8FAFC] dark:bg-[#0B1120] border-t border-[#E2E8F0] dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8]">
          <div className="flex items-center gap-1.5">
            <FiTerminal className="w-3 h-3 text-[#2563EB]" />
            <span>Flutter & Dart</span>
          </div>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Ready</span>
        </div>

      </div>
    </div>
  );
}
