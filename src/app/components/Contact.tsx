"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const contactInfo = {
    phone: "0535564101",
    whatsapp: "966542677664",
    email: "Info@cncmakinati.com", 
    address: isAr 
      ? "٢٣٤٤٤-حي الفيصلية-طريق الملك فهد ٣٤٣٣ جدة" 
      : "23444-Alfaysalya District-King Fahad Road 3433 Jeddah",
  };

  return (
    <div className={`bg-blue-200 min-h-screen pt-20 md:pt-24 pb-12 ${isAr ? 'text-right' : 'text-left'}`} id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-[#002B5B] mb-4 uppercase italic leading-tight">
            {isAr ? 'اتصل بنا' : 'Get In Touch'}
          </h1>
          <div className="w-20 md:w-24 h-2 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-sm md:text-lg font-medium px-4">
            {isAr ? 'اتصل بفريقنا في جدة للاستفسارات.' : 'Contact our Jeddah team for inquiries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Contact Details Cards */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              {/* WhatsApp Card */}
              <a 
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-green-700 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform ${isAr ? 'mr-0 ml-auto' : ''}`}>
                  <MessageCircle className="text-green-600" size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-1">{isAr ? 'واتساب' : 'WhatsApp'}</h3>
                <p className="text-gray-600 font-bold text-sm md:text-base">{contactInfo.whatsapp}</p>
              </a>

              {/* Phone Card */}
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-blue-700 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform ${isAr ? 'mr-0 ml-auto' : ''}`}>
                  <Phone className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-1">{isAr ? 'اتصل بنا' : 'Call Us'}</h3>
                <p className="text-gray-600 font-bold text-sm md:text-base">{contactInfo.phone}</p>
              </a>

              {/* Email Card - Mobile par layout fix */}
              <a 
                href={`mailto:${contactInfo.email}`}
                className={`bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-purple-700 shadow-sm hover:shadow-xl transition-all group md:col-span-2 flex items-center gap-4 md:gap-6 ${isAr ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="text-indigo-600" size={28} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-gray-900 mb-1">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</h3>
                  <p className="text-gray-600 font-bold text-xs md:text-base break-all md:break-normal">{contactInfo.email}</p>
                </div>
              </a>

              {/* Address Card - Mobile par font size fix */}
              <div className={`bg-[#002B5B] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white shadow-xl md:col-span-2 flex items-start gap-4 md:gap-6 ${isAr ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={28} />
                </div>
                <div className={isAr ? 'text-right' : 'text-left'}>
                  <h3 className="text-lg md:text-xl font-black mb-1 md:mb-2">{isAr ? 'تفضل بزيارة معرضنا' : 'Visit Our Showroom'}</h3>
                  <p className="text-blue-100 leading-relaxed font-bold text-sm md:text-lg">{contactInfo.address}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Google Maps Section - Mobile height adjust */}
          <div className="h-[350px] md:h-full min-h-[350px] md:min-h-[500px] bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-blue-800 relative order-1 lg:order-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.457850552718!2d39.1915!3d21.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM0JzEyLjAiTiAzOcKwMTEnMjkuNCJF!5e0!3m2!1sen!2ssa!4v1650000000000!5m2!1sen!2ssa"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;