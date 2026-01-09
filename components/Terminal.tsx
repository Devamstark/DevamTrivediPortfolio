
import React, { useState, useEffect, useRef } from 'react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error';
}

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: '> INITIALIZING_SECURE_LINK...', type: 'output' },
    { text: '> ACCESSING: DEVAM_TRIVEDI_CORE_OS', type: 'output' },
    { text: '> STATUS: RECRUITMENT_ACTIVE', type: 'output' },
    { text: '----------------------------------------', type: 'output' },
    { text: 'NAME: Devam Trivedi', type: 'output' },
    { text: 'ROLE: Cyber Security Specialist', type: 'output' },
    { text: 'EDUCATION: Monroe College (B.S. CS)', type: 'output' },
    { text: 'LOC: Mount Vernon, NY', type: 'output' },
    { text: '----------------------------------------', type: 'output' },
    { text: 'Type "help" to see authorized commands.', type: 'output' },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newLines: TerminalLine[] = [...lines, { text: `recruiter@guest:~$ ${input}`, type: 'input' }];
    
    const cmd = input.toLowerCase().trim();
    switch (cmd) {
      case 'help':
        newLines.push({ text: 'Authorized: bio, certs, resume, skills, repo, clear', type: 'output' });
        break;
      case 'bio':
        newLines.push({ text: 'Devam is a results-driven professional specializing in Ethical Hacking, VAPT, and Network Security.', type: 'output' });
        break;
      case 'resume':
        newLines.push({ text: 'ACCESS_GRANTED: Opening official document "./resume.pdf"...', type: 'output' });
        window.open('./resume.pdf', '_blank');
        break;
      case 'certs':
        newLines.push({ text: 'Cisco CyberOps, CCNA (1, 2, 3), Google Analytics.', type: 'output' });
        break;
      case 'skills':
        newLines.push({ text: 'VAPT, Network Security, Python, C++, SEO, AWS Cloud.', type: 'output' });
        break;
      case 'repo':
        newLines.push({ text: 'Redirecting: github.com/Devamstark', type: 'output' });
        break;
      case 'clear':
        setLines([{ text: 'System cleared. Environment stable.', type: 'output' }]);
        setInput('');
        return;
      default:
        newLines.push({ text: `ERR: COMMAND_REJECTED - ${cmd}`, type: 'error' });
    }

    setLines(newLines);
    setInput('');
  };

  return (
    <div className="bg-black/90 border border-blue-900/40 rounded-2xl overflow-hidden font-mono text-[13px] shadow-3xl backdrop-blur-xl h-[400px] flex flex-col">
      <div className="bg-gray-900/50 px-5 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-gray-500 text-[10px] tracking-widest font-bold uppercase">DEVAM_CORE_V2.5</span>
      </div>
      <div 
        ref={scrollRef}
        className="p-6 overflow-y-auto scrollbar-hide flex-grow flex flex-col space-y-1.5"
      >
        {lines.map((line, i) => (
          <div key={i} className={`${
            line.type === 'input' ? 'text-blue-400' : 
            line.type === 'error' ? 'text-red-400 font-bold' : 'text-green-500/90'
          }`}>
            {line.text}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex pt-2">
          <span className="text-blue-500 mr-2">recruiter@guest:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-grow text-white caret-blue-500"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
