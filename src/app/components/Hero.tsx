"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title1: "Precision, Reliability,",
      title2: "& Innovation",
      desc: "CNC Makinati is a trusted name in CNC machining solutions. We are committed to delivering machines that perform consistently, reduce production time, and maximize customer satisfaction.",
      btn1: "Explore Machines",
      btn2: "Contact Us"
    },
    ar: {
      title1: "الدقة، الموثوقية،",
      title2: "والابتكار",
      desc: "ماكيناتي سي إن سي اسم موثوق في حلول التصنيع باستخدام الحاسب الآلي. نحن ملتزمون بتقديم آلات تعمل باستمرار، وتقلل من وقت الإنتاج، وتحقق أقصى قدر من رضا العملاء.",
      btn1: "استكشف الآلات",
      btn2: "اتصل بنا"
    }
  };

  const t = language === 'en' ? content.en : content.ar;

  return (
    <section className={`relative bg-blue-100 pt-10 lg:pt-0 pb-12 lg:pb-20 overflow-hidden ${language === 'ar' ? 'text-right' : 'text-left'}`}>
      <div className={`container mx-auto px-6 flex flex-col lg:flex-row items-center min-h-[80vh] lg:min-h-[70vh] ${language === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Text Side */}
        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
          <h1 className={`${language === 'ar' ? 'lg:text-right' : ''} text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#002B5B] leading-tight`}>
            {t.title1} <br />
            <span className="text-blue-600">{t.title2}</span>
          </h1>
          
          <p className={`mt-6 text-gray-600 text-base md:text-lg max-w-lg mx-auto ${language === 'ar' ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'}`}>
            {t.desc}
          </p>
          
          <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'}`}>
            <Link href="/products" className="w-full sm:w-auto"> 
              <button className="w-full bg-[#002B5B] text-white px-8 py-4 rounded-md font-bold hover:bg-blue-800 transition shadow-lg uppercase">
                {t.btn1}
              </button>
            </Link>

            <Link href="/#contact" className="w-full sm:w-auto">
              <button className="w-full border-2 border-[#002B5B] text-[#002B5B] px-8 py-4 rounded-md font-bold hover:bg-gray-50 transition uppercase">
                {t.btn2}
              </button>
            </Link>
          </div>
        </div>

        {/* Image Side - Final Responsive Fix */}
<div className="w-full lg:w-1/2 flex items-center justify-center relative order-1 lg:order-2 mt-6 lg:mt-0">
  {/* Background Glow - Mobile par size chota kiya hai */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-full md:h-full bg-blue-400/10 rounded-full blur-[60px] md:blur-[120px]"></div>
  
  <div className="relative z-10 w-full flex justify-center items-center px-2"
       style={{
         // Mobile (default) par mask 2% hai, Desktop (lg) par 15% ho jaye ga
         maskImage: 'linear-gradient(to right, transparent, black var(--m-size, 2%), black calc(100% - var(--m-size, 2%)), transparent), linear-gradient(to bottom, transparent, black var(--m-size, 2%), black calc(100% - var(--m-size, 2%)), transparent)',
         WebkitMaskImage: 'linear-gradient(to right, transparent, black var(--m-size, 2%), black calc(100% - var(--m-size, 2%)), transparent), linear-gradient(to bottom, transparent, black var(--m-size, 2%), black calc(100% - var(--m-size, 2%)), transparent)',
         maskComposite: 'intersect',
         WebkitMaskComposite: 'source-in',
       }}>
    
    {/* Responsive Variable for Mask */}
    <style jsx>{`
      div { --m-size: 2%; }
      @media (min-width: 1024px) {
        div { --m-size: 15%; }
      }
    `}</style>

    <Image
      src="/hero-machine.png"
      alt="Makinati CNC Router"
      width={700}
      height={600}
      priority
      // Mobile par aspect-ratio barkarar rakhne ke liye 'h-auto' aur 'object-contain'
      className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-full h-auto object-contain drop-shadow-2xl transition-all duration-300"
    />
  </div>
</div>
  </div>
    </section>
  );
};

export default Hero;