import { Cpu } from 'lucide-react';

interface HeroProps {
  myInfo: {
    name: string;
    role: string;
    status: string;
    bio: string;
    githubUrl: string;
    linkedinUrl: string;
  };
}

export function BentoHero({ myInfo }: HeroProps) {
  return (
    <section id="matrix" className="grid gap-4 md:grid-cols-3 scroll-mt-24">
    
      <div className="md:col-span-2 rounded-3xl border border-slate-900 bg-slate-900/10 p-6 flex flex-col justify-between gap-6 relative overflow-hidden group shadow-xl">
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 blur-2xl rounded-full group-hover:scale-150 transition-all duration-500" />
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-[10px] font-mono text-teal-400 tracking-wider uppercase w-fit">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
            </span>
            {myInfo.status}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-none bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent antialiased transform-gpu subpixel-antialiased [backface-visibility:hidden]">
            Architecture built <br />for the modern web.
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
            Hi, I'm <span className="text-teal-400 font-semibold">{myInfo.name}</span>. {myInfo.bio}
          </p>
        </div>
        <div className="flex items-center gap-4 pt-2 font-mono text-[11px]">
          <a href="#deployments" className="inline-flex h-8 items-center bg-teal-500 px-4 rounded-xl text-slate-950 font-bold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/10">
            Execute Matrix
          </a>
          <a href={myInfo.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            src_code ↗
          </a>
        </div>
      </div>
      
      <div className="rounded-3xl border border-slate-900 bg-gradient-to-br from-slate-900/30 to-slate-950/80 p-6 flex flex-col justify-between items-center text-center shadow-xl group relative overflow-hidden">
        <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-teal-400 shadow-md group-hover:rotate-12 transition-transform duration-300">
          <Cpu className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <div className="text-xl font-black font-mono text-slate-200 tracking-tight">Full-Stack</div>
          <div className="text-[9px] font-mono tracking-widest uppercase text-slate-500">{myInfo.role}</div>
        </div>
        <div className="flex justify-center gap-4 font-mono text-[10px] border-t border-slate-900/60 w-full pt-4 text-slate-400">
          <a href={myInfo.githubUrl} target="_blank" rel="noreferrer" className="hover:text-teal-400">git_hub</a>
          <span className="text-slate-800">/</span>
          <a href={myInfo.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-teal-400">linked_in</a>
        </div>
      </div>
    </section>
  );
}
