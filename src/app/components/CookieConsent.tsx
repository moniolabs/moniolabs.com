import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or rejected
    const consent = localStorage.getItem('moniolabs_cookie_consent');
    
    if (!consent) {
      // Show popup immediately if no choice has been made
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent bubbling up
    localStorage.setItem('moniolabs_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent bubbling up
    localStorage.setItem('moniolabs_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] w-full flex flex-col justify-end pointer-events-none pb-0 md:pb-6 lg:pb-12 px-0 md:px-6 lg:px-12"
        >
          <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] mx-auto bg-[#0A0A0A] rounded-t-2xl md:rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 pointer-events-auto border-t md:border border-[#333333]">
            
            <div className="flex-1 w-full text-left max-w-4xl">
              <h3 className="text-white font-bold text-[20px] md:text-[22px] mb-2 md:mb-3 font-['Nunito',sans-serif]">We Value Your Privacy</h3>
              <p className="text-[#A0A0A0] text-[14px] md:text-[15px] leading-relaxed font-['Nunito',sans-serif]">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. For more details, see our <a href="/terms-privacy" className="text-[#00D661] font-bold hover:text-[#00B050] hover:underline transition-colors duration-300">Privacy Policy</a>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
              <button
                onClick={handleReject}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#444444] text-white hover:bg-[#222222] hover:border-[#666666] transition-colors duration-300 font-['Nunito',sans-serif] text-[14px] font-bold"
              >
                Reject All
              </button>
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#00D661] text-black hover:bg-[#00B050] transition-colors duration-300 font-['Nunito',sans-serif] text-[14px] font-bold"
              >
                Accept All
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}