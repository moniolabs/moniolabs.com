import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { handleContactClick } from '../utils/contact';

export function About() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto flex flex-col font-['Nunito',sans-serif] bg-[#000000] relative text-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 w-full flex flex-col bg-[#000000] pt-[80px] lg:pt-[104px] relative z-10">
        <main className="flex-1 w-full flex flex-col items-center justify-center relative z-10 py-8 lg:py-16">
          {/* Contact Content */}
          <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col items-center text-center relative z-10">
            <motion.h2 
              className="text-[#00D661] font-regular tracking-[2px] uppercase mb-6 text-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
               Contact
            </motion.h2>
            
            <motion.h1 
              className="font-bold leading-[1.1] tracking-[-0.02em] text-white text-[48px] md:text-[56px] lg:text-[72px] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get in Touch
            </motion.h1>

            <motion.p
              className="max-w-[600px] w-full leading-[1.6] font-regular text-[#D7D7D7] mb-12 text-[18px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We would love to hear from you. Reach out to our team at the email below for inquiries, partnerships, or support.
            </motion.p>

            <motion.div 
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-center justify-center hover:border-[#00D661]/40 transition-colors duration-300 px-[32px] py-[16px]">
                <span className="text-white font-light tracking-wide text-[24px]">
                  enquiry@moniolabs.com
                </span>
              </div>

              <a 
                href="mailto:enquiry@moniolabs.com"
                onClick={(e) => handleContactClick(e, 'enquiry@moniolabs.com')}
                className="mt-[10px] group relative flex items-center justify-center bg-[#00D661] hover:bg-white rounded-full h-[56px] px-8 overflow-hidden transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-[12px] translate-x-[6px] transition-transform duration-300 group-hover:translate-x-[20px]">
                  <span className="font-bold text-[#001222] text-[16px] uppercase leading-none whitespace-nowrap translate-y-[1px]">Contact Us</span>
                  <div className="size-[32px] shrink-0 relative transition-opacity duration-300 group-hover:opacity-0">
                    <svg className="absolute inset-0 size-full block" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                      <circle cx="15" cy="15" fill="#001222" r="15" />
                      <path d="M9 15H21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                      <path d="M15 9L21 15L15 21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.71429" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </main>

        {/* Ambient Glow Separator before Footer */}
        <div className="absolute bottom-0 left-0 w-full h-[60px] pointer-events-none z-0">
          {/* Multiple overlapping elliptical glows to create an undulating/wavy edge */}
          <div className="absolute bottom-[-20px] left-[-5%] w-[35%] h-[40px] bg-[#00D661] opacity-80 blur-[45px] mix-blend-screen rounded-full translate-y-2"></div>
          <div className="absolute bottom-[-40px] left-[20%] w-[40%] h-[60px] bg-[#00E5FF] opacity-90 blur-[50px] mix-blend-screen rounded-full -translate-y-4"></div>
          <div className="absolute bottom-[-15px] right-[20%] w-[35%] h-[35px] bg-[#0055FF] opacity-80 blur-[40px] mix-blend-screen rounded-full translate-y-1"></div>
          <div className="absolute bottom-[-35px] right-[-5%] w-[30%] h-[55px] bg-[#00D661] opacity-80 blur-[45px] mix-blend-screen rounded-full -translate-y-3"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}