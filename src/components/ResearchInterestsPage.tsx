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
            Causal Inference in settings where assumptions are violated.
          </h3>
          <p className="text-lg leading-relaxed text-[#3D281E]">
          My main research interest is working with areas of causal inference in which the assumptions may be violated.
          </p>
        </div>

        {/* Area 2: Causal Inference */}
        <div className="space-y-4 pt-4">
          <h3 className="font-serif text-2xl font-bold text-[#1F110B]">
            Managing and Solutions to Missing Data
          </h3>
          <p className="text-lg leading-relaxed text-[#3D281E]">
             
          </p>
        </div>

        {/* Area 3: ML + Causal Inference */}
        <div className="space-y-4 pt-4">
          <h3 className="font-serif text-2xl font-bold text-[#1F110B]">
            Other interests: longitudinal data analysis, survival analysis, causal machine learning, and mediation analysis. 
          </h3>
          <p className="text-lg leading-relaxed text-[#3D281E]">
          </p>
        </div>
      </section>
    </motion.div>
  );
}
