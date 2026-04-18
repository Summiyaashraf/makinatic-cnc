"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('home'), href: '/' }, 
    { name: t('products'), href: '/products' }, 
    { name: t('profile'), href: '/company-profile' },
    { name: t('contact'), href: '/#contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Area - Mobile par size thoda chota kiya hai taake space bache */}
          <div className="flex items-center">
            <Image 
              src="/Makinatic logo cnc.png"      
              alt="Makinati Logo" 
              width={90} // Mobile ke liye 90/90 behtar hai
              height={90}           
              priority              
              className="object-contain w-auto h-12 md:h-16" // Responsive height
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-[#0056b3] font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold hover:bg-gray-100 transition-all text-[#0056b3]"
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>

          {/* Mobile Menu Button - Isko tap target ke liye padding di hai */}
          <div className="md:hidden flex items-center gap-4">
             {/* Mobile Language Switcher (Optional: Agar aap chahen ke bahar hi dikhe) */}
             <button onClick={toggleLanguage} className="p-2 text-[#0056b3]">
                <Globe size={22} />
             </button>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content - RTL support ke liye styling */}
      {isOpen && (
        <div className={`md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300`}>
          <div className={`px-4 pt-2 pb-6 space-y-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-base font-bold text-gray-700 hover:bg-blue-50 hover:text-[#0056b3] rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { toggleLanguage(); setIsOpen(false); }}
              className="w-full mt-4 flex justify-center items-center gap-2 bg-[#0056b3] text-white py-4 rounded-xl font-black shadow-lg shadow-blue-100"
            >
              <Globe size={20} />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;