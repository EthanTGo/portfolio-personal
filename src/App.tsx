/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  FileText, 
  Code2, 
  GraduationCap,
  Globe,
  Flower2,
  Sparkles
} from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

interface Research {
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  link?: string;
  pdf?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Collab^2",
    description: "It allows users to either create or join a collaborative space, where code can be shared between parties (instructors and students).",
    tags: ["jQuery", "Materialize", "SQL", "CodeMirror"],
    github: "https://github.com/EthanTGo/Collab2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZzr7b7WRWg3vQF6x6iRMhlCh03ZZpgfnlg&s"
  }
];

const RESEARCH: Research[] = [
  {
    title: "Grand Challenge: Anomaly Detection for NILM Task with Apache Flink",
    authors: "Zongshun Zhang, Ethan Go",
    venue: "ACM",
    year: "2020",
    abstract: "This paper describes our solution based on Apache Flink, a stream processing framework, and the DBSCAN density based clustering algorithm for anomaly detection through the context of data provided by DEBS Grand Challenge.",
    link: "https://dl.acm.org/doi/10.1145/3401025.3401758"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'research' | 'projects'>('research');

  return (
    <div className="min-h-screen bg-ghibli-cream text-ghibli-ink font-sans selection:bg-ghibli-pink/30">
      {/* Magazine-style Header */}
      <nav className="fixed top-0 w-full bg-ghibli-cream/80 backdrop-blur-md border-b border-ghibli-ink/5 z-50 py-4">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flower2 className="text-ghibli-pink" size={20} />
            <span className="font-serif text-2xl font-bold tracking-tight">ETHAN GO</span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-60">
            <a href="#about" className="hover:text-ghibli-pink transition-colors">About</a>
            <a href="#work" className="hover:text-ghibli-pink transition-colors">Work</a>
            <a href="#contact" className="hover:text-ghibli-pink transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section - The Tokyoiter Style */}
        <section id="about" className="mb-32 relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-16 items-center md:items-start"
          >
            <div className="flex-1 z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-ghibli-pink" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-ghibli-pink">Researcher & Engineer</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-8 tracking-tighter">
                Driven to pursue new frontiers in<br />
                <span className="italic text-ghibli-blue">causal discovery.</span>
              </h1>
              
              <p className="text-xl text-ghibli-ink/70 max-w-xl leading-relaxed mb-10 font-light">
                Specializing in the intersection of <span className="font-medium text-ghibli-ink">machine learning systems and causal inference.</span>
                Solving complex challenges in economics and population health with a nostalgic touch.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <a href="mailto:ethango1997@gmail.com" className="group relative px-8 py-4 bg-ghibli-ink text-ghibli-cream rounded-full text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-12">
                  <span className="relative z-10">Get in touch</span>
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                </a>
                <div className="flex gap-4">
                  <a href="https://github.com/EthanTGo" className="p-3 border border-ghibli-ink/10 rounded-full hover:bg-ghibli-pink/10 hover:border-ghibli-pink transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/ethanthego/" className="p-3 border border-ghibli-ink/10 rounded-full hover:bg-ghibli-blue/10 hover:border-ghibli-blue transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="shrink-0 relative">
              <div className="absolute -inset-4 bg-ghibli-pink/5 rounded-[3rem] rotate-6 -z-10" />
              <div className="absolute -inset-4 bg-ghibli-blue/5 rounded-[3rem] -rotate-3 -z-10" />
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-ghibli-ink/5 relative group">
                <img 
                  src="/ethango.jpeg" 
                  alt="Ethan Go" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg">
                  <Sparkles size={16} className="text-ghibli-pink" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Work Section */}
        <section id="work" className="mb-32">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-serif text-4xl font-bold">Selected Works</h2>
            <div className="flex gap-4 p-1 bg-ghibli-ink/5 rounded-full">
              <button 
                onClick={() => setActiveTab('research')}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'research' ? 'bg-white text-ghibli-ink shadow-sm' : 'text-ghibli-ink/40 hover:text-ghibli-ink'}`}
              >
                Research
              </button>
              <button 
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'projects' ? 'bg-white text-ghibli-ink shadow-sm' : 'text-ghibli-ink/40 hover:text-ghibli-ink'}`}
              >
                Projects
              </button>
            </div>
          </div>

          <div className="grid gap-16">
            {activeTab === 'research' ? (
              RESEARCH.map((paper, idx) => (
                <motion.div 
                  key={paper.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group grid md:grid-cols-[1fr_auto] gap-8 p-8 rounded-[2rem] bg-white/40 border border-ghibli-ink/5 hover:bg-white hover:shadow-xl hover:shadow-ghibli-ink/5 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold tracking-widest text-ghibli-pink">{paper.year}</span>
                      <div className="h-1 w-1 rounded-full bg-ghibli-ink/20" />
                      <span className="text-xs font-medium italic text-ghibli-ink/60">{paper.venue}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-ghibli-pink transition-colors">{paper.title}</h3>
                    <p className="text-sm text-ghibli-ink/50 mb-6 italic">{paper.authors}</p>
                    <p className="text-ghibli-ink/70 leading-relaxed mb-8 font-light">
                      {paper.abstract}
                    </p>
                    <div className="flex gap-6">
                      {paper.link && (
                        <a href={paper.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ghibli-ink hover:text-ghibli-pink transition-colors">
                          View Publication <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="grid md:grid-cols-2 gap-12">
                {PROJECTS.map((project, idx) => (
                  <motion.div 
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-white border border-ghibli-ink/5 shadow-sm relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-ghibli-ink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3">{project.title}</h3>
                    <p className="text-ghibli-ink/60 mb-6 leading-relaxed font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-ghibli-blue/10 text-ghibli-blue rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} className="text-ghibli-ink/30 hover:text-ghibli-ink transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} className="text-ghibli-ink/30 hover:text-ghibli-ink transition-colors">
                          <Globe size={20} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Background Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-serif text-3xl font-bold">Journey</h2>
            <div className="h-px flex-1 bg-ghibli-ink/10" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-8 group">
              <div className="w-16 h-16 rounded-2xl bg-ghibli-pink/10 flex items-center justify-center shrink-0 group-hover:bg-ghibli-pink group-hover:text-white transition-all duration-500">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold mb-1">M.S. in Statistics</h4>
                <p className="text-sm text-ghibli-ink/60 mb-2">Northeastern University · 2025 — Current</p>
                <p className="text-sm text-ghibli-ink/40 font-light italic">Specialization in Biostatistics</p>
              </div>
            </div>
            
            <div className="flex gap-8 group">
              <div className="w-16 h-16 rounded-2xl bg-ghibli-blue/10 flex items-center justify-center shrink-0 group-hover:bg-ghibli-blue group-hover:text-white transition-all duration-500">
                <Code2 size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold mb-1">Software Engineering</h4>
                <p className="text-sm text-ghibli-ink/60 mb-2">Bloomreach · 2022 - 2025</p>
                <p className="text-sm text-ghibli-ink/40 font-light italic">Search Quality Team.</p>
              </div>
            </div>
            
            <div className="flex gap-8 group">
              <div className="w-16 h-16 rounded-2xl bg-ghibli-pink/10 flex items-center justify-center shrink-0 group-hover:bg-ghibli-pink group-hover:text-white transition-all duration-500">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold mb-1">M.S. in Data Analytics</h4>
                <p className="text-sm text-ghibli-ink/60 mb-2">Boston University · 2020 — 2020</p>
              </div>
            </div>

            <div className="flex gap-8 group">
              <div className="w-16 h-16 rounded-2xl bg-ghibli-blue/10 flex items-center justify-center shrink-0 group-hover:bg-ghibli-blue group-hover:text-white transition-all duration-500">
                <Code2 size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold mb-1">Data Science Intern</h4>
                <p className="text-sm text-ghibli-ink/60 mb-2">Telenav · Summer 2021</p>
                <p className="text-sm text-ghibli-ink/40 font-light italic">Mobile App Development</p>
              </div>
            </div>
            
            <div className="flex gap-8 group">
              <div className="w-16 h-16 rounded-2xl bg-ghibli-pink/10 flex items-center justify-center shrink-0 group-hover:bg-ghibli-pink group-hover:text-white transition-all duration-500">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold mb-1">B.A. in Computer Science</h4>
                <p className="text-sm text-ghibli-ink/60 mb-2">Boston University · 2017 — 2020</p>
                <p className="text-sm text-ghibli-ink/40 font-light italic">Minor in Economics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="pt-16 border-t border-ghibli-ink/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Flower2 className="text-ghibli-pink" size={16} />
              <p className="text-xs font-bold uppercase tracking-widest text-ghibli-ink/30">
                © 2024 Ethan Go · Made with care
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
