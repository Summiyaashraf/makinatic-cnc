"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: "Home",
    products: "Products",
    profile: "Company Profile",
    contact: "Contact Us",
    heroTitle: "High-Performance",
    heroSub: "CNC Router 2140 / 2160",
    heroDesc: "Precision engineering for heavy-duty industrial tasks. Our machines are designed for reliability, speed, and accuracy in every cut.",
    viewMachines: "View Machines",
  },
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    profile: "ملف الشركة",
    contact: "اتصل بنا",
    heroTitle: "أداء عالي",
    heroSub: "ماكينة سي إن سي 2140 / 2160",
    heroDesc: "هندسة دقيقة للمهام الصناعية الشاقة. آلاتنا مصممة للموثوقية والسرعة والدقة في كل عملية قطع.",
    viewMachines: "عرض الآلات",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};