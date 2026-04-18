"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Settings2, 
  Target, 
  Rocket, 
  CheckCircle2, 
  Lightbulb, 
  Users, 
  Trophy 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CompanyProfilePage = () => {
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

  const coreValues = [
    {
      title: language === 'en' ? 'Our Mission' : 'رسالتنا',
      desc: language === 'en' 
        ? 'To provide high-quality industrial solutions through precision CNC and laser technology, ensuring customer success.' 
        : 'تقديم حلول صناعية عالية الجودة من خلال تقنية سي إن سي والليزر الدقيقة، مما يضمن نجاح العملاء.',
      icon: <Target className="text-white" size={30} />,
      bg: 'bg-blue-600'
    },
    {
      title: language === 'en' ? 'Our Vision' : 'رؤيتنا',
      desc: language === 'en' 
        ? 'To be the most reliable partner in the Middle East for advanced industrial machinery and technical support.' 
        : 'أن نكون الشريك الأكثر موثوقية في الشرق الأوسط للآلات الصناعية المتقدمة والدعم الفني.',
      icon: <Rocket className="text-white" size={30} />,
      bg: 'bg-[#002B5B]'
    }
  ];

  return (
    <>
      <Navbar /> 
      <main className="pt-1"> 
        {/* Section 1: About - Fixed Mobile Alignment & Padding */}
        <section className={`pt-16 md:pt-24 pb-12 md:pb-20 bg-blue-100 overflow-hidden ${isAr ? 'text-right' : 'text-left'}`}> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${isAr ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-black text-[#002B5B] mb-6 uppercase italic tracking-tight leading-tight">
                  {language === 'en' ? 'About Makinati CNC' : 'حول ماكيناتي سي إن سي'}
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed font-medium">
                  {language === 'en' 
                    ? 'Makinati (Lamsa Al Qusoor Decor) is a leading provider of CNC machines, laser systems, and high-tech marking solutions in Saudi Arabia. We deliver innovation that powers modern industries.' 
                    : 'ماكيناتي (لمسة القصور للديكور) هي مزود رائد لآلات سي إن سي وأنظمة الليزر وحلول الوسم عالية التقنية في المملكة العربية السعودية.'}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  {features.map((f, i) => (
                    <div key={i} className={`flex flex-col gap-3 p-6 bg-white rounded-2xl shadow-md border-blue-600 ${isAr ? 'border-r-4 items-end' : 'border-l-4 items-start'}`}>
                      <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                        {f.icon}
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg uppercase italic">{f.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Fix: Mobile height and responsive rounding */}
              <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
                <div className="relative z-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-blue-700">
                  <img src="/About.png" alt="Industrial Facility" className="w-full h-[300px] md:h-[500px] object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 md:w-64 h-32 md:h-64 bg-blue-400/20 rounded-full blur-3xl z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Vision & Mission - Responsive Padding */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {coreValues.map((val, i) => (
                <div key={i} className={`${val.bg} p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-white shadow-2xl hover:scale-[1.02] transition-transform duration-300 flex flex-col ${isAr ? 'items-end text-right' : 'items-start'}`}>
                  <div className="bg-white/20 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6">
                    {val.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase italic tracking-wide">{val.title}</h3>
                  <p className="text-blue-50 text-base md:text-lg leading-relaxed opacity-90">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Philosophy - Grid Fix for small screens */}
        <section className="py-16 md:py-20 bg-blue-700">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-[#f8f9fa] mb-12 md:mb-16 uppercase italic">Our Professional Philosophy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { title: 'Innovation', icon: <Lightbulb className="text-blue-600" size={32} /> },
                { title: 'Quality Control', icon: <CheckCircle2 className="text-blue-600" size={32} /> },
                { title: 'Partnership', icon: <Users className="text-blue-600" size={32} /> },
                { title: 'Excellence', icon: <Trophy className="text-blue-600" size={32} /> },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-blue-950 flex flex-col items-center">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-black text-[#002B5B] uppercase text-xs tracking-widest">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Extra Statement */}
        <section className="py-12 md:py-16 bg-[#002B5B] text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
             <h3 className="text-xl md:text-2xl font-bold mb-4 italic">Empowering Local Industry with International Standards</h3>
             <p className="text-sm md:text-base opacity-80 leading-relaxed">
               {language === 'en' 
                 ? 'We pride ourselves on being more than just a supplier; we are your partner in growth.' 
                 : 'نحن نفخر بكوننا أكثر من مجرد مورد؛ نحن شريكك في النمو.'}
             </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CompanyProfilePage;