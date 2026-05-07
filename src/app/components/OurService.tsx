import React from 'react';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Frame1597880853_1 from '../../imports/Frame1597880853-1/Frame1597880853-2093-127';
import uiImage from '../../imports/image-49.png';
import img20 from '../../imports/image-131.png';
import img21 from '../../imports/image-132.png';
import img22 from '../../imports/image-133.png';
import img23 from '../../imports/image-129.png';
import img24 from '../../imports/image-135.png';

import Icon from '../../imports/Icon/Icon';
import { motion } from 'motion/react';

const features = [
  {
    title: 'Institutional OTC\nTrading Desk',
    description: 'Dedicated OTC execution for large-scale digital asset transactions, serving corporates, funds and treasury operations.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    image: img20
  },
  {
    title: 'Cross-Border\nSettlement',
    description: 'Secure, regulated clearing and settlement between crypto assets and global fiat currencies for international businesses.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    image: img21
  },
  {
    title: 'Enterprise Digital\nAsset Liquidity',
    description: 'Custom liquidity solutions and asset conversion services to support corporate treasury and operational crypto needs.',
    colSpan: 'md:col-span-2 lg:col-span-2',
    image: img22,
    titleClassName: 'lg:!text-[18px] xl:!text-[20px] 2xl:!text-[22px] !tracking-normal whitespace-pre-line'
  },
  {
    title: 'Local Virtual Account Solutions',
    description: 'Dedicated local virtual account infrastructure to simplify regional fiat deposits, withdrawals and treasury reconciliation for businesses.',
    colSpan: 'md:col-span-1 lg:col-span-3',
    image: img23
  },
  {
    title: 'Developer API Integration',
    description: 'Secure, scalable API endpoints for custom system integration, automated trading workflows and embedded crypto-fiat operations.',
    colSpan: 'md:col-span-1 lg:col-span-3',
    image: img24
  }
];

export function OurSolutions() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-gradient-to-b from-[#000000] via-[#000000] to-[#001222] from-0% via-66% to-100% pt-[160px] pb-16 lg:pt-[200px] lg:pb-[64px] flex flex-col items-center relative overflow-hidden mt-[40px] md:mt-[100px] lg:mt-[180px]" id="products">

      <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col transition-all duration-300 relative z-10">
        
        {/* Text Section (Moved Above UI Diagram) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="z-[20] flex flex-col items-start text-left w-full mb-10 lg:mb-[60px]"
        >
          <h2 className="text-[#00D661] font-regular leading-normal lg:leading-[42px] mb-2 lg:mb-4 font-['Nunito',_sans-serif] text-[24px]">
            OUR SERVICE
          </h2>
          <div className="font-['Nunito',_sans-serif] font-semibold text-white leading-tight lg:leading-[70px] text-[32px] lg:text-[48px] whitespace-pre-wrap">
            <p className="font-bold mb-0">All-in-One Infrastructure </p>
            <p className="font-light mb-0 mt-2 lg:mt-0">Accelerating the Future of Digital Payments</p>
          </div>
        </motion.div>

        {/* Header Section with Fading Background Placeholder */}
        <div className="relative w-full mb-[80px] lg:mb-[120px] flex flex-col justify-center items-center">
          
          <div className="relative w-full flex flex-col justify-center items-center">
            {/* Uploaded Frame1597880853_1 Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] aspect-[2563/1309] pointer-events-none z-0 flex justify-center items-center [mask-image:linear-gradient(to_bottom,black_30%,transparent_85%)] [-webkit-mask-image:linear-gradient(to_bottom,black_30%,transparent_85%)]">
              <Frame1597880853_1 />
            </div>

            {/* Additional bright diffuse background glow with more white to increase brightness */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] lg:w-[60%] aspect-[2/1] bg-white/20 blur-[100px] lg:blur-[160px] rounded-full pointer-events-none z-[5]"></div>

            {/* UI Component replaced with pre-rendered responsive PNG image */}
            <motion.div 
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full pointer-events-none flex justify-center items-center z-10"
            >
              <div className="w-full relative z-20 transition-transform duration-500 hover:scale-[1.02] p-[8px] md:p-[20px] rounded-[16px] lg:rounded-[40px] bg-white/5 border border-white/10 shadow-lg overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
                <div className="w-full relative rounded-[8px] md:rounded-[12px] lg:rounded-[24px] overflow-hidden">
                  <ImageWithFallback 
                    src={uiImage}
                    alt="Our Solutions UI"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain block relative z-10"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Gradient background overlay between UI diagram and Bento Cards */}
          <div className="absolute -bottom-[80px] lg:-bottom-[100px] left-0 w-full h-[60%] bg-gradient-to-t from-[#000000] to-transparent pointer-events-none z-[5]"></div>
        </div>

        {/* Subtitle / Section Title before Bento */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-start md:items-start text-left md:text-left mb-8 lg:mb-10 z-20 relative -mt-5"
        >
          <h2 className="font-['Nunito',_sans-serif] font-regular text-white leading-tight text-[24px]">
            Global Institutional Digital Asset Infrastructure
          </h2>
          
          {/* Learn More Button Moved Under Subtitle */}
          <div 
            className="group flex items-center text-[#00D661] text-[20px] cursor-pointer w-fit leading-[normal] mt-4 lg:mt-[26px]"
            onClick={() => navigate('/service')}
          >
            <span className="relative pb-[2px] mr-2 font-regular text-[16px] group-hover:text-white transition-colors duration-300">
              LEARN MORE
              <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
            <div className="w-[20px] h-[20px] -ml-[4px] flex items-center justify-center transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-0">
              <Icon />
            </div>
          </div>
        </motion.div>

        {/* Bento Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-[24px] w-full mt-[36px] lg:mt-[56px]">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
              style={{ willChange: 'transform, opacity' }}
              className={`flex flex-col px-[32px] pt-8 lg:pt-10 pb-[32px] rounded-[24px] transition-all duration-500 cursor-pointer relative group overflow-hidden bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 hover:border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] ${feature.colSpan} min-h-[340px] lg:min-h-[380px] xl:h-auto ${idx < 3 ? 'xl:aspect-[378/380]' : 'xl:aspect-[580/380]'}`}
            >
              {/* Image Background */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none transition-transform duration-700 opacity-80 group-hover:opacity-100">
                <ImageWithFallback src={feature.image} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover m-[0px] contrast-[1.1] saturate-[0.7] sepia-[0.15] brightness-[0.9]" />
                {/* Retro Frosted/Grainy Overlay (Noise) */}
                <div 
                  className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.15]" 
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                ></div>
                {/* Subtle shadow gradient & tint to enhance the matte texture */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-[#00d661]/10 pointer-events-none mix-blend-overlay"></div>
              </div>
              
              {/* Text Content */}
              <div className="mt-auto flex flex-col justify-start items-start text-left relative z-10 w-full mb-0">
                <h3 className={`text-[20px] lg:text-[24px] font-bold mb-3 translate-y-[8px] uppercase tracking-wider leading-[1.3] font-['Nunito',_sans-serif] text-white transition-colors duration-300 w-full flex justify-start ${feature.titleClassName || ''}`}>
                  <span className="block text-left text-[20px] whitespace-pre-line">{feature.title}</span>
                </h3>
                <p className={`leading-[1.6] font-light font-['Nunito',_sans-serif] text-white/40 transition-colors duration-300 w-full translate-y-[4px] text-[#ffffff80] text-[14px]`}>
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