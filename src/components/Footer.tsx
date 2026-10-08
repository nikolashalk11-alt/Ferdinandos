import React from 'react';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

interface FooterProps {
  onCallClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCallClick }) => {
  return (
    <footer className="bg-[#2A221B] text-[#FAF7F2] border-t border-[#B88A58]/20 pt-10 pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid: Clean 2-Column Minimal Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pb-8 border-b border-[#FAF7F2]/10">
          
          {/* Brand & Craft Statement */}
          <div className="space-y-4">
            <div>
              <h3 className="font-vintage text-2xl font-bold tracking-wider text-[#FAF7F2]">
                ΦΕΡΔΙΝΑΝΔΟΣ
              </h3>
              <p className="font-cinzel text-xs text-[#C79D6E] tracking-widest mt-1">
                BARBERSHOP · ΙΩΑΝΝΙΝΑ
              </p>
            </div>

            <p className="font-serif-vintage text-sm text-[#E7DCce]/75 italic max-w-sm leading-relaxed">
              «Κλασικό μπαρμπέρικο στα Ιωάννινα. Αφοσιωμένοι στην τέχνη του παραδοσιακού κουρέματος, του ξυρίσματος με φαλτσέτα και της προσεγμένης ανδρικής περιποίησης.»
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Ferdinandos+Barbershop+Metsovou+12+Ioannina+45221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#C79D6E] hover:text-[#FAF7F2] transition-colors font-cinzel pt-1"
            >
              <Star className="w-3.5 h-3.5 fill-[#C79D6E]" />
              <span>4.9 ★ στο Google Maps (165 κριτικές)</span>
            </a>
          </div>

          {/* Location & Operating Details */}
          <div className="space-y-3 md:justify-self-end text-xs sm:text-sm text-[#E7DCce]/80">
            <span className="font-cinzel text-xs text-[#C79D6E] tracking-widest uppercase block mb-2">
              Επικοινωνια & Ωραριο
            </span>

            <div className="flex items-start gap-2.5 font-serif-vintage">
              <MapPin className="w-4 h-4 text-[#C79D6E] shrink-0 mt-0.5" />
              <div>
                <span className="block font-medium text-[#FAF7F2]">Μέτσοβου 12</span>
                <span className="text-[#E7DCce]/65">Τ.Κ. 452 21 · Ιωάννινα</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 font-serif-vintage">
              <Phone className="w-4 h-4 text-[#C79D6E] shrink-0" />
              <button
                onClick={onCallClick}
                className="font-mono text-sm hover:text-[#C79D6E] transition-colors text-left cursor-pointer"
              >
                +30 2651 607383
              </button>
            </div>

            <div className="flex items-start gap-2.5 font-serif-vintage pt-1">
              <Clock className="w-4 h-4 text-[#B88A58] shrink-0 mt-0.5" />
              <div className="text-xs text-[#E7DCce]/70">
                <p>Τρίτη – Παρασκευή: 10:00 – 21:00</p>
                <p>Σάββατο: 09:00 – 15:00</p>
                <p className="text-[#E7DCce]/50">Κυριακή & Δευτέρα: Κλειστά</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 text-xs text-[#E7DCce]/50 text-center sm:text-left">
          © {new Date().getFullYear()} Ferdinandos Barbershop. Όλα τα δικαιώματα κατοχυρωμένα.
        </div>

      </div>
    </footer>
  );
};
