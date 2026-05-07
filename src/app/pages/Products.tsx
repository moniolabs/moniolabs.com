import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GetStarted } from '../components/GetStarted';
import { BarChart3, Globe, Zap } from 'lucide-react';
import uiImage from '../../imports/Group_1597880555.png';

export function Products() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#001222] to-[#000000] font-['Nunito',sans-serif] text-white flex flex-col">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-[80px] lg:pt-[120px] pb-12 lg:pb-0 min-h-[600px] h-auto lg:h-screen lg:max-h-[900px] relative overflow-hidden flex flex-col items-center shrink-0">
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col h-full relative z-10 transition-all duration-300">
          <main className="flex-1 flex flex-col lg:flex-row items-center justify-between pb-12 lg:pb-0 gap-12 lg:gap-8 mt-8 lg:mt-0">
            {/* Left Text Column */}
            <motion.div 
              className="flex-1 w-full flex flex-col items-start text-left z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-[#00D661] text-[14px] lg:text-[16px] font-bold tracking-[3px] uppercase mb-4 lg:mb-6">Our Products</h2>
              <h1 className="font-semibold leading-[1.05] tracking-[-0.03em] text-white mb-6 lg:mb-8 min-[1920px]:text-[80px] drop-shadow-2xl text-[48px]">
                Moniolabs OTC
              </h1>
              <p className="max-w-[420px] w-full leading-[1.7] font-regular text-[#D7D7D7] text-[16px]">
                Our over-the-counter (OTC) trading service is trusted by over 800 institutional clients. It sets the gold standard for global liquidity, regulatory compliance, robust infrastructure, and settlement efficiency.
              </p>
            </motion.div>

            {/* Right Visual Column */}
            <motion.div 
              className="w-full lg:w-[680px] shrink-0 flex items-center justify-center lg:justify-end relative z-10"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-[680px]">
                {/* Glow effect behind the image */}
                <div className="absolute inset-0 bg-[#00D661] blur-[160px] opacity-20 rounded-full scale-90"></div>
                <img 
                  src={uiImage} 
                  alt="Moniolabs OTC UI" 
                  className="relative w-full h-auto object-contain block max-h-[70vh] lg:max-h-[85vh] z-10 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" 
                />
              </div>
            </motion.div>
          </main>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full flex justify-center mt-[-1px]">
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 mx-auto">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>

      {/* Details Section */}
      <section className="w-full py-20 lg:py-[120px] flex flex-col items-center relative overflow-hidden">
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col gap-20 lg:gap-32 relative z-10 mx-auto">
          
          <div className="w-full flex flex-col items-center text-center mb-[-24px] lg:mb-[-40px]">
            <motion.h2 
              className="text-[40px] lg:text-[64px] min-[1920px]:text-[72px] font-extrabold text-white tracking-[0.04em] leading-[1.1] drop-shadow-2xl uppercase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              OTC TRADING SERVICES
            </motion.h2>
          </div>

          {/* Features Grid Layout */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-16">
            
            {/* Feature 1 (Full width card) */}
            <motion.div 
              className="col-span-1 lg:col-span-2 bg-[#FFFFFF]/[0.02] border border-white/5 rounded-[32px] p-8 lg:p-12 hover:bg-[#FFFFFF]/[0.04] transition-all duration-500 hover:border-[#00D661]/30 group relative overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00D661]/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="w-[80px] h-[80px] rounded-[24px] bg-[#FFFFFF]/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#00D661]/50 group-hover:bg-[#00D661]/10 transition-all duration-500 shadow-xl group-hover:shadow-[#00D661]/20 group-hover:-translate-y-2 relative z-10">
                <BarChart3 className="text-white group-hover:text-[#00D661] transition-colors duration-500" size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col flex-1 relative z-10">
                <h3 className="text-[32px] lg:text-[44px] font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
                  Deep Liquidity And Competitive Quotes
                </h3>
                <p className="text-[#D7D7D7] text-[18px] lg:text-[20px] leading-[1.7] mb-8 font-medium">
                  Legend Trading has its proprietary smart order routing system that allows our clients to access a huge and centralized liquidity pool that aggregates cryptocurrency liquidity globally. Many exchanges are also our direct clients and trade with us constantly. By doing so, we can offer competitive quotes, especially for block trades.
                </p>
                <div className="bg-[#FFFFFF]/5 border border-white/10 rounded-[16px] p-6 lg:p-8 relative overflow-hidden shadow-lg mt-auto">
                  <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#00D661]"></div>
                  <p className="text-[#99A1AF] text-[16px] lg:text-[18px] leading-[1.7] italic font-medium">
                    Our trade execution helps control slippages and tighten spreads significantly. By working with Legend Trading, institutional clients are able to obtain the best trade values of the crypto assets.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 (Half width) */}
            <motion.div 
              className="col-span-1 bg-[#FFFFFF]/[0.02] border border-white/5 rounded-[32px] p-8 lg:p-12 hover:bg-[#FFFFFF]/[0.04] transition-all duration-500 hover:border-[#00D661]/30 group relative overflow-hidden flex flex-col items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00D661]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="w-[80px] h-[80px] rounded-[24px] bg-[#FFFFFF]/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#00D661]/50 group-hover:bg-[#00D661]/10 transition-all duration-500 shadow-xl group-hover:shadow-[#00D661]/20 group-hover:-translate-y-2 relative z-10 mb-8">
                <Globe className="text-white group-hover:text-[#00D661] transition-colors duration-500" size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col flex-1 relative z-10">
                <h3 className="text-[28px] lg:text-[36px] font-extrabold text-white leading-[1.2] mb-6 tracking-tight">
                  World-Class Trading Experience
                </h3>
                <p className="text-[#D7D7D7] text-[18px] lg:text-[20px] leading-[1.7] font-medium">
                  24/7 electronic execution for major digital assets and fiat currency trading pairs. Our professional traders are responsive and ready to meet your trading needs anytime. Feel free to leverage our team's extensive expertise in cryptocurrency and financial markets.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 (Half width) */}
            <motion.div 
              className="col-span-1 bg-[#FFFFFF]/[0.02] border border-white/5 rounded-[32px] p-8 lg:p-12 hover:bg-[#FFFFFF]/[0.04] transition-all duration-500 hover:border-[#00D661]/30 group relative overflow-hidden flex flex-col items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00D661]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="w-[80px] h-[80px] rounded-[24px] bg-[#FFFFFF]/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#00D661]/50 group-hover:bg-[#00D661]/10 transition-all duration-500 shadow-xl group-hover:shadow-[#00D661]/20 group-hover:-translate-y-2 relative z-10 mb-8">
                <Zap className="text-white group-hover:text-[#00D661] transition-colors duration-500" size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col flex-1 relative z-10">
                <h3 className="text-[28px] lg:text-[36px] font-extrabold text-white leading-[1.2] mb-6 tracking-tight">
                  Highly Efficient Settlements
                </h3>
                <p className="text-[#D7D7D7] text-[18px] lg:text-[20px] leading-[1.7] font-medium">
                  Legend Trading works closely with a large network of banks, financial institutions and crypto custodians. We are proud of our fast and automated settlements of digital assets and 7 major fiat currencies including USD, EUR, GBP, AUD, CAD, CHF and JPY.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      <GetStarted />
      <Footer />
    </div>
  );
}
