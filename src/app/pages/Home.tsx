import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Cobo, Safeheron, FireblocksLogo, BisonBank, UnionMeta } from '../../imports/Frame427318503';
import FiderePayNew from '../../imports/Group1597880560/Group1597880560';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { DarkVeil } from '../components/DarkVeil';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { OurSolutions } from '../components/OurService';
import { OurPartners } from '../components/OurPartners';
import { OurLicense } from '../components/OurLicense';
import { GetStarted } from '../components/GetStarted';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { LightBeamDivider } from '../components/LightBeamDivider';
import SoftAurora from '../components/SoftAurora';
import coinGif from '../../imports/coin.gif';
import { handleContactClick } from '../utils/contact';

export function Home() {
  // Trigger Vite HMR 2
  return (
    <div className="w-full min-h-screen bg-black font-['Nunito',sans-serif] text-white flex flex-col">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full h-screen min-h-[850px] bg-gradient-to-b from-[#001222] from-[37%] to-[#000000] relative overflow-hidden flex flex-col items-center shrink-0">
        {/* Background Ambience & Lighting */}
      <div className="absolute inset-x-0 top-0 h-[calc(100%+240px)] z-0 pointer-events-none mix-blend-screen">
        <DarkVeil
          hueShift={65}
          noiseIntensity={0.09}
          scanlineIntensity={0.66}
          speed={1.4}
          scanlineFrequency={1.4}
          warpAmount={0}
        />
      </div>

      {/* Main Constraints Wrapper */}
      <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col h-full relative z-10 transition-all duration-300 pt-[96px] mx-auto">
        
        {/* Hero Content Area */}
        <main className="flex-1 flex flex-col justify-center lg:flex-row items-center lg:justify-between gap-12 lg:gap-[64px] relative">
          
          {/* Left Text Column */}
          <div className="flex-1 w-full max-w-[700px] flex flex-col items-start justify-center lg:justify-start text-left z-10 relative -translate-y-[40px] lg:translate-y-0">
            <h1 className="font-normal leading-[1.1] md:leading-[1.05] tracking-[-0.02em] relative mb-[24px] lg:mb-[16px] w-full">
              <span className="text-white font-bold whitespace-normal lg:whitespace-nowrap block pb-[4px] md:pb-[10px] leading-[1.1] text-[48px] sm:text-[64px] md:text-[88px] break-words">Borderless OTC</span>
              <span className="text-white font-light inline-block whitespace-normal lg:whitespace-nowrap leading-[1.1] text-[40px] sm:text-[56px] md:text-[74px] break-words">
                for Business Treasury
              </span>
            </h1>
            
            <p className="max-w-[640px] leading-[1.5] md:leading-[1.6] font-regular text-[#D7D7D7] relative mb-[32px] lg:mb-[76px] text-[16px] md:text-[19px]">Trade, convert and settle crypto-fiat in one institutional-grade pipeline</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={(e) => handleContactClick(e, 'enquiry@moniolabs.com')}
                className="group relative flex items-center justify-center bg-[#00D661] hover:bg-white rounded-full h-[48px] w-[164px] overflow-hidden transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-[8px] translate-x-[4px] transition-transform duration-300 group-hover:translate-x-[19px]">
                  <span className="font-bold text-[#001222] text-[14px] uppercase leading-none whitespace-nowrap translate-y-[1px]">contact us</span>
                  <div className="size-[30px] shrink-0 relative transition-opacity duration-300 group-hover:opacity-0">
                    <svg className="absolute inset-0 size-full block" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                      <circle cx="15" cy="15" fill="#001222" r="15" />
                      <path d="M9 15H21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                      <path d="M15 9L21 15L15 21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div 
            className="hidden lg:flex absolute top-1/2 -translate-y-[calc(50%+28px)] z-10 pointer-events-none justify-start"
            style={{ 
              left: '780px' // 700px (text width) + 80px (gap)
            }}
          >
            <img
              src={coinGif}
              alt="Coin Visual"
              className="w-auto max-w-none object-contain object-left pointer-events-none origin-left"
              style={{
                height: 'max(81vh, 688px)'
              }}
            />
          </div>

        </main>

        {/* Partner Logos */}
        <div className="w-full h-[60px] lg:h-[80px] my-6 lg:my-10 mt-auto relative flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -translate-y-[40px]">
          <motion.div
            className="flex items-center gap-[80px] lg:gap-[120px] min-w-max pr-[80px] lg:pr-[120px]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25
            }}
          >
            {[Cobo, Safeheron, FireblocksLogo, BisonBank, UnionMeta, FiderePayNew, Cobo, Safeheron, FireblocksLogo, BisonBank, UnionMeta, FiderePayNew].map((LogoComponent, i) => {
              let extraScale = 1;
              if (LogoComponent === FireblocksLogo) extraScale = 29 / 32;
              else if (LogoComponent === BisonBank) extraScale = 36 / 32;
              else if (LogoComponent === UnionMeta) extraScale = 30 / 32;
              else if (LogoComponent === FiderePayNew) extraScale = 1; // already ~32px height
              
              return (
                <div key={i} className="flex items-center justify-center scale-75 md:scale-90 lg:scale-100 brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <div style={{ transform: `scale(${extraScale})` }} className="origin-center">
                    <LogoComponent />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
        
      </div>
    </section>

    {/* Second Module: Why choose Moniolabs? */}
    <div className="pt-0 md:pt-[80px] pb-[40px] bg-black">
      <WhyChooseUs />
    </div>

    {/* Light Beam Divider */}
    <LightBeamDivider />

    {/* Third Module: Our Solutions */}
    <OurSolutions />

    {/* Fourth Module: Our Partners / Newsroom */}
    <OurPartners />

    {/* Fifth Module: Our License */}
    <OurLicense />

    {/* Transition effect between Our License and Get Started */}
    <div className="w-full h-[200px] sm:h-[280px] relative bg-black overflow-hidden pointer-events-none sm:pointer-events-auto">
      <div className="absolute inset-0 z-0 translate-y-[40px] sm:translate-y-0">
        <SoftAurora
          speed={0.8}
          scale={0.06}
          brightness={1.8}
          color1="#4348a3"
          color2="#03ff75"
          noiseFrequency={1.2}
          noiseAmplitude={2.5}
          bandHeight={0.5}
          bandSpread={0.2}
          octaveDecay={0.2}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.1}
        />
      </div>
      {/* Fade masks to blend seamlessly with the black sections above and below */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black" />
    </div>

    {/* Sixth Module: Get Started */}
    <GetStarted />

    {/* Footer Module */}
    <Footer />
  </div>
  );
}