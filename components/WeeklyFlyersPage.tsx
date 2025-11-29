"use client";
import React from "react";
import { Plane, Calendar, Tag, ArrowRight, Mail } from "lucide-react";
import { useTheme } from "../app/ThemeContext";

// --- 1. DATA STRUCTURE (Placeholder Deals) ---
const FLYER_DATA = [
  {
    week: "Nov 20 - Nov 26",
    title: "Caribbean Winter Escape Deals",
    description: "Exclusive wholesale pricing on land and air packages to top Caribbean islands. Limited seats available!",
    tag: "Hot Deal",
    color: "bg-red-500/10 border-red-500",
    iconColor: "text-red-500",
  },
  {
    week: "Nov 13 - Nov 19",
    title: "European City Break Specials",
    description: "Short stays in Prague, London, and Budapest with consolidated airline fares. Perfect for off-season travel.",
    tag: "New",
    color: "bg-blue-500/10 border-blue-500",
    iconColor: "text-blue-500",
  },
  {
    week: "Nov 06 - Nov 12",
    title: "North America Holiday Travel",
    description: "Special rates for flights and hotels across the U.S. and Canada for the upcoming holiday season.",
    tag: "Expiring Soon",
    color: "bg-yellow-500/10 border-yellow-500",
    iconColor: "text-yellow-500",
  },
  {
    week: "Oct 30 - Nov 05",
    title: "Asia & Middle East Journeys",
    description: "Unbeatable wholesale packages to India, UAE, and other destinations with our international air carriers.",
    tag: "Archive",
    color: "bg-green-500/10 border-green-500",
    iconColor: "text-green-500",
  },
];

// --- 2. SUB-COMPONENT: Flyer Card ---
const FlyerCard = ({ flyer, isDarkMode, delay }: any) => {
  const cardBg = isDarkMode ? "bg-gray-800 hover:bg-gray-700/80" : "bg-white hover:bg-purple-50";
  const titleColor = isDarkMode ? "text-white" : "text-gray-900";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const buttonHover = isDarkMode ? "hover:bg-purple-700" : "hover:bg-purple-800";
  
  const tagClass = `${flyer.color} ${isDarkMode ? "text-white" : "text-gray-900"} font-semibold`;
  
  return (
    <div
      className={`rounded-xl shadow-lg p-6 space-y-4 flex flex-col justify-between transition-all duration-700 transform hover:scale-[1.03] hover:shadow-2xl 
                  animate-fadeInSlideUp opacity-0 ${delay} ${cardBg}`}
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="space-y-3">
        {/* Date and Tag */}
        <div className="flex items-center justify-between">
          <span className={`flex items-center text-sm ${textColor}`}>
            <Calendar className="w-4 h-4 mr-2 text-purple-400" />
            {flyer.week}
          </span>
          <span className={`px-3 py-1 text-xs rounded-full border ${tagClass}`}>{flyer.tag}</span>
        </div>
        
        {/* Title and Description */}
        <h3 className={`text-xl font-bold ${titleColor}`}>{flyer.title}</h3>
        <p className={`text-sm ${textColor}`}>{flyer.description}</p>
      </div>

      <button
        className={`mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 ${buttonHover} transition duration-300 hover:shadow-md`}
      >
        View Flyer Details <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

// --- 3. MAIN COMPONENT ---
const WeeklyFlyersPage = () => {
  const { isDarkMode } = useTheme();

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
    .delay-600 { animation-delay: 0.6s; }
    .delay-700 { animation-delay: 0.7s; }
`;

  return (
    <div className={`min-h-screen ${mainBg} py-12 sm:py-24 transition-colors duration-500`}>
      {/* Global Styles for Animation */}
      <style jsx global>{ANIMATION_STYLES}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInSlideUp opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
          <h1 className={`text-5xl font-extrabold ${headingColor} sm:text-6xl tracking-tight`}>
            Weekly <span className={accentColor}>E-flyers</span>
          </h1>
          <p className={`mt-4 text-xl ${textColor} max-w-4xl mx-auto`}>
            Check back every week for the latest **wholesale deals** on flights, short stays, and unique packages from Sunspots Holidays.
          </p>
        </div>

        <hr className={`my-12 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}/>

        {/* Flyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FLYER_DATA.map((flyer, index) => (
            <FlyerCard 
              key={flyer.week} 
              flyer={flyer} 
              isDarkMode={isDarkMode} 
              // Stagger the animation delay
              delay={`delay-${(index * 100) + 300}`} 
            />
          ))}
        </div>
        
        {/* Subscription Call to Action */}
        <div className={`mt-20 p-8 text-center rounded-xl border-4 border-dashed border-purple-500 animate-fadeInSlideUp opacity-0 delay-700`} style={{ animationFillMode: 'forwards' }}>
            <p className={`text-2xl font-bold ${headingColor} mb-4`}>Never Miss a Deal!</p>
            <p className={`${textColor} mb-6`}>
                Sign up to have our weekly e-flyers delivered straight to your inbox.
            </p>
            <button
                className={`inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-300 transform hover:scale-105`}
            >
                <Mail className="w-5 h-5 mr-3" /> Subscribe Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyFlyersPage;