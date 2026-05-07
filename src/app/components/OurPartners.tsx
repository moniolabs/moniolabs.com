import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cobo, Safeheron, FireblocksLogo, BisonBank, UnionMeta } from '../../imports/Frame427318503';
import { motion } from 'motion/react';
import coboImage from "../../imports/image-65.png";
import safeheronBg from "../../imports/image-64.png";
import fireblocksBg from "figma:asset/7a6e7965ada11b5c7207f25213afff1a9ed30d63.png";
import bisonBankBg from "../../imports/image-63.png";
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
    image: coboImage,
    description: "Cobo is a premier digital asset wallet platform designed to empower blockchain innovation. With a single integration, users can access four distinct wallet technologies, plug-and-play APIs, and a multi-layered security matrix.\n\nCobo provides the essential infrastructure to help your blockchain projects scale and launch with speed and confidence.",
    placeholderText: 'Trusted Digital Asset Platform'
  },
  {
    name: 'Safeheron',
    Logo: Safeheron,
    image: safeheronBg,
    description: "Safeheron is a leading self-custody service provider designed to secure institutional digital assets. With an open-source framework, users can access advanced MPC-TEE technologies, transparent security protocols, and a comprehensive management matrix.\n\nSafeheron provides the essential infrastructure to help your business maintain 100% asset control and scale with peak operational efficiency and confidence.",
    placeholderText: 'Open-Source MPC Security'
  },
  {
    name: 'Fireblocks',
    Logo: FireblocksLogo,
    image: fireblocksBg,
    description: "Fireblocks is a premier digital asset security platform designed to empower financial institutions. By leveraging advanced MPC and TEE isolation, users can access secure custody, automated workflows, and a multi-chain settlement network.\n\nFireblocks provides the essential infrastructure to help your business manage trillions in assets and scale with institutional-grade security and confidence.",
    placeholderText: 'Leading Digital Asset Infrastructure'
  },
  {
    name: 'Bison Bank',
    Logo: BisonBank,
    image: bisonBankBg,
    description: "With over 25 years of experience, Bison Bank is a premier Portuguese financial institution providing specialized services in Private Banking, Depository Banking, Corporate Advisory, and Digital Assets within the Portuguese market.\n\nThe bank combines the trust of a solid heritage with a highly personalized, innovative approach, helping clients achieve their financial goals both in Portugal and internationally.",
    placeholderText: 'Unified Traditional\n& Digital Banking'
  },
  {
    name: 'UnionMeta',
    Logo: UnionMeta,
    image: unionMetaBg,
    description: "UnionMeta is a premier fintech infrastructure provider designed to empower institutional crypto entry. By leveraging deep payment expertise and secure asset management, users can access streamlined blockchain integration, fiat-to-crypto bridges, and scalable growth solutions.\n\nUnionMeta provides the essential infrastructure to help your business bypass technical hurdles and launch global ventures with speed and confidence.",
    placeholderText: 'Unified Fiat-Crypto Infrastructure'
  },
  {
    name: 'FiderePay',
    Logo: FiderePayLogoWhite,
    image: fiderePayBg,
    description: "Fidere Pay is a premier payment infrastructure designed to empower global digital-fiat movement. By leveraging real-time blockchain clearing rails, users can access high-speed cross-border settlements, automated reconciliation, and 24/7 liquidity management.\n\nFidere Pay provides the essential infrastructure to help your business bypass legacy banking friction and launch compliant payment solutions with speed and confidence.",
    placeholderText: 'Modernizing Institutional Global Payments'
  }
];

const PartnerCard = ({ partner, isDragging, index }: { partner: any, isDragging: boolean, index: number }) => {
  let logoScale = 'scale-125';
  if (partner.name === 'Fireblocks') logoScale = 'scale-110';
  else if (partner.name === 'Bison Bank') logoScale = 'scale-150';
  else if (partner.name === 'UnionMeta') logoScale = 'scale-[1.15]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity' }}
      className={`flex flex-col items-stretch w-[320px] md:w-[400px] lg:w-[430px] xl:w-[430px] shrink-0 bg-[#050505] rounded-[24px] border border-[#2D2D2D] overflow-hidden group/card hover:border-[#444444] transition-all duration-500 snap-start`}
    >

      {/* Full Width: Image, Logo & Placeholder Text - Aspect ratio 860:956 */}
      <div className="relative w-full aspect-[860/956] shrink-0 bg-[#000000] overflow-hidden">
        <ImageWithFallback
          src={partner.image}
          alt={partner.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center pointer-events-none">
          <div className={`flex items-center justify-center brightness-0 invert mb-4 lg:mb-8 transition-transform duration-500 ${logoScale}`}>
            <partner.Logo />
          </div>
          <div className="px-6 py-3 rounded-[32px] border border-white/20 bg-black/40 backdrop-blur-sm transition-all duration-500 min-w-[280px] lg:min-w-[340px] flex items-center justify-center">
            <p className="text-white/90 font-['Nunito',sans-serif] text-[12px] lg:text-[14px] tracking-[0.15em] uppercase font-bold p-[0px] whitespace-pre-line text-center">
              {partner.placeholderText}
            </p>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export function OurPartners() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const scrollLeftBtn = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : window.innerWidth < 1024 ? 400 : 430;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : window.innerWidth < 1024 ? 400 : 430;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftPos(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#001222] to-[#000000] pt-[104px] pb-16 lg:pt-[200px] lg:pb-[100px] flex flex-col items-center relative overflow-hidden -mt-[60px] md:mt-0 z-20" id="newsroom">
      
      {/* Styles for Exact Scroll Snapping & Padding */}
      <style dangerouslySetInnerHTML={{__html: `
        #newsroom {
          --card-width: 320px;
          --left-padding: 1.5rem; /* 24px */
        }
        @media (min-width: 768px) {
          #newsroom { --card-width: 400px; }
        }
        @media (min-width: 1024px) {
          #newsroom {
            --card-width: 430px;
            --left-padding: max(3rem, calc(50vw - 640px + 3rem));
          }
        }
        @media (min-width: 1280px) {
          #newsroom { --card-width: 430px; }
        }
        @media (min-width: 1920px) {
          #newsroom { --left-padding: max(3rem, calc(50vw - 34.375vw + 20px + 3rem)); }
        }
        @media (min-width: 2240px) {
          #newsroom { --left-padding: max(3rem, calc(50vw - 750px + 3rem)); }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* Header Section */}
      <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col transition-all duration-300">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 lg:mb-[60px] w-full gap-6">
          <div className="flex flex-col items-start">
            <h2 className="text-[#00D661] font-regular leading-normal lg:leading-[42px] mb-4 lg:mb-[20px] font-['Nunito',_sans-serif] text-[24px] uppercase">
              OUR PARTNERS
            </h2>
            <div className="text-white text-[32px] lg:text-[48px] leading-tight lg:leading-[70px] font-['Nunito',_sans-serif]">
              <p className="font-bold m-0">The Network We Build</p>
              <p className="font-light m-0 mt-2 lg:mt-0">Innovating with Global Partners</p>
            </div>
          </div>

          {/* Optional: Slider Navigation Controls (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={scrollLeftBtn}
              className="w-12 h-12 rounded-full border border-[#2D2D2D] flex items-center justify-center text-white hover:bg-[#00D661] hover:text-black hover:border-[#00D661] transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
            </button>
            <button 
              onClick={scrollRightBtn}
              className="w-12 h-12 rounded-full border border-[#2D2D2D] flex items-center justify-center text-white hover:bg-[#00D661] hover:text-black hover:border-[#00D661] transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed Slider Container */}
      <div className="w-full relative group">
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex overflow-x-auto gap-6 lg:gap-8 pb-12 pt-4 hide-scrollbar select-none scroll-pl-[var(--left-padding)] ${
            isDragging 
              ? 'cursor-grabbing snap-none scroll-auto' 
              : 'cursor-grab snap-x snap-mandatory scroll-smooth'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >

          {/* Alignment Spacer (Left) */}
          <div className="shrink-0 w-[var(--left-padding)] pointer-events-none" aria-hidden="true" />

          {/* Cards */}
          {partners.map((partner, index) => (
            <PartnerCard key={index} index={index} partner={partner} isDragging={isDragging} />
          ))}

          {/* Alignment Spacer (Right) ensures the last card can scroll fully to the left alignment */}
          <div className="shrink-0 min-w-[var(--left-padding)] w-[calc(100vw-var(--left-padding)-var(--card-width))] pointer-events-none" aria-hidden="true" />
          
        </div>
      </div>

    </section>
  );
}