import React from 'react';
import svgPaths from "../../imports/OurLicense/svg-vijh8f7xto";

function ShieldCheckIcon() {
  return (
    <div className="w-[40px] h-[40px] shrink-0 relative flex items-center justify-center">
      <div className="w-[28.667px] h-[32.8477px] relative">
        <svg className="absolute block inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.667 32.8477">
          <g id="Frame">
            <path d={svgPaths.p29090800} fill="url(#paint0_linear_icon)" id="Union" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_icon" x1="14.3335" x2="14.3335" y1="0" y2="32.8477">
              <stop stopColor="#00FF74" />
              <stop offset="0.0714286" stopColor="#01E07E" />
              <stop offset="0.142857" stopColor="#00D36D" />
              <stop offset="0.214286" stopColor="#03DEAC" />
              <stop offset="0.285714" stopColor="#01C6AF" />
              <stop offset="0.357143" stopColor="#00999A" />
              <stop offset="0.428571" stopColor="#008CA2" />
              <stop offset="0.5" stopColor="#027FA8" />
              <stop offset="0.571429" stopColor="#0177A0" />
              <stop offset="0.642857" stopColor="#006E99" />
              <stop offset="0.714286" stopColor="#006691" />
              <stop offset="0.785714" stopColor="#005E8A" />
              <stop offset="0.857143" stopColor="#005683" />
              <stop offset="0.928571" stopColor="#004E7B" />
              <stop offset="1" stopColor="#004674" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function OurLicense() {
  return (
    <section className="w-full bg-black flex flex-col pt-[64px] pb-16 lg:pt-[140px] lg:pb-[80px] justify-center items-center relative z-20">
      <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between transition-all duration-300 mx-auto gap-12 lg:gap-0">
        
        {/* Left Content */}
        <div className="flex flex-col items-start text-left lg:items-start lg:text-left w-full lg:max-w-[500px]">
          <h2 className="text-[#00D661] font-['Nunito',_sans-serif] font-normal leading-normal mb-4 lg:mb-[20px] uppercase tracking-[0.6px] text-[24px]">
            Our license
          </h2>
          <div className="flex flex-col text-white font-['Nunito',_sans-serif] text-[36px] md:text-[48px] leading-[1.2] lg:leading-[70px]">
            <p className="font-bold m-0">Regulated Security</p>
            <p className="font-light m-0">Verified Trust</p>
          </div>
        </div>

        {/* Divider (Hidden on mobile/tablet) */}
        <div 
          className="hidden lg:block w-[1.5px] h-[120px] shrink-0 opacity-[0.3]" 
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 15%, #FFFFFF 50%, rgba(255,255,255,0.2) 85%, rgba(255,255,255,0) 100%)' }}
        />

        {/* Right Content */}
        <div className="flex flex-col gap-6 lg:gap-8 font-['Nunito',_sans-serif] font-light text-[24px] md:text-[32px] text-white w-full lg:w-auto items-start lg:items-start">
          <div className="flex items-center gap-[20px]">
            <ShieldCheckIcon />
            <span className="leading-[40px] m-0">USA MSB Registered</span>
          </div>
          <div className="flex items-center gap-[20px]">
            <ShieldCheckIcon />
            <span className="leading-[40px] m-0">HK TCSP Licensed</span>
          </div>
        </div>

      </div>
    </section>
  );
}
