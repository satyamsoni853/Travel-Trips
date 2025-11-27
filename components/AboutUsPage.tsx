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
// Assuming this is available in the user's environment
// import { useTheme } from "../app/ThemeContext";
// Assuming a simplified Title component exists
import Title from "./Title";

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

// --- Dummy Data for Footer Links ---
const FOOTER_DATA = {
  address: {
    line1: "150 Ferrand Drive, Ste 511,",
    line2: "Toronto, ON M3C 3E5",
    // Combine address for map query
    fullAddress: "150 Ferrand Drive, Ste 511, Toronto, ON M3C 3E5",
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
// -----------------------------

const FloatingPlaneStyle = {
  animation: "float 4s ease-in-out infinite",
};

// --- Timeline Item Component (Re-added for context) ---
type TimelineItemProps = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  accentColor: string;
  isDarkMode: boolean;
  side?: "left" | "right" | string;
};

const TimelineItem = ({
  icon: Icon,
  title,
  description,
  accentColor,
  isDarkMode,
  side,
}: TimelineItemProps) => {
  const contentBoxClasses = `p-5 rounded-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] transform hover:rotate-1 
        ${
          isDarkMode
            ? "bg-purple-900 shadow-xl shadow-black/40"
            : "bg-white shadow-lg"
        }`;
  const dotClasses = `absolute top-0 w-6 h-6 rounded-full ${accentColor} flex items-center justify-center 
        transition-all duration-500 group-hover:scale-125 border-4 ${
          isDarkMode ? "border-gray-950" : "border-white"
        } 
        left-1/2 -translate-x-1/2 z-10 hidden md:flex`;
  const mobileFallbackClasses = `pl-10 relative md:pl-0`;
  const mobileDotClasses = `absolute top-0 left-3 w-4 h-4 rounded-full ${accentColor} flex items-center justify-center -translate-x-1/2 z-10 md:hidden`;
  const mobileLineClasses = `absolute top-0 left-3 w-1 h-full ${
    isDarkMode ? "bg-purple-400/30" : "bg-purple-300"
  } md:hidden`;

  return (
    <div className="relative group mb-12 min-h-[100px] animate-slideIn delay-100">
      {/* Mobile/SM Timeline Structure (Simple Left-side) */}
      <div className={`md:hidden ${mobileFallbackClasses}`}>
        <div className={mobileLineClasses}></div>
        <div className={mobileDotClasses}>
          <Icon className="w-2 h-2 text-white animate-pulse" />
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
          <p
            className={`${
              isDarkMode ? "text-purple-200 text-sm" : "text-gray-700 text-sm"
            } leading-snug`}
          >
            {description}
          </p>
        </div>
      </div>

      {/* MD+ structure is simplified to a single column for this layout */}
      <div className="hidden md:block">
        <div className={contentBoxClasses}>
          <h3
            className={`text-xl font-bold mb-2 ${
              isDarkMode ? "text-yellow-400" : "text-purple-700"
            }`}
          >
            {title}
          </h3>
          <p
            className={`${
              isDarkMode ? "text-purple-200" : "text-gray-700"
            } leading-relaxed`}
          >
            {description}
          </p>
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
  // Assuming a static dark mode for styling purposes
  const isDarkMode = true;

  // Dynamic styling based on theme and PURPLE color scheme
  const primaryBg = isDarkMode ? "bg-purple-800" : "bg-purple-700";
  const secondaryBg = isDarkMode ? "bg-gray-950" : "bg-white";
  const tertiaryBg = isDarkMode ? "bg-purple-900" : "bg-gray-50";
  const footerBg = isDarkMode ? "bg-purple-950" : "bg-purple-800";
  const footerDarkerBg = isDarkMode ? "bg-black/20" : "bg-purple-900";

  const primaryText = isDarkMode ? "text-white" : "text-white";
  const secondaryText = isDarkMode ? "text-purple-200" : "text-gray-700";
  const footerText = isDarkMode ? "text-purple-300" : "text-purple-200";

  const headingColor = isDarkMode ? "text-yellow-400" : "text-purple-400"; // Accent for "Sunspots"
  const accentColor = isDarkMode ? "bg-purple-600" : "bg-purple-600"; // Main purple accent color for backgrounds/dots
  const accentTextColor = isDarkMode ? "text-purple-400" : "text-purple-700"; // Main purple text color

  // Array of timeline data for easy mapping
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

  return (
    <section className={`min-h-screen ${secondaryBg} relative flex flex-col`}>
      {/* 1. Hero / Title Section */}
      <div
        className={`px-4 sm:px-6 lg:px-8 py-20 lg:py-32 ${primaryBg} text-center shadow-2xl shadow-purple-900/50 transition-opacity duration-1000 ease-in opacity-100`}
      >
        <Title
          title={ABOUT_DATA.company_name}
          subtitle={ABOUT_DATA.tagline}
          titleColor={headingColor}
          subtitleColor={primaryText}
        />
        <p
          className={`${primaryText} font-light leading-relaxed text-lg sm:text-xl mt-6 max-w-4xl mx-auto opacity-90 transition-transform duration-700 transform hover:scale-[1.01]`}
        >
          {ABOUT_DATA.history.story_start}
        </p>
      </div>

      <hr className="border-purple-600 border-opacity-50" />

      {/* 2. History Timeline */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto flex-grow">
        <h2
          className={`text-4xl font-extrabold text-center mb-16 ${accentTextColor} animate-bounce-slow`}
        >
          Our Journey Through Time 🚀
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN: Main Text and Details */}
          <div className="order-1 lg:order-1 transition-opacity duration-700 delay-200 opacity-100">
            <h3 className={`text-3xl font-bold mb-4 ${accentTextColor}`}>
              The Evolution of Sunspots Holidays
            </h3>
            <p className={`${secondaryText} leading-relaxed text-lg mb-6`}>
              {ABOUT_DATA.history.story_start}
            </p>
            <div
              className={`p-6 rounded-xl border-l-4 ${
                isDarkMode
                  ? "border-yellow-400 bg-purple-900"
                  : "border-purple-600 bg-purple-50"
              } transition-transform duration-300 hover:translate-x-1`}
            >
              <h4 className={`text-xl font-bold mb-2 ${headingColor}`}>
                Our Key Differentiator
              </h4>
              <p className={`${secondaryText} leading-relaxed`}>
                {ABOUT_DATA.history.core_philosophy}
              </p>
            </div>
            {/* Image with subtle hover animation */}
            <div className="relative h-[300px] w-full mt-8">
              <Image
                src="https://sunspotsholidays.com/airplanes/lanchile.jpg"
                alt="Airplane flying over mountains"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-purple-500/50"
                priority
              />
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
              {timelineData.map((item, index) => (
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

      {/* 3. Offerings and Partnership Model (Simplified Section) */}
      <div
        className={`px-4 sm:px-6 lg:px-8 py-16 lg:py-24 ${tertiaryBg} relative shadow-inner shadow-purple-950/50`}
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
              <Globe className="w-6 h-6 animate-spin-slow" /> Diverse
              Destinations
            </h3>
            <p className={`${secondaryText} leading-relaxed text-lg`}>
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
            <p className={`${secondaryText} leading-relaxed text-lg`}>
              {ABOUT_DATA.offerings.partnership_model}
            </p>
            {/* Plane Animation */}
            <Plane
              className={`absolute right-[-20px] top-[-20px] w-10 h-10 ${headingColor} 
                            rotate-45 transform opacity-70`}
              style={FloatingPlaneStyle} // Applying the floating style
            />
          </div>
        </div>
      </div>

      {/* 4. Partnerships and Invitation (Dark Section) */}
      <div
        className={`px-4 sm:px-6 lg:px-8 py-16 ${primaryBg} text-center shadow-lg`}
      >
        <h2 className={`text-4xl font-extrabold mb-10 ${headingColor}`}>
          Global Reach & Success Factors
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
          {/* Col 1 */}
          <div className="p-4 rounded-lg transition-transform duration-300 hover:scale-[1.05] hover:bg-purple-700/50">
            <Rocket
              className={`w-8 h-8 mb-3 ${headingColor} animate-bounce-slow`}
            />
            <h3 className="text-xl font-bold mb-2 text-white">
              40+ Air Partners
            </h3>
            <p className={`${primaryText} text-sm leading-relaxed opacity-80`}>
              {ABOUT_DATA.partnerships.air_partners_intro}
            </p>
          </div>
          {/* Col 2 */}
          <div className="p-4 rounded-lg transition-transform duration-300 hover:scale-[1.05] hover:bg-purple-700/50">
            <Briefcase className={`w-8 h-8 mb-3 ${headingColor}`} />
            <h3 className="text-xl font-bold mb-2 text-white">
              Proactive & Flexible
            </h3>
            <p className={`${primaryText} text-sm leading-relaxed opacity-80`}>
              {ABOUT_DATA.partnerships.product_flexibility}
            </p>
          </div>
          {/* Col 3 */}
          <div className="p-4 rounded-lg transition-transform duration-300 hover:scale-[1.05] hover:bg-purple-700/50">
            <CheckCircle className={`w-8 h-8 mb-3 ${headingColor}`} />
            <h3 className="text-xl font-bold mb-2 text-white">
              Commitment to Quality
            </h3>
            <p className={`${primaryText} text-sm leading-relaxed opacity-80`}>
              {ABOUT_DATA.partnerships.success_factors}
            </p>
          </div>
        </div>
        {/* Invitation (Bold Callout) - Added pulse animation and stronger hover */}
        <div className="mt-12 p-8 border-4 border-double border-yellow-400 rounded-xl max-w-4xl mx-auto transition-transform duration-300 hover:scale-[1.03] cursor-pointer animate-pulse-slow">
          <p className={`text-2xl sm:text-3xl font-extrabold ${headingColor}`}>
            {ABOUT_DATA.partnerships.invitation}
          </p>
        </div>
      </div>

      {/* 5. Footer Section (ENHANCED DESIGN with MAP) */}
      <footer className={`py-12 ${footerBg} shadow-inner shadow-black/50`}>
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1: Contact Info */}
            <div>
              <h4
                className={`text-xl font-bold mb-5 ${headingColor} border-b border-purple-700 pb-2`}
              >
                📍 Our Head Office
              </h4>
              <div className={`${footerText} space-y-3 text-sm`}>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 text-yellow-400 flex-shrink-0" />
                  <p className="hover:text-yellow-400 transition duration-200">
                    {FOOTER_DATA.address.line1}
                    <br />
                    {FOOTER_DATA.address.line2}
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <div>
                    <a
                      href={`tel:${FOOTER_DATA.contact.phone}`}
                      className="block hover:text-yellow-400 transition duration-200"
                    >
                      {FOOTER_DATA.contact.phone} (Local)
                    </a>
                    <a
                      href={`tel:${FOOTER_DATA.contact.phoneToll}`}
                      className="block hover:text-yellow-400 transition duration-200"
                    >
                      Toll Free: {FOOTER_DATA.contact.phoneToll}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a
                    href={`mailto:${FOOTER_DATA.contact.email}`}
                    className="hover:text-yellow-400 transition duration-200"
                  >
                    {FOOTER_DATA.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Map Embed */}
            <div className="md:col-span-2">
              <h4
                className={`text-xl font-bold mb-5 ${headingColor} border-b border-purple-700 pb-2`}
              >
                🗺️ Find Us
              </h4>
              <div className="h-48 w-full rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                {/**
                                 * IMPORTANT: Using 

[Image of X]
 tag for map since 
                                 * actual map embedding (like Google Maps iframe) requires external scripts/keys 
                                 * and cannot be fully demonstrated in a single component file without an actual Map component.
                                 */}
              </div>
            </div>

            {/* Column 3: Brochure Links & Social Media (Combined for better spacing) */}
            <div>
              <h4
                className={`text-xl font-bold mb-5 ${headingColor} border-b border-purple-700 pb-2`}
              >
                🔗 Resources & Social
              </h4>

              <h5 className="text-lg font-semibold text-purple-400 mb-3">
                Popular Brochures
              </h5>
              <ul className={`${footerText} space-y-1.5 text-sm mb-6`}>
                {FOOTER_DATA.brochure.slice(0, 4).map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-yellow-400 transition duration-200 cursor-pointer flex items-center"
                  >
                    <Link className="w-3 h-3 inline mr-2 text-purple-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <h5 className="text-lg font-semibold text-purple-400 mb-3">
                Connect
              </h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-2 rounded-full bg-purple-700 hover:bg-yellow-400 transition duration-300 transform hover:scale-110"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 rounded-full bg-purple-700 hover:bg-yellow-400 transition duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                {/* Added Instagram placeholder using Landmark icon for a third link */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-2 rounded-full bg-purple-700 hover:bg-yellow-400 transition duration-300 transform hover:scale-110"
                >
                  <Landmark className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`mt-10 pt-4 border-t ${footerDarkerBg} text-center text-sm text-purple-500`}
          >
            <p>
              © {new Date().getFullYear()} Sunspots Holidays. All rights
              reserved.
            </p>
            <p className="mt-1">Awesome airlines, beautiful places.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default AboutUsPage;
