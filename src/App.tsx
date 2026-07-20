import React, { useState } from 'react';
import { myInfo, projectsData, skillsData, type Project, type SkillGroup } from './data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/card';
import { Badge } from './components/badge';
import { BentoHero } from './components/bento-hero';
import { ArrowUpRight, FolderGit2, Code, Terminal, Send, FileText } from 'lucide-react';

// Sub-component to manage clean vector assets and precise hover interactions
function SkillIcon({ skill }: { skill: string }) {
  // Mobile first baseClass: transitions smoothly on small viewports.
  // md: ensures responsiveness and links hooks cleanly into group-hover states on desktop viewports.
  const baseClass = "h-3.5 w-3.5 transform transition-all duration-500 ease-out group-hover:scale-125 md:group-hover:scale-125";
  const name = skill.toLowerCase();

  if (name.includes('react')) {
    return (
      <svg className={`${baseClass} animate-[spin_10s_linear_infinite] md:animate-none md:group-hover:animate-[spin_4s_linear_infinite] text-[#61dafb]`} viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="8" fill="#61dafb"/>
        <ellipse cx="50" cy="50" rx="12" ry="32" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="12" ry="32" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="12" ry="32" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(150 50 50)" />
      </svg>
    );
  }
  if (name.includes('typescript')) {
    return (
      <svg className={`${baseClass} animate-[pulse_2.5s_infinite_ease-in-out] md:animate-none md:group-hover:-translate-y-0.5 text-[#3178c6] rounded-[2px]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.504 0 0 .504 0 1.125v21.75C0 23.496.504 24 1.125 24h21.75c.621 0 1.125-.504 1.125-1.125V1.125C24 .504 23.496 0 22.875 0H1.125zm16.175 12.012h4.5v1.942h-1.285v6.953h-1.93v-6.953h-1.285v-1.942zm-5.02 3.323c0 1.442-.88 2.215-2.585 2.215-1.11 0-1.954-.427-2.316-.928l1.196-1.168c.324.343.686.528 1.149.528.602 0 .611-.38.611-.584v-5.328h1.944v5.265z"/>
      </svg>
    );
  }
  if (name.includes('tailwind')) {
    return (
      <svg className={`${baseClass} animate-pulse md:animate-none md:group-hover:animate-pulse text-[#38bdf8]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6.036c-2.286 0-3.81 1.143-4.571 3.429 1.143-1.524 2.476-2.095 4-1.714.87.217 1.492.847 2.181 1.549 1.122 1.14 2.422 2.462 5.39 2.462 2.286 0 3.81-1.143 4.572-3.429-1.143 1.524-2.476 2.095-4 1.714-.871-.217-1.493-.847-2.182-1.549-1.122-1.14-2.422-2.462-5.39-2.462zM4.571 13.464c-2.286 0-3.81 1.143-4.571 3.429 1.143-1.524 2.476-2.095 4-1.714.87.217 1.492.847 2.181 1.549 1.122 1.14 2.422 2.462 5.39 2.462 2.286 0 3.81-1.143 4.572-3.429-1.143 1.524-2.476 2.095-4 1.714-.871-.217-1.493-.847-2.182-1.549-1.122-1.14-2.423-2.462-5.39-2.462z"/>
      </svg>
    );
  }
  if (name.includes('next.js') || name.includes('nextjs')) {
    return (
      <svg className={`${baseClass} bg-white text-black rounded-full border border-white animate-[pulse_3s_infinite_ease-in-out] md:animate-none md:group-hover:scale-110`} viewBox="0 0 180 180" fill="currentColor">
        <path d="M121.2 118.4L73.1 56H64v68h8v-53.7l42.6 55.4c4.3-2.7 8.2-5.1 6.6-7.3zm8.8-62.4h-8v68h8v-68z"/>
        <path fillRule="evenodd" d="M90 0a90 90 0 100 180A90 90 0 0090 0zM16 90a74 74 0 11132.3 46.4L57.5 45.4A73.7 73.7 0 0016 90z" clipRule="evenodd"/>
      </svg>
    );
  }
  if (name.includes('node')) {
    return (
      <svg className={`${baseClass} animate-[bounce_2s_infinite] md:animate-none md:group-hover:animate-[bounce_2s_infinite] text-[#339933]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.516.096c-.328-.152-.704-.124-1.008.08L1.644 5.48c-.4.26-.644.704-.644 1.184v10.636c0 .484.244.924.644 1.184l8.864 5.304c.168.104.36.156.552.156.168 0 .34-.04.492-.12l8.884-5.184c.412-.24.672-.688.672-1.168V6.82c0-.464-.244-.9-.64-1.152L11.516.096zm-.516 2.16v8.62L3 6.136l8-3.88zm1 0l8 3.82-8.02 4.808V2.256zM3 8.356l7 4.192v8.136l-7-4.192V8.356zm18 0v8.136l-7 4.084V12.42l7-4.064z"/>
      </svg>
    );
  }
  if (name.includes('nest')) {
    return (
      <svg className={`${baseClass} animate-[pulse_2s_infinite] md:animate-none md:group-hover:rotate-12 text-[#e0234e]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.97 0L1.44 6.08v11.84l10.53 6.08 10.59-6.08V6.08L11.97 0zm8.56 16.7l-8.56 4.92-8.5-4.92V7.24l8.5-4.91 8.56 4.91v9.46z"/>
        <path d="M11.97 4.91l-6.22 3.59v7l6.22 3.59 6.28-3.59v-7l-6.28-3.59zm4.28 10l-4.28 2.45-4.22-2.45v-4.91l4.22-2.46 4.28 2.46v4.91z"/>
      </svg>
    );
  }
  if (name.includes('postgres')) {
    return (
      <svg className={`${baseClass} animate-[pulse_3s_infinite] md:animate-none md:group-hover:scale-110 text-[#336791]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.11 0c-2.17.02-4.57 1-5.78 2.91C7.11 1 4.71.02 2.54 0 0 .02 0 1.94 0 3.8c0 4.19 2.5 8.1 5.76 9.47-.56.9-.96 1.97-1.12 3.12H1.93v1.89h2.58c.28 2.12 1.48 4.07 3.32 5.17l1.04-1.6c-1.39-.81-2.28-2.29-2.46-3.92H10.1v-1.89H6.41c.07-.63.22-1.25.46-1.83.6.35 1.25.61 1.94.75v-2c-.52-.09-1.02-.27-1.48-.54a9.14 9.14 0 0 1 5.3-7.58c.84-.4 1.78-.63 2.76-.66a3.54 3.54 0 0 1 3.55 3.55c0 .64-.17 1.24-.47 1.76l1.63 1c.54-.88.84-1.92.84-3.03A5.44 5.44 0 0 0 15.5 0h-1.39z"/>
      </svg>
    );
  }
  if (name.includes('mongo')) {
    return (
      <svg className={`${baseClass} animate-[pulse_2.5s_infinite] md:animate-none md:group-hover:scale-110 text-[#47a248]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .05c-.15 0-.3.02-.45.06C8.83 1.04 6.7 4.11 6.7 7.74c0 4.54 3.01 7.66 4.8 9.29v5.92c0 .55.45 1 1 1s1-.45 1-1v-5.92c1.79-1.63 4.8-4.75 4.8-9.29 0-3.63-2.13-6.7-4.85-7.63-.15-.04-.3-.06-.45-.06zm0 2.1c1.86.75 3.3 3.1 3.3 5.59 0 3.38-2.2 5.78-3.3 6.84-1.1-1.06-3.3-3.46-3.3-6.84 0-2.49 1.44-4.84 3.3-5.59z"/>
      </svg>
    );
  }
  return <Code className={`${baseClass} text-slate-400 md:group-hover:text-teal-400`} />;
}

export default function App() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
     const response = await fetch(`https://formspree.io/${myInfo.formspreeId}`, {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json' 
  },
  body: JSON.stringify({
    name: formState.name,
    email: formState.email,
    message: formState.message,
  }),
});

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#11161f] text-slate-200 font-sans antialiased selection:bg-teal-500 selection:text-slate-950 pb-16">
      
      {/* HEADER TOP NAVBAR */}
      <header className="w-full bg-[#1e2530]/80 backdrop-blur-md border-b border-[#2d3748]/40 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs font-bold text-teal-400 tracking-wider shrink-0">
            <Code className="h-3.5 w-3.5" />
            <span>PORTFOLIO_CORE</span>
          </div>
          <nav className="flex items-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-medium text-slate-400 overflow-x-auto no-scrollbar py-1">
            <a href="#matrix" className="hover:text-white transition-colors shrink-0">Identity</a>
            <a href="#projects" className="hover:text-white transition-colors shrink-0">Pipeline</a>
            <a href="#skills" className="hover:text-white transition-colors shrink-0">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors shrink-0">Contact</a>
          </nav>
        </div>
      </header>

      {/* CORE WORKSPACE CONTAINER */}
      <main className="max-w-3xl mx-auto px-6 pt-10 space-y-12">
        
        {/* PREMIUM BENTO BOX HERO RESUME LAYER */}
        <BentoHero myInfo={myInfo} />
         {/* UPCOMING ENGINEERING PIPELINE SUB SECTION */}
        <section id="projects" className="space-y-4 scroll-mt-24">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#2d3748]/40">
            <div className="flex items-center gap-2">
              <FolderGit2 className="h-4 w-4 text-teal-400" />
              <h2 className="text-sm font-mono font-bold tracking-wider uppercase text-white">Engineering Pipeline</h2>
            </div>
            <a 
               href="/resume.html"
               target="_blank" 
               rel="noreferrer" 
               className="inline-flex items-center gap-1.5 font-mono text-[10px] text-teal-400 hover:text-teal-300 transition-colors uppercase tracking-wider cursor-pointer"
            >
              <FileText className="h-3 w-3" /> download_cv ↗
            </a>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {projectsData.map((project: Project) => (
              <Card key={project.id} className="flex flex-col h-full hover:border-[#4a5568]/60 transition-colors">
                <CardHeader className="p-5 pb-2">
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-sm font-bold text-white">
                      {project.title}
                    </CardTitle>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors">
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <CardDescription className="text-slate-300 text-xs mt-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-2 flex flex-wrap gap-1 mt-auto">
                  {project.technologies.map((tech: string) => (
                    <Badge key={tech} variant="secondary" className="bg-[#11161f] text-slate-300 border-[#2d3748]/40 text-[10px] px-2 py-0">
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* TECHNICAL TOOLSETS BLOCK */}
        <section id="skills" className="space-y-4 scroll-mt-24">
          <div className="flex items-center gap-2 pb-1.5 border-b border-[#2d3748]/40">
            <Terminal className="h-4 w-4 text-teal-400" />
            <h2 className="text-sm font-mono font-bold tracking-wider uppercase text-white">Technical Skillset</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillsData.map((group: SkillGroup) => (
              <div key={group.category} className="rounded-2xl border border-[#2d3748]/40 bg-[#1e2530] p-5 space-y-3 shadow-md">
                <h3 className="text-xs font-mono text-teal-400 tracking-wider uppercase font-semibold">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill: string) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="group flex items-center gap-1.5 border-[#2d3748]/60 text-slate-300 bg-[#11161f]/40 text-xs px-2.5 py-1 font-normal transition-all hover:bg-[#11161f] hover:border-teal-500/30 cursor-default"
                    >
                      <SkillIcon skill={skill} />
                      <span>{skill}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT INPUT CONTAINER FORM */}
        <section id="contact" className="space-y-4 scroll-mt-24">
          <div className="flex items-center gap-2 pb-1.5 border-b border-[#2d3748]/40">
            <Send className="h-4 w-4 text-teal-400" />
            <h2 className="text-sm font-mono font-bold tracking-wider uppercase text-white">Get In Touch</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 rounded-2xl border border-[#2d3748]/40 bg-[#1e2530] p-5 max-w-xl shadow-md">
            <div className="grid gap-3 sm:grid-cols-2">
              <input 
                type="text" 
                required 
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full rounded-xl border border-[#2d3748]/60 bg-[#11161f] px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors" 
                placeholder="Your Name" 
              />
              <input 
                type="email" 
                required 
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full rounded-xl border border-[#2d3748]/60 bg-[#11161f] px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors" 
                placeholder="Email Address" 
              />
            </div>
            <textarea 
              rows={3} 
              required 
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
              className="w-full rounded-xl border border-[#2d3748]/60 bg-[#11161f] px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 transition-colors resize-none" 
              placeholder="Your Message..." 
            />
            
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex h-8 items-center bg-teal-500 px-4 rounded-xl text-slate-950 font-bold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/10 disabled:opacity-50 text-[11px] font-mono uppercase tracking-wider cursor-pointer"
            >
              {status === 'sending' ? 'sending...' : status === 'success' ? 'message sent!' : 'send message ↗'}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1 justify-center animate-pulse">
                <span>✓ Transmission complete. Message routed to your inbox!</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 text-xs text-rose-400 font-medium pt-1 justify-center">
                <span>✗ Pipeline block. Please verify configuration endpoints.</span>
              </div>
            )}
          </form>
        </section>

      </main>
    </div>
  );
}
