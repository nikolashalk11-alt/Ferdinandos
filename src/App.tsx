/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { GoogleReviews } from './components/GoogleReviews';
import { ScheduleLocation } from './components/ScheduleLocation';
import { Footer } from './components/Footer';
import { Phone, Check } from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  // Calculate live open/closed status for Ioannina, Greece (Europe/Athens timezone)
  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const athensTimeStr = now.toLocaleString('en-US', { timeZone: 'Europe/Athens' });
        const athensDate = new Date(athensTimeStr);
        const day = athensDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
        const hours = athensDate.getHours();
        const minutes = athensDate.getMinutes();
        const totalMinutes = hours * 60 + minutes;

        // Tuesday - Friday: 10:00 - 21:00 (600 to 1260 mins)
        if (day >= 2 && day <= 5) {
          setIsOpenNow(totalMinutes >= 10 * 60 && totalMinutes < 21 * 60);
        }
        // Saturday: 09:00 - 15:00 (540 to 900 mins)
        else if (day === 6) {
          setIsOpenNow(totalMinutes >= 9 * 60 && totalMinutes < 15 * 60);
        }
        // Sunday & Monday: Closed
        else {
          setIsOpenNow(false);
        }
      } catch {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        if (day >= 2 && day <= 5 && hour >= 10 && hour < 21) {
          setIsOpenNow(true);
        } else if (day === 6 && hour >= 9 && hour < 15) {
          setIsOpenNow(true);
        } else {
          setIsOpenNow(false);
        }
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCall = () => {
    // Copies the phone number to clipboard directly instead of triggering a call
    navigator.clipboard.writeText('2651 607383').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleDirections = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Ferdinandos+Barbershop+Metsovou+12+Ioannina+45221',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('2651 607383').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A221B] flex flex-col font-sans-clean">
      
      {/* 1. PRELOADER (Pulsing logo.png animation, max 2 seconds) */}
      <Preloader />

      {/* 2. MAIN HEADER (Centered Large Logo, background color #FAF7F2, hamburger on left, no call button) */}
      <Header />

      {/* 3. MAIN CONTENT SECTIONS */}
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <Hero 
          onCallClick={handleCall}
          onDirectionsClick={handleDirections}
          onCopyPhone={handleCopyPhone}
        />

        {/* PHILOSOPHY & CRAFT */}
        <Philosophy />

        {/* SERVICES */}
        <Services 
          onCallClick={handleCall} 
        />

        {/* GOOGLE REVIEWS (4.9 / 5.0 - 165 reviews) */}
        <GoogleReviews />

        {/* SCHEDULE & LOCATION (Metsovou 12, TK 452 21) */}
        <ScheduleLocation 
          onCallClick={handleCall}
          onDirectionsClick={handleDirections}
          onCopyPhone={handleCopyPhone}
          isOpenNow={isOpenNow}
          copied={copied}
        />

      </main>

      {/* 4. FOOTER */}
      <Footer onCallClick={handleCall} />

      {/* FLOATING ACTION BUTTON ON MOBILE (rounded-[4px]) */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden">
        <button
          onClick={handleCall}
          className="flex items-center gap-2 px-4 py-3 rounded-[4px] bg-[#2A221B] text-[#FAF7F2] shadow-xl border border-[#B88A58]/40 font-cinzel text-xs font-semibold active:scale-95 transition-transform cursor-pointer"
        >
          <Phone className="w-4 h-4 text-[#B88A58]" />
          <span>Κλήση · 2651 607383</span>
        </button>
      </div>

      {/* TOAST NOTIFICATION ON PHONE COPY (rounded-[4px]) */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#2A221B] text-[#FAF7F2] px-4 py-2.5 rounded-[4px] shadow-xl border border-[#B88A58]/30 flex items-center gap-2 text-xs font-medium animate-fade-in">
          <Check className="w-4 h-4 text-[#B88A58]" />
          <span>Ο αριθμός 2651 607383 αντιγράφηκε στο πρόχειρο!</span>
        </div>
      )}

    </div>
  );
}
