/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Globe
} from "lucide-react";
import { useState } from "react";
import AboutPage from "./components/AboutPage";
import ResearchInterestsPage from "./components/ResearchInterestsPage";
import ProfileImage from "./components/ProfileImage";
import { MapleLeafIcon, OakLeafIcon, GinkgoLeafIcon } from "./components/AutumnLeaves";
import FallBackground from "./components/FallBackground";

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
    description: "A collaborative code sharing platform allowing instructors and students to either create or join real-time workspaces with instant syntax synchronization.",
    tags: ["jQuery", "Materialize", "SQL", "CodeMirror"],
    github: "https://github.com/EthanTGo/Collab2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZzr7b7WRWg3vQF6x6iRMhlCh03ZZpgfnlg&s"
  }
];

const RESEARCH: Research[] = [
  {
    title: "Does the Model Matter? A Sensitivity Analysis of Valuation Uncertainty in Land Value Tax Simulation",
    authors: "Ethan Go",
    venue: "SSRN pre-print",
    year: "2026",
    abstract: "This paper trains several statistical algorithms to predict assessed values of properties in Cook County, performing a sensitivity analysis of shifting from a unified tax system to a land value system, given the predictions of the model.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6862558"
  },
  {
    title: "Grand Challenge: Anomaly Detection for NILM Task with Apache Flink",
    authors: "Zongshun Zhang, Ethan Go",
    venue: "ACM",
    year: "2020",
    abstract: "This paper describes our solution based on Apache Flink, a stream processing framework, and the DBSCAN density based clustering algorithm for anomaly detection through the context of data provided by DEBS Grand Challenge.",
    link: "https://dl.acm.org/doi/10.1145/3401025.3401758"
  }
];

interface LogoImageProps {
  srcs: string[];
  alt: string;
  fallbackType: 'northeastern' | 'bu' | 'bloomreach' | 'telenav';
}

function LogoImage({ srcs, alt, fallbackType }: LogoImageProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const [hasFailedAll, setHasFailedAll] = useState(false);

  const handleError = () => {
    if (imgIndex < srcs.length - 1) {
      setImgIndex(prev => prev + 1);
    } else {
      setHasFailedAll(true);
    }
  };

  if (hasFailedAll) {
    if (fallbackType === 'northeastern') {
      return (
        <div className="w-16 h-16 rounded-2xl bg-[#C8102E] flex items-center justify-center shrink-0 border border-red-200/30 shadow-sm overflow-hidden select-none transition-all duration-500 group-hover:scale-105">
          <span className="text-white font-serif text-3xl font-black">N</span>
        </div>
      );
    }
    if (fallbackType === 'bu') {
      return (
        <div className="w-16 h-16 rounded-2xl bg-[#CC0000] flex items-center justify-center shrink-0 border border-red-200/30 shadow-sm overflow-hidden select-none transition-all duration-500 group-hover:scale-105">
          <span className="text-white font-sans text-xl font-black italic tracking-tighter">BU</span>
        </div>
      );
    }
    if (fallbackType === 'bloomreach') {
      return (
        <div className="w-16 h-16 rounded-2xl bg-[#F4D03F] flex items-center justify-center shrink-0 border border-amber-300/40 shadow-sm overflow-hidden select-none transition-all duration-500 group-hover:scale-105">
          <span className="text-stone-900 font-sans text-3xl font-black lowercase leading-none pb-1">b</span>
        </div>
      );
    }
    if (fallbackType === 'telenav') {
      return (
        <div className="w-16 h-16 rounded-2xl bg-[#0A0B1A] flex items-center justify-center shrink-0 border border-stone-800 shadow-sm overflow-hidden select-none transition-all duration-500 group-hover:scale-105">
          <div className="flex flex-col items-center justify-center gap-1.5">
            <span className="text-amber-400 text-xs leading-none">▲</span>
            <span className="text-white font-sans text-[8px] font-bold tracking-wider leading-none">TELENAV</span>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-amber-900/10 bg-white shadow-sm flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-105">
      <img 
        src={srcs[imgIndex]} 
        alt={alt} 
        className="w-full h-full object-cover" 
        onError={handleError}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

// Autumn tags color helper
const TAG_FALL_STYLES = [
  "bg-amber-100/90 text-amber-950 border border-amber-300/70",
  "bg-orange-100/90 text-orange-950 border border-orange-300/70",
  "bg-red-100/90 text-red-950 border border-red-300/70",
  "bg-yellow-100/90 text-yellow-950 border border-yellow-300/70",
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'research' | 'about'>('portfolio');
  const [activeTab, setActiveTab] = useState<'research' | 'projects'>('research');

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#2A1A12] font-sans selection:bg-orange-200 selection:text-red-950 flex flex-col relative overflow-x-hidden">
      {/* Autumn Trees Background: Top canopy with vibrant watercolor fall foliage */}
      <FallBackground style="watercolor" />

      {/* Sticky Navigation Header with Fall Accents */}
      <header className="sticky top-0 z-50 bg-[#FCFAF6]/90 backdrop-blur-md border-b border-amber-900/10 py-4 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center gap-4">
          <button 
            onClick={() => {
              setCurrentPage('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-2xl font-bold text-[#C0392B] hover:opacity-85 transition-opacity flex items-center gap-2 group text-left cursor-pointer"
          >
            <div 
              className="p-1 rounded-lg bg-red-100/60 text-[#C0392B] group-hover:rotate-12 transition-transform duration-300"
            >
              <MapleLeafIcon size={20} color="#C0392B" />
            </div>
            <span className="tracking-tight text-[#2A1A12] font-bold">Ethan Go</span>
          </button>
          
          <nav className="flex gap-4 sm:gap-8 items-center">
            <button 
              onClick={() => {
                setCurrentPage('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-xs font-bold uppercase tracking-widest transition-all relative py-1 cursor-pointer ${currentPage === 'portfolio' ? 'text-[#C0392B] font-extrabold' : 'text-[#2A1A12]/60 hover:text-[#2A1A12]'}`}
            >
              Portfolio
              {currentPage === 'portfolio' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C0392B] via-[#D96B27] to-[#E5A124]" />
              )}
            </button>
            <button 
              onClick={() => {
                setCurrentPage('research');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-xs font-bold uppercase tracking-widest transition-all relative py-1 cursor-pointer ${currentPage === 'research' ? 'text-[#C0392B] font-extrabold' : 'text-[#2A1A12]/60 hover:text-[#2A1A12]'}`}
            >
              Research Interests
              {currentPage === 'research' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C0392B] via-[#D96B27] to-[#E5A124]" />
              )}
            </button>
            <button 
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-xs font-bold uppercase tracking-widest transition-all relative py-1 cursor-pointer ${currentPage === 'about' ? 'text-[#C0392B] font-extrabold' : 'text-[#2A1A12]/60 hover:text-[#2A1A12]'}`}
            >
              About Me
              {currentPage === 'about' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C0392B] via-[#D96B27] to-[#E5A124]" />
              )}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-8 md:pt-12 pb-24 flex-1 w-full relative z-20">
        <AnimatePresence mode="wait">
          {currentPage === 'portfolio' ? (
            <motion.div
              key="portfolio-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-24 md:space-y-28"
            >
              {/* Hero / Cover Section - Bright, Crisp & Exceptionally Easy to Read */}
              <section id="about" className="relative pt-4 sm:pt-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center lg:items-start justify-between"
                >
                  <div className="flex-1 z-10">
                    <p className="text-xl md:text-2xl text-[#3A261C] max-w-xl leading-relaxed mb-10 font-normal">
                      I am a <span className="font-semibold text-[#1F110B]">Graduate Research Assistant</span> at Northeastern University, working at the intersection of <span className="font-semibold text-[#1F110B] underline decoration-amber-400/80 decoration-2 underline-offset-4">machine learning systems, statistics, and causal inference.</span> Currently pursuing my M.S. in Statistics (Biostatistics), I design computational frameworks and conduct statistical modeling to solve complex challenges in public health, public policy, and economics.
                    </p>
                    
                    <div className="flex flex-wrap gap-5 items-center mb-8">
                      <a 
                        href="mailto:ethango1997@gmail.com" 
                        className="group relative px-8 py-4 bg-gradient-to-r from-[#2A1A12] to-[#452316] hover:from-[#C0392B] hover:to-[#D96B27] text-[#FCFAF6] rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 shadow-md shadow-orange-950/10 hover:pr-12"
                      >
                        <span className="relative z-10">Get in touch</span>
                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-white" size={16} />
                      </a>
                      <div className="flex gap-3">
                        <a 
                          href="https://github.com/EthanTGo" 
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Profile"
                          className="p-3.5 border border-amber-900/15 bg-white/70 rounded-full text-[#2A1A12] hover:bg-red-50 hover:text-red-700 hover:border-red-400 transition-all shadow-2xs"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/ethanthego/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          title="LinkedIn Profile"
                          className="p-3.5 border border-amber-900/15 bg-white/70 rounded-full text-[#2A1A12] hover:bg-orange-50 hover:text-orange-700 hover:border-orange-400 transition-all shadow-2xs"
                        >
                          <Linkedin size={20} />
                        </a>
                      </div>
                    </div>

                    {/* Autumn feature highlight note & link to Research Interests */}
                    <button
                      onClick={() => {
                        setCurrentPage('research');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-amber-50/80 hover:bg-amber-100/90 border border-amber-200/70 hover:border-amber-400 text-xs text-[#5C3D2E] transition-all cursor-pointer group text-left shadow-2xs"
                    >
                      <span className="p-1 rounded-full bg-red-100 text-[#C0392B] group-hover:rotate-12 transition-transform">
                        <MapleLeafIcon size={12} color="#C0392B" />
                      </span>
                      <span>Explore my core <strong className="font-bold text-[#1F110B] underline decoration-amber-400">Research Interests</strong> & causal inference agenda →</span>
                    </button>
                  </div>

                  {/* Profile Portrait Framed by Background Autumn Foliage & Hanko Stamp */}
                  <div className="shrink-0 relative z-10">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-red-600/15 rounded-[2.5rem] rotate-4 -z-10 border border-red-500/20" />
                      <div className="absolute -inset-3 bg-orange-500/15 rounded-[2.5rem] -rotate-3 -z-10 border border-orange-500/20" />
                      <div className="absolute -inset-1.5 bg-amber-400/20 rounded-[2.2rem] rotate-1 -z-10 border border-amber-400/30" />
                      <ProfileImage className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-92 border-6 border-white shadow-2xl shadow-amber-950/15 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Selected Works Section */}
              <section id="work" className="mb-32">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-14">
                  <div className="flex items-center gap-3">
                    <MapleLeafIcon size={28} color="#C0392B" className="shrink-0" />
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1F110B]">Selected Works</h2>
                  </div>

                  {/* Filter tabs styled with warm autumn accents */}
                  <div className="flex gap-2 p-1.5 bg-amber-950/5 border border-amber-900/10 rounded-full w-fit">
                    <button 
                      onClick={() => setActiveTab('research')}
                      className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${activeTab === 'research' ? 'bg-white text-red-900 border border-amber-200/80 shadow-xs' : 'text-[#6E5343] hover:text-[#2A1A12]'}`}
                    >
                      Research
                    </button>
                    <button 
                      onClick={() => setActiveTab('projects')}
                      className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${activeTab === 'projects' ? 'bg-white text-orange-900 border border-amber-200/80 shadow-xs' : 'text-[#6E5343] hover:text-[#2A1A12]'}`}
                    >
                      Projects
                    </button>
                  </div>
                </div>

                <div className="grid gap-12">
                  {activeTab === 'research' ? (
                    RESEARCH.map((paper, idx) => (
                      <motion.div 
                        key={paper.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group grid md:grid-cols-[1fr_auto] gap-8 p-8 md:p-10 rounded-[2rem] bg-white/80 backdrop-blur-sm border border-amber-900/10 hover:border-amber-400/50 hover:bg-white hover:shadow-xl hover:shadow-amber-950/5 transition-all duration-300"
                      >
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-bold tracking-widest text-[#C0392B] bg-red-100/70 px-2.5 py-0.5 rounded-full">{paper.year}</span>
                            <div className="h-1 w-1 rounded-full bg-amber-900/30" />
                            <span className="text-xs font-medium italic text-[#6E5343]">{paper.venue}</span>
                          </div>
                          <h3 className="text-2xl font-serif font-bold mb-3 text-[#1F110B] group-hover:text-[#C0392B] transition-colors leading-snug">
                            {paper.title}
                          </h3>
                          <p className="text-sm text-[#6E5343] mb-6 italic">{paper.authors}</p>
                          <p className="text-[#3A261C] leading-relaxed mb-8 font-normal">
                            {paper.abstract}
                          </p>
                          <div className="flex gap-6">
                            {paper.link && (
                              <a 
                                href={paper.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2A1A12] hover:text-[#C0392B] transition-colors"
                              >
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
                          className="group bg-white/80 backdrop-blur-sm p-6 rounded-[2rem] border border-amber-900/10 hover:border-amber-400/50 hover:bg-white hover:shadow-xl hover:shadow-amber-950/5 transition-all"
                        >
                          <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 bg-amber-50/50 border border-amber-900/10 shadow-sm relative">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <h3 className="text-xl font-serif font-bold mb-3 text-[#1F110B] group-hover:text-[#D96B27] transition-colors">{project.title}</h3>
                          <p className="text-[#3A261C] mb-6 leading-relaxed font-normal">
                            {project.description}
                          </p>
                          {/* Tags in autumn red, orange, yellow, amber */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, tagIdx) => (
                              <span 
                                key={tag} 
                                className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${TAG_FALL_STYLES[tagIdx % TAG_FALL_STYLES.length]}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-4">
                            {project.github && (
                              <a 
                                href={project.github} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#2A1A12]/40 hover:text-[#C0392B] transition-colors"
                              >
                                <Github size={20} />
                              </a>
                            )}
                            {project.link && (
                              <a 
                                href={project.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#2A1A12]/40 hover:text-[#D96B27] transition-colors"
                              >
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

              {/* Education & Experience Section with Autumn Dividers */}
              <section className="mb-32">
                <div className="grid md:grid-cols-2 gap-16">
                  {/* Education Column */}
                  <div>
                    <div className="flex items-center gap-4 mb-12">
                      <OakLeafIcon size={22} color="#D96B27" className="shrink-0" />
                      <h2 className="font-serif text-3xl font-bold text-[#1F110B]">Education</h2>
                      <div className="h-px flex-1 bg-gradient-to-r from-orange-500/40 via-amber-400/30 to-transparent" />
                    </div>
                    
                    <div className="flex flex-col gap-10">
                      <div className="flex gap-6 group">
                        <LogoImage 
                          srcs={[
                            '/src/northeastern_logo.png', 
                            '/src/northeastern_logo.jpg', 
                            '/src/northeastern_logo.jpeg', 
                            '/src/logo.png', 
                            '/src/logo.jpg', 
                            '/src/logo.jpeg', 
                            '/northeastern_logo.png', 
                            '/logo.png', 
                            '/logo.jpg', 
                            '/logo.jpeg'
                          ]} 
                          alt="Northeastern University Logo" 
                          fallbackType="northeastern" 
                        />
                        <div>
                          <h4 className="font-serif text-xl font-bold mb-1 text-[#1F110B] group-hover:text-red-700 transition-colors">M.S. in Statistics</h4>
                          <p className="text-sm text-[#5C4033] mb-1 font-medium">Northeastern University · 2025 — Current</p>
                          <p className="text-sm text-[#8C6D5B] font-light italic">Specialization in Biostatistics</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-6 group">
                        <LogoImage 
                          srcs={[
                            '/src/bu.jpeg', 
                            '/src/bu.jpg', 
                            '/src/bu.png', 
                            '/bu.jpeg', 
                            '/bu.jpg', 
                            '/bu.png'
                          ]} 
                          alt="Boston University Logo" 
                          fallbackType="bu" 
                        />
                        <div>
                          <h4 className="font-serif text-xl font-bold mb-1 text-[#1F110B] group-hover:text-red-700 transition-colors">M.S. in Data Analytics</h4>
                          <p className="text-sm text-[#5C4033] mb-1 font-medium">Boston University · 2020 — 2022</p>
                        </div>
                      </div>

                      <div className="flex gap-6 group">
                        <LogoImage 
                          srcs={[
                            '/src/bu.jpeg', 
                            '/src/bu.jpg', 
                            '/src/bu.png', 
                            '/bu.jpeg', 
                            '/bu.jpg', 
                            '/bu.png'
                          ]} 
                          alt="Boston University Logo" 
                          fallbackType="bu" 
                        />
                        <div>
                          <h4 className="font-serif text-xl font-bold mb-1 text-[#1F110B] group-hover:text-red-700 transition-colors">B.A. in Computer Science</h4>
                          <p className="text-sm text-[#5C4033] mb-1 font-medium">Boston University · 2017 — 2020</p>
                          <p className="text-sm text-[#8C6D5B] font-light italic">Minor in Economics</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Column */}
                  <div>
                    <div className="flex items-center gap-4 mb-12">
                      <GinkgoLeafIcon size={22} color="#E5A124" className="shrink-0" />
                      <h2 className="font-serif text-3xl font-bold text-[#1F110B]">Experience</h2>
                      <div className="h-px flex-1 bg-gradient-to-r from-amber-500/40 via-red-400/30 to-transparent" />
                    </div>

                    <div className="flex flex-col gap-10">
                      <div className="flex gap-6 group">
                        <LogoImage 
                          srcs={[
                            '/src/bloomreach_logo.png', 
                            '/src/bloomreach_logo.jpg', 
                            '/src/bloomreach_logo.jpeg', 
                            '/bloomreach_logo.png', 
                            '/bloomreach_logo.jpg', 
                            '/bloomreach_logo.jpeg'
                          ]} 
                          alt="Bloomreach Logo" 
                          fallbackType="bloomreach" 
                        />
                        <div>
                          <h4 className="font-serif text-xl font-bold mb-1 text-[#1F110B] group-hover:text-orange-700 transition-colors">Software Engineering</h4>
                          <p className="text-sm text-[#5C4033] mb-1 font-medium">Bloomreach · 2022 - 2025</p>
                          <p className="text-sm text-[#8C6D5B] font-light italic">Search Quality Team</p>
                        </div>
                      </div>

                      <div className="flex gap-6 group">
                        <LogoImage 
                          srcs={[
                            '/src/telenav.jpeg', 
                            '/src/telenav.jpg', 
                            '/src/telenav.png', 
                            '/telenav.jpeg', 
                            '/telenav.jpg', 
                            '/telenav.png'
                          ]} 
                          alt="Telenav Logo" 
                          fallbackType="telenav" 
                        />
                        <div>
                          <h4 className="font-serif text-xl font-bold mb-1 text-[#1F110B] group-hover:text-amber-700 transition-colors">Data Science Intern</h4>
                          <p className="text-sm text-[#5C4033] mb-1 font-medium">Telenav · Summer 2021</p>
                          <p className="text-sm text-[#8C6D5B] font-light italic">Mobile App Development</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : currentPage === 'research' ? (
            <ResearchInterestsPage key="research-page" />
          ) : (
            <AboutPage key="about-page" />
          )}
        </AnimatePresence>

        {/* Footer with Autumn Motif and Quick Navigation */}
        <footer id="contact" className="pt-16 border-t border-amber-900/10 mt-32">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <MapleLeafIcon size={18} color="#C0392B" />
              <p className="text-xs font-bold uppercase tracking-widest text-[#7D5B49]">
                © 2026 Ethan Go · Autumn Edition
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-bold uppercase tracking-wider text-[#7D5B49]">
              <button 
                onClick={() => {
                  setCurrentPage('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#C0392B] transition-colors cursor-pointer ${currentPage === 'portfolio' ? 'text-[#C0392B]' : ''}`}
              >
                Portfolio
              </button>
              <span className="text-amber-300">·</span>
              <button 
                onClick={() => {
                  setCurrentPage('research');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#C0392B] transition-colors cursor-pointer ${currentPage === 'research' ? 'text-[#C0392B]' : ''}`}
              >
                Research Interests
              </button>
              <span className="text-amber-300">·</span>
              <button 
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#C0392B] transition-colors cursor-pointer ${currentPage === 'about' ? 'text-[#C0392B]' : ''}`}
              >
                About Me
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
