import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

import imgGlobalTrading from "../../imports/image-60.png";
import imgMultiCurrency from "../../imports/image-61.png";
import imgAccelerated from "../../imports/image-62.png";

const features = [
  {
    title: '24/7 Continuous Execution',
    description: '24/7 execution for major digital assets and fiat currency trading pairs.',
    image: imgGlobalTrading,
  },
  {
    title: 'Multi Currencies Settlement',
    description: 'Including HKD, USD, EUR, GBP, AUD, CAD, CHF, and JPY.',
    image: imgMultiCurrency,
  },
  {
    title: 'Fast Settlement',
    description: 'Same-day Crypto-Fiat settlements for the U.S. and Next-day for EU/Asia. Nearly instant settlements for Crypto-Crypto trades.',
    image: imgAccelerated,
  },
];

export function WhyChooseUs() {
  return (
    <section className="w-full bg-black py-16 lg:py-[64px] flex flex-col items-center relative overflow-hidden" data-name="Why choose us?">

      {/* 
        The container handles the global adaptive scaling formula mentioned:
        - Max 1280px for standard desktop
        - Scales linearly between 1920px and 2240px
        - Caps at 1500px for screens > 2240px
      */}
      <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col transition-all duration-300 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start mb-12 lg:mb-[84px]"
        >
          <h2 className="text-[#00D661] font-regular leading-normal lg:leading-[42px] mb-4 lg:mb-[20px] font-['Nunito',_sans-serif] text-[24px]">
            WHY CHOOSE MONIOLABS
          </h2>
          <div className="text-white text-[32px] lg:text-[48px] leading-tight lg:leading-[70px] font-['Nunito',_sans-serif]">
            <p className="font-bold m-0 drop-shadow-md">Institutional Liquidity & Global Settlement</p>
            <p className="font-light m-0 mt-2 lg:mt-0 drop-shadow-md">Total Compliance in Every Transaction</p>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[28px]">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
              style={{ willChange: 'transform, opacity' }}
              className="flex flex-col w-full"
            >
              {/* Image Container */}
              <div className="w-full aspect-square bg-black/60 backdrop-blur-sm rounded-[24px] relative overflow-hidden shrink-0 group shadow-lg border border-[#333333]">
                <ImageWithFallback
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover contrast-[1.1] saturate-[0.7] sepia-[0.15] brightness-[0.9]"
                />
                {/* Retro Frosted/Grainy Overlay (Noise) */}
                <div 
                  className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" 
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                ></div>
                {/* Subtle shadow gradient & tint to enhance the matte texture */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-[#00d661]/10 pointer-events-none mix-blend-overlay"></div>
              </div>

              {/* Text Content */}
              <div className="mt-6 lg:mt-[31px] flex flex-col items-start">
                <h3 className="text-white font-bold leading-normal mb-3 lg:mb-[15px] font-['Nunito',_sans-serif] text-[24px] drop-shadow-sm">
                  {feature.title}
                </h3>
                <p className="text-white font-regular leading-normal font-['Nunito',_sans-serif] opacity-90 text-[16px] w-[calc(100%-40px)] drop-shadow-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}