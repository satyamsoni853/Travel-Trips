"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../app/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  // Theme-aware classes for the main footer
  const footerBgClass = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColorClass = isDarkMode ? "text-gray-300" : "text-gray-900";

  return (
    <footer className={`relative max-container padding-container py-20 flex xs:gap-8 lg:gap-16 xs:flex-col lg:flex-row ${footerBgClass} ${textColorClass}`}>
      {/* Decorative Object - Ensure it works in dark mode or swap the image */}
      <Image
        className="absolute right-[-4%] xs:top-0 lg:top-[-20%] opacity-50" // Added opacity for less visual intrusion
        src="/footer-object.png"
        alt="object"
        width={100}
        height={100}
      />

      <div className="flex flex-col gap-12 lg:w-1/3">
        {/* LOGO & TEXT */}
        <div className="flex flex-col gap-4">
          <div className="logo flex items-center gap-2">
            {/* You might want a dark mode version of the logo here */}
            <Image src="/travel-logo.png" alt="logo" width={90} height={90} />
          </div>

          <p className="text-sm opacity-70">
            Sunspots connects travelers to extraordinary destinations with
            exclusive deals and effortless planning for every type of adventure.
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="social flex gap-4">
          {/* Social icons are images; animation added to the Link wrapper */}
          <Link href="/" className="transition-transform duration-300 hover:scale-110">
            <Image src="/fb.png" alt="facebook" width={30} height={30} />
          </Link>
          <Link href="/" className="transition-transform duration-300 hover:scale-110">
            <Image src="/twitter.png" alt="twitter" width={30} height={30} />
          </Link>
          <Link href="/" className="transition-transform duration-300 hover:scale-110">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>

      {/* LINK FOOTER */}
      <div className="right lg:w-2/3 flex xs:flex-col md:flex-row xs:gap-10 md:gap-0 md:justify-between">
        <FooterCard
          title="Company"
          link1="About Us"
          link2="Careers"
          link3="Press & Media"
          isDarkMode={isDarkMode}
        />

        <FooterCard
          title="Support"
          link1="Help Center"
          link2="Partner With Us"
          link3="Community Forum"
          link4="Travel Guides"
          isDarkMode={isDarkMode}
        />

        <FooterCard
          title="Contact"
          link1="+1 800 555 9834"
          link2="support@sunspots.com"
          link3="210 Sunset Avenue, California, USA"
          isDarkMode={isDarkMode}
        />
      </div>
    </footer>
  );
};

// ---

interface FooterCardProps {
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
  isDarkMode: boolean; // Added prop for theme
}

const FooterCard = ({ title, link1, link2, link3, link4, isDarkMode }: FooterCardProps) => {
  // Theme-aware classes for links and title
  const titleColorClass = isDarkMode ? "text-white" : "text-gray-900";
  const linkTextColorClass = isDarkMode ? "text-gray-400 hover:text-purple-400" : "text-gray-700 hover:text-purple-600";
  
  // Array of links to map over for clean rendering
  const links = [link1, link2, link3, link4].filter(Boolean);

  return (
    <div className="flex flex-col gap-4">
      <h3 className={`text-2xl font-bold ${titleColorClass}`}>{title}</h3>
      <ul className="flex flex-col gap-4 mt-4">
        {links.map((linkText, index) => (
          <Link 
            key={index}
            className={`text-base transition-colors duration-200 ${linkTextColorClass}`} 
            href="/"
          >
            {linkText}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Footer;