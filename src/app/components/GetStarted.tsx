import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import DotGrid from './DotGrid';
import { handleContactClick } from '../utils/contact';

export function GetStarted() {
  return (
    <section className="w-full bg-black py-16 lg:py-[100px] flex flex-col items-center relative overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="#555555"
          hoverEffect={false}
        />
      </div>

      <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col items-center justify-center z-10 mx-auto transition-all duration-300 gap-10 lg:gap-14 text-center pointer-events-auto">
        
        {/* Top Section (Title & Slogan) */}
        <div className="flex flex-col items-center w-full">
          <h2 className="text-[#00D661] font-regular leading-normal lg:leading-[42px] mb-4 lg:mb-[20px] font-['Nunito',_sans-serif] text-[24px] uppercase tracking-wide">
            GET STARTED
          </h2>
          <div className="text-white text-[32px] lg:text-[48px] leading-tight lg:leading-[70px] font-['Nunito',_sans-serif]">
            <span className="font-bold">Ready to Start Your </span>
            <span className="font-light text-[#D7D7D7] lg:text-white">MonioLabs Journey?</span>
          </div>
        </div>

        {/* Bottom Section (Action Button) */}
        <div className="flex flex-col items-center w-full">
          {/* Button 1: Send an Email */}
          <a 
            href="mailto:enquiry@moniolabs.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleContactClick(e, 'enquiry@moniolabs.com')}
            className="relative w-full block lg:w-[400px] h-[68px] overflow-hidden bg-white/5 hover:bg-[#00D661] border border-white/10 hover:border-[#00D661] transition-all duration-300 rounded-[16px] group cursor-pointer backdrop-blur-md hover:shadow-[0_0_20px_rgba(0,214,97,0.15)]"
          >
            {/* Text & Mail Icon */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:left-1/2 group-hover:-translate-x-1/2 flex items-center gap-4">
              <Mail className="w-6 h-6 text-[#00D661] group-hover:text-[#001222] transition-colors duration-300" />
              <span className="text-white group-hover:text-[#001222] text-[18px] lg:text-[20px] font-['Nunito',_sans-serif] font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap">
                Send an Email
              </span>
            </div>

            {/* Arrow */}
            <div className="absolute top-1/2 -translate-y-1/2 right-8 translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0 group-hover:translate-x-8">
              <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#001222]/10 flex items-center justify-center transition-colors duration-300 shrink-0">
                <ArrowRight className="w-5 h-5 text-white group-hover:text-[#001222] transition-colors duration-300" />
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
