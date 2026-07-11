import React, { useState } from 'react';
import { myInfo, projectsData, skillsData, type Project, type SkillGroup } from './data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/card';
import { Badge } from './components/badge';
import { BentoHero } from './components/bento-hero';
import { ArrowUpRight, FolderGit2, Code, Terminal, Send, FileText } from 'lucide-react';

export default function App() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://formspree.io/f/${myInfo.formspreeId}`, {
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


      {/* CORE WORKSPACE SPACE CONTAINER */}
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
               href="/resume.html"  // 👈 Change this to .html
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
                    <Badge key={skill} variant="outline" className="border-[#2d3748]/60 text-slate-300 bg-[#11161f]/40 text-xs px-2.5 py-0.5 font-normal">
                      {skill}
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
              className="w-full rounded-xl border border-[#2d3748]/60 bg-[#11161f] px-3.5 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 resize-none leading-relaxed" 
              placeholder="Type your message here..." 
            />
            
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full inline-flex h-9 items-center justify-center rounded-xl bg-teal-500 text-xs font-bold text-slate-950 hover:bg-teal-400 transition-all cursor-pointer shadow-lg shadow-teal-500/5 disabled:opacity-50"
            >
              {status === 'sending' ? 'Transmitting Data...' : 'Send Message'}
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
