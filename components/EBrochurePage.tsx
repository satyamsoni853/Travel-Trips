"use client";
import React from "react";
import { Download, Globe, Plane, MapPin, Sailboat, FileText, Landmark } from "lucide-react";
import { useTheme } from "../app/ThemeContext"; // Assuming your ThemeContext is here

// --- 1. DATA STRUCTURE (Example Brochures & Links) ---
const BROCHURE_DATA = [
  {
    title: "Spotlight on North American Vacations",
    subtitle: "Explore the best of the USA and Canada.",
    icon: Globe,
    link: "#", // Placeholder link
    color: "text-blue-500",
  },
  {
    title: "Beautiful India and UAE",
    subtitle: "A journey through ancient wonders and modern cities.",
    icon: Landmark, // Assuming Landmark is imported
    link: "#",
    color: "text-orange-500",
  },
  {
    title: "Explore the Islands of Hawaii",
    subtitle: "Volcanos, beaches, and Aloha spirit.",
    icon: Sailboat,
    link: "#",
    color: "text-red-500",
  },
  {
    title: '"Barbados" a unique Caribbean paradise',
    subtitle: "Sun-soaked beaches and vibrant culture.",
    icon: Sailboat,
    link: "#",
    color: "text-pink-500",
  },
  {
    title: "Explore the adventure of Cayman islands",
    subtitle: "Diving, marine life, and luxury.",
    icon: Sailboat,
    link: "#",
    color: "text-green-500",
  },
  {
    title: "Magnificent nature of El Salvador",
    subtitle: "Volcanic landscapes and stunning coastlines.",
    icon: MapPin,
    link: "#",
    color: "text-indigo-500",
  },
];

// --- 2. SUB-COMPONENT: Brochure Card ---
const BrochureCard = ({ brochure, isDarkMode, delay }: any) => {
  const Icon = brochure.icon;
  const cardBg = isDarkMode ? "bg-gray-800 hover:bg-gray-700/80" : "bg-white hover:bg-purple-50";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const titleColor = isDarkMode ? "text-white" : "text-gray-900";
  const buttonBg = "bg-purple-600 hover:bg-purple-700";

  return (
    <div
      className={`rounded-xl shadow-lg p-6 space-y-4 flex flex-col justify-between transition-all duration-700 transform hover:scale-[1.03] hover:shadow-2xl 
                  animate-fadeInSlideUp opacity-0 ${delay} ${cardBg}`}
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="space-y-3">
        <Icon className={`w-10 h-10 ${brochure.color}`} />
        <h3 className={`text-xl font-bold ${titleColor}`}>{brochure.title}</h3>
        <p className={`text-sm ${textColor}`}>{brochure.subtitle}</p>
      </div>

      <a
        href={brochure.link}
        download
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white ${buttonBg} transition duration-300 hover:shadow-md`}
      >
        <Download className="w-4 h-4 mr-2" /> Download PDF
      </a>
    </div>
  );
};

// --- 3. MAIN COMPONENT ---
const EBrochurePage = () => {
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
            Our Digital <span className={accentColor}>Brochures</span>
          </h1>
          <p className={`mt-4 text-xl ${textColor} max-w-4xl mx-auto`}>
            Explore our latest destinations and specialized packages through our downloadable e-brochures.
          </p>
        </div>

        <hr className={`my-12 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}/>

        {/* Brochure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BROCHURE_DATA.map((brochure, index) => (
            <BrochureCard 
              key={brochure.title} 
              brochure={brochure} 
              isDarkMode={isDarkMode} 
              // Stagger the animation delay
              delay={`delay-${(index * 100) + 300}`} 
            />
          ))}
        </div>
        
        {/* Call to Action for Agents */}
        <div className={`mt-20 p-8 text-center rounded-xl border-4 border-dashed border-purple-500 animate-fadeInSlideUp opacity-0 delay-700`} style={{ animationFillMode: 'forwards' }}>
            <p className={`text-2xl font-bold ${headingColor} mb-4 flex items-center justify-center`}>
                <FileText className="w-6 h-6 mr-3" /> Looking for our Group Sales Form?
            </p>
            <p className={`${textColor} mb-6`}>
                Download our specific forms for seamless group booking transfers.
            </p>
            <button
                className={`inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-300 transform hover:scale-105`}
            >
                View Group Forms Page
            </button>
        </div>
      </div>
    </div>
  );
};

export default EBrochurePage;