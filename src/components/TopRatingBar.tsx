import React from 'react';
import { Star, Phone, MapPin, Clock } from 'lucide-react';

interface TopRatingBarProps {
  isOpenNow: boolean;
  onCallClick: () => void;
}

export const TopRatingBar: React.FC<TopRatingBarProps> = ({ isOpenNow, onCallClick }) => {
  return (
    <div className="bg-[#2A221B] text-[#FAF7F2] border-b border-[#B88A58]/25 text-xs py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        
        {/* Google Rating */}
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Ferdinandos+Barbershop+Metsovou+12+Ioannina+45221"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 group hover:text-[#C79D6E] transition-colors"
        >
          <div className="flex items-center gap-0.5 text-[#C79D6E]">
            <span className="font-semibold text-sm tracking-tight text-[#FAF7F2] mr-1">4.9</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#C79D6E] text-[#C79D6E]" />
            ))}
          </div>
          <span className="text-[#E7DCce]/80 border-b border-transparent group-hover:border-[#C79D6E]/50">
            165 κριτικές Google
          </span>
          <span className="hidden md:inline-block text-[#B88A58]/40">·</span>
          <span className="hidden md:inline-block text-[#E7DCce]/60 font-light">
            Μπαρμπέρικο στα Ιωάννινα
          </span>
        </a>

        {/* Center: Live Status indicator */}
        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <span 
              className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-[#B88A58]' : 'bg-[#FAF7F2]/30'}`} 
              aria-hidden="true"
            />
            <span className="text-[#FAF7F2]/90 font-medium">
              {isOpenNow ? 'Ανοιχτά τώρα' : 'Κλειστά τώρα'}
            </span>
          </span>
          <span className="text-[#B88A58]/40">·</span>
          <span className="text-[#E7DCce]/70 flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#C79D6E]" />
            <span>Τρ–Παρ: 10:00–21:00 · Σάβ: 09:00–15:00</span>
          </span>
        </div>

        {/* Right: Address & Phone */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto sm:ml-0">
          <div className="hidden lg:flex items-center gap-1.5 text-[#E7DCce]/80">
            <MapPin className="w-3.5 h-3.5 text-[#C79D6E]" />
            <span>Μέτσοβου 12, Τ.Κ. 452 21</span>
          </div>
          
          <button
            onClick={onCallClick}
            className="flex items-center gap-1.5 text-[#FAF7F2] hover:text-[#C79D6E] transition-colors font-medium"
            title="Κλήση στο 2651 607383"
          >
            <Phone className="w-3.5 h-3.5 text-[#B88A58]" />
            <span className="tracking-wider">2651 607383</span>
          </button>
        </div>

      </div>
    </div>
  );
};
