import { motion } from "motion/react";
import { ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import { MapleLeafIcon, OakLeafIcon, GinkgoLeafIcon } from "./AutumnLeaves";

export default function ResearchInterestsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto space-y-24 md:space-y-32"
    >
      {/* Overview Block */}
      <section className="space-y-8 text-[#3D281E] font-normal leading-relaxed">
        <div className="flex items-center gap-3">
          <MapleLeafIcon size={24} color="#C0392B" className="shrink-0" />
          <h2 className="font-serif text-3xl font-bold text-fall-ink">My research focus</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-red-500/40 via-orange-400/30 to-amber-300/10" />
        </div>

        <p className="text-lg leading-relaxed text-[#3D281E]">
          I am currently a Graduate Research Assistant at Northeastern University, where I am pursuing an M.S. in Statistics with a concentration in Biostatistics. My academic journey combines computer science, data analytics, and statistics to address real-world questions where data and decision-making meet.
        </p>

        <p className="text-lg leading-relaxed text-[#3D281E]">
          Broadly speaking, my research interests center on <strong className="font-semibold text-fall-ink">causal inference</strong>, <strong className="font-semibold text-fall-ink">applied statistics</strong>, and <strong className="font-semibold text-fall-ink">understanding uncertainty in prediction models</strong>. Rather than focusing solely on raw prediction accuracy, I care about understanding <em>why</em> phenomena occur, whether an intervention truly caused an observed effect, and how dependable automated models are when used in high-stakes public decisions.
        </p>

        <p className="text-lg leading-relaxed text-[#3D281E]">
          Having spent several years as a software engineer at Bloomreach working on search quality and distributed data infrastructure, I also enjoy working at the intersection where statistical methods meet scalable computational systems.
        </p>
      </section>

      {/* What I'm Exploring Section */}
      <section className="space-y-8 text-[#3D281E] font-normal leading-relaxed">
        <div className="flex items-center gap-3 mb-4">
          <OakLeafIcon size={24} color="#D96B27" className="shrink-0" />
          <h2 className="font-serif text-3xl font-bold text-fall-ink">What I'm exploring</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-orange-500/40 via-amber-400/30 to-red-400/10" />
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#1F110B]">
            Causal Inference & Policy Simulation
          </h3>
          <p className="text-lg leading-relaxed text-[#3D281E]">
            A core part of my recent research examines how algorithmic valuation uncertainty affects policy simulations. In my working paper,{" "}
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6862558"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 hover:text-orange-700 underline decoration-amber-400 font-medium inline-flex items-center gap-1 transition-colors"
            >
              Does the Model Matter? A Sensitivity Analysis of Valuation Uncertainty in Land Value Tax Simulation
              <ExternalLink size={14} className="inline shrink-0" />
            </a>
            , I trained several statistical algorithms to predict assessed property values in Cook County and analyzed what happens when shifting from a unified tax system to a land value tax system. The goal was to see how sensitive economic and policy simulations are to the variance and specifications of the underlying machine learning models.
          </p>
        </div>

        <div className="space-y-6 pt-4">
          <h3 className="font-serif text-2xl font-bold text-[#1F110B]">
            Biostatistics & Health Data
          </h3>
          <p className="text-lg leading-relaxed text-[#3D281E]">
            Through my studies at Northeastern, I am deeply interested in applying statistics to public health and biomedical data. I am drawn to survival analysis, longitudinal observational data, and causal estimation methods that account for unmeasured confounding and treatment-selection bias, aiming to produce dependable evidence from complex clinical records.
          </p>
        </div>

        <div className="space-y-6 pt-4">
          <h3 className="font-serif text-2xl font-bold text-[#1F110B]">
            Large-Scale Systems & Anomaly Detection
          </h3>
          <p className="text-lg leading-relaxed text-[#3D281E]">
            With a background in computer science, I also enjoy building systems capable of processing high-velocity continuous data. In an earlier paper for the ACM DEBS Grand Challenge (
            <a
              href="https://dl.acm.org/doi/10.1145/3401025.3401758"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 hover:text-orange-700 underline decoration-amber-400 font-medium inline-flex items-center gap-1 transition-colors"
            >
              Anomaly Detection for NILM Task with Apache Flink
              <ExternalLink size={14} className="inline shrink-0" />
            </a>
            ), my co-author and I designed a streaming architecture using Apache Flink and density-based clustering (DBSCAN) to identify anomalies in high-frequency smart meter energy data in real time.
          </p>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="space-y-8 text-[#3D281E] font-normal leading-relaxed pb-16">
        <div className="flex items-center gap-3 mb-4">
          <GinkgoLeafIcon size={24} color="#E5A124" className="shrink-0" />
          <h2 className="font-serif text-3xl font-bold text-fall-ink">Collaboration</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-500/40 via-red-400/30 to-transparent" />
        </div>

        <p className="text-lg leading-relaxed text-[#3D281E]">
          I am always excited to discuss research ideas, causal inference methodologies, or potential collaborations in applied statistics, policy analysis, and biostatistics.
        </p>

        <p className="text-lg leading-relaxed text-[#3D281E]">
          If you'd like to talk, please feel free to email me directly at{" "}
          <a
            href="mailto:ethango1997@gmail.com"
            className="text-red-700 hover:text-orange-700 underline decoration-amber-400 font-medium transition-colors"
          >
            ethango1997@gmail.com
          </a>
          , or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/ethanthego/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 hover:text-orange-700 underline decoration-amber-400 font-medium transition-colors"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/EthanTGo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 hover:text-orange-700 underline decoration-amber-400 font-medium transition-colors"
          >
            GitHub
          </a>
          .
        </p>

        <div className="flex gap-4 pt-2">
          <a
            href="mailto:ethango1997@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A1A12] hover:bg-[#C0392B] text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
          >
            <Mail size={15} />
            <span>Send Email</span>
          </a>
          <a
            href="https://github.com/EthanTGo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-amber-900/15 bg-white rounded-full text-[#2A1A12] hover:text-[#C0392B] hover:border-[#C0392B] transition-all shadow-2xs"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ethanthego/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-amber-900/15 bg-white rounded-full text-[#2A1A12] hover:text-[#D96B27] hover:border-[#D96B27] transition-all shadow-2xs"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </section>
    </motion.div>
  );
}
