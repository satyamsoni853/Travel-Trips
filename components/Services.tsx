"use client";

import React from "react";
import Title from "./Title";
import Image from "next/image";
import { useTheme } from "../app/ThemeContext";

// Interface for the card component
interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
  isDarkMode: boolean;
}

const ServiceCard = ({ icon, title, subtitle, isDarkMode }: ServiceCardProps) => {
  // Theme-aware classes for the card
  const cardBgClass = isDarkMode 
    ? "bg-gray-800/50 border border-gray-700/50" // Soft dark background
    : "bg-white/50 border border-gray-200/50"; // Soft light background
  
  const iconBgClass = isDarkMode ? "bg-purple-900/40" : "bg-purple-50/70";
  const titleColorClass = isDarkMode ? "text-white" : "text-gray-900";
  const subtitleColorClass = isDarkMode ? "text-gray-400" : "text-gray-600";
  
  // Custom hover shadow for a more polished look
  const hoverShadowClass = isDarkMode 
    ? "shadow-xl shadow-purple-500/10" 
    : "shadow-xl shadow-purple-500/10";

  return (
    <div
      className={`service-card w-[280px] min-w-[280px] h-[300px] rounded-3xl backdrop-blur-sm
        p-8 flex flex-col gap-4 justify-start text-left border 
        // **Animation: Hover Lift & Shadow**
        transition-all duration-300 transform 
        hover:translate-y-[-8px] ${hoverShadowClass} ${cardBgClass}`}
    >
      <div className={`p-4 rounded-xl inline-flex self-start ${iconBgClass}`}>
        <Image src={icon} alt="icon" width={48} height={48} className="object-contain"/>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <h3 className={`text-xl font-bold ${titleColorClass}`}>
          {title}
        </h3>
        <p className={`text-sm ${subtitleColorClass}`}>{subtitle}</p>
      </div>
    </div>
  );
};

// ---

const Services = () => {
  const { isDarkMode } = useTheme();

  // Removed all JavaScript scrolling logic (useEffect/useRef)
  // as the animation is now handled by CSS Keyframes.
  
  // Theme-aware classes for the static part
  const titleColor = isDarkMode ? "text-white" : "text-gray-900";
  const subtitleColor = isDarkMode ? "text-purple-400" : "text-purple-600";
  const buttonBgClass = isDarkMode 
    ? "bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-500/30" 
    : "bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30";

  const services = [
    { icon: "/destination.png", title: "Group Travel", subtitle: "Are you planning a group tour? We offer the best group, wedding, and sports fares." },
    { icon: "/booking.png", title: "Special Packages", subtitle: "Exclusive packages curated for unique global experiences." },
    { icon: "/travel-reward.png", title: "TrueSun Rewards", subtitle: "Rewarding travel agents through our premium rewards program." },
    { icon: "/travelsun.png", title: "Sunspots Holidays", subtitle: "Your clients will fall in love with our beautiful destinations." },
    { icon: "/sun.png", title: "Sun Magic", subtitle: "Sunshine, beaches, and scenic destinations worldwide." },
    { icon: "/sunout.png", title: "Mission Travel & Pilgrimage", subtitle: "Meaningful spiritual journey packages crafted with care." },
    { icon: "/travel.png", title: "Positive Destination Ideas", subtitle: "Quick getaways packed with excitement and adventure." },
  ];

  return (
    <section className="relative max-container padding-container flex md:flex-row xs:flex-col py-12 gap-10">
      
      {/* STATIC LEFT SECTION */}
      <div className="left xs:w-full md:w-2/5 flex flex-col justify-center">
        <Title
          title="Sunspots Services"
          subtitle="Our top value categories for you"
          titleColor={titleColor}
          subtitleColor={subtitleColor}
        />
        
        {/* BUTTON */}
        <div className="mt-8">
          <button
            type="button"
            className={`px-8 py-4 rounded-xl text-base font-semibold text-white transition duration-300 ${buttonBgClass}`}
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* INFINITE SCROLL CAROUSEL - CSS ANIMATION */}
      <div className="w-full md:w-3/5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        {/* The `animate-infinite-scroll` class is crucial for the animation. */}
        <div className="flex gap-6 py-4 animate-infinite-scroll hover:[animation-play-state:paused] w-max">
          
          {/* Map services twice for the seamless loop */}
          {[...services, ...services].map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
      
      {/* IMPORTANT: CSS Keyframes for the animation */}
      <style jsx global>{`
        /* Add this to your global CSS file or configure in tailwind.config.js. 
          The speed (40s) can be adjusted here.
        */
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            /* Scroll exactly half the total width (one set of cards) */
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;