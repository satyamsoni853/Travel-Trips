"use client";
import React, { useState, useMemo } from "react";
import {
  Globe,
  Star,
  Church,
  Heart,
  Briefcase,
  Target,
  Plane,
  Filter,
} from "lucide-react";
import { useTheme } from "../app/ThemeContext";

// --- 1. DATA STRUCTURE (Based on ABOUT_DATA and GROUP_TRAVEL_DATA details) ---
const PACKAGES_DATA = [
  {
    id: "sun-magic",
    title: "Sun Magic Getaways",
    icon: Star,
    category: "Leisure",
    description:
      "Our branded Sun Magic and Positive Destination Ideas lines offer clients short stays and unique packages in Europe, the United States, Canada, Latin America, and 36 destinations in the Caribbean.",
    destinations: ["Caribbean", "Europe", "USA/Canada", "Latin America"],
    color: "text-yellow-500",
  },
  {
    id: "mission-travel",
    title: "Mission & Pilgrimage Travel",
    icon: Church,
    category: "Specialized",
    description:
      "New Mission Travel and Pilgrimage packages make planning easy for people who want to help others or embark on a spiritual journey. These are highly customized group packages.",
    destinations: ["Worldwide (Custom)", "Spiritual Sites"],
    color: "text-blue-500",
  },
  {
    id: "weddings",
    title: "Destination Weddings",
    icon: Heart,
    category: "Groups",
    description:
      "Exclusive wedding packages offering travel discounts for guests, guaranteed fares, and a unique file with comprehensive wedding program information.",
    destinations: ["Caribbean", "Mexico", "Hawaii"],
    color: "text-pink-500",
  },
  {
    id: "incentive-group",
    title: "Incentive Programs",
    icon: Target,
    category: "Groups",
    description:
      "Customized group incentive travel programs, allowing purchase of certificates and travel to over 700 destinations served by our partners.",
    destinations: ["USA/Canada", "Caribbean", "Europe"],
    color: "text-green-500",
  },
  {
    id: "business-group",
    title: "Meetings & Conventions",
    icon: Briefcase,
    category: "Groups",
    description:
      "Special arrangements for meetings, including dedicated toll-free reservation numbers, free tickets for organizers, and customized event support.",
    destinations: ["Major Cities Worldwide"],
    color: "text-indigo-500",
  },
];

const CATEGORIES = ["All", "Leisure", "Groups", "Specialized"];

// --- 2. SUB-COMPONENTS ---

/**
 * Filter Toggle Button
 */
const FilterButton = ({ category, currentFilter, setFilter, isDarkMode }: any) => {
  const isActive = category === currentFilter;
  const activeClass = isDarkMode ? "bg-purple-600 text-white shadow-lg" : "bg-purple-600 text-white shadow-md";
  const inactiveClass = isDarkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-white text-gray-700 hover:bg-gray-100";
  
  return (
    <button
      onClick={() => setFilter(category)}
      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-[1.05] ${
        isActive ? activeClass : inactiveClass
      }`}
    >
      {category}
    </button>
  );
};

/**
 * Individual Package Card
 */
const PackageCard = ({ pkg, isDarkMode, delay }: any) => {
  const Icon = pkg.icon;
  const cardBg = isDarkMode ? "bg-gray-800 hover:bg-gray-700/80" : "bg-white hover:bg-purple-50";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const titleColor = pkg.color;

  return (
    <div
      className={`rounded-xl shadow-lg p-6 space-y-4 transition-all duration-700 transform hover:scale-[1.03] hover:shadow-2xl 
                  animate-fadeInSlideUp opacity-0 ${delay} ${cardBg}`}
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="flex items-center space-x-4">
        <Icon className={`w-8 h-8 ${titleColor} flex-shrink-0`} />
        <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{pkg.title}</h3>
      </div>
      
      <p className={`text-sm ${textColor} leading-relaxed`}>
        {pkg.description}
      </p>
      
      <div className="pt-2 border-t border-dashed" style={{ borderColor: isDarkMode ? '#4b5563' : '#d1d5db' }}>
        <p className={`text-xs font-semibold ${isDarkMode ? "text-purple-300" : "text-purple-600"} mb-1`}>Key Destinations:</p>
        <div className="flex flex-wrap gap-2">
            {pkg.destinations.map((dest: string, i: number) => (
                <span key={i} className={`text-xs px-2 py-0.5 rounded-full ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-purple-100 text-purple-700"}`}>
                    {dest}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

// --- 3. MAIN COMPONENT ---
const SpecialPackagesPage = () => {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState("All");

  // Filter Logic using useMemo for performance
  const filteredPackages = useMemo(() => {
    if (filter === "All") {
      return PACKAGES_DATA;
    }
    return PACKAGES_DATA.filter((pkg) => pkg.category === filter);
  }, [filter]);

  // Conditional Styling
  const mainBg = isDarkMode ? "bg-gray-950" : "bg-gray-50";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const accentColor = "text-purple-500";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";

  // Custom CSS for animations
  const ANIMATION_STYLES = `
    @keyframes fadeInSlideUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeInSlideUp {
        animation: fadeInSlideUp 0.7s ease-out forwards;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
`;

  return (
    <div className={`min-h-screen ${mainBg} py-12 sm:py-24 transition-colors duration-500`}>
        {/* Global Styles for Animation */}
        <style jsx global>{ANIMATION_STYLES}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Section */}
            <div className="text-center mb-16 animate-fadeInSlideUp opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
                <h1 className={`text-5xl font-extrabold ${headingColor} sm:text-6xl tracking-tight`}>
                    Our <span className={accentColor}>Special Packages</span>
                </h1>
                <p className={`mt-4 text-xl ${textColor} max-w-4xl mx-auto`}>
                    We focus on active marketing of special products rather than discounted rates, giving you unique experiences worldwide.
                </p>
            </div>
            
            <hr className={`my-12 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}/>

            {/* Filter/Toggle Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12 animate-fadeInSlideUp opacity-0 delay-300" style={{ animationFillMode: 'forwards' }}>
                <div className={`flex items-center text-lg font-semibold ${headingColor} flex-shrink-0`}>
                    <Filter className="w-5 h-5 mr-2" /> Filter Packages:
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {CATEGORIES.map((category) => (
                        <FilterButton
                            key={category}
                            category={category}
                            currentFilter={filter}
                            setFilter={setFilter}
                            isDarkMode={isDarkMode}
                        />
                    ))}
                </div>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages.map((pkg, index) => (
                    <PackageCard 
                        key={pkg.id} 
                        pkg={pkg} 
                        isDarkMode={isDarkMode} 
                        // Stagger the animation delay
                        delay={`delay-${(index * 100) + 400}`} 
                    />
                ))}
            </div>
            
            {filteredPackages.length === 0 && (
                <div className="text-center p-10 mt-10 rounded-xl bg-red-100/10 border border-red-500/50">
                    <p className={`text-xl font-semibold ${isDarkMode ? "text-red-400" : "text-red-700"}`}>
                        No packages found in the "{filter}" category.
                    </p>
                </div>
            )}
            
            {/* Call to Action */}
            <div className={`mt-20 p-8 text-center rounded-xl border-4 border-dashed border-purple-500 animate-fadeInSlideUp opacity-0 delay-900`} style={{ animationFillMode: 'forwards' }}>
                <p className={`text-2xl font-bold ${headingColor} mb-4`}>Ready to book your unique travel experience?</p>
                <button
                    className={`inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-300 transform hover:scale-105`}
                >
                    <Plane className="w-5 h-5 mr-3" /> Contact Us to Get Started
                </button>
            </div>
        </div>
    </div>
  );
};

export default SpecialPackagesPage;