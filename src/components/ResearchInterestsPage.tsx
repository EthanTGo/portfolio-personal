import { motion } from "motion/react";
import { 
  GitBranch, 
  Activity, 
  Database, 
  ShieldAlert, 
  ExternalLink, 
  Mail, 
  ArrowUpRight,
  BookOpen,
  Sparkles,
  FileText
} from "lucide-react";
import { MapleLeafIcon, OakLeafIcon, GinkgoLeafIcon } from "./AutumnLeaves";

interface ResearchPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  topics: string[];
  publication?: {
    title: string;
    venue: string;
    year: string;
    link: string;
  };
  icon: typeof GitBranch;
  accentColor: string;
  leafType: 'maple' | 'oak' | 'ginkgo';
}

const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    id: "causal-inference",
    title: "Causal Inference & Policy Simulation",
    tagline: "Evaluating structural counterfactuals and automated valuation uncertainty in socio-economic policy.",
    description: 
      "My primary research investigates how statistical and machine learning models inform policy decisions. I focus on sensitivity analysis, counterfactual reasoning, and understanding how model variance impacts simulated policy transitions — such as shifts from unified property taxation to land value taxation. When machine learning predictions serve as inputs to downstream policy mechanisms, quantifying algorithmic uncertainty is paramount.",
    topics: [
      "Counterfactual Policy Evaluation",
      "Sensitivity Analysis of ML Models",
      "Double Machine Learning",
      "Land Value Tax (LVT) Simulation",
      "Spatial & Valuation Uncertainty"
    ],
    publication: {
      title: "Does the Model Matter? A Sensitivity Analysis of Valuation Uncertainty in Land Value Tax Simulation",
      venue: "SSRN Pre-print",
      year: "2026",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6862558"
    },
    icon: GitBranch,
    accentColor: "#C0392B",
    leafType: "maple"
  },
  {
    id: "biostatistics",
    title: "Biostatistics & Health Data Science",
    tagline: "Statistical modeling for observational biomedical datasets and epidemiological outcomes.",
    description: 
      "Currently pursuing an M.S. in Statistics with a specialization in Biostatistics at Northeastern University. My interests center on survival analysis, longitudinal modeling, and causal estimation in complex observational health data. I am passionate about developing rigorous inferential workflows that mitigate confounding, address treatment-assignment bias, and extract reliable signals from high-noise clinical records.",
    topics: [
      "Survival & Time-to-Event Analysis",
      "Longitudinal & Mixed-Effects Models",
      "Observational Confounding Adjustment",
      "Epidemiological Risk Modeling",
      "Health Equity & Clinical Informatics"
    ],
    icon: Activity,
    accentColor: "#D96B27",
    leafType: "oak"
  },
  {
    id: "ml-systems",
    title: "Distributed Streaming & Machine Learning Systems",
    tagline: "High-throughput stream processing and scalable anomaly detection architectures.",
    description: 
      "Bridging the gap between statistical algorithms and large-scale engineering systems. Drawing from my software engineering background at Bloomreach and distributed systems research, I explore real-time stream processing frameworks (such as Apache Flink) paired with clustering algorithms (e.g., DBSCAN) to perform low-latency anomaly detection in high-velocity energy and sensor data streams.",
    topics: [
      "Distributed Stream Analytics",
      "Online Anomaly Detection (DBSCAN)",
      "Apache Flink Architecture",
      "Non-Intrusive Load Monitoring (NILM)",
      "High-Throughput Data Pipelines"
    ],
    publication: {
      title: "Grand Challenge: Anomaly Detection for NILM Task with Apache Flink",
      venue: "ACM DEBS Grand Challenge",
      year: "2020",
      link: "https://dl.acm.org/doi/10.1145/3401025.3401758"
    },
    icon: Database,
    accentColor: "#E5A124",
    leafType: "ginkgo"
  },
  {
    id: "uncertainty-quantification",
    title: "Uncertainty Quantification & Robustness",
    tagline: "Perturbation propagation and error bounds in automated decision pipelines.",
    description: 
      "Investigating the reliability of statistical models under distribution shifts, noisy observations, and model misspecification. I am particularly drawn to developing practical diagnostic frameworks that help researchers and policymakers evaluate whether empirical conclusions remain stable under perturbation of modeling assumptions.",
    topics: [
      "Perturbation Bounds",
      "Robust Estimation",
      "Variance Decomposition",
      "Spatial Autocorrelation Diagnostics",
      "Model Misspecification Testing"
    ],
    icon: ShieldAlert,
    accentColor: "#8C4A28",
    leafType: "oak"
  }
];

const ACTIVE_QUESTIONS = [
  {
    number: "01",
    title: "Algorithmic Uncertainty in Municipal Policy",
    question: "When automated property valuation models diverge by 5–15% across zip codes, how significantly does that variance skew the simulated equity and revenue outcomes of alternative tax regimes?"
  },
  {
    number: "02",
    title: "Causal Robustness in Observational Health Data",
    question: "How can semi-parametric doubly robust estimators be regularized effectively in small-to-moderate longitudinal cohorts without introducing finite-sample bias?"
  },
  {
    number: "03",
    title: "Distributed Clustering under Concept Drift",
    question: "How can stream-native architectures maintain dynamic cluster boundaries with bounded memory constraints when time-series energy signatures experience sudden operational shifts?"
  }
];

const METHODOLOGY_STACK = [
  {
    category: "Causal & Statistical Methods",
    items: [
      "Causal Directed Acyclic Graphs (DAGs)",
      "Double Machine Learning (DML)",
      "Propensity Score Weighting & Matching",
      "Survival Analysis (Cox PH, AFT)",
      "Generalized Linear Mixed Models (GLMM)",
      "Sensitivity & Perturbation Analysis"
    ]
  },
  {
    category: "Computational & Engineering Stack",
    items: [
      "R (tidyverse, fixest, causalweight, survival)",
      "Python (PyTorch, scikit-learn, statsmodels, SciPy)",
      "Apache Flink & Distributed Stream Processing",
      "SQL & Relational Database Design",
      "Reproducible Simulation Pipelines & Git"
    ]
  },
  {
    category: "Application Domains",
    items: [
      "Public Policy & Land Taxation Simulations",
      "Biostatistics & Epidemiological Cohorts",
      "Smart Meter & Energy Anomaly Detection",
      "E-commerce Search Relevance & Ranking"
    ]
  }
];

export default function ResearchInterestsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-24 md:space-y-32"
    >
      {/* Overview & Statement */}
      <section className="relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <MapleLeafIcon size={26} color="#C0392B" className="shrink-0" />
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F110B] tracking-tight">
              Research Interests
            </h1>
          </div>
          
          <div className="h-0.5 w-24 bg-gradient-to-r from-[#C0392B] via-[#D96B27] to-amber-300 mb-8" />

          <p className="text-xl md:text-2xl text-[#3A261C] leading-relaxed font-normal mb-8">
            My work lives at the intersection of <span className="font-semibold text-[#1F110B]">causal inference, applied statistics, and computational systems</span>. I am motivated by questions of algorithmic sensitivity — understanding how uncertainty propagates from statistical prediction models into high-stakes public policy, healthcare, and engineering decisions.
          </p>

          <p className="text-base md:text-lg text-[#5C3D2E] leading-relaxed font-normal">
            As a Graduate Research Assistant at Northeastern University pursuing an M.S. in Statistics (Biostatistics specialization), I combine rigorous mathematical foundations with modern computational tools to evaluate counterfactual policies, model observational health outcomes, and build scalable streaming algorithms.
          </p>
        </div>
      </section>

      {/* Core Research Pillars */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <OakLeafIcon size={24} color="#D96B27" className="shrink-0" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1F110B]">
            Core Research Pillars
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-orange-400/40 via-amber-300/30 to-transparent" />
        </div>

        <div className="grid gap-10">
          {RESEARCH_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.article 
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative p-8 md:p-10 rounded-[2rem] bg-white/85 backdrop-blur-sm border border-amber-900/10 hover:border-amber-400/50 hover:bg-white hover:shadow-xl hover:shadow-amber-950/5 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 justify-between items-start">
                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2.5 rounded-xl text-white shadow-sm"
                        style={{ backgroundColor: pillar.accentColor }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C4A28]">
                          Pillar {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-[#1F110B] group-hover:text-[#C0392B] transition-colors leading-snug">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-[#D96B27] font-medium italic">
                      "{pillar.tagline}"
                    </p>

                    <p className="text-base text-[#3A261C] leading-relaxed font-normal">
                      {pillar.description}
                    </p>

                    {/* Unboxed Metadata / Research Topics with subtle typographic separators */}
                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#6E5343] mb-2">
                        Key Areas of Inquiry
                      </p>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-[#5C3D2E]">
                        {pillar.topics.map((topic, tIdx) => (
                          <span key={topic} className="flex items-center gap-2">
                            <span className="font-medium text-[#2A1A12]">{topic}</span>
                            {tIdx < pillar.topics.length - 1 && (
                              <span aria-hidden="true" className="text-amber-500/60 font-bold">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Highlighted Publication Card if applicable */}
                  {pillar.publication && (
                    <div className="w-full lg:w-80 shrink-0 p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-[#2A1A12] space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#8C4A28]">
                        <span className="flex items-center gap-1.5">
                          <BookOpen size={14} className="text-[#C0392B]" />
                          Related Paper
                        </span>
                        <span>{pillar.publication.year}</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-[#1F110B] leading-snug">
                        {pillar.publication.title}
                      </h4>
                      <p className="text-xs text-[#6E5343] italic">
                        {pillar.publication.venue}
                      </p>
                      <a 
                        href={pillar.publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C0392B] hover:text-[#D96B27] transition-colors pt-1"
                      >
                        Read Paper <ArrowUpRight size={13} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Active Inquiry Questions */}
      <section className="p-8 sm:p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#2A1A12] to-[#3D2014] text-[#FCFAF6] shadow-xl shadow-amber-950/15 relative overflow-hidden">
        {/* Subtle decorative leaf watermark */}
        <div className="absolute right-4 -bottom-6 opacity-10 pointer-events-none text-white">
          <MapleLeafIcon size={240} color="currentColor" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-8">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-red-500/20 text-orange-300">
              <Sparkles size={18} />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Current Investigations
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Key Questions Guiding My Work
          </h2>

          <div className="space-y-6 pt-2">
            {ACTIVE_QUESTIONS.map((item) => (
              <div 
                key={item.number} 
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors"
              >
                <span className="font-serif text-xl font-bold text-amber-400 shrink-0 sm:pt-0.5">
                  {item.number}
                </span>
                <div className="space-y-1.5">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-white/90">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                    {item.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodological Toolkit & Computational Stack */}
      <section>
        <div className="flex items-center gap-3 mb-10">
          <GinkgoLeafIcon size={24} color="#E5A124" className="shrink-0" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1F110B]">
            Methodological Toolkit & Stack
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-400/40 via-red-300/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {METHODOLOGY_STACK.map((group) => (
            <div 
              key={group.category}
              className="p-7 rounded-[2rem] bg-white/80 backdrop-blur-sm border border-amber-900/10 space-y-4 hover:border-amber-400/50 hover:bg-white hover:shadow-lg hover:shadow-amber-950/5 transition-all"
            >
              <h3 className="font-serif text-lg font-bold text-[#1F110B] pb-2 border-b border-amber-900/10">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-[#4A3225] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Summary */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <MapleLeafIcon size={22} color="#C0392B" className="shrink-0" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1F110B]">
            Selected Research Outputs
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-red-400/40 via-amber-300/30 to-transparent" />
        </div>

        <div className="grid gap-6">
          <div className="p-8 rounded-[2rem] bg-white/85 border border-amber-900/10 hover:border-amber-400/50 hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C0392B] bg-red-50 border border-red-200/60 px-3 py-1 rounded-full w-fit">
                Pre-print · 2026
              </span>
              <span className="text-xs text-[#6E5343] font-medium">SSRN Electronic Journal</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F110B] mb-2 leading-snug">
              Does the Model Matter? A Sensitivity Analysis of Valuation Uncertainty in Land Value Tax Simulation
            </h3>
            <p className="text-sm text-[#5C3D2E] italic mb-4">Ethan Go</p>
            <p className="text-sm text-[#3A261C] leading-relaxed mb-6 font-normal">
              This paper trains several statistical algorithms to predict assessed values of properties in Cook County, performing a sensitivity analysis of shifting from a unified tax system to a land value system given the predictions of the model.
            </p>
            <a 
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6862558"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2A1A12] hover:text-[#C0392B] transition-colors"
            >
              View on SSRN <ExternalLink size={14} />
            </a>
          </div>

          <div className="p-8 rounded-[2rem] bg-white/85 border border-amber-900/10 hover:border-amber-400/50 hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D96B27] bg-orange-50 border border-orange-200/60 px-3 py-1 rounded-full w-fit">
                Conference Proceedings · 2020
              </span>
              <span className="text-xs text-[#6E5343] font-medium">ACM DEBS '20</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1F110B] mb-2 leading-snug">
              Grand Challenge: Anomaly Detection for NILM Task with Apache Flink
            </h3>
            <p className="text-sm text-[#5C3D2E] italic mb-4">Zongshun Zhang, Ethan Go</p>
            <p className="text-sm text-[#3A261C] leading-relaxed mb-6 font-normal">
              Our solution based on Apache Flink, a stream processing framework, and the DBSCAN density-based clustering algorithm for anomaly detection in high-frequency smart meter power consumption data.
            </p>
            <a 
              href="https://dl.acm.org/doi/10.1145/3401025.3401758"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2A1A12] hover:text-[#D96B27] transition-colors"
            >
              View on ACM Digital Library <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Collaboration Callout */}
      <section className="p-8 sm:p-10 rounded-[2.5rem] bg-amber-50/70 border border-amber-200/70 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-red-100/70 text-[#C0392B] mb-2">
            <Mail size={20} />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F110B]">
            Interested in Collaborating?
          </h2>
          <p className="text-sm sm:text-base text-[#5C3D2E] leading-relaxed font-normal">
            I am always eager to discuss interdisciplinary projects involving causal inference, biostatistics, public policy evaluations, or scalable anomaly detection systems.
          </p>
        </div>

        <div>
          <a
            href="mailto:ethango1997@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#2A1A12] to-[#452316] hover:from-[#C0392B] hover:to-[#D96B27] text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md shadow-orange-950/10 hover:scale-105"
          >
            <span>Get in touch via email</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
