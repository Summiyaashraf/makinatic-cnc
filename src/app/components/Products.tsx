"use client";
import React, { useState } from 'react';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { machinesData } from '../data/machines';
import Link from 'next/link';

const ProductSection = ({ isFullPage = false }: { isFullPage?: boolean }) => {
  const [selectedMachine, setSelectedMachine] = useState<any>(null);

  const displayedMachines = isFullPage ? machinesData : machinesData.slice(0, 2);

  const openWhatsApp = (name: string) => {
    window.open(`https://wa.me/966542677664?text=I am interested in ${name}`, '_blank');
  };

  return (
    <section className="py-12 md:py-20 bg-[#061a80]" id="products">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-10 md:mb-16 text-[#f8fafc] leading-tight px-2">
          {isFullPage ? "OUR COMPLETE INDUSTRIAL RANGE" : "OUR FEATURED MACHINES"}
        </h2>
        
        {/* Machine Cards Grid - Responsive gap fix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {displayedMachines.map((m) => (
            <div key={m.id} className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all flex flex-col h-full group">
              <div className="h-48 md:h-64 w-full flex items-center justify-center bg-gray-50 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src={m.mainImage} 
                  className="max-h-96 max-w-96 object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
                  alt={m.name} 
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-black text-[#002B5B] uppercase leading-snug">{m.name}</h3>
                <p className="text-blue-600 font-bold mb-6 text-xs md:text-sm">{m.shortDesc}</p>
              </div>

              <button 
                onClick={() => setSelectedMachine(m)} 
                className="w-full py-4 bg-[#002B5B] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-blue-900 mt-auto text-sm md:text-base transition-colors"
              >
                View Technical Specs
              </button>
            </div>
          ))}
        </div>
      </div>

      {!isFullPage && (
        <div className="mt-12 md:mt-16 text-center px-4">
          <Link href="/products">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#061a80] px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl text-sm">
              View All Machines <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      )}

      {/* Full PDF Style Modal */}
      {selectedMachine && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white rounded-t-[2rem] md:rounded-[2rem] max-w-5xl w-full max-h-[90vh] md:max-h-[95vh] overflow-y-auto relative p-6 md:p-10">
            
            {/* Close Button - Better position for mobile touch */}
            <button 
                onClick={() => setSelectedMachine(null)} 
                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition-all z-10"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="text-center mb-8 border-b pb-6 mt-4 md:mt-0">
              <h2 className="text-2xl md:text-3xl font-black text-[#002B5B] uppercase px-4">{selectedMachine.name}</h2>
              <p className="text-blue-600 font-bold italic text-xs md:text-sm">International Brand | European Standard</p>
            </div>

            {/* Section 1: Main Spare Parts */}
            <div className="mb-10">
              <h4 className="text-lg md:text-xl font-black text-blue-800 mb-6 italic underline uppercase">Main Spare Parts:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                {selectedMachine.spareParts?.map((item: any, idx: number) => (
                  <div key={idx} className="border border-blue-800/30 p-2 md:p-3 rounded-xl text-center bg-gray-50 flex flex-col items-center justify-center">
                    <img 
                      src={item.img || null} 
                      alt={item.title} 
                      className="w-full h-20 md:h-32 object-contain mb-2 rounded-lg" 
                    />
                    <p className="font-black text-[9px] md:text-[11px] uppercase text-gray-800 leading-tight">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Section 2: Main Parts Table - Responsive Container added */}
              {selectedMachine.mainParts && (
                <div>
                  <h4 className="text-base md:text-lg font-black text-blue-800 mb-4 italic underline uppercase">1. Main Parts of the Machine:</h4>
                  <div className="border-2 border-gray-100 rounded-2xl overflow-x-auto shadow-sm">
                    <table className="w-full text-left text-xs md:text-sm min-w-[400px]">
                      <thead className="bg-[#002B5B] text-white">
                        <tr>
                          <th className="p-3 border-r border-white/20 w-12 text-center">Sr.</th>
                          <th className="p-3 border-r border-white/20">Item</th>
                          <th className="p-3">Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedMachine.mainParts.map((part: any, i: number) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="p-3 border-t border-r font-bold text-blue-700 text-center">{part.sr}</td>
                            <td className="p-3 border-t border-r font-black text-[#002B5B]">{part.part}</td>
                            <td className="p-3 border-t text-gray-600 text-[11px] md:text-xs leading-relaxed">{part.spec}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="md:hidden text-[10px] text-gray-400 mt-2">← Scroll sideways to see more</p>
                </div>
              )}

              {/* Section 3: Technical Parameters */}
              <div>
                <h4 className="text-base md:text-lg font-black text-blue-800 mb-4 italic underline uppercase">2. Parameter:</h4>
                <div className="space-y-1 md:space-y-2">
                  {selectedMachine.parameters.map((p: any, i: number) => (
                    <div key={i} className="flex justify-between items-center p-3 border-b border-gray-100 hover:bg-blue-50 transition-colors">
                      <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase">{p.label}</span>
                      <span className="text-[10px] md:text-xs font-black text-[#002B5B] text-right ml-4">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp CTA - Sticky style for mobile */}
            <div className="sticky bottom-0 bg-white pt-4 pb-2 md:static md:p-0">
                <button 
                onClick={() => openWhatsApp(selectedMachine.name)}
                className="w-full mt-4 md:mt-10 py-4 md:py-5 bg-[#25D366] text-white rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-green-200"
                >
                <MessageCircle size={24} />
                WHATSAPP QUOTATION
                </button>
            </div>
          </div>
        </div>
      )}
    </section>
  ); 
};

export default ProductSection;