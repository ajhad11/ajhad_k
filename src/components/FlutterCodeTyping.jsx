import { useState, useEffect, useRef } from 'react';
import { FiTerminal } from 'react-icons/fi';
import { SiFlutter, SiReact, SiDjango, SiPython } from 'react-icons/si';

const SNIPPETS = [
  {
    language: 'Flutter',
    fileName: 'main.dart',
    iconType: 'flutter',
    footerText: 'Flutter & Dart • Cross-Platform Mobile',
    code: `import 'package:flutter/material.dart';

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
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Hi, I am Ajhad K 👋',
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8),
              Text(
                'Flutter • React • Django Developer',
                style: TextStyle(fontSize: 14, color: Colors.blueAccent),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`
  },
  {
    language: 'React',
    fileName: 'App.jsx',
    iconType: 'react',
    footerText: 'React 19 & Tailwind • Modern Web Apps',
    code: `import React, { useState, useEffect } from 'react';

export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState('projects');
  const [developer] = useState({
    name: 'Ajhad K',
    role: 'Flutter • React • Django Developer',
    stack: ['Flutter', 'React', 'Django', 'PostgreSQL'],
    internships: '2+ Industry Internships'
  });

  useEffect(() => {
    console.log(\`Loaded profile for \${developer.name}\`);
  }, [developer]);

  return (
    <div className="portfolio-app min-h-screen">
      <header className="hero-header">
        <h1>Welcome, I am {developer.name} 👋</h1>
        <p>Building high-performance modern web apps</p>
      </header>
      <section className="tech-badge-container">
        <span>Active Focus: {developer.role}</span>
      </section>
    </div>
  );
}`
  },
  {
    language: 'Django',
    fileName: 'views.py',
    iconType: 'django',
    footerText: 'Django REST Framework • Backend APIs',
    code: `from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class DeveloperProfileView(APIView):
    """
    REST API endpoint serving developer profile,
    skills, and production engineering metrics.
    """

    def get(self, request, *args, **kwargs):
        profile_data = {
            "developer": "Ajhad K",
            "role": "Flutter • React • Django Developer",
            "specialties": [
                "Cross-Platform Mobile Apps",
                "Responsive React Web Apps",
                "High-Throughput Django REST APIs"
            ],
            "databases": ["PostgreSQL", "Supabase", "Firebase"],
            "status": "Available for Opportunities"
        }
        return Response(profile_data, status=status.HTTP_200_OK)`
  }
];

// Universal syntax highlighter for Dart, React/JSX, and Python/Django
const highlightLine = (line) => {
  let commentIdx = -1;
  const dSlash = line.indexOf('//');
  const hash = line.indexOf('#');
  
  if (dSlash !== -1 && hash !== -1) {
    commentIdx = Math.min(dSlash, hash);
  } else if (dSlash !== -1) {
    commentIdx = dSlash;
  } else if (hash !== -1) {
    commentIdx = hash;
  }

  let codePart = line;
  let commentPart = null;
  if (commentIdx !== -1) {
    codePart = line.slice(0, commentIdx);
    commentPart = line.slice(commentIdx);
  }

  const tokenRegex = /("""[\s\S]*?"""|'''[\s\S]*?'''|'(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*"|`[\s\S]*?`)|(@[a-zA-Z0-9_]+)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*\s*:)|(\b(?:import|from|class|extends|abstract|const|final|return|super|void|true|false|new|this|async|await|def|export|default|function|let|var|if|else|self)\b)|(\b(?:Widget|BuildContext|StatelessWidget|StatefulWidget|MaterialApp|ThemeData|Scaffold|Center|Text|TextAlign|Column|MainAxisAlignment|TextStyle|FontWeight|SizedBox|Colors|AjhadApp|String|int|double|bool|React|useState|useEffect|APIView|Response|DeveloperProfileView|PortfolioApp)\b)|(\b(?:build|runApp|main|get|render|log)\b)|(\b\d+(?:\.\d+)?\b)|([{}()[\]<>,;.<>=+*\/!?:&|~^-])|(\s+)|([a-zA-Z_$][a-zA-Z0-9_$]*)/g;

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
      cls = 'text-blue-600 dark:text-blue-400 font-semibold';
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
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const codeContainerRef = useRef(null);

  const currentSnippet = SNIPPETS[snippetIndex];
  const fullCode = currentSnippet.code;

  // Auto-scroll effect: as typing writes down, the top code scrolls up smoothly
  useEffect(() => {
    if (!codeContainerRef.current) return;

    if (charIndex === 0) {
      codeContainerRef.current.scrollTop = 0;
      return;
    }

    const container = codeContainerRef.current;
    const targetScroll = container.scrollHeight - container.clientHeight;
    
    // Smoothly scroll down so the bottom/active typing line is always in clear view
    if (targetScroll > 0) {
      container.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  }, [charIndex]);

  // Typing and delay cycle effect
  useEffect(() => {
    // When typing for current snippet finishes
    if (charIndex >= fullCode.length) {
      setIsCompleted(true);
      
      // After 4.5 seconds of viewing the completed code at the bottom,
      // smoothly scroll back to top so the user can inspect the full file before switching
      const scrollUpTimer = setTimeout(() => {
        if (codeContainerRef.current) {
          codeContainerRef.current.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }, 4500);

      // Wait 10 seconds total after typing finishes, then switch to the next language
      const waitTimer = setTimeout(() => {
        setIsCompleted(false);
        setCharIndex(0);
        setSnippetIndex((prev) => (prev + 1) % SNIPPETS.length);
      }, 10000);

      return () => {
        clearTimeout(scrollUpTimer);
        clearTimeout(waitTimer);
      };
    }

    // Typing speed & step calculation
    const currentChar = fullCode[charIndex];
    let step = 1;
    let delay = 16;

    if (currentChar === ' ') {
      let nextIdx = charIndex;
      while (nextIdx < fullCode.length && fullCode[nextIdx] === ' ') {
        nextIdx++;
      }
      step = Math.max(1, nextIdx - charIndex);
      delay = 6;
    } else if (currentChar === '\n') {
      delay = 45;
    } else if (currentChar === ';' || currentChar === '{' || currentChar === ':') {
      delay = 30;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => Math.min(fullCode.length, prev + step));
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, snippetIndex, fullCode]);

  const typedText = fullCode.slice(0, charIndex);
  const lines = typedText.split('\n');

  // Active header icon
  const renderIcon = () => {
    if (currentSnippet.iconType === 'flutter') {
      return <SiFlutter className="w-3.5 h-3.5 text-[#02569B]" />;
    }
    if (currentSnippet.iconType === 'react') {
      return <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />;
    }
    if (currentSnippet.iconType === 'django') {
      return <SiDjango className="w-3.5 h-3.5 text-emerald-500" />;
    }
    return <SiPython className="w-3.5 h-3.5 text-amber-500" />;
  };

  return (
    <div className="relative w-full max-w-lg lg:max-w-none">
      {/* Background Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#2563EB]/15 via-cyan-500/10 to-emerald-500/10 rounded-3xl blur-2xl pointer-events-none" />

      {/* Code Window */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-[#070D18] shadow-xl">
        
        {/* macOS Header Bar */}
        <div className="px-4 py-3 bg-[#F8FAFC] dark:bg-[#0B1120] border-b border-[#E2E8F0] dark:border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
            </div>

            {/* Active file tab */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-[#101B33] text-[#172033] dark:text-white border border-[#E2E8F0] dark:border-white/10 text-xs font-mono font-medium shadow-sm transition-all">
              {renderIcon()}
              <span>{currentSnippet.fileName}</span>
            </div>
          </div>

          {/* Language indicator badge */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-[#2563EB] text-[10px] font-mono font-semibold">
              {currentSnippet.language}
            </span>
          </div>
        </div>

        {/* Code Content Area with auto-scroll */}
        <div 
          ref={codeContainerRef}
          className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-[1.7] select-text h-[290px] sm:h-[310px] overflow-y-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden bg-white dark:bg-[#070D18]"
        >
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

        {/* Bottom Status Bar */}
        <div className="px-4 py-2 bg-[#F8FAFC] dark:bg-[#0B1120] border-t border-[#E2E8F0] dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8]">
          <div className="flex items-center gap-1.5">
            <FiTerminal className="w-3 h-3 text-[#2563EB]" />
            <span className="transition-all">{currentSnippet.footerText}</span>
          </div>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
            {isCompleted ? '10s preview' : 'Typing...'}
          </span>
        </div>

      </div>
    </div>
  );
}
