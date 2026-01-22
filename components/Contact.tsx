
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-24">
          <div className="reveal lg:w-1/2">
            <h2 className="apple-heading text-5xl md:text-7xl font-bold text-[#1d1d1f] mb-8">Get advice from the pros.</h2>
            <p className="text-xl text-[#86868b] mb-16 leading-relaxed">
              Have questions about a specific part or need a quote for machine shop services? Our expert technical staff is ready to assist.
            </p>
            
            <div className="space-y-12">
              <div className="group">
                <span className="text-[#86868b] font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Sales & Tech Line</span>
                <p className="text-3xl font-semibold text-[#1d1d1f] group-hover:text-blue-600 transition-colors">800-555-ENGN</p>
              </div>

              <div className="group">
                <span className="text-[#86868b] font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Email Inquiry</span>
                <p className="text-3xl font-semibold text-[#1d1d1f] group-hover:text-blue-600 transition-colors">sales@modernenginepros.com</p>
              </div>

              <div className="pt-10 border-t border-black/5">
                <h5 className="text-[#1d1d1f] font-bold text-sm mb-4">Shop Hours</h5>
                <p className="text-[#86868b] font-medium">Monday – Friday: 8:30am - 5:00pm</p>
                <p className="text-[#86868b]/60 text-xs mt-4 italic">* Appointments required for machine services.</p>
              </div>
            </div>
          </div>

          <div className="reveal lg:w-1/2 bg-[#f5f5f7] p-10 md:p-14 rounded-[40px] border border-black/5">
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-10 tracking-tight">Technical Quote Request</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#86868b] uppercase tracking-widest pl-2">Name</label>
                  <input type="text" className="w-full bg-white border-0 ring-1 ring-black/5 rounded-2xl p-4 text-[#1d1d1f] focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#86868b] uppercase tracking-widest pl-2">Email</label>
                  <input type="email" className="w-full bg-white border-0 ring-1 ring-black/5 rounded-2xl p-4 text-[#1d1d1f] focus:ring-2 focus:ring-blue-600 transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#86868b] uppercase tracking-widest pl-2">Engine Application</label>
                <input type="text" className="w-full bg-white border-0 ring-1 ring-black/5 rounded-2xl p-4 text-[#1d1d1f] focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="e.g. LS3, 5.0L Coyote" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-[#86868b] uppercase tracking-widest pl-2">Requirements</label>
                <textarea rows={4} className="w-full bg-white border-0 ring-1 ring-black/5 rounded-2xl p-4 text-[#1d1d1f] focus:ring-2 focus:ring-blue-600 transition-all outline-none resize-none"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl text-lg transition-all hover:bg-blue-700 active:scale-95 shadow-xl shadow-blue-500/20">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
