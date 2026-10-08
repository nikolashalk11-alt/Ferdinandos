import React, { useState, useEffect } from 'react';
import { X, Phone, MapPin, Clock } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Αρχική', href: '#hero' },
    { label: 'Η Φιλοσοφία', href: '#philosophy' },
    { label: 'Υπηρεσίες', href: '#services' },
    { label: 'Κριτικές Google', href: '#reviews' },
    { label: 'Ωράριο & Τοποθεσία', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2] border-b border-[#E4D5C5] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          
          <div className="relative flex items-center justify-between min-h-[76px] sm:min-h-[96px]">
            
            {/* LEFT: Structured, Clean Animated Menu Button */}
            <div className="flex items-center z-10">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="group flex items-center gap-2.5 py-2 px-1 text-[#2A221B] hover:text-[#B88A58] transition-colors focus:outline-none cursor-pointer select-none"
                aria-label={mobileMenuOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
                aria-expanded={mobileMenuOpen}
              >
                {/* 3 Hairline Bars morphing smoothly into an X without fade */}
                <div className="relative w-6 h-4 flex flex-col justify-between items-start">
                  <span
                    className={`block h-[1.5px] bg-current transform origin-left transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      mobileMenuOpen
                        ? 'w-5 translate-x-[2px] -translate-y-[1px] rotate-45'
                        : 'w-6 group-hover:w-5'
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-current transition-all duration-200 ease-out ${
                      mobileMenuOpen
                        ? 'w-0 opacity-0 scale-x-0'
                        : 'w-4 group-hover:w-6 opacity-100'
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-current transform origin-left transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      mobileMenuOpen
                        ? 'w-5 translate-x-[2px] translate-y-[1px] -rotate-45'
                        : 'w-5 group-hover:w-4'
                    }`}
                  />
                </div>

                <span className="hidden sm:inline font-cinzel text-xs tracking-[0.25em] uppercase font-semibold text-[#2A221B] group-hover:text-[#B88A58] transition-colors">
                  {mobileMenuOpen ? 'Κλείσιμο' : 'Μενού'}
                </span>
              </button>
            </div>

            {/* CENTER: Prominent Centered Logo spanning larger area */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <a 
                href="#hero" 
                className="pointer-events-auto flex items-center justify-center focus:outline-none transition-transform hover:scale-[1.02]"
                title="Φερδινάνδος Barbershop"
              >
                <img
                  src="/logo.png"
                  alt="Φερδινάνδος Barbershop"
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[280px] sm:max-w-[420px] md:max-w-[520px] object-contain drop-shadow-xs"
                />
              </a>
            </div>

            {/* RIGHT: Empty placeholder balancer to maintain true optical centering */}
            <div className="w-8 sm:w-16 z-10 pointer-events-none" aria-hidden="true" />

          </div>

          {/* DESKTOP SECONDARY NAVIGATION */}
          <nav className="hidden lg:flex items-center justify-center gap-8 pt-2 pb-1 border-t border-[#E4D5C5]/60 mt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-vintage text-sm tracking-wider text-[#2A221B]/75 hover:text-[#82582E] transition-colors py-1 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

        </div>
      </header>

      {/* SLIDE-OUT DRAWER WITH SMOOTH PHYSICAL SLIDE ANIMATION (NO FADE) */}
      <div 
        className={`fixed inset-0 z-50 transition-[visibility] duration-300 ${
          mobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop (Dark Brown tint) */}
        <div 
          className={`absolute inset-0 bg-[#2A221B]/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-out Drawer Container: PURE HORIZONTAL SLIDE ANIMATION */}
        <div 
          className={`relative w-full max-w-sm bg-[#FAF7F2] h-full shadow-2xl flex flex-col p-6 sm:p-8 overflow-y-auto border-r border-[#E4D5C5] transform transition-transform duration-300 sm:duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header with Logo & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E4D5C5]">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Φερδινάνδος"
                className="h-12 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-[4px] text-[#2A221B]/70 hover:text-[#2A221B] hover:bg-[#F3ECE2] transition-colors cursor-pointer"
              aria-label="Κλείσιμο μενού"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-1 py-8">
            {navLinks.map((link, idx) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-vintage text-xl text-[#2A221B] hover:text-[#B88A58] py-3 px-2 border-b border-[#E4D5C5]/30 last:border-b-0 transition-colors cursor-pointer flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="font-cinzel text-xs text-[#B88A58]/60 group-hover:text-[#B88A58] transition-colors">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </nav>

          {/* Drawer Footer Details */}
          <div className="mt-auto pt-6 border-t border-[#E4D5C5] space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigator.clipboard.writeText('2651 607383');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[4px] bg-[#2A221B] text-[#FAF7F2] font-cinzel text-xs font-semibold hover:bg-[#82582E] transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#B88A58]" />
              <span>2651 607383</span>
            </button>

            <div className="text-xs text-[#2A221B]/70 space-y-2 pt-1 font-serif-vintage">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B88A58] shrink-0 mt-0.5" />
                <span>Μέτσοβου 12, Τ.Κ. 452 21 · Ιωάννινα</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B88A58] shrink-0 mt-0.5" />
                <span>Τρ–Παρ: 10:00–21:00 · Σάβ: 09:00–15:00</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
