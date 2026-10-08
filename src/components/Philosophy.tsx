import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-[#E4D5C5]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="font-cinzel text-xs tracking-[0.25em] text-[#B88A58] uppercase">
            Η Φιλοσοφια
          </span>
          <h2 className="font-vintage text-3xl sm:text-5xl font-bold text-[#2A221B] leading-tight">
            Ένα καταφύγιο ηρεμίας και αυθεντικής φροντίδας.
          </h2>
          <p className="font-serif-vintage text-base sm:text-lg text-[#2A221B]/75 italic leading-relaxed pt-1">
            «Μακριά από τη βιασύνη των μαζικών αλυσίδων, κάθε πέρασμα της φαλτσέτας και κάθε κούρεμα γίνονται με τον παλιό, σωστό τρόπο.»
          </p>
        </div>

        {/* 3 Editorial Pillars (Pure Hairline Typography - Zero Cards / Windows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 pt-6 border-t border-[#E4D5C5]/60">
          
          <div className="space-y-2">
            <span className="font-cinzel text-xs font-semibold text-[#B88A58] tracking-widest uppercase block">
              01 · Χρονος
            </span>
            <h3 className="font-vintage text-xl font-bold text-[#2A221B]">
              Χωρίς βιασύνη
            </h3>
            <p className="text-xs sm:text-sm text-[#2A221B]/75 font-serif-vintage leading-relaxed">
              Αφιερώνουμε τον χρόνο που απαιτείται για να φύγετε απόλυτα ικανοποιημένοι και ανανεωμένοι.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-cinzel text-xs font-semibold text-[#B88A58] tracking-widest uppercase block">
              02 · Ακριβεια
            </span>
            <h3 className="font-vintage text-xl font-bold text-[#2A221B]">
              Ψαλίδι & Φαλτσέτα
            </h3>
            <p className="text-xs sm:text-sm text-[#2A221B]/75 font-serif-vintage leading-relaxed">
              Σβήσιμο με το χέρι, καθαρά περιγράμματα και παραδοσιακό τρόχισμα σε αυθεντικό ακόνι.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-cinzel text-xs font-semibold text-[#82582E] tracking-widest uppercase block">
              03 · Υγιεινη
            </span>
            <h3 className="font-vintage text-xl font-bold text-[#2A221B]">
              Απόλυτος σεβασμός
            </h3>
            <p className="text-xs sm:text-sm text-[#2A221B]/75 font-serif-vintage leading-relaxed">
              Σχολαστική αποστείρωση εργαλείων και φρέσκες αρωματικές κομπρέσες σε κάθε πελάτη.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
