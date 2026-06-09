import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { products } from '../data/products';

export default function ProductShowcase({ selectedProduct, onSelectProduct, isAutoplay, onToggleAutoplay }) {
  return (
    <section id="showcase" className="relative w-full py-16 lg:py-24 px-6 lg:px-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-gold-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] rounded-full bg-gold-accent/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Detail & Bottle Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[550px]">
          
          {/* Left: Product Editorial details */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Tech Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.02] border border-white/[0.05] text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                  <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{selectedProduct.technology}</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-2">
                  <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    {selectedProduct.name.split(',')[0]}
                  </h1>
                  <p className="text-lg lg:text-xl text-[#C5A059] font-medium tracking-wide">
                    {selectedProduct.subtitle}
                  </p>
                </div>

                {/* Subtitle Highlight */}
                <div className="text-sm border-l-2 border-[#D4AF37] pl-4 py-1 text-zinc-300 italic font-medium">
                  "{selectedProduct.highlight}"
                </div>

                {/* Description */}
                <p className="text-[#9A9A9E] text-base leading-relaxed max-w-xl">
                  {selectedProduct.description}
                </p>

                {/* Feature Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {selectedProduct.features.map((feat, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-xs text-zinc-300 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Shoppable CTA */}
                <div className="flex flex-wrap items-center gap-6 pt-6">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">SUGGESTED RETAIL</span>
                    <span className="text-3xl font-black text-white">{selectedProduct.price}</span>
                  </div>
                  <a
                    href="#retailers"
                    className="flex items-center gap-2 bg-[#1E1E22] hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-white hover:text-black font-bold text-xs uppercase px-8 py-4 rounded-md transition-all duration-300 shadow-lg"
                  >
                    <span>Where to Buy</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Large 3D floating bottle image */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 relative h-[400px] lg:h-[550px]">
            {/* Elegant Luxury Gold Backdrop reflection */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-tr from-[#AA7C11]/15 to-[#D4AF37]/5 blur-3xl opacity-80" />
              <div className="absolute w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] rounded-full border border-[#D4AF37]/5 scale-75 animate-pulse" />
              <div className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full border border-[#D4AF37]/3 scale-95 opacity-50" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                {/* Floating motion effect on mouse hover */}
                <motion.div 
                  whileHover={{ 
                    y: -12, 
                    rotate: 2, 
                    scale: 1.05,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="w-full h-full max-h-[350px] lg:max-h-[500px] flex items-center justify-center"
                >
                  <img
                    src={selectedProduct.imgUrl}
                    alt={selectedProduct.name}
                    className="w-auto h-full max-h-[340px] lg:max-h-[480px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter brightness-[1.03]"
                  />
                </motion.div>
                
                {/* Floor Shadow Reflection */}
                <div className="absolute bottom-2 lg:bottom-6 left-1/2 -translate-x-1/2 w-48 h-5 bg-black/60 rounded-full blur-xl pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Product Selection Carousel Strip */}
        <div className="mt-16 lg:mt-24 border-t border-white/[0.03] pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block mb-1">MEGUIAR'S PROFESSIONALS LINE</span>
              <h2 className="text-xl lg:text-2xl font-semibold text-white">Select Product to Configure Checkout</h2>
            </div>
            
            {/* Dynamic Slideshow Loop Controller */}
            <button
              onClick={onToggleAutoplay}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                isAutoplay 
                  ? 'bg-emerald-950/20 border-emerald-500/35 text-emerald-400 hover:bg-emerald-950/40' 
                  : 'bg-[#1E1E22] border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${isAutoplay ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-500'}`} />
              <span>{isAutoplay ? 'Autoplay Loop: Active' : 'Autoplay Loop: Paused'}</span>
            </button>
          </div>

          {/* Horizontal Drag/Scroll Area */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin px-2 justify-start lg:justify-center">
            {products.map((p) => {
              const isSelected = p.id === selectedProduct.id;
              return (
                <button
                  key={p.id}
                  onClick={() => onSelectProduct(p)}
                  className={`flex-none group relative w-36 h-48 rounded-xl p-3 flex flex-col justify-between items-center transition-all duration-300 outline-none ${
                    isSelected 
                      ? 'bg-[#1E1E22] border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.12)]' 
                      : 'bg-[#121214]/60 border border-white/[0.04] hover:bg-[#1E1E22]/60 hover:border-white/[0.1]'
                  }`}
                >
                  {/* Select status ring */}
                  <div className={`absolute top-2 right-2 w-2 h-2 rounded-full transition-colors ${
                    isSelected ? 'bg-[#D4AF37]' : 'bg-transparent border border-zinc-600'
                  }`} />

                  {/* Product Thumbnail */}
                  <div className="w-full h-24 flex items-center justify-center pt-2">
                    <img 
                      src={p.imgUrl} 
                      alt={p.name} 
                      className={`h-full w-auto object-contain transition-transform duration-300 ${
                        isSelected ? 'scale-110' : 'group-hover:scale-105 opacity-80 group-hover:opacity-100'
                      }`}
                    />
                  </div>

                  {/* Product Mini Name */}
                  <div className="w-full text-center">
                    <p className={`text-[10px] font-bold line-clamp-2 transition-colors ${
                      isSelected ? 'text-[#D4AF37]' : 'text-zinc-400 group-hover:text-white'
                    }`}>
                      {p.name.replace("Meguiar's ", "").split(',')[0]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
