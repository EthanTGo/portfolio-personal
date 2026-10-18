import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { MapleLeafIcon } from "./AutumnLeaves";

export default function ResearchInterestsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto space-y-12"
    >
      {/* Single Research Interests Section with Three Subsections */}
      <section className="space-y-10 text-[#3D281E] font-normal leading-relaxed pb-16">
        <div className="flex items-center gap-3">
          <MapleLeafIcon size={24} color="#C0392B" className="shrink-0" />
          <h2 className="font-serif text-3xl font-bold text-fall-ink">Research Interests</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-red-500/40 via-orange-400/30 to-amber-300/10" />
        </div>

        {/* Area 1: Causal Inference & Policy Simulation */}
        <div className="space-y-4">
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
            , I trained several statistical algorithms to predict assessed property values in Cook County and analyzed what happens when shifting from a unified tax system to a land value tax system. The goal was to evaluate how sensitive economic and policy simulations are to the variance and specifications of underlying machine learning models.
          </p>
        </div>

        {/* Area 2: Biostatistics & Health Data */}
        <div className="space-y-4 pt-4">
          <h3 className="font-serif text-2xl font-bold text-[#1F110B]">
            Biostatistics & Health Data
          </h3>
          <p className="text-lg leading-relaxed text-[#3D281E]">
            Through my graduate studies at Northeastern University, I am deeply interested in applying statistics to public health and biomedical data. I am drawn to survival analysis, longitudinal observational studies, and causal estimation methods that account for unmeasured confounding and treatment-selection bias, aiming to produce dependable evidence from complex clinical records.
          </p>
        </div>

        {/* Area 3: Large-Scale Systems & Anomaly Detection */}
        <div className="space-y-4 pt-4">
          <h3 className="font-serif text-2xl font-bold text-[#1F110B]">
            Large-Scale Systems & Anomaly Detection
          </h3>
          <p className="text-lg leading-relaxed text-[#3D281E]">
            With a background in computer science and software engineering at Bloomreach, I also enjoy building systems capable of processing high-velocity continuous data. In an earlier paper for the ACM DEBS Grand Challenge (
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
    </motion.div>
  );
}
