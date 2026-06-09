import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscription success! Welcome to Meguiar's Detailing Elite.");
  };

  return (
    <footer className="bg-[#050505] border-t border-white/[0.03] pt-16 pb-12 px-6 lg:px-16 text-[#9A9A9E]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/[0.03]">
        
        {/* Left: Brand statement & social */}
        <div className="lg:col-span-5 text-left space-y-6">
          <img 
            src="https://img.static-swaven.com/v7/https%3A%2F%2Fcontent-nocache.static-swaven.com%2Fupload%2Fops%2F659c1b07ff450b0e526f3493%2FMeguiarsEncapsulatedScriptLogo_270x150_211a61d.png?width=200&org_if_sml=1&ci_url_encoded=1&force_format=webp,png" 
            alt="Meguiar's Logo" 
            className="h-10 w-auto object-contain brightness-95"
          />
          <p className="text-xs lg:text-sm text-zinc-400 max-w-sm leading-relaxed">
            For over 120 years, Meguiar's has provided premium formulations to detailing enthusiasts and professionals worldwide. Crafting the perfect shine on every surface.
          </p>
          <div className="flex gap-4">
            {/* Native Inline SVG for Instagram */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/[0.02] hover:bg-[#D4AF37]/10 border border-white/[0.05] hover:border-[#D4AF37]/35 flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            {/* Native Inline SVG for Youtube */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/[0.02] hover:bg-[#D4AF37]/10 border border-white/[0.05] hover:border-[#D4AF37]/35 flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                <path d="m10 15 5-3-5-3z"/>
              </svg>
            </a>
            {/* Native Inline SVG for Facebook */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/[0.02] hover:bg-[#D4AF37]/10 border border-white/[0.05] hover:border-[#D4AF37]/35 flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="lg:col-span-3 text-left space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-white font-bold">DIRECTORY</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#showcase" className="hover:text-[#D4AF37] transition-colors">Product Showcase</a></li>
            <li><a href="#slider" className="hover:text-[#D4AF37] transition-colors">Before/After Comparison</a></li>
            <li><a href="#specs" className="hover:text-[#D4AF37] transition-colors">Science & Tech</a></li>
            <li><a href="#retailers" className="hover:text-[#D4AF37] transition-colors">Authorized Retailers</a></li>
          </ul>
        </div>

        {/* Right: Premium Newsletter */}
        <div className="lg:col-span-4 text-left space-y-4">
          <h4 className="text-xs uppercase tracking-[0.25em] text-white font-bold">JOIN THE DETAILING CIRCLE</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Subscribe to receive expert detailing walkthroughs, new product releases, and exclusive distributor promotions.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full pt-2">
            <div className="relative flex-grow">
              <input 
                type="email" 
                placeholder="Enter email address" 
                required
                className="w-full bg-[#121214] border border-white/[0.05] focus:border-[#D4AF37]/45 rounded px-3 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition-colors"
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            </div>
            <button 
              type="submit" 
              className="bg-[#D4AF37] hover:bg-[#C5A059] text-black font-extrabold text-xs px-4 rounded transition-colors flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 text-[10px] text-zinc-500 font-medium">
        <div>
          &copy; {new Date().getFullYear()} Meguiar's, Inc. All rights reserved. &bull; Rebuilt for MikMak Platform.
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
