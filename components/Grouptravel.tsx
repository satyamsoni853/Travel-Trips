"use client";
import React, { useState } from "react";
import {
  Users,
  Briefcase,
  Gift,
  Trophy,
  Plane,
  ChevronDown,
  ChevronUp,
  Landmark,
  CheckCircle,
} from "lucide-react";
import { useTheme } from "../app/ThemeContext";

// --- CSS Keyframes for custom animations ---
// Note: These need to be defined in a global CSS file or included via <style jsx global>
// For this example, I'll place them inside the component's return block using <style jsx global>
const ANIMATION_STYLES = `
    @keyframes fadeInSlideUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeInSlideUp {
        animation: fadeInSlideUp 0.7s ease-out forwards;
    }
`;


// --- 1. DATA STRUCTURE (UNCHANGED) ---
const GROUP_TRAVEL_DATA = {
  intro:
    "Are you planning a group tour for your clients? Sunspots Holidays offers the most attractive fares for group travel, weddings, sports groups, meetings, conventions, incentive programs, and pilgrimage or missionary trips for your clients. Let your clients or incentive house know that they can have red carpet service with our sky and land partners.",
  specialServices:
    "Special check-in facilities await them at major airports in Canada, U.S.A., Mexico, Central and South America, and European airports like Prague, Budapest, London and Frankfurt. We can offer the best ground transportation in major cities, especially in North America, Europe, and around Asia. We are a travel wholesaler company, and we deal only with our travel agent partners.",
  charter:
    "If you have any upscale group of 75 passengers or more, we can offer you the very best charter rates.",
  groupSize: "Groups consisting of 10 or more passengers",
  
  salesFormLink: "https://sunspotsholidays.com/pdf/SunspotsHolidaysGroupSales.pdf", 
  bookingFormLink: "https://sunspotsholidays.com/pdf/SunspotsHolidaysGroupBookingForm.pdf", 
  
  sections: [
    { id: "meetings", title: "Meetings and Convention Travel", icon: Landmark, color: "text-blue-500", delay: "delay-100",
      details: [
        "Dedicated toll-free number (1.800.657.8721 or 416.484.8144) to make or change meeting reservations.",
        "Free tickets based on the total number of travelers.",
        "Special offers to visit the meeting site for final preparations.",
        "Customized event help.",
        "Special discounts for event managers' travel.",
        "Dividend Miles or frequent flier members earn mileage on sky or land travel partners.",
      ],
    },
    { id: "weddings", title: "Weddings Travel", icon: Gift, color: "text-pink-500", delay: "delay-200",
      details: [
        "Travel discounts for wedding guests.",
        "A unique file provides comprehensive wedding program information.",
        "Dividend Miles or frequent flier members earn mileage on sky or land travel partners.",
      ],
    },
    { id: "group", title: "Group Travel", icon: Users, color: "text-green-500", delay: "delay-300",
      details: [
        "Ten or more passengers on the same flight qualify for a pricing package.",
        "Special pricing options.",
        "Guaranteed fares.",
        "No minimum stay requirements.",
        "Delayed ticketing requirements.",
        "Free tickets based on the number of travelers.",
      ],
    },
    { id: "incentive", title: "Incentive Travel", icon: Briefcase, color: "text-yellow-500", delay: "delay-400",
      details: [
        "Group Incentive program.",
        "Purchase 10 or more certificates and travel to any of the more than 700 destinations served by our sky partners.",
        "Dividend Miles or frequent flier members earn mileage on sky or land travel partners.",
        "Priced for travel within one of three zones: Continental United States and Canada, Caribbean, or Europe.",
      ],
    },
    { id: "sports", title: "Sports Teams Travel", icon: Trophy, color: "text-red-500", delay: "delay-500",
      details: [
        "Special arrangements for sports teams traveling in groups of 10 or more.",
        "Special pricing options.",
        "Pre-payment to ensure last minute flight availability and name confirmation.",
        "Guaranteed fares.",
        "No minimum stay requirements (depend on Destinations).",
        "Re-booking if group's return trip is earlier than planned.",
        "Delayed ticketing requirements.",
      ],
    },
  ],
};

// --- 2. SUB-COMPONENTS ---

/**
 * Animated Card for each Group Travel section.
 * Now includes a prop for animation delay.
 */
const GroupServiceCard = ({ section, isDarkMode }: { section: (typeof GROUP_TRAVEL_DATA.sections)[0]; isDarkMode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = section.icon;

  const cardBg = isDarkMode ? "bg-gray-800 hover:bg-gray-700/80" : "bg-white hover:bg-purple-50";
  const titleColor = section.color;
  const detailBg = isDarkMode ? "bg-gray-700/50" : "bg-purple-100/70";
  const detailText = isDarkMode ? "text-gray-300" : "text-gray-700";
  const checkMarkColor = isDarkMode ? "text-yellow-400" : "text-purple-600";

  return (
    <div
      className={`rounded-xl shadow-lg p-6 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer animate-fadeInSlideUp opacity-0 ${section.delay} ${cardBg}`}
      style={{ animationFillMode: 'forwards' }} // Ensure animation stays at end state
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-start">
        {/* Title and Icon */}
        <div className="flex items-center space-x-4">
          <Icon className={`w-8 h-8 ${titleColor} transition-all duration-300 ${isOpen ? "rotate-12" : "rotate-0"}`} />
          <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{section.title}</h3>
        </div>
        {/* Toggle Button */}
        <button
          className={`p-2 rounded-full ${isDarkMode ? "bg-gray-700 text-white" : "bg-purple-200 text-purple-800"} transition-all duration-300`}
          aria-expanded={isOpen}
          aria-controls={`details-${section.id}`}
        >
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {/* Detailed Content (Toggled) */}
      <div
        id={`details-${section.id}`}
        className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
          isOpen ? "max-h-96 mt-6" : "max-h-0 mt-0"
        }`}
      >
        <div className={`p-4 rounded-lg ${detailBg}`}>
          <ul className="space-y-2">
            {section.details.map((detail, index) => (
              <li key={index} className={`flex items-start text-sm ${detailText}`}>
                <CheckCircle className={`w-4 h-4 mr-2 mt-1 flex-shrink-0 ${checkMarkColor}`} />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- 3. MAIN COMPONENT ---
const GroupTravelPage = () => {
  const { isDarkMode } = useTheme();

  // Conditional Styling
  const mainBg = isDarkMode ? "bg-gray-950" : "bg-gray-50";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const accentColor = "text-purple-500";
  const sectionBg = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const calloutBg = isDarkMode ? "bg-purple-900/50" : "bg-purple-100";
  const buttonBg = "bg-purple-600 hover:bg-purple-700";
  // const linkColor = isDarkMode ? "text-yellow-400" : "text-purple-600"; // not used here

  return (
    <div className={`min-h-screen ${mainBg} py-12 sm:py-24 transition-colors duration-500`}>
        {/* Global Styles for Animation */}
        <style jsx global>{ANIMATION_STYLES}</style>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Section - FADE IN */}
            <div className="text-center mb-16 animate-fadeInSlideUp opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
                <h1 className={`text-5xl font-extrabold ${headingColor} sm:text-6xl tracking-tight`}>
                    Specialized <span className={accentColor}>Group Travel</span>
                </h1>
                <p className={`mt-4 text-xl ${textColor}`}>
                    Exclusive pricing and tailored experiences for groups of 10 or more.
                </p>
            </div>

            {/* Introduction & Group Size Callout - FADE IN WITH SCALE EFFECT ON CALLOUT */}
            <div className={`p-8 rounded-2xl shadow-xl mb-12 ${sectionBg} transition-colors duration-500 animate-fadeInSlideUp opacity-0 delay-300`} style={{ animationFillMode: 'forwards' }}>
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <p className={`${textColor} text-lg leading-relaxed mb-4`}>
                        {GROUP_TRAVEL_DATA.intro}
                        </p>
                        <p className={`${textColor} text-lg leading-relaxed`}>
                        {GROUP_TRAVEL_DATA.specialServices}
                        </p>
                    </div>
                    {/* Callout Box - Subtle pulsing hover animation */}
                    <div className={`lg:col-span-1 p-6 rounded-xl ${calloutBg} border-l-4 border-purple-500 flex flex-col justify-center items-center text-center transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl`}>
                        <Users className={`w-10 h-10 mb-2 ${accentColor}`} />
                        <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                            Minimum Group Size:
                        </p>
                        <p className={`text-3xl font-extrabold ${accentColor}`}>
                            10+ Passengers
                        </p>
                    </div>
                </div>
                <p className={`mt-6 text-base italic ${textColor}`}>
                    **Charter Options:** For upscale groups of 75 passengers or more, we offer the very best charter rates.
                </p>
            </div>
            
            <hr className={`my-12 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}/>

            {/* Services Grid (Toggle Functionality) - FADE IN with Staggered Delay */}
            <h2 className={`text-3xl font-bold text-center mb-10 ${headingColor} animate-fadeInSlideUp opacity-0 delay-500`} style={{ animationFillMode: 'forwards' }}>
                Our Group Specialties
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* Each GroupServiceCard now uses a staggered delay defined in the data structure */}
                {GROUP_TRAVEL_DATA.sections.map((section) => (
                    <GroupServiceCard key={section.id} section={section} isDarkMode={isDarkMode} />
                ))}
            </div>

            {/* Download Buttons Section - FADE IN AND BOUNCE EFFECT ON HOVER */}
            <div className="mt-16 text-center space-y-4 md:space-y-0 md:space-x-8 animate-fadeInSlideUp opacity-0 delay-700" style={{ animationFillMode: 'forwards' }}>
                <a
                    href={GROUP_TRAVEL_DATA.salesFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-lg text-white ${buttonBg} transition duration-300 transform hover:scale-[1.03] hover:shadow-xl`}
                >
                    <Plane className="w-5 h-5 mr-3 animate-pulse" /> Download Group Sales Form
                </a>
                <a
                    href={GROUP_TRAVEL_DATA.bookingFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-lg text-white ${buttonBg} transition duration-300 transform hover:scale-[1.03] hover:shadow-xl`}
                >
                    <Plane className="w-5 h-5 mr-3 animate-pulse" /> Download Group Booking Form
                </a>
            </div>
        </div>
    </div>
  );
};

export default GroupTravelPage;