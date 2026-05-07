import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GetStarted } from '../components/GetStarted';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import uiImage from '../../imports/image-49.png';
import img20 from '../../imports/image-120.png';
import img21 from '../../imports/image-122.png';
import img22 from '../../imports/image-123.png';
import img23 from '../../imports/image-124.png';
import img24 from '../../imports/image-125.png';

const features = [
  {
    title: 'Institutional OTC Trading Desk',
    description: 'Dedicated OTC execution for large-scale digital asset transactions, serving corporates, funds and treasury operations.',
    colSpan: 'md:col-span-2 lg:col-span-2 lg:row-span-2',
    image: img20
  },
  {
    title: 'Cross-Border Settlement',
    description: 'Secure, regulated clearing and settlement between crypto assets and global fiat currencies for international businesses.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    image: img21
  },
  {
    title: 'Enterprise Digital\nAsset Liquidity',
    description: 'Custom liquidity solutions and asset conversion services to support corporate treasury and operational crypto needs.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    image: img22,
    titleClassName: 'lg:!text-[18px] xl:!text-[20px] 2xl:!text-[22px] !tracking-normal whitespace-pre-line'
  },
  {
    title: 'Local Virtual Account Solutions',
    description: 'Dedicated local virtual account infrastructure to simplify regional fiat deposits, withdrawals and treasury reconciliation for businesses.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    image: img23
  },
  {
    title: 'Developer API Integration',
    description: 'Secure, scalable API endpoints for custom system integration, automated trading workflows and embedded crypto-fiat operations.',
    colSpan: 'md:col-span-1 lg:col-span-2',
    image: img24
  }
];

const GRID_X_LINES = ['4%', '15%', '22%', '88%'];
const GRID_Y_LINES = [280, 680, 1020];

export function Service() {
  // Trigger Vite HMR 34
  return (
    <div className="w-full min-h-screen bg-[#000000] font-['Nunito',sans-serif] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full relative z-10 pt-[200px] lg:pt-[240px] pb-[60px] lg:pb-[120px] overflow-hidden">
        
        {/* Custom Hero Background: Dots, Grid, and Diffuse Gradients */}
        <div className="absolute top-[80px] left-0 w-full h-[700px] md:h-[1200px] pointer-events-none z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_6%,white_20%,white_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_6%,white_20%,white_40%,transparent_100%)]">
          {/* Irregular Grid Lines using SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-100" xmlns="http://www.w3.org/2000/svg">
            {/* Horizontal Lines */}
            <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
              {GRID_Y_LINES.map(y => <line key={`h-${y}`} x1="0" y1={y} x2="100%" y2={y} />)}
            </g>
            
            {/* Vertical Lines (Positioned specifically on left and right sides) */}
            <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
              {GRID_X_LINES.map(x => <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="100%" />)}
            </g>
          </svg>
          
          {/* Diffuse Gradients */}
          {/* Green */}
          <div className="absolute top-[33%] left-[30%] w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-[#00D661]/40 md:bg-[#00D661]/45 rounded-full blur-[100px] md:blur-[180px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen translate-y-[40px]"></div>
          {/* Blue */}
          <div className="absolute top-[38%] left-[70%] w-[500px] md:w-[1100px] h-[500px] md:h-[1100px] bg-[#0066FF]/40 md:bg-[#0066FF]/45 rounded-full blur-[100px] md:blur-[200px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen translate-y-[40px]"></div>
          {/* White */}
          <div className="absolute top-[35%] md:top-[43%] left-[50%] w-[400px] md:w-[900px] h-[400px] md:h-[900px] bg-white/30 md:bg-white/50 rounded-full blur-[90px] md:blur-[160px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen translate-y-[40px]"></div>
        </div>

        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 flex flex-col items-center relative z-10">
          
          {/* Text Section at the Top */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center mb-[60px] lg:mb-[80px] relative z-20"
          >
            <div className="font-['Nunito',_sans-serif] text-white leading-tight lg:leading-[1.1] text-[40px] md:text-[56px] lg:text-[72px] whitespace-pre-wrap flex flex-col items-center">
              <h1 className="font-bold mb-4">All-in-One Infrastructure</h1>
              <p className="font-light text-[24px] md:text-[32px] lg:text-[40px] text-white/80">Accelerating the Future of Digital Payments</p>
            </div>
          </motion.div>

          {/* UI Image Section */}
          <div className="relative w-full flex flex-col justify-center items-center">
            {/* Bright spots at top-left and top-right of UI image */}
            <div className="absolute top-[5%] md:top-[10%] left-[5%] md:left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#00D661]/60 md:bg-[#00D661]/40 rounded-full blur-[70px] md:blur-[120px] mix-blend-screen pointer-events-none z-0"></div>
            <div className="absolute top-[5%] md:top-[10%] right-[5%] md:right-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#0066FF]/60 md:bg-[#0066FF]/40 rounded-full blur-[70px] md:blur-[120px] mix-blend-screen pointer-events-none z-0"></div>

            <motion.div 
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative w-full pointer-events-none flex justify-center items-center z-10"
            >
              <div className="w-full relative z-20 p-[12px] md:p-[20px] rounded-[24px] lg:rounded-[40px] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="w-full rounded-[12px] lg:rounded-[24px] overflow-hidden bg-black/40 relative">
                  <ImageWithFallback 
                    src={uiImage}
                    alt="Our Solutions UI"
                    className="w-full h-auto object-contain block relative z-10"
                  />
                </div>
              </div>
            </motion.div>

            {/* Full-width Gradient Overlay (approx 2/5 height on mobile, fixed on desktop) */}
            <div 
              className="absolute bottom-[-2px] left-[50%] -translate-x-1/2 w-[100vw] h-[40%] z-30 pointer-events-none" 
              style={{ background: 'linear-gradient(to top, #000000 15%, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.6) 75%, transparent 100%)' }}
            ></div>
          </div>

          {/* Content Wrapper below UI Image ensuring pure black background on mobile */}
          <div className="w-full relative z-20 flex flex-col items-center pt-[40px] lg:pt-[20px]">
            {/* Solid Black Background to strictly block diffuse gradient spread */}
            <div className="absolute top-[-2px] bottom-[-200px] left-[50%] -translate-x-1/2 w-[100vw] bg-[#000000] z-[-1] pointer-events-none"></div>

            {/* Title before the Cards */}
            <div className="w-full flex justify-start mb-0 lg:mb-1 mt-0 relative">
              <h2 className="text-[#00D661] font-regular tracking-[2px] uppercase text-[24px]">
                OTC SERVICES
              </h2>
            </div>

            {/* Feature List (Left-Right Alternating) */}
            <div className="flex flex-col w-full mt-4 lg:mt-8">
            {features.map((feature, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <div className="w-full relative flex items-center justify-center my-[80px] lg:my-[140px]">
                    {/* Solid gray thin line with fading edges */}
                    <div 
                      className="w-full border-t-[1px] border-solid border-gray-600/50"
                      style={{
                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                      }}
                    ></div>
                  </div>
                )}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between w-full gap-8 lg:gap-[80px]`}
                >
                  {/* Image Section */}
                  <div className="relative w-full lg:w-[35%] lg:max-w-[420px] flex-shrink-0 aspect-square rounded-[24px] overflow-hidden group transition-all duration-500 bg-black shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none transition-transform duration-700 opacity-80">
                      <ImageWithFallback src={feature.image} alt={feature.title} className="w-full h-full object-cover m-[0px] contrast-[1.1] saturate-[0.7] sepia-[0.15] brightness-[0.9]" />
                      {/* Retro Frosted/Grainy Overlay (Noise) */}
                      <div 
                        className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none" 
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                      ></div>
                      {/* Subtle shadow gradient & tint to enhance the matte texture */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-[#00d661]/10 pointer-events-none mix-blend-overlay"></div>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="w-full lg:w-[55%] flex flex-col justify-center items-start text-left relative z-10 mb-0">
                    <h3 className="text-[28px] lg:text-[40px] font-bold mb-6 tracking-wide leading-[1.2] font-['Nunito',_sans-serif] text-white w-full whitespace-pre-line">
                      {feature.title.replace('\n', ' ')}
                    </h3>
                    <p className="leading-[1.6] font-regular font-['Nunito',_sans-serif] text-white/70 text-[18px] lg:text-[20px] w-full">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
            </div>
          </div>

        </div>
      </main>

      <GetStarted />
      <Footer />
    </div>
  );
}
