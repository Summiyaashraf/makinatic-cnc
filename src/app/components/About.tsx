"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Settings2 } from 'lucide-react';

const AboutSection = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const features = [
    {
      icon: <ShieldCheck className="text-[#0056b3]" size={24} />,
      title: language === 'en' ? 'Trusted Quality' : 'جودة موثوقة',
      desc: language === 'en' ? 'Specializing in advanced CNC machines designed for modern manufacturing.' : 'متخصصون في آلات سي إن سي المتقدمة المصممة للتصنيع الحديث.' 
    },
    {
      icon: <Settings2 className="text-[#0056b3]" size={24} />,
      title: language === 'en' ? 'Precision Engineering' : 'هندسة دقيقة',
      desc: language === 'en' ? 'High-precision tools to help businesses improve productivity and accuracy.' : 'أدوات عالية الدقة لمساعدة الشركات على تحسين الإنتاجية والدقة.' 
    }
  ];

  return (
    // Mobile par py-16 aur desktop par py-24 rakha hai
    <section className={`py-16 lg:py-24 bg-blue-200 overflow-hidden ${isAr ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile par gap-10 aur text center (if needed), Desktop par gap-16 */}
        <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${isAr ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              {language === 'en' ? 'About Makinati CNC' : 'حول ماكيناتي سي إن سي'}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
              {language === 'en' 
                ? 'Makinati CNC is a trusted name in CNC machining solutions in Saudi Arabia, delivering precision, reliability, and innovation. We specialize in machines that meet the needs of modern industry.' 
                : 'ماكيناتي سي إن سي اسم موثوق في حلول التصنيع باستخدام الحاسب الآلي في المملكة العربية السعودية، حيث تقدم الدقة والموثوقية والابتكار.'}
            </p>
            
            {/* Features Grid - Mobile par icons align kar diye hain */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((f, i) => (
                <div key={i} className={`flex flex-col gap-3 p-6 bg-blue-50 rounded-2xl border border-blue-600 ${isAr ? 'items-end' : 'items-start'}`}>
                  <div className="bg-blue-200 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    {f.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{f.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Element */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-700">
              <img 
                src="About.png" 
                alt="Industrial Facility"
                // Mobile par height 300px aur desktop par 450px taake screen na bhare
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>
            {/* Design Element - Mobile par chote blur kiye hain taake overlap na ho */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl z-0 md:w-48 md:h-48 md:blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl z-0 md:w-48 md:h-48 md:blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;