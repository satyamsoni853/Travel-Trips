"use client";
import React from "react";
import Image from "next/image";
import { Plane, Link, CheckCircle, Lock, ArrowRight } from "lucide-react";
import { useTheme } from "../app/ThemeContext";

// --- CSS Keyframes for custom animations ---
const ANIMATION_STYLES = `
    @keyframes fadeInSlideUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeInSlideUp {
        animation: fadeInSlideUp 0.7s ease-out forwards;
    }
    .animate-delay-100 { animation-delay: 0.1s; }
    .animate-delay-200 { animation-delay: 0.2s; }
    .animate-delay-300 { animation-delay: 0.3s; }
    .animate-delay-400 { animation-delay: 0.4s; }
    .animate-delay-500 { animation-delay: 0.5s; }
    .animate-delay-600 { animation-delay: 0.6s; }
    .animate-delay-700 { animation-delay: 0.7s; }
    .animate-delay-800 { animation-delay: 0.8s; }
    .animate-delay-900 { animation-delay: 0.9s; }
`;


// --- Data & Constants ---
const PNR_DATA = {
  title: "PNR Transfer",
  subtitle: "Book the PNR in your GDS and transfer to us for ticketing",
  intro:
    "Airlines that may be booked by the agency in their GDS and transferred to Sunspots Holidays for ticketing are required to follow the steps below.",
  prerequisites: [
    "Prior to creating the PNR, verify the Sunspots Holidays fares and rules at www.sunspotsholidays.com. A user ID & password is required to access our website.",
    "Upon completion of the PNR with payment and fare rule validation, PNR ownership may be released to us for ticket issuance.",
  ],
  gdsNote:
    "GDS formats for transferring the PNRs from your PCC to Sunspots are outlined below. The formats require the user to have supervisory capability in their respective GDS. You may need to contact your GDS Help Desk for further help.",
  formats: [
    {
      name: "Sabre",
      image: "https://sunspotsholidays.com/images/Sabre_Travel_Network.gif",
      entry: "6[Q]TA/3RT2-SR",
      explanation: "3RT2 represents the 4 character Sunspots PCC. (Three Romeo Tango Two)",
      note: "NB stands for the initials of the person releasing the PNR.",
    },
    {
      name: "Amadeus",
      image: "https://sunspotsholidays.com/images/amadeus-it-holdings_200x200.jpg",
      entry: "RP/YTQC4215D/ALL",
      explanation: "YTQC4215D is the PCC for Sunspots",
      note: "Receive & End PNR.",
    },
  ],
};

// --- Sub Component: GDS Format Card ---
const GDSFormatCard = ({ format, isDarkMode, animationDelayClass }: { format: (typeof PNR_DATA.formats)[0]; isDarkMode: boolean; animationDelayClass: string }) => {
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const entryBg = isDarkMode ? "bg-black/40 text-green-400" : "bg-gray-100 text-purple-600";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const titleColor = format.name === "Sabre" ? "text-red-500" : "text-blue-500";
  
  return (
    <div className={`flex flex-col md:flex-row items-center p-6 rounded-xl shadow-lg transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl 
                     animate-fadeInSlideUp opacity-0 ${animationDelayClass}`} 
         style={{ animationFillMode: 'forwards' }}>
      
      {/* Logo/Image */}
      <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0 md:mr-6">
        <div className="relative w-24 h-24 object-contain">
          <Image
            src={format.image}
            alt={`${format.name} Logo`}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Details */}
      <div className="w-full md:w-3/4 space-y-4">
        <h3 className={`text-2xl font-bold ${titleColor}`}>{format.name} Entry</h3>
        
        <div className={`p-3 rounded-lg font-mono text-lg font-semibold whitespace-pre-wrap ${entryBg}`}>
          {format.entry}
        </div>
        
        <p className={`${textColor} text-sm`}>
          <ArrowRight className="inline w-4 h-4 mr-2 text-purple-500" />
          **PCC Explanation:** {format.explanation}
        </p>
        
        {format.name === "Amadeus" && (
            <p className={`${textColor} text-sm`}>
                <ArrowRight className="inline w-4 h-4 mr-2 text-purple-500" />
                **Required Action:** {format.note}
            </p>
        )}
        {format.name === "Sabre" && (
            <p className={`${textColor} text-sm`}>
                <ArrowRight className="inline w-4 h-4 mr-2 text-purple-500" />
                **Note on Initials:** {format.note}
            </p>
        )}
      </div>
    </div>
  );
};


// --- Main Page Component ---
const PNRTransferPage = () => {
  const { isDarkMode } = useTheme();

  // Conditional Styling
  const mainBg = isDarkMode ? "bg-gray-950" : "bg-gray-50";
  const sectionBg = isDarkMode ? "bg-gray-900" : "bg-white";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const accentColor = "text-purple-500";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const prerequisiteBg = isDarkMode ? "bg-purple-900/40" : "bg-purple-100/70";
  const prerequisiteText = isDarkMode ? "text-purple-200" : "text-purple-800";
  const linkColor = isDarkMode ? "text-yellow-400 hover:text-purple-400" : "text-purple-600 hover:text-purple-800";

  return (
    <div className={`min-h-screen ${mainBg} py-12 sm:py-20 transition-colors duration-500`}>
        {/* Global Styles for Animation */}
        <style jsx global>{ANIMATION_STYLES}</style>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Section - Fade In */}
            <div 
                className="text-center mb-12 animate-fadeInSlideUp opacity-0" 
                style={{ animationDelay: '0s', animationFillMode: 'forwards' }}
            >
                <h1 className={`text-5xl font-extrabold ${headingColor} sm:text-6xl tracking-tight`}>
                    <Plane className="inline w-10 h-10 mr-3 mb-2 animate-pulse" /> {PNR_DATA.title}
                </h1>
                <p className={`mt-4 text-xl font-medium ${accentColor}`}>
                    {PNR_DATA.subtitle}
                </p>
            </div>

            {/* Introduction and Prerequisites Section - Fade In with Delay */}
            <div 
                className={`p-8 rounded-2xl shadow-xl mb-12 ${sectionBg} transition-colors duration-500 
                            animate-fadeInSlideUp opacity-0 animate-delay-200`}
                style={{ animationFillMode: 'forwards' }}
            >
                <p className={`${textColor} text-lg leading-relaxed mb-6`}>
                    {PNR_DATA.intro}
                </p>
                
                <h2 className={`text-2xl font-semibold ${headingColor} mb-4 flex items-center`}>
                    <Lock className="w-5 h-5 mr-3 text-red-500 animate-bounce-slow" /> Required Steps
                </h2>
                
                <div className={`p-5 rounded-lg ${prerequisiteBg} space-y-3`}>
                    {PNR_DATA.prerequisites.map((item, index) => (
                    <p key={index} className={`flex items-start ${prerequisiteText} font-medium`}>
                        <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-green-500" />
                        {index === 0 ? (
                            <>
                                Prior to creating the PNR, verify the Sunspots Holidays fares and rules at 
                                <a 
                                    href="https://www.sunspotsholidays.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={`ml-1 font-bold ${linkColor} transition-colors duration-300`}
                                >
                                    www.sunspotsholidays.com
                                </a>. A user ID & password is required to access our website.
                            </>
                        ) : (
                            item
                        )}
                    </p>
                    ))}
                </div>

                <p className={`${textColor} text-base leading-relaxed mt-6 italic border-t pt-4 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
                    **Important:** {PNR_DATA.gdsNote}
                </p>
            </div>

            {/* GDS Formats Section Heading - Fade In with Delay */}
            <h2 
                className={`text-3xl font-bold ${headingColor} text-center mb-8 
                            animate-fadeInSlideUp opacity-0 animate-delay-400`}
                style={{ animationFillMode: 'forwards' }}
            >
                GDS PNR Transfer Entries
            </h2>
            
            {/* GDS Format Cards - Staggered Fade In */}
            <div className="space-y-8">
                {PNR_DATA.formats.map((format, index) => (
                    <GDSFormatCard 
                        key={index} 
                        format={format} 
                        isDarkMode={isDarkMode} 
                        animationDelayClass={`animate-delay-${500 + index * 200}`} // Staggered delay
                    />
                ))}
            </div>
            
            {/* Help Desk Link - Fade In with Delay */}
            <div 
                className="mt-12 text-center animate-fadeInSlideUp opacity-0 animate-delay-900"
                style={{ animationFillMode: 'forwards' }}
            >
                <p className={`${textColor} text-lg`}>
                    Need further assistance with GDS formats? Please contact your 
                    <a 
                        href="#" // Placeholder for GDS Help Desk contact
                        className={`ml-1 font-bold ${linkColor} transition-colors duration-300`}
                    >
                        GDS Help Desk
                    </a>.
                </p>
            </div>
        </div>
    </div>
  );
};

export default PNRTransferPage;