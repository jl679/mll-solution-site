
import React from 'react';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  onExplore: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-indigo-100 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">Leading Logistics Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Empowering Your Business <br />
            <span className="gradient-text">Through Strategy</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            MLL Solution provides cutting-edge consulting and logistics expertise. 
            From supply chain optimization to global business scaling, we drive growth for the modern enterprise.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onExplore(Page.Services)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              Get Started
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onExplore(Page.About)}
              className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
            >
              Our Methodology
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-left">
              <Zap className="text-blue-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Rapid Execution</h3>
              <p className="text-sm text-slate-500">Streamlined processes to bring your solutions to market faster.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-left">
              <BarChart3 className="text-blue-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Data Driven</h3>
              <p className="text-sm text-slate-500">Insights backed by deep analytical research and performance metrics.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-left">
              <ShieldCheck className="text-blue-600 mb-4" size={32} />
              <h3 className="font-bold text-slate-900 mb-2">Certified Secure</h3>
              <p className="text-sm text-slate-500">Global compliance and enterprise-grade security standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
