
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden selection:bg-blue-100">
      {/* High-Key Clean Background - Very Subtle Image */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] scale-110 bg-center bg-cover pointer-events-none"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1598449356475-b9f71db7d847?q=80&w=2000&auto=format&fit=crop)',
        }}
      ></div>
      
      {/* Soft Light Gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center -mt-10">
        <div className="reveal space-y-2 mb-6 w-full">
            <h2 className="text-blue-600 font-semibold text-sm md:text-lg tracking-tight uppercase">Modern Engine Pros</h2>
            <h1 className="apple-heading text-[48px] sm:text-7xl md:text-[110px] font-bold text-[#1d1d1f] tracking-tighter leading-[1.1] md:leading-[1.05] px-2">
                Precision.<br />Proven.
            </h1>
        </div>
        
        <p className="reveal text-lg md:text-2xl text-[#86868b] mb-10 max-w-2xl leading-relaxed font-normal px-4">
            Master automotive machining and engine components <br className="hidden md:block" />
            with <span className="text-[#1d1d1f] font-medium">unrivaled tolerances</span> since 1979.
        </p>
        
        {/* Adjusted buttons div with better spacing and z-index */}
        <div className="reveal flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center relative z-30 w-full sm:w-auto px-6">
          <a 
            href="#services" 
            className="w-full sm:w-auto text-center group bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:bg-blue-700 active:scale-95 shadow-md hover:shadow-lg"
          >
            Explore Services
          </a>
          <a 
            href="#contact" 
            className="group text-blue-600 font-semibold text-lg flex items-center justify-center hover:underline underline-offset-4 decoration-2 transition-all"
          >
            Request a Quote 
            <svg className="w-5 h-5 ml-1.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Non-absolute secondary info to prevent overlap on smaller screens */}
      <div className="reveal mt-20 relative z-20 flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 text-[#86868b] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold px-6 text-center">
          <span>AERA Member</span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span>Nationwide Shipping</span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span>Master Machinists</span>
      </div>
    </section>
  );
};

export default Hero;
