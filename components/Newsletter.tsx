"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "../app/ThemeContext"; 

const Newsletter = () => {
  const { isDarkMode } = useTheme();

  // Define dynamic gradient class for the main subscription box
  const gradientClass = isDarkMode 
    ? "from-purple-800 to-cyan-800" // Deeper, more intense dark mode gradient
    : "from-[#0b3b82] to-[#FFB400]"; // Original, vibrant light mode gradient

  // Define dynamic class for the subscribe button text color
  const buttonTextColor = isDarkMode ? "text-purple-900" : "text-[#0b3b82]";

  // Define dynamic class for the button hover background
  const buttonHoverBg = isDarkMode ? "hover:bg-gray-200" : "hover:bg-gray-50";

  return (
    <section className={`relative py-8 lg:py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Decorative Element */}
      <Image
        className="absolute left-4 top-0 w-20 opacity-40 lg:left-8 lg:w-28 transition-opacity duration-500"
        src="/newsletter-vector.png"
        alt="Decorative vector"
        width={150}
        height={150}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className={`overflow-hidden rounded-3xl bg-gradient-to-br ${gradientClass} p-6 shadow-2xl lg:p-12 
            // **Animation: Lift on hover**
            transition-transform duration-300 hover:scale-[1.01] hover:shadow-3xl ${isDarkMode ? 'shadow-purple-500/50' : ''}`}
        >
          <div className="mx-auto max-w-3xl text-center">
            
            {/* Header Section */}
            <div className="mb-8 flex flex-col items-center gap-4">
              <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm lg:text-sm">
                Sunspots Newsletter
              </span>

              <h1 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Discover Your Next Adventure
              </h1>

              <p className="text-base text-white/90 lg:text-lg">
                Weekly travel tips and destination guides delivered to your
                inbox.
              </p>
            </div>

            {/* Subscription Form */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <input
                className="flex-1 rounded-xl border-0 bg-white px-5 py-4 text-sm text-gray-900 placeholder-gray-500 shadow-lg 
                  // **Animation: Input Focus Ring**
                  transition focus:outline-none focus:ring-4 focus:ring-white/70 focus:shadow-xl lg:text-base"
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
              />

              <button className={`rounded-xl bg-white px-8 py-4 text-sm font-semibold shadow-lg 
                  // **Animation: Button Hover**
                  transition duration-300 hover:scale-[1.05] hover:shadow-2xl 
                  ${buttonTextColor} ${buttonHoverBg} lg:text-base`}
              >
                Subscribe
              </button>
            </div>

            <p className="mt-4 text-xs text-white/70">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;