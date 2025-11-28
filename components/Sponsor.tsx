"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../app/ThemeContext";

const Sponsor = ({
  title = "Air Partners",
  subtitle = "Trusted airlines we work with",
}) => {
  const { isDarkMode } = useTheme();

  // Theme-aware classes for titles and cards.
  const titleColorClass = isDarkMode ? "text-purple-400" : "text-purple-700"; 
  const subtitleColorClass = isDarkMode ? "text-gray-400" : "text-gray-600";

  // Outer container background for the scrolling area (can be transparent/themed)
  const scrollAreaBgClass = isDarkMode 
     ? "bg-gray-900/10" // Very soft dark background for the whole section
     : "bg-white/10"; // Very soft light background

  // LOGO CONTAINER DESIGN: Always white background
  const logoBgClass = "bg-white"; // STRICTLY SET TO WHITE BACKGROUND

  // Border and shadow classes for the logo container
  const logoBorderShadowClass = isDarkMode
    ? "border-gray-700/50 shadow-lg shadow-black/30" // Dark mode border/shadow
    : "border-gray-200/50 shadow-md shadow-gray-300/50"; // Light mode border/shadow

  // FIX: Logo appearance logic updated to remove color inversion
  const logoFilterClass = "opacity-85 hover:opacity-100 transition-opacity duration-300";


  const sponsors = [
    { src: "/sponsor1.png", alt: "American Airlines" },
    { src: "/sponsor2.png", alt: "Avianca" },
    { src: "/sponsor3.png", alt: "Delta Air Lines" },
    { src: "/sponsor4.png", alt: "United" },
    { src: "/sponsor5.png", alt: "LATAM Airlines" },
    { src: "/sponsor6.png", alt: "Emirates" },
    { src: "/sponsor7.png", alt: "Qatar Airways" },
    { src: "/sponsor8.png", alt: "Copa Airlines" },
    { src: "/sponsor9.png", alt: "KLM" },
    { src: "/sponsor10.png", alt: "Air Canada" },
    { src: "/sponsor11.png", alt: "Turkish Airlines" },
    { src: "/sponsor12.png", alt: "Japan Airlines" },
  ];


  return (
    <section className={`relative py-8 sm:py-12 ${scrollAreaBgClass}`}>
        {/* 1. REDUCED MOBILE VERTICAL PADDING: py-12 -> py-8 */}
      <div className="max-container padding-container">
        {/* MAIN TITLE */}
        {/* 2. REDUCED MOBILE MARGIN: mb-3 -> mb-1 */}
        <div className="text-center mb-1 sm:mb-3">
          {/* 3. REDUCED MOBILE FONT SIZE: text-6xl -> text-4xl (default) */}
          <h3 className={`text-4xl md:text-6xl font-extrabold ${titleColorClass} tracking-tight`}>{title}</h3>
        </div>

        {/* SUBTEXT */}
        {/* 4. REDUCED MOBILE MARGIN: mb-10 -> mb-8 */}
        <p className={`text-center mb-8 sm:mb-10 text-base md:text-lg ${subtitleColorClass} max-w-2xl mx-auto`}>
          {subtitle}
        </p>

        {/* AUTO-SCROLL AREA with CSS Animation Simulation */}
        <div className="w-full mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          
          <div className="flex w-[200%] md:w-[150%] animate-infinite-scroll group/scroll hover:[animation-play-state:paused]">
            {/* We map sponsors twice to create the seamless loop effect */}
            {[...sponsors, ...sponsors].map((item, index) => (
              <div
                key={index}
                className={`
                  flex-none p-5 mx-3 rounded-2xl border w-56 h-24 
                  flex items-center justify-center 
                  transition-all duration-500 transform 
                  
                    ${logoBgClass} ${logoBorderShadowClass} 
                  
                  hover:scale-[1.02] 
                  hover:shadow-xl hover:shadow-gray-900/10 dark:hover:shadow-purple-400/10
                `}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={56}
                  className={`
                    max-h-full max-w-full object-contain 
                    ${logoFilterClass}
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        /* IMPORTANT: Add this to your global CSS file 
          or ensure your tailwind.config.js is set up for the animation utilities.
        */
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite; /* 60s is the speed */
        }
      `}</style>
    </section>
  );
};

export default Sponsor;