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
  // The overall section background class (sectionBgClass) is removed as requested.
  const titleColorClass = isDarkMode ? "text-white" : "text-purple-600";
  const subtitleColorClass = isDarkMode ? "text-gray-400" : "text-gray-600";

  // Modern Card Design & No Background Color
  const cardDesignClass = isDarkMode
    ? "bg-gray-800/50 border border-gray-700/50" // Soft dark background with light border
    : "bg-white/50 border border-gray-200/50"; // Transparent/Light background with light border

  // Logo Invert for Dark Mode (Hypothetical: assumes logos are dark and need inversion)
  const logoFilterClass = isDarkMode
    ? "filter brightness-0 invert opacity-75" // Makes dark logos light/white
    : "opacity-70 hover:opacity-100"; // Slight fade in light mode

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
    <section className="relative pt-12">
      <div className="max-container padding-container">
        {/* MAIN TITLE */}
        <div className="text-center mb-3">
          <h3 className={`text-6xl font-extrabold ${titleColorClass} tracking-tight`}>{title}</h3>
        </div>

        {/* SUBTEXT */}
        <p className={`text-center mb-10 text-base md:text-lg ${subtitleColorClass} max-w-2xl mx-auto`}>
          {subtitle}
        </p>

        {/* AUTO-SCROLL AREA with CSS Animation Simulation */}
        <div className="w-full mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {/* The `group/scroll` and `animate-infinite-scroll` are placeholders 
            for the custom animation defined in `tailwind.config.js`.
            The inner div width is set to be large enough to contain two sets 
            of sponsors, facilitating the loop.
          */}
          <div className="flex w-[200%] md:w-[150%] animate-infinite-scroll group/scroll hover:[animation-play-state:paused]">
            {/* We map sponsors twice to create the seamless loop effect */}
            {[...sponsors, ...sponsors].map((item, index) => (
              <div
                key={index}
                className={`
                  flex-none p-5 mx-3 rounded-2xl border w-56 h-24 
                  flex items-center justify-center 
                  transition-all duration-500 transform 
                  ${cardDesignClass} 
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
                    transition-opacity duration-300
                    ${logoFilterClass}
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* This is a common helper style to define the animation 
        when Tailwind config is not accessible. 
        For this component to work, you must add the keyframes to your global CSS 
        or use the tailwind.config.js extension as noted above.
      */}
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