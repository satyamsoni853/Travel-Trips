"use client";
import React, { useState, ReactNode } from "react";
import Image from "next/image";

// Utility component for subtle animation (Fade-in/Slide-up)
const AnimatedDiv: React.FC<{ children: ReactNode; delay?: string }> = ({
  children,
  delay = "delay-0",
}) => (
  <div
    className={`opacity-0 animate-fadeInUp ${delay} transition-all duration-700 ease-out`}
  >
    {children}
  </div>
);

const TravelPoint = () => {
  
  const IMAGE_SRC = "/airplane.jpg"; // actual file found in `public/`

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-5 mb-10 overflow-hidden dark:bg-gray-900 transition-colors duration-500">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* LEFT — Large Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start transform translate-x-[-20px] opacity-0 animate-slideInLeft transition-all duration-1000 ease-out">
          <div className="relative w-full max-w-[650px] h-[520px] rounded-[35px] overflow-hidden shadow-2xl">
            {/* APPLYING THE FIX HERE */}
            <Image
              src={IMAGE_SRC}
              alt="Travel destination"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative element (optional design flair) */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-3xl z-[-1]"></div>
        </div>

        {/* RIGHT — Content Section (Remaining code is the same dark mode fix) */}
        <div className="relative w-full lg:w-1/2 flex flex-col gap-10">
          {/* Header with Fade-in animation */}
          <AnimatedDiv delay="delay-100">
            <div className="space-y-4">
              {/* Travel Point text */}
              <span className="text-purple-600 font-semibold text-lg uppercase tracking-[0.25em] block dark:text-purple-400">
                Travel Point
              </span>

              {/* Title - Increased contrast for better readability */}
              <h2 className="text-[3rem] md:text-[3.4rem] font-black text-gray-900 leading-[1.1] mt-1 dark:text-white">
                Helping You Discover Your{" "}
                <span className="text-purple-500 dark:text-purple-300">
                  Dream Destination
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl dark:text-gray-300">
                Discover beautiful places and exclusive holiday packages crafted
                to give you unforgettable experiences. We are dedicated to
                making your travel dreams a reality.
              </p>
            </div>
          </AnimatedDiv>

          {/* Stats with Staggered Fade-in animation */}
          <div className="grid grid-cols-2 gap-5 mt-4">
            <AnimatedDiv delay="delay-200">
              <StatCard number="500+" label="Holiday Packages" />
            </AnimatedDiv>
            <AnimatedDiv delay="delay-300">
              <StatCard number="100+" label="Luxury Hotels" />
            </AnimatedDiv>
            <AnimatedDiv delay="delay-400">
              <StatCard number="15" label="Premium Airlines" />
            </AnimatedDiv>
            <AnimatedDiv delay="delay-500">
              <StatCard number="3k+" label="Happy Customers" />
            </AnimatedDiv>
          </div>
        </div>
      </div>
      {/* Tailwind keyframes for the animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

// StatCard component (no changes needed here)
interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  const [isActive, setIsActive] = useState(false);

  // Conditional classes for toggling and dark mode
  const cardClasses = isActive
    ? "bg-purple-500 border-purple-500 text-white shadow-xl scale-[1.03]" // Active state styles
    : "bg-gradient-to-br from-purple-50 to-white border-purple-100 shadow-sm group-hover:shadow-lg group-hover:scale-105 dark:from-gray-700 dark:to-gray-800 dark:border-gray-600 dark:hover:border-purple-400"; // Default/Hover/Dark mode styles

  const numberClasses = isActive
    ? "text-white" // Toggled text color: White
    : "text-purple-500 group-hover:text-purple-600 dark:text-purple-400 dark:group-hover:text-purple-300"; // Default/Hover/Dark mode text color

  const labelClasses = isActive
    ? "text-purple-100" // Toggled label color: Light Purple
    : "text-gray-800 dark:text-gray-300"; // Default/Dark mode label color

  return (
    <div
      className={`group rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${cardClasses}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h3
          className={`text-[2.5rem] font-black leading-none transition-colors duration-300 ${numberClasses}`}
        >
          {number}
        </h3>
        <p
          className={`text-base font-semibold transition-colors duration-300 ${labelClasses}`}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default TravelPoint;
