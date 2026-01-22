
import React from 'react';

const StoreLinks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Cylinder Head Store - Clean White Card */}
          <div className="reveal group relative bg-[#f5f5f7] rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[420px] md:min-h-[500px] shadow-sm hover:shadow-xl transition-all duration-700 border border-black/5">
            <div className="relative z-10">
              <span className="text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4 block">Storefront 01</span>
              <h3 className="apple-heading text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-4 md:mb-6">Cylinder Heads</h3>
              <p className="text-base md:text-lg text-[#86868b] max-w-[240px] md:max-w-xs leading-snug">
                Extensive inventory of new and remanufactured heads for automotive and marine engines.
              </p>
            </div>
            <div className="relative z-10 space-y-6">
              <a 
                href="https://CylinderHeadStore.com" 
                target="_blank" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:bg-blue-700 active:scale-95 w-full sm:w-auto"
              >
                Shop Now
              </a>
              <div className="flex space-x-4 text-[10px] font-bold text-black/30 uppercase tracking-tighter">
                <span>NEW</span>
                <span>•</span>
                <span>REMAN</span>
                <span>•</span>
                <span>IN STOCK</span>
              </div>
            </div>
            {/* Visual Decoration - Adjusted for mobile */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full group-hover:scale-110 transition-transform duration-1000 flex items-center justify-center pointer-events-none">
                 <svg className="w-24 h-24 md:w-32 md:h-32 text-blue-600/5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
          </div>

          {/* MEParts Store - Sophisticated Light Card */}
          <div className="reveal group relative bg-white rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[420px] md:min-h-[500px] shadow-sm hover:shadow-xl transition-all duration-700 border border-black/5">
            <div className="relative z-10">
              <span className="text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4 block">Storefront 02</span>
              <h3 className="apple-heading text-3xl md:text-4xl font-bold text-[#1d1d1f] mb-4 md:mb-6">Engine Parts</h3>
              <p className="text-base md:text-lg text-[#86868b] max-w-[240px] md:max-w-xs leading-snug">
                Professional rebuild kits, gaskets, pistons, and performance internal upgrades.
              </p>
            </div>
            <div className="relative z-10 space-y-6">
              <a 
                href="https://MEParts.com" 
                target="_blank" 
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-semibold transition-all hover:bg-zinc-800 active:scale-95 w-full sm:w-auto"
              >
                Explore Parts
              </a>
              <div className="flex space-x-4 text-[10px] font-bold text-black/30 uppercase tracking-tighter">
                <span>KITS</span>
                <span>•</span>
                <span>GASKETS</span>
                <span>•</span>
                <span>PISTONS</span>
              </div>
            </div>
            {/* Visual Decoration - Adjusted for mobile */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 bg-[#f5f5f7] rounded-full group-hover:scale-110 transition-transform duration-1000 flex items-center justify-center pointer-events-none">
                 <svg className="w-24 h-24 md:w-32 md:h-32 text-black/5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLinks;
