import React from 'react';
import { Phone, Compass } from 'lucide-react';

interface HeroProps {
  onCallClick: () => void;
  onDirectionsClick: () => void;
  onCopyPhone: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onCallClick,
  onDirectionsClick,
}) => {
  return (
    <section id="hero" className="relative py-10 sm:py-14 lg:py-16 overflow-hidden">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#B88A58]/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Minimal Kicker & Location */}
        <div className="inline-flex items-center gap-2 text-xs font-cinzel tracking-[0.25em] text-[#B88A58] uppercase mb-4">
          <span>ΙΩΑΝΝΙΝΑ</span>
          <span className="text-[#B88A58]/40">·</span>
          <span>ΜΕΤΣΟΒΟΥ 12</span>
        </div>

        {/* Hero Title - Formatted into two bold standout lines */}
        <h1 className="font-vintage text-[28px] xs:text-[32px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-bold tracking-tight text-[#2A221B] leading-[1.04] sm:leading-[1.06] mb-5">
          <span className="block">Η τέχνη του</span>
          <span className="block">αυθεντικού κουρέματος.</span>
        </h1>

        {/* Minimal Refined Editorial Statement */}
        <p className="font-serif-vintage text-lg sm:text-2xl text-[#2A221B]/80 max-w-2xl mx-auto leading-relaxed italic mb-8">
          «Στον Φερδινάνδο, η ανδρική περιποίηση παραμένει μια ήρεμη ιεροτελεστία — με κλασικό ψαλίδι, ζεστές κομπρέσες και φαλτσέτα.»
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onCallClick}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-[4px] bg-[#2A221B] text-[#FAF7F2] hover:bg-[#82582E] active:scale-[0.98] transition-all duration-200 font-cinzel font-medium text-xs sm:text-sm tracking-wider shadow-sm cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#B88A58]" />
            <span>Κλήση · 2651 607383</span>
          </button>

          <button
            onClick={onDirectionsClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[4px] bg-[#FAF7F2] text-[#2A221B] hover:bg-[#F3ECE2] border border-[#E4D5C5] transition-all text-xs sm:text-sm font-cinzel font-medium tracking-wider cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#B88A58]" />
            <span>Οδηγίες Χάρτη</span>
          </button>
        </div>

      </div>
    </section>
  );
};
