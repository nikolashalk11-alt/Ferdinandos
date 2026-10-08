import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onFinish?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [fadeState, setFadeState] = useState<'visible' | 'fading' | 'hidden'>('visible');

  useEffect(() => {
    // Pulse animation runs, after ~1.6s begin smooth fade-out (total duration under 2 seconds)
    const fadeTimer = setTimeout(() => {
      setFadeState('fading');
    }, 1500);

    const finishTimer = setTimeout(() => {
      setFadeState('hidden');
      if (onFinish) onFinish();
    }, 1950);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  if (fadeState === 'hidden') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F2] transition-opacity duration-500 ease-in-out ${
        fadeState === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center p-6 text-center">
        {/* Pulsing Logo Container */}
        <div className="relative animate-pulse flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Φερδινάνδος"
            className="w-44 sm:w-56 md:w-64 max-h-52 object-contain drop-shadow-sm select-none"
          />
        </div>

        {/* Subtle vintage accent bar */}
        <div className="w-16 h-0.5 bg-[#B88A58]/50 mt-6 rounded-full" />
      </div>
    </div>
  );
};
