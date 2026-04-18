"use client";
import React from 'react';
import { Target, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const content = {
    en: {
      heading: "Why Choose Makinati?",
      subheading: "We combine innovation with reliability to provide the best CNC solutions in the market.",
      strengths: [
        {
          title: "High Precision",
          desc: "Reliable CNC machines delivering 100% accuracy for complex industrial tasks.",
          icon: <Target className="w-8 h-8 text-blue-600" />,
        },
        {
          title: "Modern Technology",
          desc: "Equipped with the latest CNC control systems and high-quality components.",
          icon: <Cpu className="w-8 h-8 text-blue-600" />,
        },
        {
          title: "Industrial Durability",
          desc: "Built with robust steel structures for continuous 24/7 operations.",
          icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
        },
        {
          title: "Faster Production",
          desc: "Designed to reduce production time and maximize your business efficiency.",
          icon: <Zap className="w-8 h-8 text-blue-600" />,
        },
      ]
    },
    ar: {
      heading: "لماذا تختار ماكيناتي؟",
      subheading: "نحن نجمع بين الابتكار والموثوقية لتقديم أفضل حلول التصنيع باستخدام الحاسب الآلي في السوق.",
      strengths: [
        {
          title: "دقة عالية",
          desc: "آلات CNC موثوقة توفر دقة بنسبة 100٪ للمهام الصناعية المعقدة.",
          icon: <Target className="w-8 h-8 text-blue-600" />,
        },
        {
          title: "تكنولوجيا حديثة",
          desc: "مجهزة بأحدث أنظمة التحكم ومكونات عالية الجودة.",
          icon: <Cpu className="w-8 h-8 text-blue-600" />,
        },
        {
          title: "متانة صناعية",
          desc: "مصممة بهياكل فولاذية قوية للعمليات المستمرة على مدار الساعة.",
          icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
        },
        {
          title: "إنتاج أسرع",
          desc: "مصممة لتقليل وقت الإنتاج وزيادة كفاءة عملك.",
          icon: <Zap className="w-8 h-8 text-blue-600" />,
        },
      ]
    }
  };

  const t = isAr ? content.ar : content.en;

  return (
    <section className={`py-12 md:py-20 bg-blue-300 ${isAr ? 'text-right' : 'text-left'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[#002B5B] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{t.heading}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            {t.subheading}
          </p>
        </div>

        {/* Responsive Grid: Mobile par 1, Tablet par 2, Desktop par 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.strengths.map((item, index) => (
            <div 
              key={index} 
              className={`p-6 md:p-8 rounded-2xl bg-[#f8fafc] border-4 border-transparent hover:border-blue-900 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col ${isAr ? 'items-end' : 'items-start'}`}
              style={{ direction: isAr ? 'rtl' : 'ltr' }}
            >
              <div className={`bg-blue-200 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform ${isAr ? 'ml-0' : 'mr-0'}`}>
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#002B5B] mb-3">{item.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;