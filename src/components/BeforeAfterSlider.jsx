import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronsLeftRight, Sparkles, ShieldAlert } from 'lucide-react';
import luxuryCarImg from '../assets/luxury_car.png';

export default function BeforeAfterSlider({ selectedProduct }) {
  const [sliderPos, setSliderPos] = useState(50);

  // Determine copy text based on active product type
  const isCorrector = selectedProduct.name.toLowerCase().includes('compound') || 
                      selectedProduct.name.toLowerCase().includes('scratch') || 
                      selectedProduct.name.toLowerCase().includes('plastx') || 
                      selectedProduct.name.toLowerCase().includes('headlight');

  const beforeLabel = isCorrector ? "Swirl Marks & Oxidation" : "Road Grime & Dull Paint";
  const afterLabel = isCorrector ? "Meguiar's Mirror Correction" : "Meguiar's Showroom Shine";
  const titleText = isCorrector ? "Ultimate Paint Restoration" : "High-Gloss Reflection Simulator";
  const descText = isCorrector 
    ? "Drag the slider to see how Meguiar's advanced micro-abrasive technology cuts through paint defects without scratching the clear coat." 
    : "Drag the slider to see how Meguiar's luxury conditioning oils and polymer sealants build an intense wet-look reflection.";

  return (
    <section id="slider" className="py-20 lg:py-28 px-6 lg:px-16 bg-[#050505] border-y border-white/[0.02] relative overflow-hidden">
      {/* Editorial Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Editorial Copy */}
        <div className="lg:col-span-5 text-left space-y-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">DRAG TO COMPARE</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {titleText}
          </h2>
          <p className="text-sm lg:text-base text-zinc-400 leading-relaxed">
            {descText}
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <div className="p-2 rounded bg-red-950/20 border border-red-900/30 text-red-400">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-semibold text-white">Before Treatment</span>
                <span className="text-zinc-500">{beforeLabel}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <div className="p-2 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-semibold text-white">After Treatment</span>
                <span className="text-[#C5A059]">{afterLabel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Slider Widget */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-xl aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none">
            
            {/* 1. AFTER STATE (Base Layer - Clean, reflective) */}
            <div className="absolute inset-0 w-full h-full bg-[#121214]">
              <img 
                src={luxuryCarImg} 
                alt="Meguiar's Clean Paint" 
                className="w-full h-full object-cover"
                draggable="false"
              />
              {/* After label pill */}
              <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-[#D4AF37]/30 text-[10px] text-[#D4AF37] font-bold tracking-wider uppercase">
                {afterLabel}
              </div>
            </div>

            {/* 2. BEFORE STATE (Top Layer - Filtered, swirly, dull) */}
            <div 
              className="absolute inset-0 h-full overflow-hidden z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="w-[100vw] h-full max-w-xl aspect-[16/10] relative">
                <img 
                  src={luxuryCarImg} 
                  alt="Dull Paint" 
                  className="w-full h-full object-cover filter saturate-[0.35] brightness-[0.75] contrast-[0.9] blur-[0.4px]"
                  style={{ width: '100%', height: '100%' }}
                  draggable="false"
                />
                
                {/* Simulated Paint Defect Scratch Texture Overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.12] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #fff 10%, transparent 11%), 
                                      radial-gradient(circle, #fff 5%, transparent 6%)`,
                    backgroundSize: '24px 24px, 40px 40px',
                    backgroundPosition: '0 0, 12px 12px'
                  }}
                />
                
                {/* Swirl Mark Circle Glare (automotive defect look) */}
                <div className="absolute top-[30%] left-[40%] w-32 h-32 rounded-full bg-white/10 blur-xl mix-blend-overlay pointer-events-none" />

                {/* Before label pill */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] text-zinc-400 font-bold tracking-wider uppercase whitespace-nowrap">
                  {beforeLabel}
                </div>
              </div>
            </div>

            {/* 3. SLIDER CONTROL (Invisible Range Input on top) */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />

            {/* 4. SLIDER VISUAL HANDLE */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#AA7C11] via-[#D4AF37] to-[#AA7C11] z-20 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.4)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-2xl">
                <ChevronsLeftRight className="w-5 h-5" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
