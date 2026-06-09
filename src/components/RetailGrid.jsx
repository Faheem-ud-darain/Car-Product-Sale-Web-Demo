import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MapPin, CheckCircle, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RetailGrid({ selectedProduct }) {
  const [zipCode, setZipCode] = useState('48201'); // Detroit, MI (Automotive Center)
  const [selectedLocation, setSelectedLocation] = useState('Detroit, MI');

  const locations = [
    { name: 'Detroit, MI', zip: '48201' },
    { name: 'Miami, FL', zip: '33101' },
    { name: 'Los Angeles, CA', zip: '90001' },
    { name: 'Online Only', zip: '00000' }
  ];

  const handleLocationChange = (loc) => {
    setSelectedLocation(loc.name);
    setZipCode(loc.zip);
  };

  // Custom SVG Retailer Logo Helpers to keep design premium, monochrome & gold
  const renderRetailerLogo = (id) => {
    switch (id) {
      case 'amazon':
        return (
          <svg className="h-6 w-auto fill-current" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2 18c0 3.3-2.1 5.3-5.2 5.3-1.6 0-3.1-.6-4-1.8V23H1V5h4v6.8c.9-1.2 2.3-1.8 3.9-1.8 3.1 0 5.3 2 5.3 5.3v2.7zm-4-3c0-1.8-1-2.9-2.5-2.9-1.6 0-2.7 1.1-2.7 2.9v2.7c0 1.8 1.1 2.9 2.7 2.9 1.5 0 2.5-1.1 2.5-2.9v-2.7zM28.4 12v11h-4v-1c-1 1.2-2.3 1.8-4 1.8-3.3 0-5.4-2.1-5.4-5.4v-6.4h4v6.1c0 1.7 1 2.6 2.5 2.6 1.6 0 2.9-1.2 2.9-3v-5.7h4zM42.2 12v11h-4v-1.1c-1 1.2-2.3 1.9-3.9 1.9-3.3 0-5.5-2-5.5-5.3v-2.7c0-3.3 2.2-5.3 5.5-5.3 1.6 0 2.9.7 3.9 1.9V12h4zm-4 3c0-1.8-1.1-2.9-2.6-2.9-1.6 0-2.8 1.1-2.8 2.9v2.7c0 1.8 1.2 2.9 2.8 2.9 1.5 0 2.6-1.1 2.6-2.9v-2.7zM54.5 12h3v3.7c.9-1.2 2.1-1.7 3.5-1.7 2.8 0 4.5 1.6 4.5 4.5V23h-4v-4c0-1.5-.7-2.3-2-2.3-1.5 0-2.5 1.1-2.5 2.7V23h-4.5V12zM79 17.5c0 3.6-2.6 5.8-6.1 5.8-3.5 0-6.1-2.2-6.1-5.8v-2.7c0-3.6 2.6-5.8 6.1-5.8 3.5 0 6.1 2.2 6.1 5.8v2.7zm-4-2.7c0-2-1.1-3.1-2.1-3.1s-2.1 1.1-2.1 3.1v2.7c0 2 1.1 3.1 2.1 3.1s2.1-1.1 2.1-3.1v-2.7z" />
            <path d="M82.8 12h3.5v1.2c.8-1 1.9-1.6 3.1-1.6 2.5 0 3.7 1.5 3.7 4V23H89.6v-6.7c0-1.3-.5-2-1.5-2-1.3 0-2 .9-2 2.4V23H82.8V12z" />
            <path d="M6 26.5c16.3 3.6 36 5.5 56.7 5.5 14 0 28.5-.8 34.8-2.5.8-.2.8-.8.3-1.2-4.4-3.5-14.7-6.3-34.8-6.3-19.8 0-39.7 2.7-56.7 5-.6.1-.7.7-.3 1z" />
          </svg>
        );
      case 'walmart':
        return (
          <span className="text-lg font-black tracking-tighter uppercase flex items-center gap-1">
            <span>WALMART</span>
            <span className="text-[#D4AF37] font-normal text-sm">*</span>
          </span>
        );
      case 'autozone':
        return (
          <span className="text-lg font-black italic tracking-tight text-[#D4AF37] flex items-center">
            <span>AutoZone</span>
          </span>
        );
      case 'oreilly':
        return (
          <span className="text-base font-extrabold tracking-tight flex items-center gap-1">
            <span className="text-white">O'Reilly</span>
            <span className="text-[#D4AF37] text-xs font-semibold border border-[#D4AF37]/40 px-1 rounded">AUTO</span>
          </span>
        );
      case 'target':
        return (
          <span className="text-lg font-bold tracking-wider flex items-center gap-1.5">
            <span className="inline-block w-4 h-4 rounded-full border-4 border-red-500 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-red-500"></span>
            </span>
            <span>TARGET</span>
          </span>
        );
      case 'advance':
        return (
          <span className="text-sm font-black italic tracking-wide flex flex-col items-start leading-none">
            <span className="text-white">ADVANCE</span>
            <span className="text-[#D4AF37] text-[9px] font-bold tracking-widest">AUTO PARTS</span>
          </span>
        );
      default:
        return <span className="text-base font-bold uppercase">{id}</span>;
    }
  };

  return (
    <section id="retailers" className="py-20 lg:py-28 px-6 lg:px-16 bg-[#121214]/40 border-b border-white/[0.02] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Header: Shoppable Widget Config */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 lg:mb-16">
          <div className="text-left space-y-4 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">ONLINE & IN-STORE DIRECTORY</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
              Where to Purchase
            </h2>
            <p className="text-sm text-zinc-400">
              Pricing, availability, and fulfillment channels for <strong className="text-white">{selectedProduct.name.split(',')[0]}</strong>.
            </p>
          </div>

          {/* Location / Zip Simulator */}
          <div className="glass-panel-gold rounded-xl p-4 flex flex-wrap items-center gap-4 border border-[#D4AF37]/10 w-full lg:w-auto">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Simulated Location:</span>
            </div>
            
            {/* Quick Location Pills */}
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => {
                const isActive = selectedLocation === loc.name;
                return (
                  <button
                    key={loc.name}
                    onClick={() => handleLocationChange(loc)}
                    className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#D4AF37] text-black shadow-md' 
                        : 'bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] text-zinc-300'
                    }`}
                  >
                    {loc.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Responsive Retailer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProduct.retailers.map((retailer) => {
            const inStock = retailer.stock === "In Stock";
            // If location is "Online Only" and retailer is brick-and-mortar exclusive, show online delivery context
            const deliveryDesc = selectedLocation === "Online Only" 
              ? "Shipped to your door" 
              : (retailer.id === "amazon" ? "Free Prime Shipping" : "In-store pickup available");

            // Direct route to client's tracked retail endpoints using live campaign tracking properties
            const trackingParams = `utm_source=socialmedia&utm_medium=allmedia&utm_campaign=${selectedProduct.sourcePid}&gad_source=1&gad_campaignid=23862335495&gbraid=0AAAAADXtsK_QAvqBnblg_RcTY8SX2fwWt`;
            const trackedLink = retailer.link.includes('?') 
              ? `${retailer.link}&${trackingParams}` 
              : `${retailer.link}?${trackingParams}`;

            return (
              <motion.div
                key={retailer.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-panel hover:glass-panel-gold rounded-2xl p-6 flex flex-col justify-between h-[225px] transition-all duration-500 shadow-xl group border border-white/[0.03] hover:border-[#D4AF37]/25"
              >
                {/* Top Row: Logo & Pricing */}
                <div className="flex justify-between items-start">
                  <div className="text-zinc-300 group-hover:text-white transition-colors h-10 flex items-center">
                    {renderRetailerLogo(retailer.id)}
                  </div>
                  <div className="text-right">
                    <span className="block text-[8px] uppercase tracking-wider text-zinc-500 font-semibold">RETAIL PRICE</span>
                    <span className="text-xl font-bold text-white tracking-tight">{retailer.price}</span>
                  </div>
                </div>

                {/* Middle Row: Stock status & fulfillment */}
                <div className="flex items-center gap-6 py-4 border-y border-white/[0.02] my-2">
                  <div className="flex items-center gap-2">
                    {inStock ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-500 stroke-[2.5]" />
                    )}
                    <span className={`text-xs font-semibold ${inStock ? 'text-emerald-500' : 'text-amber-500'}`}>
                      {retailer.stock}
                    </span>
                  </div>
                  
                  <div className="text-[10px] text-zinc-500 flex items-center gap-1.5 font-medium">
                    <span className="w-1 h-1 rounded-full bg-zinc-600" />
                    <span>{deliveryDesc}</span>
                  </div>
                </div>

                {/* Bottom Row: Buy Button styled as a Premium Glass Block with spring hover physics */}
                <motion.a
                  href={trackedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.04, 
                    boxShadow: "0 0 25px rgba(212, 175, 55, 0.18)"
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className={`w-full flex items-center justify-between px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    inStock 
                      ? 'bg-white/[0.03] backdrop-blur-md border border-white/[0.08] hover:border-[#D4AF37]/60 text-white hover:text-[#D4AF37] hover:bg-[#D4AF37]/10' 
                      : 'bg-white/[0.01] border border-white/[0.02] text-zinc-600 cursor-not-allowed pointer-events-none'
                  }`}
                >
                  <span>{inStock ? "BUY FROM PARTNER" : "OUT OF STOCK"}</span>
                  {inStock && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                </motion.a>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2.5 text-zinc-500 text-[10px] tracking-widest uppercase font-semibold border border-white/[0.03] rounded-full px-5 py-2.5 bg-white/[0.01]">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Authorized shoppable platform &bull; Powered by MikMak data APIs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
