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
  FileText
} from "lucide-react";
import { useState } from "react";
import ProfileImage from "./components/ProfileImage";
import BudsLabLogo from "./components/BudsLabLogo";

interface Publication {
  title: string;
  authorsPrefix: string;
  boldName: string;
  authorsSuffix: string;
  venue: string;
  year: string;
  abstract: string;
  link: string;
  linkText: string;
}

const PUBLICATIONS: Publication[] = [
  {
    title: "Same Data, Different Winners: Valuation Model Uncertainty Sensitivity Analysis",
    authorsPrefix: "",
    boldName: "Ethan Go",
    authorsSuffix: "",
    venue: "SSRN pre-print",
    year: "2026",
    abstract: "Trains several statistical algorithms to predict assessed values of properties in Cook County, performing a sensitivity analysis of shifting from a unified tax system to a land value tax system given model predictions.",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7474498",
    linkText: "SSRN Pre-print"
  },
  {
    title: "Grand Challenge: Anomaly Detection for NILM Task with Apache Flink",
    authorsPrefix: "Zongshun Zhang, ",
    boldName: "Ethan Timoteo Go",
    authorsSuffix: "",
    venue: "ACM International Conference on Distributed and Event-based Systems (DEBS)",
    year: "2020",
    abstract: "A stream-processing solution based on Apache Flink and the DBSCAN density-based clustering algorithm for real-time anomaly detection in high-frequency smart meter power consumption data.",
    link: "https://dl.acm.org/doi/10.1145/3401025.3401758",
    linkText: "ACM Digital Library"
  }
];

function ScholarIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
    </svg>
  );
}

function OrcidIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden="true">
      <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm-38.4 186.7H67.2V78.2h22.4v108.5zm-11.2-123c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm117.3 75.3c-2.3 8.8-6.7 16.5-13.1 22.8-6.4 6.3-14.3 11-23.7 14.1-9.4 3.1-20 4.6-31.8 4.6h-37.4V78.2h40.4c11.3 0 21.3 1.6 30 4.7 8.7 3.1 16 7.6 21.9 13.5 5.9 5.9 10.3 13.1 13.1 21.5 2.8 8.4 4.3 17.6 4.3 27.6-.1 13.3-1.3 24.8-3.7 33.5zm-22.7-47.5c-1.9-6-5-10.8-9.3-14.4-4.3-3.6-9.9-5.4-16.7-5.4h-17.7v78.7h16.2c7.6 0 13.8-1.9 18.5-5.8 4.8-3.9 8-9.1 9.8-15.6 1.8-6.5 2.6-14.5 2.6-24 0-5.8-.8-10.3-1.6-13.5z" />
    </svg>
  );
}

interface LogoImageProps {
  srcs: string[];
  alt: string;
  fallbackType: 'northeastern' | 'bu' | 'bloomreach' | 'telenav' | 'buds' | 'nus';
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

  if (fallbackType === 'buds') {
    return (
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-amber-900/10 shadow-xs select-none p-1 overflow-hidden">
        <BudsLabLogo className="w-full h-auto object-contain" />
      </div>
    );
  }

  if (hasFailedAll) {
    if (fallbackType === 'northeastern') {
      return (
        <div className="w-12 h-12 rounded-xl bg-[#C8102E] flex items-center justify-center shrink-0 border border-red-200/30 shadow-xs select-none">
          <span className="text-white font-serif text-xl font-black">N</span>
        </div>
      );
    }
    if (fallbackType === 'bu') {
      return (
        <div className="w-12 h-12 rounded-xl bg-[#CC0000] flex items-center justify-center shrink-0 border border-red-200/30 shadow-xs select-none">
          <span className="text-white font-sans text-base font-black italic tracking-tighter">BU</span>
        </div>
      );
    }
    if (fallbackType === 'bloomreach') {
      return (
        <div className="w-12 h-12 rounded-xl bg-[#F4D03F] flex items-center justify-center shrink-0 border border-amber-300/40 shadow-xs select-none">
          <span className="text-stone-900 font-sans text-xl font-black lowercase leading-none pb-0.5">b</span>
        </div>
      );
    }
    if (fallbackType === 'telenav') {
      return (
        <div className="w-12 h-12 rounded-xl bg-[#0A0B1A] flex items-center justify-center shrink-0 border border-stone-800 shadow-xs select-none">
          <div className="flex flex-col items-center justify-center">
            <span className="text-amber-400 text-[9px] leading-none">▲</span>
            <span className="text-white font-sans text-[6px] font-bold tracking-wider leading-none">TELENAV</span>
          </div>
        </div>
      );
    }
    if (fallbackType === 'nus') {
      return (
        <div className="w-12 h-12 rounded-xl bg-[#003D7C] flex items-center justify-center shrink-0 border border-blue-900/30 shadow-xs select-none">
          <span className="text-white font-sans text-xs font-black tracking-tight">NUS</span>
        </div>
      );
    }
  }

  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-900/10 bg-white shadow-xs flex items-center justify-center shrink-0">
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<'about-research' | 'publications-biography'>('about-research');

  const switchPage = (page: 'about-research' | 'publications-biography') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-[#2A1A12] font-sans selection:bg-orange-200 selection:text-red-950 flex flex-col relative overflow-x-hidden">
      {/* Sticky Academic Header Navigation (Clean typography, no leaf icons) */}
      <header className="sticky top-0 z-50 bg-[#FCFAF6]/95 backdrop-blur-md border-b border-amber-900/10 py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center gap-4">
          <button 
            onClick={() => switchPage('about-research')}
            className="font-serif text-2xl font-bold tracking-tight text-[#1F110B] hover:text-[#C0392B] transition-colors text-left cursor-pointer"
          >
            Ethan Go
          </button>
          
          <nav className="flex gap-4 sm:gap-8 items-center text-xs font-bold uppercase tracking-wider">
            <button 
              onClick={() => switchPage('about-research')}
              className={`transition-all py-1 relative cursor-pointer ${currentPage === 'about-research' ? 'text-[#C0392B] font-extrabold' : 'text-[#2A1A12]/60 hover:text-[#2A1A12]'}`}
            >
              About & Research
              {currentPage === 'about-research' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C0392B] via-[#D96B27] to-[#E5A124]" />
              )}
            </button>

            <button 
              onClick={() => switchPage('publications-biography')}
              className={`transition-all py-1 relative cursor-pointer ${currentPage === 'publications-biography' ? 'text-[#C0392B] font-extrabold' : 'text-[#2A1A12]/60 hover:text-[#2A1A12]'}`}
            >
              Publications & Biography
              {currentPage === 'publications-biography' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C0392B] via-[#D96B27] to-[#E5A124]" />
              )}
            </button>

            <a 
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1 rounded-full border border-amber-900/20 bg-amber-100/60 hover:bg-amber-200/80 text-amber-950 transition-colors hidden sm:inline-flex items-center gap-1.5"
            >
              <FileText size={12} />
              <span>CV</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 pt-10 md:pt-14 pb-24 flex-1 w-full relative z-20">
        <AnimatePresence mode="wait">
          {currentPage === 'about-research' ? (
            /* PAGE 1: About & Research */
            <motion.div
              key="about-research-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-16 md:space-y-24"
            >
              {/* Section: About / Overview */}
              <section className="relative pt-2">
                <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-12 items-center md:items-start justify-between">
                  <div className="flex-1 space-y-6">
                    <div>
                      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F110B] tracking-tight mb-2">
                        Ethan Go
                      </h1>
                      <p className="text-base sm:text-lg text-[#C0392B] font-semibold tracking-wide">
                        Graduate Research Assistant · Biostatistics
                      </p>
                      <p className="text-sm text-[#6E5343] font-medium">
                        Bouvé College of Health Sciences · Northeastern University
                      </p>
                    </div>

                    {/* Academic Profiles & Contact Icons Row */}
                    <div className="flex flex-wrap gap-2.5 items-center pt-1">
                      <a 
                        href="https://scholar.google.com/citations?user=Otcng6AAAAAJ&hl=en" 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Google Scholar Profile"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-900/15 bg-white/80 hover:bg-red-50 hover:text-red-700 hover:border-red-400 rounded-full text-xs font-semibold text-[#2A1A12] transition-all shadow-2xs"
                      >
                        <ScholarIcon size={15} />
                        <span>Google Scholar</span>
                      </a>

                      <a 
                        href="https://orcid.org/0009-0007-5380-5311" 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="ORCID: 0009-0007-5380-5311"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-900/15 bg-white/80 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-400 rounded-full text-xs font-semibold text-[#2A1A12] transition-all shadow-2xs"
                      >
                        <OrcidIcon size={15} className="text-[#A6CE39]" />
                        <span>ORCID</span>
                      </a>

                      <a 
                        href="https://github.com/EthanTGo" 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub: EthanTGo"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-900/15 bg-white/80 hover:bg-amber-50 hover:text-[#2A1A12] hover:border-amber-400 rounded-full text-xs font-semibold text-[#2A1A12] transition-all shadow-2xs"
                      >
                        <Github size={15} />
                        <span>GitHub</span>
                      </a>

                      <a 
                        href="https://www.linkedin.com/in/ethanthego/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn Profile"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-900/15 bg-white/80 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-400 rounded-full text-xs font-semibold text-[#2A1A12] transition-all shadow-2xs"
                      >
                        <Linkedin size={15} />
                        <span>LinkedIn</span>
                      </a>

                      <a 
                        href="mailto:ethango1997@gmail.com" 
                        title="Email: ethango1997@gmail.com"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-900/15 bg-white/80 hover:bg-red-50 hover:text-red-700 hover:border-red-400 rounded-full text-xs font-semibold text-[#2A1A12] transition-all shadow-2xs"
                      >
                        <Mail size={15} />
                        <span>Email</span>
                      </a>

                      <a 
                        href={`${import.meta.env.BASE_URL}resume.pdf`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Curriculum Vitae (PDF)"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-amber-900/20 bg-amber-100/70 hover:bg-amber-200 hover:text-red-950 rounded-full text-xs font-bold text-amber-950 transition-all shadow-2xs"
                      >
                        <FileText size={15} />
                        <span>CV</span>
                      </a>
                    </div>

                    {/* Bio Narrative */}
                    <div className="space-y-4 text-base sm:text-lg text-[#3D281E] font-normal leading-relaxed pt-2 text-justify">
                      <p>
                        I am a <strong className="font-semibold text-[#1F110B]">Graduate Research Assistant</strong> in the Bouvé College of Health Sciences at Northeastern University, supervised by Professor Matthew Miller and Professor Louisa Smith. My research focuses on causal inference, synthetic control methods, and missing data in evaluations of firearm violence policy. I am pursuing an M.S. in Statistics with a concentration in Biostatistics (expected May 2027).
                      </p>
                      <p>
                        Previously, I was a Software Engineer at Bloomreach on the search quality team working on distributed semantic search systems. I completed my M.S. in Applied Data Analytics and B.A. in Computer Science (minor in Economics) at Boston University.
                      </p>
                    </div>
                  </div>

                  {/* Profile Portrait */}
                  <div className="shrink-0 relative">
                    <div className="relative group">
                      <div className="absolute -inset-2.5 bg-amber-900/10 rounded-[2.2rem] rotate-1 -z-10 border border-amber-900/15" />
                      <ProfileImage className="w-52 h-68 sm:w-60 sm:h-76 md:w-64 md:h-80 border-4 border-white shadow-lg shadow-amber-950/10 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Section: Research Interests (Clean typography, no leaf icon) */}
              <section className="space-y-8 pt-4">
                <div className="space-y-3 pb-3 border-b border-amber-900/10">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F110B]">
                    Research Interests
                  </h2>
                </div>

                <div className="space-y-8 text-[#3D281E] leading-relaxed">
                  {/* Area 1 */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F110B]">
                      Causal Inference in settings where assumptions are violated
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed text-[#3D281E] text-justify">
                      My main research interest is working with areas of causal inference in which standard identification assumptions may be violated. I study sensitivity analysis, algorithmic valuation uncertainty, and how model variance propagates into policy and economic simulations.
                    </p>
                  </div>

                  {/* Area 2 */}
                  <div className="space-y-2 pt-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F110B]">
                      Issues with Missing Data
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed text-[#3D281E] text-justify">
                      Investigating statistical methodologies, imputation strategies, and robust estimators to handle complex missing data mechanisms in observational and longitudinal biomedical studies.
                    </p>
                  </div>

                  {/* Area 3 */}
                  <div className="space-y-2 pt-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F110B]">
                      Other Methodological & Applied Interests
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed text-[#3D281E] text-justify">
                      Longitudinal data analysis, survival analysis, causal machine learning, and mediation analysis applied to public health, clinical informatics, and policy evaluations.
                    </p>
                  </div>
                </div>

                {/* Prompt to view Publications & Biography */}
                <div className="pt-8">
                  <button
                    onClick={() => switchPage('publications-biography')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C0392B] hover:text-[#D96B27] transition-colors cursor-pointer group"
                  >
                    <span>View Publications & Biography</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </section>
            </motion.div>
          ) : (
            /* PAGE 2: Publications & Biography + Dedicated Projects Section */
            <motion.div
              key="publications-biography-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-16 md:space-y-24"
            >
              {/* Section 1: Publications & Pre-prints (Clean academic citation list) */}
              <section className="space-y-8">
                <div className="space-y-2 pb-3 border-b border-amber-900/10">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F110B]">
                    Publications & Pre-prints
                  </h2>
                </div>

                <div className="space-y-8 divide-y divide-amber-900/10">
                  {PUBLICATIONS.map((pub, idx) => (
                    <div 
                      key={pub.title}
                      className={idx > 0 ? "pt-6 space-y-2 text-[#3D281E]" : "space-y-2 text-[#3D281E]"}
                    >
                      <div className="text-base sm:text-lg leading-relaxed text-[#1F110B]">
                        <span className="font-serif font-bold text-[#C0392B] mr-2">[{idx + 1}]</span>
                        {pub.authorsPrefix && <span>{pub.authorsPrefix}</span>}
                        <strong className="font-bold text-[#1F110B]">{pub.boldName}</strong>
                        {pub.authorsSuffix && <span>{pub.authorsSuffix}</span>}
                        <span>. </span>
                        <span className="font-medium text-[#1F110B]">"{pub.title}."</span>{" "}
                        <span className="italic text-[#6E5343]">{pub.venue}</span> ({pub.year}).
                      </div>

                      <p className="text-sm text-[#5C4033] leading-relaxed pl-6 max-w-3xl">
                        {pub.abstract}
                      </p>

                      <div className="pl-6 pt-0.5">
                        <a 
                          href={pub.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C0392B] hover:text-[#D96B27] underline decoration-amber-300 underline-offset-3 transition-colors"
                        >
                          <span>[{pub.linkText}]</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2: Biography (Education & Experience from CV) */}
              <section className="space-y-12">
                <div className="space-y-3 pb-3 border-b border-amber-900/10">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F110B]">
                    Biography
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-14">
                  {/* Education Column */}
                  <div className="space-y-8">
                    <h3 className="font-serif text-xl font-bold text-[#1F110B] pb-2 border-b border-amber-900/10">
                      Education
                    </h3>
                    
                    <div className="flex flex-col gap-8">
                      {/* Northeastern */}
                      <div className="flex gap-4 group">
                        <LogoImage 
                          srcs={[
                            '/src/northeastern_logo.png', 
                            '/src/northeastern_logo.jpg', 
                            '/src/northeastern_logo.jpeg', 
                            '/northeastern_logo.png'
                          ]} 
                          alt="Northeastern University" 
                          fallbackType="northeastern" 
                        />
                        <div className="space-y-1">
                          <h4 className="font-serif text-base font-bold text-[#1F110B] group-hover:text-red-700 transition-colors">
                            M.S. in Statistics (Biostatistics)
                          </h4>
                          <p className="text-xs sm:text-sm text-[#5C4033] font-medium">
                            Northeastern University · May 2027 (Expected)
                          </p>
                          <p className="text-xs text-[#8C6D5B] font-light">
                            Cumulative GPA: 4.0 · Bouvé College of Health Sciences
                          </p>
                          <p className="text-xs text-[#7A5B47] leading-relaxed pt-1">
                            <span className="font-medium">Relevant Coursework:</span> Real Analysis 1, Causal Inference 1 & 2, Advanced Methods in Biostatistics, Generalized Linear Models, Stochastic Processes, Statistical Learning.
                          </p>
                        </div>
                      </div>
                      
                      {/* BU MS */}
                      <div className="flex gap-4 group">
                        <LogoImage 
                          srcs={[
                            '/src/bu.jpeg', 
                            '/src/bu.jpg', 
                            '/src/bu.png', 
                            '/bu.jpeg'
                          ]} 
                          alt="Boston University" 
                          fallbackType="bu" 
                        />
                        <div className="space-y-1">
                          <h4 className="font-serif text-base font-bold text-[#1F110B] group-hover:text-red-700 transition-colors">
                            M.S. in Applied Data Analytics
                          </h4>
                          <p className="text-xs sm:text-sm text-[#5C4033] font-medium">
                            Boston University · May 2022
                          </p>
                          <p className="text-xs text-[#7A5B47] leading-relaxed pt-1">
                            <span className="font-medium">Coursework:</span> Machine Learning, Deep Learning, Big Data Management.
                          </p>
                        </div>
                      </div>

                      {/* BU BA */}
                      <div className="flex gap-4 group">
                        <LogoImage 
                          srcs={[
                            '/src/bu.jpeg', 
                            '/src/bu.jpg', 
                            '/src/bu.png', 
                            '/bu.jpeg'
                          ]} 
                          alt="Boston University" 
                          fallbackType="bu" 
                        />
                        <div className="space-y-1">
                          <h4 className="font-serif text-base font-bold text-[#1F110B] group-hover:text-red-700 transition-colors">
                            B.A. in Computer Science
                          </h4>
                          <p className="text-xs sm:text-sm text-[#5C4033] font-medium">
                            Boston University · May 2020
                          </p>
                          <p className="text-xs text-[#8C6D5B] font-light">
                            Computer Science Major · Economics Minor
                          </p>
                          <p className="text-xs text-[#7A5B47] leading-relaxed pt-1">
                            <span className="font-medium">Coursework:</span> Linear Algebra, Multivariable Calculus, Statistics in CS, Econometrics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Column */}
                  <div className="space-y-8">
                    <h3 className="font-serif text-xl font-bold text-[#1F110B] pb-2 border-b border-amber-900/10">
                      Experience
                    </h3>

                    <div className="flex flex-col gap-8">
                      {/* NEU Research Assistant */}
                      <div className="flex gap-4 group">
                        <LogoImage 
                          srcs={[
                            '/src/northeastern_logo.png', 
                            '/src/northeastern_logo.jpg', 
                            '/northeastern_logo.png'
                          ]} 
                          alt="Northeastern University" 
                          fallbackType="northeastern" 
                        />
                        <div className="space-y-1">
                          <h4 className="font-serif text-base font-bold text-[#1F110B] group-hover:text-red-700 transition-colors">
                            Research Assistant
                          </h4>
                          <p className="text-xs sm:text-sm text-[#5C4033] font-medium">
                            Northeastern University · Nov 2025 — Present
                          </p>
                          <p className="text-xs text-[#7A5B47] leading-relaxed">
                            Evaluating applications of the Synthetic Control Method (SCM) to firearm policy evaluation; synthesizing SCM and difference-in-differences (DID) frameworks.
                          </p>
                        </div>
                      </div>

                      {/* Biostatistics Research Center */}
                      <div className="flex gap-4 group">
                        <LogoImage 
                          srcs={[
                            '/src/northeastern_logo.png', 
                            '/src/northeastern_logo.jpg', 
                            '/northeastern_logo.png'
                          ]} 
                          alt="Biostatistics Research Center" 
                          fallbackType="northeastern" 
                        />
                        <div className="space-y-1">
                          <h4 className="font-serif text-base font-bold text-[#1F110B] group-hover:text-red-700 transition-colors">
                            Biostatistician
                          </h4>
                          <p className="text-xs sm:text-sm text-[#5C4033] font-medium">
                            Biostatistics Research Center · Oct 2025 — Present
                          </p>
                          <p className="text-xs text-[#7A5B47] leading-relaxed">
                            Analyzed longitudinal survey data from the NIA-funded PREHCO aging cohort; developing biostatistics tutorial materials on causal DAGs and R.
                          </p>
                        </div>
                      </div>

                      {/* Bloomreach */}
                      <div className="flex gap-4 group">
                        <LogoImage 
                          srcs={[
                            '/src/bloomreach_logo.png', 
                            '/src/bloomreach_logo.jpg', 
                            '/src/bloomreach_logo.jpeg', 
                            '/bloomreach_logo.png'
                          ]} 
                          alt="Bloomreach" 
                          fallbackType="bloomreach" 
                        />
                        <div className="space-y-1">
                          <h4 className="font-serif text-base font-bold text-[#1F110B] group-hover:text-orange-700 transition-colors">
                            Software Engineer
                          </h4>
                          <p className="text-xs sm:text-sm text-[#5C4033] font-medium">
                            Bloomreach · July 2022 — May 2025
                          </p>
                          <p className="text-xs text-[#7A5B47] leading-relaxed">
                            Search Quality Team. Evaluated LLM architectures for semantic search with Apache SOLR; refactored Spark & Kafka streaming pipelines.
                          </p>
                        </div>
                      </div>

                      {/* Telenav */}
                      <div className="flex gap-4 group">
                        <LogoImage 
                          srcs={[
                            '/src/telenav.jpeg', 
                            '/src/telenav.jpg', 
                            '/src/telenav.png', 
                            '/telenav.jpeg'
                          ]} 
                          alt="Telenav" 
                          fallbackType="telenav" 
                        />
                        <div className="space-y-1">
                          <h4 className="font-serif text-base font-bold text-[#1F110B] group-hover:text-amber-700 transition-colors">
                            Data Science Intern
                          </h4>
                          <p className="text-xs sm:text-sm text-[#5C4033] font-medium">
                            Telenav · Summer 2021
                          </p>
                          <p className="text-xs text-[#7A5B47] leading-relaxed">
                            Modeled high-frequency accelerometer and gyroscope time series; built Python/SQL ETL telemetry pipelines on AWS S3.
                          </p>
                        </div>
                      </div>

                      {/* BUDS Lab NUS */}
                      <div className="flex gap-4 group">
                        <LogoImage 
                          srcs={[
                            `${import.meta.env.BASE_URL}buds_lab.svg`,
                            '/buds_lab.svg'
                          ]} 
                          alt="BUDS Lab @ National University of Singapore" 
                          fallbackType="buds" 
                        />
                        <div className="space-y-1">
                          <h4 className="font-serif text-base font-bold text-[#1F110B] group-hover:text-[#F37021] transition-colors">
                            Data Science Intern
                          </h4>
                          <p className="text-xs sm:text-sm text-[#5C4033] font-medium">
                            BUDS Lab @ National University of Singapore · Summer 2020
                          </p>
                          <p className="text-xs text-[#7A5B47] leading-relaxed">
                            Conducted data analytics and modeled energy and electricity consumption within environmentally friendly building architectures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Dedicated Projects Section (Separated from Biography) */}
              <section className="space-y-8">
                <div className="space-y-3 pb-3 border-b border-amber-900/10">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F110B]">
                    Featured Projects
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Collab^2 Project */}
                  <div className="p-6 rounded-2xl bg-white/70 border border-amber-900/10 space-y-3 hover:border-amber-400/50 hover:bg-white hover:shadow-md transition-all">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg font-bold text-[#1F110B]">
                        Collab²
                      </h3>
                      <a 
                        href="https://github.com/EthanTGo/Collab2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C0392B] hover:text-[#D96B27] transition-colors"
                      >
                        <Github size={14} />
                        <span>Source</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <p className="text-sm text-[#3D281E] leading-relaxed">
                      A collaborative code-sharing platform allowing instructors and students to create or join real-time workspaces with instant syntax synchronization.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-semibold text-[#6E5343]">
                      <span>jQuery</span>
                      <span>·</span>
                      <span>Materialize</span>
                      <span>·</span>
                      <span>SQL</span>
                      <span>·</span>
                      <span>CodeMirror</span>
                    </div>
                  </div>
                </div>

                {/* Prompt to return to About & Research */}
                <div className="pt-8">
                  <button
                    onClick={() => switchPage('about-research')}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C0392B] hover:text-[#D96B27] transition-colors cursor-pointer group"
                  >
                    <span>← Return to About & Research</span>
                  </button>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Academic Footer (Clean typography, no leaf icons) */}
        <footer className="pt-12 border-t border-amber-900/10 mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#7D5B49]">
              © 2026 Ethan Go · Bouvé College of Health Sciences, Northeastern University
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider text-[#7D5B49]">
              <button 
                onClick={() => switchPage('about-research')} 
                className={`transition-colors cursor-pointer ${currentPage === 'about-research' ? 'text-[#C0392B]' : 'hover:text-[#C0392B]'}`}
              >
                About & Research
              </button>
              <span>·</span>
              <button 
                onClick={() => switchPage('publications-biography')} 
                className={`transition-colors cursor-pointer ${currentPage === 'publications-biography' ? 'text-[#C0392B]' : 'hover:text-[#C0392B]'}`}
              >
                Publications & Biography
              </button>
              <span>·</span>
              <a 
                href={`${import.meta.env.BASE_URL}resume.pdf`} 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C0392B] transition-colors"
              >
                CV
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
