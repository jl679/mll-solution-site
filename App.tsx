
import React from 'react';
import Hero from './components/Hero';
import AIConsultant from './components/AIConsultant';
import FloatingAI from './components/FloatingAI';
import { Briefcase, Building2, LayoutPanelLeft, Globe2 } from 'lucide-react';

// For Squarespace, we remove the internal Navbar and Footer 
// because Squarespace provides them globally.
const App: React.FC = () => {
  return (
    <div className="mll-embed-container">
      {/* 
        This is the "Full Site" version. 
        In Squarespace, you would usually put this in a single "Code Block" on your homepage.
      */}
      <Hero onExplore={() => {
        const servicesSection = document.getElementById('mll-services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
      }} />

      <section id="mll-services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Interactive Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">High-performance solutions integrated directly into your workflow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Supply Chain", icon: <LayoutPanelLeft />, desc: "Real-time optimization of global material flows." },
              { title: "Strategic Advisory", icon: <Briefcase />, desc: "Data-backed consulting for market expansion." },
              { title: "Digital Systems", icon: <Globe2 />, desc: "Cloud-native infrastructure and security." },
              { title: "Fleet Logistics", icon: <Building2 />, desc: "Smart tracking and transport efficiency." },
            ].map((s, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all cursor-default">
                <div className="text-blue-600 mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white rounded-[3rem] mx-4 my-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Instant Consulting?</h2>
          <p className="text-blue-100 mb-8">Our AI Advisor is trained on MLL methodologies to help you right now.</p>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl text-slate-900">
            <AIConsultant />
          </div>
        </div>
      </section>

      {/* 
        The Persistent Assistant: 
        This will stay in the bottom right corner of your Squarespace site.
      */}
      <FloatingAI />
    </div>
  );
};

export default App;
