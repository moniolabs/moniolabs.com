import React from 'react';
import { Link } from 'react-router';
import MoniolabsLogo from '../../imports/Frame1597880846/Frame1597880846.tsx';
import ContactIcon from "../../imports/Icon-1/Icon-2237-56";
import { handleContactClick } from '../utils/contact';

export function Footer() {
  return (
    <footer className="w-full bg-[#000E18] pt-[124px] pb-[144px] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col lg:flex-row justify-between z-10 mx-auto transition-all duration-300 gap-16 lg:gap-0">
        
        {/* Left Section */}
        <div className="flex flex-col items-start">
          {/* Logo */}
          <Link to="/" className="w-[149px] h-[31px] relative shrink-0 mb-[21px] block cursor-pointer opacity-90 hover:opacity-100 transition-opacity">
            <MoniolabsLogo />
          </Link>

          {/* Slogan */}
          <div className="flex flex-col mb-[48px]">
            <h2 className="font-['Nunito',_sans-serif] font-semibold text-[24px] lg:text-[28px] text-white leading-normal m-0 opacity-90 whitespace-nowrap">
              Borderless OTC
            </h2>
            <h2 className="font-['Nunito',_sans-serif] font-normal text-[24px] lg:text-[28px] text-white leading-normal m-0 opacity-90 whitespace-nowrap">
              for Business Treasury
            </h2>
          </div>

          {/* Copyright */}
          <p className="font-['Nunito',_sans-serif] font-normal text-[#6e7f9e] leading-[21px] m-0 opacity-90 whitespace-nowrap text-[13px]">
            © 2026 Moniolabs. All rights reserved.
          </p>
        </div>

        {/* Right Section - Links */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[100px]">
          
          {/* MONIOLABS Column */}
          <div className="flex flex-col gap-6 lg:gap-[31px] lg:flex-1">
            <h3 className="font-['Nunito',_sans-serif] font-semibold text-white leading-[19.5px] tracking-[1.04px] uppercase m-0 opacity-90 text-[13px]">
              Moniolabs
            </h3>
            <Link to="/service" className="font-['Nunito',_sans-serif] font-regular text-white/80 leading-[22.5px] hover:text-[#00D661] transition-colors duration-300 text-[13px]">
              Service
            </Link>
            <div className="flex items-center cursor-default select-none group w-fit">
              <span className="font-['Nunito',_sans-serif] font-regular text-white/80 leading-[22.5px] text-[13px]">
                API
              </span>
              <div className="ml-[8px] bg-[#0B1F30] text-[#6E7F9E] h-[20px] px-[8px] rounded-[3px] leading-[20px] uppercase flex items-center justify-center tracking-normal font-semibold text-[10px] whitespace-nowrap">
                Coming soon
              </div>
            </div>
          </div>

          {/* ABOUT Column */}
          <div className="flex flex-col gap-6 lg:gap-[31px] lg:flex-1">
            <h3 className="font-['Nunito',_sans-serif] font-semibold text-white leading-[19.5px] tracking-[1.04px] uppercase m-0 opacity-90 text-[13px]">
              ABOUT
            </h3>
            <Link to="/about" className="font-['Nunito',_sans-serif] font-regular text-white/80 leading-[22.5px] hover:text-[#00D661] transition-colors duration-300 text-[13px]">
              About Us
            </Link>
            <Link to="/terms-privacy" className="font-['Nunito',_sans-serif] font-regular text-white/80 leading-[22.5px] hover:text-[#00D661] transition-colors duration-300 text-[13px]">
              Terms & Privacy
            </Link>
          </div>

          {/* CONTACT US Column */}
          <div className="flex flex-col gap-6 lg:gap-[31px] lg:flex-1">
            <h3 className="font-['Nunito',_sans-serif] font-semibold text-white leading-[19.5px] tracking-[1.04px] uppercase m-0 opacity-90 text-[13px]">
              CONTACT US
            </h3>
            <div className="flex items-center gap-[7px] group">
              <div className="w-[14px] h-[14px] relative shrink-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity [&_path]:group-hover:stroke-[#00D661] [&_path]:transition-colors">
                <ContactIcon />
              </div>
              <a 
                href="mailto:enquiry@moniolabs.com" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleContactClick(e, 'enquiry@moniolabs.com')}
                className="font-['Nunito',_sans-serif] font-normal text-white/80 leading-[21.75px] underline decoration-solid hover:text-[#00D661] transition-colors duration-300 text-[13px]"
              >
                enquiry@moniolabs.com
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
