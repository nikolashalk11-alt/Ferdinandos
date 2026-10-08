import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export const GoogleReviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      text: 'Ο καλύτερος μπαρμπέρης στα Γιάννενα με διαφορά. Σχολαστική λεπτομέρεια, καθαριότητα και ηρεμία. Το καθάρισμα στον αυχένα με τη φαλτσέτα δείχνει αληθινό μεράκι.',
    },
    {
      id: 2,
      text: 'Παραδοσιακό ανδρικό κούρεμα όπως ακριβώς πρέπει να είναι. Χωρίς τη γνωστή βιασύνη, αφιερώνει όσο χρόνο χρειάζεται και το αποτέλεσμα είναι άψογο.',
    },
    {
      id: 3,
      text: 'Το παραδοσιακό ξύρισμα με τις ζεστές και κρύες πετσέτες είναι πραγματική απόλαυση. Επαγγελματισμός, σεβασμός και vintage ατμόσφαιρα.',
    },
  ];

  return (
    <section id="reviews" className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-[#E4D5C5]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#E4D5C5]/60">
          <div>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#B88A58] uppercase block mb-1">
              Αξιολογησεις
            </span>
            <h2 className="font-vintage text-3xl sm:text-5xl font-bold text-[#2A221B]">
              Τι λένε για εμάς.
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-cinzel">
            <div className="flex items-center gap-1 text-[#82582E]">
              <span className="font-bold text-base text-[#2A221B]">4.9</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C79D6E] text-[#C79D6E]" />
                ))}
              </div>
            </div>
            <span className="text-[#2A221B]/40">·</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ferdinandos+Barbershop+Metsovou+12+Ioannina+45221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#82582E] hover:text-[#2A221B] transition-colors"
            >
              <span>165 κριτικές Google</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 3 Editorial Review Columns with hairline divider lines between them */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E4D5C5]/60">
          {reviews.map((rev, index) => (
            <div
              key={rev.id}
              className={`py-6 md:py-0 ${
                index === 0
                  ? 'pt-0 md:pr-8 lg:pr-10'
                  : index === reviews.length - 1
                  ? 'pb-0 md:pl-8 lg:pl-10'
                  : 'md:px-8 lg:px-10'
              }`}
            >
              <p className="font-serif-vintage text-base sm:text-lg text-[#2A221B]/85 italic leading-relaxed">
                «{rev.text}»
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
