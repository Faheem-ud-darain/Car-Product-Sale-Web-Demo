import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Snowflake, Sun, Droplets } from 'lucide-react';

export default function SpecsSection() {
  const cards = [
    {
      icon: <Droplets className="w-6 h-6 text-[#D4AF37]" />,
      title: "Hydrophobic Polymer Coating",
      desc: "Advanced SiO2 (Silicon Dioxide) and TiO2 nanotechnology creates a high contact-angle barrier. Water beads and sheets off instantly, taking dust and light surface grime with it to make future wash cycles incredibly easy.",
      techName: "SiO2 NANO-COAT"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
      title: "SMAT Micro-Abrasives",
      desc: "Super-Microscopic Abrasive Technology (SMAT) utilizes highly uniform abrasive particles. It cuts fast enough to erase deep scratches, water spots, and oxidation while leaving behind a swirl-free, mirror finish.",
      techName: "SMAT TECHNOLOGY"
    },
    {
      icon: <Sun className="w-6 h-6 text-[#D4AF37]" />,
      title: "Thermal & UV Radiation Shields",
      desc: "Proprietary polymer formulations bind tightly to standard clear coats and plastics. This blocks destructive UV-A and UV-B rays, preventing clear coat cracking, rubber browning, and headlights yellowing.",
      techName: "UV-BARRIER RESIN"
    }
  ];

  return (
    <section id="specs" className="py-20 lg:py-28 px-6 lg:px-16 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16 lg:mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">ENGINEERING AND FORMULATION</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Science of Automotive Perfection
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-[#121214]/60 border border-white/[0.04] hover:border-[#D4AF37]/20 rounded-2xl p-8 text-left flex flex-col justify-between h-[380px] hover:bg-[#1E1E22]/60 transition-all duration-300 group shadow-lg"
            >
              <div className="space-y-6">
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] group-hover:border-[#D4AF37]/20 flex items-center justify-center transition-colors">
                  {card.icon}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-bold text-white tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-zinc-400 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Tech tag */}
              <div className="text-[10px] tracking-[0.2em] font-semibold text-[#C5A059] border-t border-white/[0.03] pt-4 mt-6">
                {card.techName}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
