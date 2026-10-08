import React from 'react';
import { Phone, Compass, MapPin, Copy, Check } from 'lucide-react';

interface ScheduleLocationProps {
  onCallClick: () => void;
  onDirectionsClick: () => void;
  onCopyPhone: () => void;
  isOpenNow: boolean;
  copied: boolean;
}

export const ScheduleLocation: React.FC<ScheduleLocationProps> = ({
  onCallClick,
  onDirectionsClick,
  onCopyPhone,
  isOpenNow,
  copied,
}) => {
  const currentDay = new Date().getDay();

  const schedule = [
    { dayNumber: 2, day: 'Τρίτη', hours: '10:00 – 21:00' },
    { dayNumber: 3, day: 'Τετάρτη', hours: '10:00 – 21:00' },
    { dayNumber: 4, day: 'Πέμπτη', hours: '10:00 – 21:00' },
    { dayNumber: 5, day: 'Παρασκευή', hours: '10:00 – 21:00' },
    { dayNumber: 6, day: 'Σάββατο', hours: '09:00 – 15:00' },
    { dayNumber: 0, day: 'Κυριακή', hours: 'Κλειστά' },
    { dayNumber: 1, day: 'Δευτέρα', hours: 'Κλειστά' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-[#E4D5C5]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="mb-8 pb-4 border-b border-[#E4D5C5]/60 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#B88A58] uppercase block mb-1">
              Τοποθεσια & Ωραριο
            </span>
            <h2 className="font-vintage text-3xl sm:text-5xl font-bold text-[#2A221B]">
              Επισκεφθείτε μας.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-cinzel">
            <span 
              className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-[#B88A58]' : 'bg-[#2A221B]/30'}`} 
              aria-hidden="true" 
            />
            <span className="text-[#2A221B]/70">
              {isOpenNow ? 'Ανοιχτά τώρα' : 'Κλειστά τώρα'}
            </span>
          </div>
        </div>

        {/* 2-Column Minimal Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Hours List (Typographic Rows - No Nested Boxes) */}
          <div>
            <h3 className="font-cinzel text-xs font-semibold text-[#82582E] tracking-widest uppercase mb-4">
              Ωραριο Λειτουργιας
            </h3>

            <ul className="divide-y divide-[#E4D5C5]/40 text-sm">
              {schedule.map((item) => {
                const isToday = currentDay === item.dayNumber;
                return (
                  <li
                    key={item.day}
                    className={`py-3 flex items-center justify-between transition-colors ${
                      isToday ? 'font-semibold text-[#2A221B]' : 'text-[#2A221B]/75'
                    }`}
                  >
                    <span className="font-serif-vintage text-base">{item.day}</span>
                    <span className="font-mono text-xs text-[#2A221B]/80">
                      {item.hours}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Location & Direct Contact */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-cinzel text-xs font-semibold text-[#82582E] tracking-widest uppercase mb-3">
                  Διευθυνση
                </h3>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B88A58] shrink-0 mt-1" />
                  <div>
                    <p className="font-vintage text-2xl font-bold text-[#2A221B]">
                      Μέτσοβου 12
                    </p>
                    <p className="font-serif-vintage text-sm text-[#2A221B]/75">
                      Τ.Κ. 452 21 · Ιωάννινα
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4D5C5]/40">
                <h3 className="font-cinzel text-xs font-semibold text-[#82582E] tracking-widest uppercase mb-3">
                  Τηλεφωνο Ραντεβου
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:2651607383"
                    className="font-cinzel text-2xl font-bold text-[#2A221B] hover:text-[#82582E] transition-colors"
                  >
                    2651 607383
                  </a>
                  <button
                    onClick={onCopyPhone}
                    className="p-1.5 text-[#2A221B]/60 hover:text-[#2A221B] transition-colors cursor-pointer"
                    title="Αντιγραφή αριθμού"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#B88A58]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <p className="font-serif-vintage text-xs text-[#2A221B]/65 italic mt-1">
                  Εξυπηρέτηση αποκλειστικά κατόπιν τηλεφωνικής επικοινωνίας ή επίσκεψης.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onCallClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] bg-[#2A221B] text-[#FAF7F2] hover:bg-[#82582E] transition-colors text-xs font-cinzel font-medium tracking-wider cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#B88A58]" />
                <span>Κλήση τώρα</span>
              </button>

              <button
                onClick={onDirectionsClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[4px] bg-[#FAF7F2] text-[#2A221B] hover:bg-[#F3ECE2] border border-[#E4D5C5] transition-colors text-xs font-cinzel font-medium tracking-wider cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-[#B88A58]" />
                <span>Οδηγίες Google Maps</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
