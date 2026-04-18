"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

const Footer = () => {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';

  return (
    <footer className={`bg-gray-900 text-gray-300 py-12 md:py-16 ${isAr ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid: Mobile par stack (1 col), Desktop par 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-b border-gray-800 pb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              MAKINATI <span className="text-[#0056b3]">CNC</span>
            </h3>
            <p className={`text-sm leading-relaxed max-w-xs ${isAr ? 'mr-0 ml-auto' : ''}`}>
              {language === 'en' 
                ? 'Delivering precision, reliability, and innovation in CNC machining solutions across Saudi Arabia.'
                : 'نقدم الدقة والموثوقية والابتكار في حلول التصنيع باستخدام الحاسب الآلي في جميع أنحاء المملكة العربية السعودية.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-6">{language === 'en' ? 'Quick Links' : 'روابط سريعة'}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/" className="hover:text-white transition-colors block">{t('home')}</a></li>
              <li><a href="/products" className="hover:text-white transition-colors block">{t('products')}</a></li>
              <li><a href="/company-profile" className="hover:text-white transition-colors block">{t('profile')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">{language === 'en' ? 'Contact Us' : 'اتصل بنا'}</h4>
            <ul className="space-y-4 text-sm">
              <li className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                <Phone size={18} className="text-[#0056b3] shrink-0" />
                <span dir="ltr">+966 542 677 664</span>
              </li>
              <li className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                <Globe size={18} className="text-[#0056b3] shrink-0" />
                <span className="break-all">www.cncmakinati.com</span>
              </li>
              <li className={`flex items-center gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
                <MapPin size={18} className="text-[#0056b3] shrink-0" />
                <span>{isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Makinati CNC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;