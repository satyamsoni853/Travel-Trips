"use client";
import React from "react";
import Title from "./Title";
import Image from "next/image";
import { useTheme } from "../app/ThemeContext"; 

const Features = () => {
  const { isDarkMode } = useTheme();

  // Theme-aware section background
  const sectionBgClass = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColorClass = isDarkMode ? "text-gray-300" : "text-slate-600";
  const headlineColorClass = isDarkMode ? "text-purple-400" : "text-[#0b3b82]";

  return (
    <section className={`max-container padding-container flex flex-col gap-12 py-12 ${sectionBgClass}`}>
      <div className="flex flex-col gap-12 md:flex-row">
        {/* LEFT */}
        <div className="flex w-full flex-col gap-8 md:w-1/2">
          <div className="top">
            <Title
              title="Why Choose SunSpots?"
              subtitle="Premium Travel Experiences"
              isDarkMode={isDarkMode}
            />
            <p className={`mt-8 text-lg leading-relaxed ${textColorClass}`}>
              At SunSpots, we believe travel should be effortless, exciting, and
              unforgettable. Our dedicated team ensures you get exclusive deals,
              personalized planning, and unforgettable adventures.
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="bottom flex flex-col gap-4">
            <FeaturesCard
              icon="/icon-feature.png"
              title="Expert Travel Planning"
              subtitle="Our specialists help design the perfect getaway tailored for you."
              isDarkMode={isDarkMode}
            />
            <FeaturesCard
              icon="/icon-feature2.png"
              title="Flexible Scheduling"
              subtitle="Plan your trip anytime with easy-to-adjust booking options."
              isDarkMode={isDarkMode}
            />
            <FeaturesCard
              icon="/icon-feature3.png"
              title="Exclusive SunSpots Rewards"
              subtitle="Earn points, unlock perks, and enjoy members-only discounts."
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="relative flex w-full items-center justify-center pt-14 md:w-1/2">
          {/* Decorative Background Element (No change needed as it's an image) */}
          <Image
            className="absolute bottom-[70%] left-[25%] w-[250px] opacity-90 sm:bottom-[72%] sm:left-[33%] sm:w-[300px] lg:w-[350px]"
            src="/feature-object.png"
            alt="decorative element"
            width={350}
            height={350}
          />

          {/* Main Image */}
          <div className="relative z-20 w-[80%] md:w-[70%] transition-transform duration-500 hover:scale-[1.03] hover:rotate-1"> 
            <Image
              className="h-auto w-full rounded-3xl object-cover shadow-2xl transition-all duration-300"
              src="/feature1.png"
              alt="Beautiful destination"
              width={500}
              height={600}
            />
          </div>

          {/* Floating Badge */}
          <div className={`absolute left-[25%] top-[14%] z-40 flex items-center gap-3 rounded-full px-6 py-4 shadow-lg transition-all duration-300 hover:shadow-xl sm:left-[35%] hover:-translate-y-1 
            ${isDarkMode ? 'bg-gray-700 text-white shadow-purple-500/30' : 'bg-white shadow-gray-400/50'}`}>
            <Image
              className="w-[20px] md:w-[30px]"
              src="/icon-map.png"
              alt="location"
              width={30}
              height={30}
            />
            <p className={`text-[12px] font-bold lg:text-lg ${isDarkMode ? 'text-white' : 'text-[#191825]'}`}>
              SunSpots Destinations
            </p>
          </div>
        </div>
      </div>
      
      {/* --- */}

      {/* PARTNERS SECTION */}
      <div className={`mt-12 w-full rounded-3xl p-8 md:p-12 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gradient-to-br from-blue-50 to-cyan-50'}`}>
        <h2 className={`mb-8 text-center text-3xl font-bold md:text-4xl ${isDarkMode ? 'text-gray-100' : 'text-[#0b3b82]'}`}>
          Our Trusted Land Partners
        </h2>
        <div className="flex items-center justify-center">
          <div className="grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <PartnerCard img="/partners1.png" alt="Partner 1" isDarkMode={isDarkMode} />
            <PartnerCard img="/partners2.png" alt="Partner 2" isDarkMode={isDarkMode} />
            <PartnerCard img="/partners3.png" alt="Partner 3" isDarkMode={isDarkMode} />
            <PartnerCard img="/partners4.png" alt="Partner 4" isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ---

interface FeatureProps {
  icon: string;
  title: string;
  subtitle: string;
  isDarkMode: boolean; // Added prop for theme
}

const FeaturesCard = ({ icon, title, subtitle, isDarkMode }: FeatureProps) => {
  const cardBgClass = isDarkMode ? "bg-gray-700" : "bg-white";
  const iconBgClass = isDarkMode ? "from-gray-600 to-gray-500" : "from-blue-100 to-cyan-100";
  const titleColorClass = isDarkMode ? "text-white" : "text-[#0b3b82]";
  const subtitleColorClass = isDarkMode ? "text-gray-300" : "text-slate-600";
  
  return (
    <div className={`group flex w-full cursor-pointer items-center gap-4 rounded-3xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl xl:w-3/4 ${cardBgClass} ${isDarkMode ? 'hover:shadow-purple-500/50' : ''}`}>
      <div className={`left flex-shrink-0 rounded-2xl bg-gradient-to-br p-4 ${iconBgClass}`}>
        {/* Icon image remains the same */}
        <Image
          src={icon}
          alt="feature icon"
          width={60}
          height={60}
          className="h-[60px] w-[60px] object-contain"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className={`text-xl font-bold lg:text-2xl ${titleColorClass}`}>
          {title}
        </h4>
        <p className={`text-base lg:text-lg ${subtitleColorClass}`}>{subtitle}</p>
      </div>
    </div>
  );
};

// ---

const PartnerCard = ({ img, alt, isDarkMode }: { img: string; alt: string; isDarkMode: boolean }) => (
  <div className={`flex items-center justify-center rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/40 
    ${isDarkMode ? 'bg-gray-700 shadow-gray-600/50' : 'bg-white shadow-gray-300/50'}`}>
    <div className="relative h-[60px] w-full md:h-[70px]">
      {/* Partner logo remains the same */}
      <Image src={img} alt={alt} fill className="object-contain" />
    </div>
  </div>
);

export default Features;