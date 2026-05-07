import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GetStarted } from '../components/GetStarted';
import { Cobo, Safeheron, BisonBank } from '../../imports/Frame427318503';
import uiImage from '../../imports/Group_1597880555.png';

export function Showcases() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#001222] to-[#000000] font-['Nunito',sans-serif] text-white flex flex-col pt-[80px] lg:pt-[104px]">
      {/* Fixed Navigation */}
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center pt-12 pb-24 lg:pt-20 lg:pb-[120px] relative z-10">
        {/* Background glowing effects for the section title area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-[#00D661]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Section Title */}
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col items-center text-center mb-16 lg:mb-20 relative z-10">
          <motion.h1 
            className="font-bold leading-[1.05] tracking-[-0.02em] text-white text-[40px] md:text-[48px] lg:text-[56px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How we do the best
          </motion.h1>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          
          {/* Card 1: Cobo */}
          <motion.div 
            className="flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[32px] hover:border-[#00D661]/60 hover:shadow-[0_0_30px_rgba(0,214,97,0.15)] transition-all duration-500 group overflow-hidden relative min-h-[500px] lg:min-h-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-8 lg:p-10 flex flex-col items-start gap-6 z-10 relative flex-1">
              <div className="h-[40px] flex items-center brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity">
                <Cobo />
              </div>
              <p className="text-[#D7D7D7] text-[16px] leading-[1.6] font-regular">
                Cobo is a globally trusted leader in digital asset custody solutions. We integrate their WaaS to ensure institutional-grade security, MPC protection, and compliant asset management.
              </p>
            </div>
            {/* Image Box */}
            <div className="relative w-full h-[260px] lg:h-[320px] mt-auto flex items-end justify-center">
              {/* Inner Glow applied on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00D661] blur-[80px] opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 rounded-full z-0"></div>
              <img
                src={uiImage}
                alt="Cobo Showcase"
                className="w-[140%] max-w-none object-cover object-top relative z-10 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] group-hover:-translate-y-3 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Card 2: Safeheron */}
          <motion.div 
            className="flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[32px] hover:border-[#00D661]/60 hover:shadow-[0_0_30px_rgba(0,214,97,0.15)] transition-all duration-500 group overflow-hidden relative min-h-[500px] lg:min-h-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 lg:p-10 flex flex-col items-start gap-6 z-10 relative flex-1">
              <div className="h-[40px] flex items-center brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity">
                <Safeheron />
              </div>
              <p className="text-[#D7D7D7] text-[16px] leading-[1.6] font-regular">
                Safeheron provides open-source, zero-trust MPC custody infrastructure. This empowers our platform with institutional-grade self-custody and unmatched control over digital assets.
              </p>
            </div>
            {/* Image Box */}
            <div className="relative w-full h-[260px] lg:h-[320px] mt-auto flex items-end justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00D661] blur-[80px] opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 rounded-full z-0"></div>
              <img
                src={uiImage}
                alt="Safeheron Showcase"
                className="w-[140%] max-w-none object-cover object-top relative z-10 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] group-hover:-translate-y-3 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Card 3: Bison Bank */}
          <motion.div 
            className="flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[32px] hover:border-[#00D661]/60 hover:shadow-[0_0_30px_rgba(0,214,97,0.15)] transition-all duration-500 group overflow-hidden relative min-h-[500px] lg:min-h-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="p-8 lg:p-10 flex flex-col items-start gap-6 z-10 relative flex-1">
              <div className="h-[40px] flex items-center brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity scale-110 origin-left">
                <BisonBank />
              </div>
              <p className="text-[#D7D7D7] text-[16px] leading-[1.6] font-regular">
                As a fully regulated European financial institution, Bison Bank bridges TradFi and DeFi. Our partnership provides seamless and compliant fiat-to-crypto gateways.
              </p>
            </div>
            {/* Image Box */}
            <div className="relative w-full h-[260px] lg:h-[320px] mt-auto flex items-end justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#00D661] blur-[80px] opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 rounded-full z-0"></div>
              <img
                src={uiImage}
                alt="Bison Bank Showcase"
                className="w-[140%] max-w-none object-cover object-top relative z-10 [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)] group-hover:-translate-y-3 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

        </div>
      </main>

      <GetStarted />
      <Footer />
    </div>
  );
}