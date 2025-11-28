"use client";
import React from "react";
import Image from "next/image";
import {
  Plane,
  Landmark,
  Briefcase,
  Globe,
  CheckCircle,
  Rocket,
  Zap,
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Link,
} from "lucide-react";
import { useTheme } from "../app/ThemeContext";
import Title from "./Title"; // Assuming this is components/Title.tsx
import FooterSection from "./FooterSection";

// --- Data in JSON format (Included for reference) ---
const ABOUT_DATA = {
  company_name: "Sunspots Holidays",
  tagline: "Awesome airlines, beautiful places",
  history: {
    story_start:
      "Sunspots Holidays brings together fantastic airlines and beautiful destinations, providing travellers with special experiences they won't soon forget.",
    founding_details:
      "Our story begins in January 1974, when Campbell Travel Limited emerged as a new travel agency in Ontario. After many years of service to travellers, Campbell Travel decided to shift its focus, becoming a strictly wholesale travel company, and the new enterprise was soon known simply as Sunspots Holidays.",
    core_philosophy:
      "But while the name changed, the key philosophy driving Sunspots Holidays remains the same today as it was when Campbell Travel opened its doors. We focus on active marketing of special products rather than discounted rates.",
  },
  offerings: {
    title: "Our Unique Offerings",
    description:
      "Unique products are what set us apart. Our branded Sun Magic and Positive Destination Ideas lines offer clients short stays in Europe, the United States, Canada, Latin America, some 36 destinations in the Caribbean, and the Maldives and Kerala, India. Our new Mission Travel and Pilgrimage packages make planning easy for people who want to help others or embark on a spiritual journey. We also offer a variety of group packages, wedding packages, and much more.",
    partnership_model:
      "Sunspots Holidays' model builds partnerships with consolidated airlines and land package providers to create travel opportunities that benefit airlines and enable travel agents to increase revenues during the off season. These benefits also reduce costs, which allows consumers to travel to unimaginably beautiful places at a very imaginable cost.",
  },
  partnerships: {
    air_partners_intro:
      "Our partnership with more than 40 major international air carriers is the backbone of our enterprise, helping us take your clients around the world. Air partners include: American Airlines, US Airways, Delta Airlines, BMI, Czech Airlines, Lot Polish Airlines, LAN, TAM, TACA, Aerolineas Argentinas, Malev Hungarian Airlines, Srilankan Airlines, Etihad Airways, and many more (see the full list to the left).",
    product_flexibility:
      "We have developed a proactive and flexible product, offering land and air components together, as well as separately. We market our unique products across Canada, the United States, and internationally, and we can service any points worldwide.",
    success_factors:
      "The incredible success of Sunspots Holidays is a result of our commitment to customer service, steadfast belief in quality products, unswerving loyalty to our partners at all levels, and continuous marketing innovations that keep us moving forward.",
    invitation:
      "Energy, experience, and innovation are the pillars that have allowed us to excel in the travel industry. We invite you to join us on our ride around the world.",
  },
};

// --- Dummy Data for Footer Links (Unchanged) ---
const FOOTER_DATA = {
  address: {
    line1: "150 Ferrand Drive, Ste 511,",
    line2: "Toronto, ON M3C 3E5",
    fullAddress: "150 Ferrand Drive, Suite 511, Toronto, ON M3C 3E5, Canada",
  },
  contact: {
    phone: "(416) 484-8144",
    phoneToll: "+1 800 657-8721",
    email: "info@sunspotsholidays.com",
  },
  brochure: [
    "Spotlight on North American Vacations",
    "Beautiful India and UAE",
    "Explore the Islands of Hawaii",
    '"Barbados" a unique Caribbean paradise',
    "Explore the adventure of Cayman islands",
    "Explore the islands of Bahamas",
    "Magnificent nature of El Salvador",
  ],
};

const FloatingPlaneStyle = {
  animation: "float 4s ease-in-out infinite",
};

// --- Timeline Item Component (Unchanged) ---
type TimelineItemProps = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  accentColor: string;
  isDarkMode: boolean;
};

const TimelineItem = ({
  icon: Icon,
  title,
  description,
  accentColor,
  isDarkMode,
}: TimelineItemProps) => {
  const contentBg = isDarkMode
    ? "bg-purple-900 shadow-black/40"
    : "bg-white shadow-purple-200/50";
  const contentText = isDarkMode ? "text-purple-200" : "text-gray-700";
  const contentTitle = isDarkMode ? "text-yellow-400" : "text-purple-700";
  const dotBorder = isDarkMode ? "border-gray-950" : "border-white";

  const contentBoxClasses = `p-5 rounded-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] transform hover:rotate-1 shadow-lg ${contentBg}`;
  const dotClasses = `absolute top-0 w-6 h-6 rounded-full ${accentColor} flex items-center justify-center 
           transition-all duration-500 group-hover:scale-125 border-4 ${dotBorder} 
           left-1/2 -translate-x-1/2 z-10 hidden md:flex`;
  const mobileLineClasses = `absolute top-0 left-3 w-1 h-full ${
    isDarkMode ? "bg-purple-400/30" : "bg-purple-300"
  } md:hidden`;

  return (
    <div className="relative group mb-12 min-h-[100px]">
      {/* Mobile/SM Timeline Structure */}
      <div className={`md:hidden pl-10 relative`}>
        <div className={mobileLineClasses}></div>
        <div
          className={`absolute top-0 left-3 w-4 h-4 rounded-full ${accentColor} flex items-center justify-center -translate-x-1/2 z-10`}
        >
          <Icon className="w-2 h-2 text-white" />
        </div>
        <div
          className={`p-5 mb-8 rounded-xl shadow-lg ${
            isDarkMode ? "bg-purple-800" : "bg-gray-100"
          }`}
        >
          <h3
            className={`text-lg font-bold mb-1 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p className={`${contentText} text-sm leading-snug`}>{description}</p>
        </div>
      </div>

      {/* MD+ structure */}
      <div className="hidden md:block">
        <div className={contentBoxClasses}>
          <h3 className={`text-xl font-bold mb-2 ${contentTitle}`}>{title}</h3>
          <p className={`${contentText} leading-relaxed`}>{description}</p>
        </div>
        <div className={dotClasses}>
          <Icon className="w-3 h-3 text-white transition-all duration-300 group-hover:animate-pulse" />
        </div>
      </div>
    </div>
  );
};
// -----------------------------

const AboutUsPage = () => {
  const { isDarkMode } = useTheme();

  // --- Conditional Color Variables (Unchanged) ---
  const secondaryBg = isDarkMode ? "bg-gray-950" : "bg-white";
  const footerBg = isDarkMode ? "bg-purple-950" : "bg-gray-100";
  const headingColor = "text-yellow-400"; // Gold/Yellow for "Sunspots"
  const accentColor = "bg-purple-600";
  const accentTextColor = isDarkMode ? "text-purple-400" : "text-purple-700";
  const mainText = isDarkMode ? "text-purple-200" : "text-gray-700";
  const footerTitleColor = isDarkMode ? headingColor : "text-purple-700";
  const footerAccentIconColor = isDarkMode
    ? "text-yellow-400"
    : "text-purple-600";
  const footerAccentHover = isDarkMode
    ? "hover:text-yellow-400"
    : "hover:text-purple-900";

  const timelineData = [
    {
      icon: Landmark,
      title: "1974: The Campbell Travel Founding",
      description: ABOUT_DATA.history.founding_details,
    },
    {
      icon: Briefcase,
      title: "The Wholesaler Shift",
      description:
        "Campbell Travel decided to shift its focus, becoming a strictly wholesale travel company, and was soon known simply as Sunspots Holidays.",
    },
    {
      icon: Zap,
      title: "Core Philosophy: Quality Over Discount",
      description: ABOUT_DATA.history.core_philosophy,
    },
  ];

  // Array of 20 plane configurations
  // The 'dur' (duration) is increased significantly to keep planes on screen longer,
  // and the 'delay' ensures they are staggered.
  const planeConfigs = [
      // Group 1: Path 1 (Bottom Left to Top Right) - Duration ~40s
      { move: 'planeMove1', dur: 40, delay: 0, size: 'w-16 h-16', opacity: 0.2 },
      { move: 'planeMove1', dur: 44, delay: 10, size: 'w-10 h-10', opacity: 0.15 },
      { move: 'planeMove1', dur: 36, delay: 20, size: 'w-14 h-14', opacity: 0.25 },
      { move: 'planeMove1', dur: 48, delay: 30, size: 'w-18 h-18', opacity: 0.1 },

      // Group 2: Path 2 (Top Right to Bottom Left) - Duration ~50s
      { move: 'planeMove2', dur: 50, delay: 0, size: 'w-12 h-12', opacity: 0.15 },
      { move: 'planeMove2', dur: 54, delay: 12, size: 'w-16 h-16', opacity: 0.2 },
      { move: 'planeMove2', dur: 46, delay: 24, size: 'w-8 h-8', opacity: 0.1 },
      { move: 'planeMove2', dur: 58, delay: 36, size: 'w-20 h-20', opacity: 0.25 },

      // Group 3: Path 3 (Mid-Left to Mid-Right) - Duration ~36s
      { move: 'planeMove3', dur: 36, delay: 0, size: 'w-20 h-20', opacity: 0.1 },
      { move: 'planeMove3', dur: 38, delay: 9, size: 'w-10 h-10', opacity: 0.2 },
      { move: 'planeMove3', dur: 40, delay: 18, size: 'w-14 h-14', opacity: 0.15 },
      { move: 'planeMove3', dur: 42, delay: 27, size: 'w-16 h-16', opacity: 0.25 },

      // Group 4: Path 4 (Top Left to Mid-Right) - Duration ~30s
      { move: 'planeMove4', dur: 30, delay: 0, size: 'w-14 h-14', opacity: 0.18 },
      { move: 'planeMove4', dur: 34, delay: 7.5, size: 'w-18 h-18', opacity: 0.22 },
      { move: 'planeMove4', dur: 28, delay: 15, size: 'w-10 h-10', opacity: 0.15 },
      { move: 'planeMove4', dur: 32, delay: 22.5, size: 'w-12 h-12', opacity: 0.2 },

      // Group 5: Path 5 (Mid-Right to Mid-Left) - Duration ~60s
      { move: 'planeMove5', dur: 60, delay: 0, size: 'w-24 h-24', opacity: 0.08 },
      { move: 'planeMove5', dur: 66, delay: 15, size: 'w-18 h-18', opacity: 0.12 },
      { move: 'planeMove5', dur: 54, delay: 30, size: 'w-14 h-14', opacity: 0.15 },
      { move: 'planeMove5', dur: 70, delay: 45, size: 'w-16 h-16', opacity: 0.1 },
  ];


  return (
    <section
      className={`min-h-screen ${secondaryBg} relative flex flex-col transition-colors duration-500 overflow-hidden`}
    >
      <style jsx global>{`
        /* FIVE BASE ANIMATIONS - Boundaries adjusted to maximize visibility. 
           Planes now travel from -10vw to 110vw instead of -100vw to 100vw.
        */
        
        /* Plane 1: Bottom Left to Top Right (Diagonal Up) */
        @keyframes planeMove1 {
          0% {
            transform: translate(-10vw, 80vh) rotate(10deg);
            opacity: 0;
          }
          50% {
            opacity: var(--opacity);
          }
          100% {
            transform: translate(110vw, -20vh) rotate(10deg);
            opacity: 0;
          }
        }
        
        /* Plane 2: Top Right to Bottom Left (Reverse Diagonal Down) */
        @keyframes planeMove2 {
          0% {
            transform: translate(110vw, -20vh) rotate(-20deg);
            opacity: 0;
          }
          50% {
            opacity: var(--opacity);
          }
          100% {
            transform: translate(-10vw, 80vh) rotate(-20deg);
            opacity: 0;
          }
        }
        
        /* Plane 3: Mid-Left to Mid-Right (Shallow Upward Angle) */
        @keyframes planeMove3 {
          0% {
            transform: translate(-10vw, 30vh) rotate(5deg);
            opacity: 0;
          }
          50% {
            opacity: var(--opacity);
          }
          100% {
            transform: translate(110vw, 50vh) rotate(5deg);
            opacity: 0;
          }
        }
        
        /* Plane 4: Top Left to Mid-Right (Steeper Upward Angle) */
        @keyframes planeMove4 {
          0% {
            transform: translate(-10vw, 0vh) rotate(25deg);
            opacity: 0;
          }
          50% {
            opacity: var(--opacity);
          }
          100% {
            transform: translate(110vw, 60vh) rotate(25deg);
            opacity: 0;
          }
        }

        /* Plane 5: Mid-Right to Mid-Left (Shallow Downward Angle) */
        @keyframes planeMove5 {
          0% {
            transform: translate(110vw, 40vh) rotate(-15deg);
            opacity: 0;
          }
          50% {
            opacity: var(--opacity);
          }
          100% {
            transform: translate(-10vw, 10vh) rotate(-15deg);
            opacity: 0;
          }
        }
      `}</style>
      
      {/* 20 Background Planes */}
      {planeConfigs.map((config, index) => (
          <Plane
              key={index}
              className={`fixed top-0 left-0 z-0 text-yellow-400 opacity-0 pointer-events-none ${config.size}`}
              style={{
                  animation: `${config.move} ${config.dur}s linear infinite ${config.delay}s`,
                  '--opacity': config.opacity,
                  transform: 'translate(0, 0)',
              } as React.CSSProperties}
          />
      ))}


      {/* 1. Hero / Title Section */}
      <div
        className={`px-4 sm:px-6 lg:px-8 py-20 lg:py-32 mt-15 sm:mt-15 text-center shadow-2xl ${
          isDarkMode ? "shadow-purple-900/50" : "shadow-purple-200/50"
        } transition-colors duration-500 relative z-10`}
      >
        {/* Main Heading/Title Centered */}
        <Title
          title={ABOUT_DATA.company_name}
          subtitle={ABOUT_DATA.tagline}
          titleColor={headingColor}
          subtitleColor={isDarkMode ? "text-white" : "text-gray-900"}
        />
        <p
          className={`${
            isDarkMode ? "text-purple-100" : "text-gray-600"
          } font-light leading-relaxed text-lg sm:text-xl mt-6 max-w-4xl mx-auto opacity-90 transition-transform duration-700 transform hover:scale-[1.01]`}
        >
          {ABOUT_DATA.history.story_start}
        </p>

        {/* LOCATION: "The Evolution of Sunspots Holidays" moved here */}
        <h3 className={`text-3xl font-bold mt-16 ${accentTextColor} text-center`}>
            The Evolution of Sunspots Holidays
        </h3>
      </div>

      <hr className="border-purple-600 border-opacity-50" />

      {/* 2. Our Journey Through Time Section (formerly History Timeline) */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto flex-grow relative z-10">
        
        <h2
          className={`text-4xl font-extrabold text-center mb-16 ${accentTextColor}`}
        >
          Our Journey Through Time 🚀
        </h2>

        {/* Adjusting grid to ensure content is spread evenly */}
        <div className="grid lg:grid-cols-2 gap-12 items-start relative">
          {/* LEFT COLUMN: Main Text and Details */}
          <div className="order-1 lg:order-1 transition-opacity duration-700 delay-200 opacity-100">
            {/* The main intro text block */}
            <div className={`p-6 rounded-2xl shadow-xl mb-6 ${
                isDarkMode ? "bg-purple-800" : "bg-white"
            } transition-all duration-300 hover:scale-[1.01] hover:shadow-purple-500/50`}>
              <p className={`${mainText} leading-relaxed text-lg`}>
                Sunspots Holidays&apos; journey began in **January 1974** as Campbell
                Travel Limited in Ontario. After years as a successful travel
                agency, we strategically transitioned our focus to become a
                dedicated **wholesale travel company**, leading to the birth of
                Sunspots Holidays.
              </p>
            </div>
            
            {/* Key Differentiator box */}
            <div
              className={`p-6 rounded-xl border-l-4 ${
                isDarkMode
                  ? "border-yellow-400 bg-purple-900"
                  : "border-purple-600 bg-purple-50"
              } transition-transform duration-300 hover:translate-x-1 mb-8`}
            >
              <h4 className={`text-xl font-bold mb-2 ${headingColor}`}>
                Our Key Differentiator
              </h4>
              <p className={`${mainText} leading-relaxed`}>
                {ABOUT_DATA.history.core_philosophy} This core philosophy drives
                us to curate **unique and special products**, prioritizing
                quality travel experiences over mere discounted rates.
              </p>
            </div>
            
            {/* Global Partnerships box */}
            <div
              className={`p-6 rounded-2xl shadow-xl ${
                isDarkMode ? "bg-purple-800" : "bg-white"
              } transition-all duration-500 hover:scale-[1.01] hover:shadow-purple-500/50`}
            >
              <h4 className={`text-xl font-bold mb-2 ${headingColor}`}>
                Forging Global Partnerships
              </h4>
              <p className={`${mainText} leading-relaxed`}>
                Our wholesale transformation allowed us to forge stronger
                partnerships with over **40 major international air carriers**
                and land providers. This structure offers unparalleled value and
                flexible travel opportunities to agents and consumers worldwide.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Timeline Points */}
          <div className="order-2 lg:order-2 relative">
            {/* Add a central line for MD+ timeline look */}
            <div
              className={`md:border-l-4 md:border-dashed md:pl-8 ${
                isDarkMode ? "md:border-purple-700" : "md:border-gray-300"
              }`}
            >
              {/* FIX: Safely check if timelineData exists before mapping */}
              {timelineData && timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  accentColor={accentColor}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Offerings and Partnership Model (Secondary Section - Unchanged) */}
      <div
        className={`px-4 sm:px-6 lg:px-8 py-16 lg:py-24  relative z-10 ${
          isDarkMode
            ? "shadow-inner shadow-purple-950/50"
            : "shadow-inner shadow-gray-200/50"
        } transition-colors duration-500`}
      >
        <h2
          className={`text-4xl font-extrabold text-center mb-12 ${headingColor}`}
        >
          {ABOUT_DATA.offerings.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Offerings Description Card */}
          <div
            className={`p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-purple-500/50 hover:scale-[1.01] ${
              isDarkMode ? "bg-purple-800" : "bg-white"
            }`}
          >
            <h3
              className={`text-2xl font-bold ${headingColor} flex items-center gap-2 mb-4`}
            >
              <Globe className="w-6 h-6" /> Diverse Destinations
            </h3>
            <p className={`${mainText} leading-relaxed text-lg`}>
              {ABOUT_DATA.offerings.description}
            </p>
          </div>

          {/* Partnership Model Card */}
          <div
            className={`p-8 rounded-2xl shadow-xl relative transition-all duration-300 hover:shadow-purple-500/50 hover:scale-[1.01] ${
              isDarkMode ? "bg-purple-800" : "bg-white"
            }`}
          >
            <h3
              className={`text-2xl font-bold ${headingColor} flex items-center gap-2 mb-4`}
            >
              <CheckCircle className="w-6 h-6" /> Our Collaborative Model
            </h3>
            <p className={`${mainText} leading-relaxed text-lg`}>
              {ABOUT_DATA.offerings.partnership_model}
            </p>
            {/* Plane Animation - LOCALIZED */}
            <Plane
              className={`absolute right-[-20px] top-[-20px] w-10 h-10 ${headingColor} 
                                         rotate-45 transform opacity-70`}
              style={FloatingPlaneStyle}
            />
          </div>
        </div>
      </div>

      {/* 4. Partnerships and Invitation (Primary Purple Section) */}
      <div
        className={`px-4 sm:px-6 lg:px-8 py-16  text-center shadow-lg transition-colors duration-500 relative z-10 `}
      >
        {/* Main Heading Centered */}
        <h2 className={`text-4xl font-extrabold mb-10 ${headingColor} text-center`}>
          Global Reach & Success Factors
        </h2>
        <div className="grid  md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left  ">
          {/* Col 1 */}
          <div
            className={`p-4 rounded-lg transition-transform duration-300 hover:scale-[1.05]  ${
              isDarkMode ? "bg-purple-800" : "bg-white"
            } hover:bg-purple-700/50`}
          >
            <Rocket className={`w-8 h-8 mb-3 ${headingColor}`} />
            <h3
              className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              40+ Air Partners
            </h3>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-gray-700"
              } text-sm leading-relaxed opacity-80`}
            >
              {ABOUT_DATA.partnerships.air_partners_intro}
            </p>
          </div>
          {/* Col 2 */}
          <div
            className={`p-4 rounded-lg transition-transform duration-300 hover:scale-[1.05]  ${
              isDarkMode ? "bg-purple-800" : "bg-white"
            } hover:bg-purple-700/50`}
          >
            <Briefcase className={`w-8 h-8 mb-3 ${headingColor}`} />
            <h3
              className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Proactive & Flexible
            </h3>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-gray-700"
              } text-sm leading-relaxed opacity-80`}
            >
              {ABOUT_DATA.partnerships.product_flexibility}
            </p>
          </div>
          {/* Col 3 */}
          <div
            className={`p-4 rounded-lg transition-transform duration-300 hover:scale-[1.05]  ${
              isDarkMode ? "bg-purple-800" : "bg-white"
            } hover:bg-purple-700/50`}
          >
            <CheckCircle className={`w-8 h-8 mb-3 ${headingColor}`} />
            <h3
              className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Commitment to Quality
            </h3>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-gray-700"
              } text-sm leading-relaxed opacity-80`}
            >
              {ABOUT_DATA.partnerships.success_factors}
            </p>
          </div>
        </div>
        {/* Invitation (Bold Callout) */}
        <div
          className={`mt-12 p-8 border-4 border-double border-yellow-400 rounded-xl max-w-4xl mx-auto transition-transform duration-300 hover:scale-[1.03] cursor-pointer ${
            isDarkMode ? "bg-purple-700/30" : "bg-purple-50"
          }`}
        >
          <p
            className={`text-2xl sm:text-3xl font-extrabold ${accentTextColor}`}
          >
            {ABOUT_DATA.partnerships.invitation}
          </p>
        </div>
      </div>
      <FooterSection
        footerData={FOOTER_DATA}
        isDarkMode={isDarkMode}
        footerBg={footerBg}
        footerTitleColor={footerTitleColor}
        footerText={mainText}
        footerAccentIconColor={footerAccentIconColor}
        footerAccentHover={footerAccentHover}
      />
    </section>
  );
};

export default AboutUsPage;