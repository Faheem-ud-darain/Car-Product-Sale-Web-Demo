import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-[#0B0B0C]/80 backdrop-blur-md border-b border-white/[0.03] px-6 py-4 lg:px-16 flex items-center justify-between"
    >
      <div className="flex items-center gap-12">
        {/* Official Meguiar's Script Logo */}
        <a href="#showcase" className="flex items-center">
          <img 
            src="https://img.static-swaven.com/v7/https%3A%2F%2Fcontent-nocache.static-swaven.com%2Fupload%2Fops%2F659c1b07ff450b0e526f3493%2FMeguiarsEncapsulatedScriptLogo_270x150_211a61d.png?width=200&org_if_sml=1&ci_url_encoded=1&force_format=webp,png" 
            alt="Meguiar's Logo" 
            className="h-10 lg:h-12 w-auto object-contain brightness-105"
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] text-[#9A9A9E]">
          <a href="#showcase" className="hover:text-[#D4AF37] transition-colors duration-300">SHOWCASE</a>
          <a href="#slider" className="hover:text-[#D4AF37] transition-colors duration-300">DRAG COMPARISON</a>
          <a href="#specs" className="hover:text-[#D4AF37] transition-colors duration-300">TECHNOLOGY</a>
          <a href="#retailers" className="hover:text-[#D4AF37] transition-colors duration-300">RETAILERS</a>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        {/* Certification badge */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] tracking-wider text-[#C5A059] font-medium border border-[#D4AF37]/20 px-3 py-1.5 rounded-full bg-[#D4AF37]/5">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>OFFICIAL RETAILER HUB</span>
        </div>

        {/* Call to action */}
        <a 
          href="#retailers" 
          className="group flex items-center gap-2 bg-gradient-to-r from-[#AA7C11] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C5A059] text-black font-bold text-xs uppercase px-5 py-2.5 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          <span>Buy Now</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.header>
  );
}
