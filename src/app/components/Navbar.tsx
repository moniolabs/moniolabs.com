import React, { useState } from 'react';
import { Menu, X, ChevronDown, Building2, LifeBuoy } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';
import MoniolabsLogo from '../../imports/Frame1597880846/Frame1597880846.tsx';
import { handleContactClick } from '../utils/contact';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = ['HOME', 'SERVICE', 'ABOUT US', 'API'];

  // Add scroll listener for sticky nav styles
  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset states and scroll to top on location change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
    setIsScrolled(false);
  }, [location.pathname]);

  const getPath = (item: string) => {
    if (item === 'HOME') return '/';
    if (item === 'ABOUT US') return '/about';
    if (item === 'SERVICE') return '/service';
    return `/${item.toLowerCase()}`;
  };

  const isActive = (item: string) => {
    const path = getPath(item);
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo(0, 0);
      navigate(path, { replace: true, state: { reset: Date.now() } });
    }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#000000]/80 backdrop-blur-xl py-4' 
          : 'bg-transparent py-6 md:py-8'
      }`}>
        <div className="w-full max-w-[1280px] min-[1920px]:max-w-[calc(68.75vw-40px)] min-[2240px]:max-w-[1500px] px-6 lg:px-12 mx-auto relative flex items-center justify-between shrink-0">
          <div className="flex items-center gap-[60px]">
            <Link 
              to="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="w-[152px] h-[32px] relative shrink-0 cursor-pointer block"
            >
              <MoniolabsLogo />
            </Link>
            <div className="hidden lg:flex items-center gap-[40px]">
              {navItems.map((item) => (
                item === 'API' ? (
                  <div key={item} className="relative flex items-center py-2 cursor-default select-none">
                    <span className="text-[14px] font-bold tracking-[1.2px] leading-[20px] text-white whitespace-nowrap">
                      {item}
                    </span>
                    <div className={`absolute top-1/2 -translate-y-1/2 left-[100%] ml-[8px] bg-[#0B1F30] text-[#6E7F9E] text-[9px] font-bold px-[4px] py-[4px] rounded-[4px] whitespace-nowrap leading-none uppercase scale-[1.02] origin-left flex items-center justify-center transition-colors duration-300`}>
                      coming soon
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item}
                    to={getPath(item)}
                    onClick={(e) => handleNavClick(e, getPath(item))}
                    className={`text-[14px] font-bold tracking-[1.2px] leading-[20px] transition-colors whitespace-nowrap ${
                      isActive(item) ? 'text-[#00D661]' : 'text-white hover:text-[#00D661]'
                    }`}
                  >
                    {item}
                  </Link>
                )
              ))}
            </div>
        </div>
        <div className="flex items-center">
          <button 
            onClick={(e) => handleContactClick(e, 'enquiry@moniolabs.com')}
            className="hidden lg:flex w-[140px] h-[40px] shrink-0 rounded-full bg-[#00D661] text-[#001222] hover:bg-white hover:text-[#001222] font-bold leading-[20px] transition-colors duration-300 uppercase items-center justify-center whitespace-nowrap border-0 outline-none cursor-pointer text-[14px]"
          >
            contact us
          </button>
          <button 
            className="lg:hidden text-white p-2 hover:text-[#00D661] transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-[72px] left-0 w-full bg-[#000000]/98 backdrop-blur-xl border-b border-[#ABABBA]/10 z-40 lg:hidden flex flex-col items-center py-8 px-6 gap-8 shadow-2xl transition-all duration-300 origin-top max-h-[calc(100vh-72px)] overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
        }`}
      >
        {navItems.map((item) => (
          item === 'API' ? (
            <div key={item} className="relative flex items-center cursor-default select-none">
              <span className="text-lg font-medium tracking-[0.15em] text-[#FFFFFF]">
                {item}
              </span>
              <div className={`absolute top-1/2 -translate-y-1/2 left-[100%] ml-[10px] bg-[#0B1F30] text-[#6E7F9E] text-[10px] font-bold px-[5px] py-[5px] rounded-[4px] whitespace-nowrap leading-none uppercase scale-[1.02] origin-left flex items-center justify-center transition-colors duration-300`}>
                coming soon
              </div>
            </div>
          ) : (
            <Link
              key={item}
              to={getPath(item)}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleNavClick(e, getPath(item));
              }}
              className={`text-lg font-medium tracking-[0.15em] transition-colors ${
                isActive(item) ? 'text-[#00D661]' : 'text-[#FFFFFF] hover:text-[#00D661]'
              }`}
            >
              {item}
            </Link>
          )
        ))}
        <button 
          onClick={(e) => {
            setIsMobileMenuOpen(false);
            handleContactClick(e, 'enquiry@moniolabs.com');
          }}
          className="mt-4 w-[280px] h-[56px] shrink-0 rounded-full bg-[#00D661] text-[#001222] hover:bg-white hover:text-[#001222] text-[16px] font-bold tracking-[1.2px] transition-colors duration-300 uppercase flex items-center justify-center cursor-pointer"
        >
          contact us
        </button>
      </div>
    </>
  );
}