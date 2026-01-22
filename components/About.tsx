
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#f5f5f7]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="reveal lg:w-1/2">
            <div className="rounded-[48px] overflow-hidden shadow-2xl bg-white">
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop" 
                alt="Modern Engine Pros Heritage Workshop" 
                className="w-full aspect-square object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>

          <div className="lg:w-1/2 space-y-10">
            <div className="reveal">
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">Our Heritage</span>
              <h2 className="apple-heading text-5xl md:text-7xl font-bold text-black mb-8">Precision built.<br />Performance proven.</h2>
              <p className="text-xl text-black/60 leading-relaxed">
                Modern Engine Pros is a premier automotive machine shop and engine builder. We specialize in bringing professional-grade engineering to every project, whether it's a daily driver or a high-performance racing machine.
              </p>
            </div>
            
            <div className="reveal p-8 bg-white rounded-[32px] border border-black/5 shadow-sm">
              <p className="text-lg text-black font-medium leading-relaxed italic">
                "As active members of the AERA Engine Builders Association, we utilize factory specifications and technical data to ensure every component exceeds OEM standards."
              </p>
            </div>

            <div className="reveal grid grid-cols-2 gap-8 pt-6">
              <div>
                <h5 className="text-black font-bold text-sm uppercase tracking-widest mb-4">Capability</h5>
                <ul className="space-y-3 text-black/50 font-medium text-sm">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>Domestic & Import</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>Performance Racing</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>Marine Engines</li>
                </ul>
              </div>
              <div>
                <h5 className="text-black font-bold text-sm uppercase tracking-widest mb-4">Service Reach</h5>
                <ul className="space-y-3 text-black/50 font-medium text-sm">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mr-2"></span>Nationwide Shipping</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mr-2"></span>Technical Support</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mr-2"></span>Wholesale Program</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
