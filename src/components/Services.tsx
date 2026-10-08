import React from 'react';
import { Phone } from 'lucide-react';

interface ServicesProps {
  onCallClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onCallClick }) => {
  const services = [
    {
      id: 'haircut',
      title: 'Κλασικό Ανδρικό Κούρεμα',
      description: 'Εξατομικευμένο κούρεμα με ψαλίδι και μηχανή. Ολοκληρώνεται με καθάρισμα αυχένα με ζεστό αφρό, φαλτσέτα και παραδοσιακό styling.',
    },
    {
      id: 'shave',
      title: 'Παραδοσιακό Ξύρισμα με Φαλτσέτα',
      description: 'Η αυθεντική ιεροτελεστία. Ζεστές αρωματικές πετσέτες, πλούσιος αφρός με φυσικό πινέλο, απαλό ξύρισμα με φαλτσέτα και κρύα κομπρέσα σύσφιξης.',
    },
    {
      id: 'beard',
      title: 'Περιποίηση & Γλυπτική Γενειάδας',
      description: 'Σχηματισμός και τριμάρισμα για ομοιόμορφο όγκο. Καθάρισμα των περιγραμμάτων σε μάγουλα και λαιμό με φαλτσέτα και θρεπτικό έλαιο.',
    },
    {
      id: 'complete',
      title: 'Ολοκληρωμένη Φροντίδα «Φερδινάνδος»',
      description: 'Ο πλήρης συνδυασμός: κλασικό κούρεμα, παραδοσιακό ξύρισμα ή περιποίηση γενειάδας, αναζωογονητικό λούσιμο κεφαλής και styling.',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-[#E4D5C5]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-8 pb-4 border-b border-[#E4D5C5]/60">
          <span className="font-cinzel text-xs tracking-[0.25em] text-[#B88A58] uppercase block mb-1">
            Τιμοκαταλογος & Υπηρεσιες
          </span>
          <h2 className="font-vintage text-3xl sm:text-5xl font-bold text-[#2A221B]">
            Κλασική περιποίηση.
          </h2>
        </div>

        {/* Minimal Atelier Service List (Title & Description only) */}
        <div className="divide-y divide-[#E4D5C5]/60">
          {services.map((service) => (
            <div
              key={service.id}
              className="py-5 sm:py-6 transition-colors group"
            >
              <h3 className="font-vintage text-2xl sm:text-3xl font-bold text-[#2A221B] group-hover:text-[#82582E] transition-colors mb-2">
                {service.title}
              </h3>

              <p className="font-serif-vintage text-sm sm:text-base text-[#2A221B]/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-6 border-t border-[#E4D5C5]/60 flex justify-center sm:justify-start">
          <button
            onClick={onCallClick}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-[4px] bg-[#2A221B] text-[#FAF7F2] hover:bg-[#82582E] transition-colors text-xs font-cinzel font-medium tracking-wider cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#B88A58]" />
            <span>Κλήση στο 2651 607383</span>
          </button>
        </div>

      </div>
    </section>
  );
};
