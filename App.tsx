
import React from 'react';
import Hero from './components/Hero';
import AIConsultant from './components/AIConsultant';
import FloatingAI from './components/FloatingAI';
import { Briefcase, Building2, LayoutPanelLeft, Globe2, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const scrollToServices = () => {
    const section = document.getElementById('mll-services');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero onExplore={scrollToServices} />

      <section id="mll-services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Core Competencies</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">World-Class Logistics Solutions</h3>
              <p className="text-lg text-slate-600">We don't just move items; we engineer the global flow of commerce through intelligence and precision.</p>
            </div>
            <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
              View All Services <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Supply Chain", 
                icon: <LayoutPanelLeft className="w-8 h-8" />, 
                desc: "End-to-end visibility and resilience for complex global networks.",
                color: "bg-blue-50 text-blue-600"
              },
              { 
                title: "Strategic Advisory", 
                icon: <Briefcase className="w-8 h-8" />, 
                desc: "Market entry strategies and operational efficiency consulting.",
                color: "bg-indigo-50 text-indigo-600"
              },
              { 
                title: "Digital Systems", 
                icon: <Globe2 className="w-8 h-8" />, 
                desc: "Enterprise resource planning and custom tech infrastructure.",
                color: "bg-slate-900 text-white"
              },
              { 
                title: "Fleet Logistics", 
                icon: <Building2 className="w-8 h-8" />, 
                desc: "Intelligent dispatching and sustainable transport management.",
                color: "bg-blue-600 text-white"
              },
            ].map((s, i) => (
              <div key={i} className="group p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                <div className="h-1 w-12 bg-slate-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Consult Our Strategic Advisor</h2>
            <p className="text-slate-400 text-lg">Instant, AI-driven logistics insights powered by MLL proprietary methodologies.</p>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white">
            <AIConsultant />
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">© 2024 MLL Solution. Engineered for Global Excellence.</p>
        </div>
      </footer>

      <FloatingAI />
    </div>
  );
};

export default App;
