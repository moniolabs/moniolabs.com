import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GetStarted } from '../components/GetStarted';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Cobo, Safeheron, FireblocksLogo, BisonBank, UnionMeta } from '../../imports/Frame427318503';
import bisonBankBg from "../../imports/image-63.png";
import safeheronBg from "../../imports/image-64.png";
import coboBg from "../../imports/image-65.png";
import unionMetaBg from "../../imports/image-66.png";
import fiderePayBg from "../../imports/image-67.png";
import FiderePayNew from "../../imports/Group1597880560/Group1597880560";

const FiderePayLogoWhite = () => (
  <div style={{ '--fill-0': 'white' } as React.CSSProperties}>
    <FiderePayNew />
  </div>
);

const partners = [
  {
    name: 'Cobo',
    Logo: Cobo,
    image: coboBg,
    description: "Cobo is a globally trusted leader in digital asset custody solutions. As the world's first omni-custody platform, Cobo empowers organizations to secure and manage their digital assets with unparalleled flexibility and security, ensuring robust institutional-grade protection at all times.",
    placeholderText: 'Strategic Custody Partner'
  },
  {
    name: 'Safeheron',
    Logo: Safeheron,
    image: safeheronBg,
    description: "Safeheron is an open-source digital asset self-custody platform based on Secure Multi-Party Computation (MPC) and Trusted Execution Environment (TEE) technology. They provide enterprise-grade security and total control for Web3 SMEs and financial institutions.",
    placeholderText: 'MPC Security Infrastructure'
  },
  {
    name: 'Fireblocks',
    Logo: FireblocksLogo,
    image: 'https://images.unsplash.com/photo-1687463221020-b8769b32c622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ2VvbWV0cmljJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzc2MTA1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: "Fireblocks is an enterprise-grade platform delivering a secure infrastructure for moving, storing, and issuing digital assets. They enable exchanges, lending desks, custodians, and banks to securely scale digital asset operations with confidence.",
    placeholderText: 'Enterprise Digital Asset Platform'
  },
  {
    name: 'Bison Bank',
    Logo: BisonBank,
    image: bisonBankBg,
    description: "With over 25 years of experience, Bison Bank is a premier Portuguese financial institution providing specialized services in Private Banking, Depository Banking, Corporate Advisory, and Digital Assets within the Portuguese market.\n\nThe bank combines the trust of a solid heritage with a highly personalized, innovative approach, helping clients achieve their financial goals both in Portugal and internationally.",
    placeholderText: 'Licensed Banking & Custody'
  },
  {
    name: 'UnionMeta',
    Logo: UnionMeta,
    image: unionMetaBg,
    description: "Established in 2023, UnionMeta was founded to address the critical resource and time constraints faced by traditional financial institutions entering the digital asset space. Recognizing that building complex fintech infrastructure from scratch is a significant barrier to entry, the firm provides a streamlined path for businesses to launch and scale crypto-related ventures.\n\nUnionMeta bridges the gap between traditional fiat payments and blockchain innovation. By leveraging deep expertise in both payment product design and secure asset management, the company empowers fintech entrepreneurs to bypass technical hurdles and focus on global growth. UnionMeta serves as a strategic partner, enabling a seamless and secure transition into the institutional crypto landscape.",
    placeholderText: 'Global Settlement Network'
  },
  {
    name: 'FiderePay',
    Logo: FiderePayLogoWhite,
    image: fiderePayBg,
    description: "Fidere Pay is a premier payment infrastructure designed to streamline capital movement between traditional fiat systems and the digital asset economy. Operating as a core pillar of the Fidere ecosystem, it provides institutional clients with a secure, high-speed gateway for cross-border settlements, merchant acquiring, and bulk distribution.\n\nBy leveraging real-time blockchain clearing rails, Fidere Pay eliminates the friction of legacy banking hours, offering 24/7 liquidity and automated reconciliation. The platform is engineered for global enterprises and fintechs that require robust, compliant payment solutions to manage dual-asset flows without compromising on security or regulatory integrity.",
    placeholderText: 'Premier Payment Infrastructure'
  }
];

export function Newsroom() {
  return (
    <div className="w-full min-h-screen bg-[#000000] font-['Nunito',sans-serif] text-white flex flex-col pt-[80px] lg:pt-[104px]">
      {/* Fixed Navigation */}
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center pt-12 pb-24 lg:pt-20 lg:pb-[120px] relative z-10">
        {/* Background glowing effects for the section title area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-[#00D661]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Section Title */}
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col items-start lg:items-center text-left lg:text-center mb-16 lg:mb-24 relative z-10">
          <motion.h2 
            className="text-[#00D661] font-bold tracking-[2px] uppercase mb-4 text-[14px] lg:text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Newsroom
          </motion.h2>
          <motion.h1 
            className="font-bold leading-[1.1] tracking-[-0.02em] text-white text-[40px] md:text-[48px] lg:text-[56px] max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Keep Up with the Latest From Our Partners
          </motion.h1>
        </div>

        {/* Vertical Cards List */}
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col gap-12 lg:gap-16 relative z-10">
          {partners.map((partner, index) => {
            let logoScale = 'scale-125';
            if (partner.name === 'Fireblocks') logoScale = 'scale-110';
            else if (partner.name === 'Bison Bank') logoScale = 'scale-150';
            else if (partner.name === 'UnionMeta') logoScale = 'scale-[1.15]';

            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col lg:flex-row items-stretch min-h-[400px] w-full shrink-0 bg-[#050505] rounded-[24px] border border-[#2D2D2D] overflow-hidden group/card hover:border-[#444444] transition-colors duration-500 shadow-lg"
              >
                
                {/* Left Side: Image, Logo & Placeholder Text */}
                <div className="relative w-full lg:w-[45%] h-[320px] lg:h-auto shrink-0 bg-[#000000] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#2D2D2D]">
                  <ImageWithFallback 
                    src={partner.image} 
                    alt={partner.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.35] transition-transform duration-[1.2s] group-hover/card:scale-105 group-hover/card:opacity-50 mix-blend-luminosity pointer-events-none" 
                  />
                  {/* Subtle green tint overlay on hover */}
                  <div className="absolute inset-0 bg-[#00D661] opacity-0 group-hover/card:opacity-[0.05] transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center pointer-events-none">
                    <div className={`flex items-center justify-center brightness-0 invert mb-4 lg:mb-8 transition-transform duration-500 ${logoScale}`}>
                      <partner.Logo />
                    </div>
                    <div className="px-6 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition-all duration-500">
                      <p className="text-white/90 font-['Nunito',sans-serif] text-[12px] lg:text-[14px] tracking-[0.15em] uppercase font-bold">
                        {partner.placeholderText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Company Name & Intro Text */}
                <div className="flex-1 flex flex-col items-start justify-center p-8 lg:p-12 xl:p-16 relative bg-[#0A0A0A] group-hover/card:bg-[#0F0F0F] transition-colors duration-500">
                  <h3 className="text-white text-[28px] lg:text-[36px] font-bold font-['Nunito',sans-serif] mb-6">
                    {partner.name}
                  </h3>
                  <p className="text-[#D7D7D7] text-[16px] lg:text-[18px] leading-[1.7] font-['Nunito',sans-serif] opacity-80 group-hover/card:opacity-100 transition-opacity duration-500 mb-10 whitespace-pre-line">
                    {partner.description}
                  </p>
                  
                  <div className="mt-auto w-full">
                    <button className="flex items-center text-[#00D661] text-[15px] uppercase tracking-widest font-bold font-['Nunito',sans-serif] hover:text-white transition-colors cursor-pointer w-fit overflow-hidden group/btn">
                      <span className="relative pb-1">
                        Read Article
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover/btn:w-full"></span>
                      </span>
                      <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" strokeWidth={2} />
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </main>

      <GetStarted />
      <Footer />
    </div>
  );
}