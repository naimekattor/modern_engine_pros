
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] text-black/60 py-24 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="flex items-center font-black text-xl tracking-tighter text-black">
                <span>M</span>
                <span className="text-blue-600 mx-[1px]">T</span>
                <span>E</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-black">PROS</span>
            </div>
            <p className="text-[13px] leading-relaxed mb-8 font-medium">
              The premier choice for engine machining and performance parts since 1979. Dedicated to technical precision and professional service.
            </p>
          </div>

          <div>
            <h4 className="text-black font-bold text-[13px] tracking-tight mb-6">Navigation</h4>
            <ul className="space-y-4 text-[13px] font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-bold text-[13px] tracking-tight mb-6">Online Stores</h4>
            <ul className="space-y-4 text-[13px] font-medium">
              <li><a href="https://CylinderHeadStore.com" target="_blank" className="hover:text-blue-600 transition-colors">CylinderHeadStore.com</a></li>
              <li><a href="https://MEParts.com" target="_blank" className="hover:text-blue-600 transition-colors">MEParts.com</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Wholesale Account</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-bold text-[13px] tracking-tight mb-6">Affiliations</h4>
            <div className="bg-white p-6 rounded-2xl border border-black/5">
              <p className="text-[11px] uppercase font-bold text-blue-600 mb-2">AERA Member</p>
              <p className="text-[12px] text-black/70 font-medium">Proud participant in the Engine Builders Association network.</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[12px] font-medium text-black/40">
          <p>© {new Date().getFullYear()} Modern Engine Pros LLC.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Sale</a>
            <a href="#" className="hover:text-black">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
