"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);
  const [isEventTime, setIsEventTime] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    
    // Conference dates: 2-4 December 2026
    const target = new Date("December 2, 2026 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsEventTime(true);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setIsEventTime(false);
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen min-h-[600px] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/assets/hero3.jpg')" }}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Decorative brand accent overlay */}
      <div className="absolute inset-0 bg-[#FF0D00]/10"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center w-full">
        {/* Tag */}
        <div className="inline-block bg-[#E1251B] text-white px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wider mb-3 shadow-lg">
          Theme: Reclaiming Mobility Futures
        </div>

        {/* Subtitle */}
        <p className="text-white/80 text-xs md:text-sm font-light max-w-3xl mx-auto mb-4 px-4">
          Financing, Power, and Innovation for Africa&apos;s Inclusive and Climate-Resilient Transport Systems
        </p>

        {/* Main Title - Largest on screen */}
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-['Josefin_Sans'] drop-shadow-2xl leading-tight">
          Women and Transport Africa <br className="hidden sm:block" />
          Conference 2026
        </h1>

        {/* Key Message */}
        <div className="max-w-2xl mx-auto mt-4">
          <p className="text-white/90 text-sm md:text-base leading-relaxed px-2">
            <span className="text-[#fff] font-bold">&quot;Transport isn&apos;t just infrastructure.&quot;</span>
            <br />
            <span className="text-white/80">It&apos;s a lever for equity, climate action, and economic transformation.</span>
          </p>
        </div>

        {/* Description with details */}
        <p className="text-white/70 text-xs md:text-sm mt-3">
          📅 <span className="font-semibold text-white">December 2 - 4, 2026</span> &nbsp;|&nbsp; 
          <span className="font-semibold text-white">Nairobi, Kenya</span> &nbsp;|&nbsp;
          <span className="font-semibold text-white">400+ Participants</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSesFn7D1B1K3ngmz007QvpdYt_4H-kr2NHw5GeixArcjGfZ8g/viewform"
            className="bg-[#E1251B] text-white px-8 md:px-10 py-3 md:py-3.5 rounded-[1em_0] font-semibold text-sm md:text-base hover:bg-white hover:text-[#E1251B] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </Link>
          <Link
            href="/scholarship-and-sponsorships"
            className="bg-transparent border-2 border-white text-white px-8 md:px-10 py-3 md:py-3.5 rounded-[1em_0] font-semibold text-sm md:text-base hover:bg-white hover:text-[#E1251B] transition-all duration-300 transform hover:scale-105"
          >
            Partner With Us
          </Link>
        </div>

        {/* Countdown Section - Shows "IT'S TIME!" when event starts */}
        <div className="mt-6 bg-black/40 backdrop-blur-sm rounded-2xl py-3 px-6 max-w-xs mx-auto border border-white/10">
          <h4 className="text-white/80 font-semibold text-xs tracking-wider uppercase">
            {isEventTime ? "🎉 EVENT HAS STARTED" : "Countdown to WTA 2026"}
          </h4>
          <div className="text-white text-2xl md:text-3xl font-bold font-['Josefin_Sans'] tracking-wider">
            {isMounted ? (
              isEventTime ? (
                <span className="text-[#E1251B] animate-pulse">🎉 IT&apos;S TIME!</span>
              ) : (
                `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
              )
            ) : (
              "Loading..."
            )}
          </div>
        </div>

        {/* Sponsors Label - Minimal */}
        <p className="text-white/40 text-[10px] md:text-xs mt-4 tracking-widest uppercase">
          In Partnership With Leading Organizations
        </p>

        {/* Decorative scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}