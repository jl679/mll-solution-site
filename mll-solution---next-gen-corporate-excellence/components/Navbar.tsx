
import React, { useState } from 'react';
import { Menu, X, Globe, MessageSquare } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.Home },
    { label: 'Services', value: Page.Services },
    { label: 'About', value: Page.About },
    { label: 'Contact', value: Page.Contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate(Page.Home)}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <Globe className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              MLL<span className="text-blue-600">SOLUTION</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.value ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate(Page.AIConsultant)}
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              <MessageSquare size={16} />
              AI Advisor
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate(Page.AIConsultant);
                setIsOpen(false);
              }}
              className="flex items-center gap-2 w-full text-left px-3 py-4 text-base font-medium text-blue-600 hover:bg-blue-50"
            >
              <MessageSquare size={20} />
              AI Advisor
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
