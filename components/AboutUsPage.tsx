"use client";
import React from "react";
import Image from "next/image";
import { Plane, Landmark, Briefcase, Globe, CheckCircle, Rocket, Zap, MapPin, Phone, Mail, Twitter, Facebook } from "lucide-react"; 
import { useTheme } from "../app/ThemeContext"; 
import Title from "./Title"; 

// --- Data in JSON format (Included for reference) ---
const ABOUT_DATA = {
  company_name: "Sunspots Holidays",
  tagline: "Awesome airlines, beautiful places",
  history: {
    story_start: "Sunspots Holidays brings together fantastic airlines and beautiful destinations, providing travellers with special experiences they won't soon forget.",
    founding_details: "Our story begins in January 1974, when Campbell Travel Limited emerged as a new travel agency in Ontario. After many years of service to travellers, Campbell Travel decided to shift its focus, becoming a strictly wholesale travel company, and the new enterprise was soon known simply as Sunspots Holidays.",
    core_philosophy: "But while the name changed, the key philosophy driving Sunspots Holidays remains the same today as it was when Campbell Travel opened its doors. We focus on active marketing of special products rather than discounted rates."
  },
  offerings: {
    title: "Our Unique Offerings",
    description: "Unique products are what set us apart. Our branded Sun Magic and Positive Destination Ideas lines offer clients short stays in Europe, the United States, Canada, Latin America, some 36 destinations in the Caribbean, and the Maldives and Kerala, India. Our new Mission Travel and Pilgrimage packages make planning easy for people who want to help others or embark on a spiritual journey. We also offer a variety of group packages, wedding packages, and much more.",
    partnership_model: "Sunspots Holidays' model builds partnerships with consolidated airlines and land package providers to create travel opportunities that benefit airlines and enable travel agents to increase revenues during the off season. These benefits also reduce costs, which allows consumers to travel to unimaginably beautiful places at a very imaginable cost."
  },
  partnerships: {
    air_partners_intro: "Our partnership with more than 40 major international air carriers is the backbone of our enterprise, helping us take your clients around the world. Air partners include: American Airlines, US Airways, Delta Airlines, BMI, Czech Airlines, Lot Polish Airlines, LAN, TAM, TACA, Aerolineas Argentinas, Malev Hungarian Airlines, Srilankan Airlines, Etihad Airways, and many more (see the full list to the left).",
    product_flexibility: "We have developed a proactive and flexible product, offering land and air components together, as well as separately. We market our unique products across Canada, the United States, and internationally, and we can service any points worldwide.",
    success_factors: "The incredible success of Sunspots Holidays is a result of our commitment to customer service, steadfast belief in quality products, unswerving loyalty to our partners at all levels, and continuous marketing innovations that keep us moving forward.",
    invitation: "Energy, experience, and innovation are the pillars that have allowed us to excel in the travel industry. We invite you to join us on our ride around the world."
  }
};

// --- Dummy Data for Footer Links ---
const FOOTER_DATA = {
    address: {
        line1: "150 Ferrand Drive, Ste 511,",
        line2: "Toronto, ON M3C 3E5",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.288258525301!2d-79.33611832360565!3d43.70512837109533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb71112b3227%3A0x2475727181c40212!2s150%20Ferrand%20Dr%2C%20Toronto%2C%20ON%20M3C%203E5%2C%20Canada!5e0!3m2!1sen!2s!4v1701046467000!5m2!1sen!2s"
    },
    contact: {
        phone: "(416) 484-8144",
        phoneToll: "+1 800 657-8721",
        email: "info@sunspotsholidays.com"
    },
    brochure: [
        "Spotlight on North American Vacations",
        "Beautiful India and UAE",
        "Explore the Islands of Hawaii",
        '"Barbados" a unique Caribbean paradise',
        "Explore the adventure of Cayman islands",
        "Explore the islands of Bahamas",
        "Magnificent nature of El Salvador"
    ]
};
// -----------------------------


// --- Timeline Item Component (Re-added for context) ---
type TimelineItemProps = {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    accentColor?: string;
    isDarkMode: boolean;
    side?: 'left' | 'right' | string;
};

const TimelineItem = ({ icon: Icon, title, description, accentColor, isDarkMode, side }: TimelineItemProps) => {
    const isLeft = side === 'left';
    const timelineContainerClasses = "relative group mb-12 min-h-[100px]";
    const contentBoxClasses = `p-5 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] 
        ${isDarkMode ? 'bg-gray-800 shadow-xl shadow-black/30' : 'bg-white shadow-xl'}`;
    const dotClasses = `absolute top-0 w-6 h-6 rounded-full ${accentColor} flex items-center justify-center 
        transition-all duration-300 group-hover:scale-110 border-4 ${isDarkMode ? 'border-gray-900' : 'border-white'} 
        left-1/2 -translate-x-1/2 z-10 hidden md:flex`;
    const mobileFallbackClasses = `pl-10 relative md:pl-0`;
    const mobileDotClasses = `absolute top-0 left-3 w-4 h-4 rounded-full ${accentColor} flex items-center justify-center -translate-x-1/2 z-10 md:hidden`;
    const mobileLineClasses = `absolute top-0 left-3 w-1 h-full ${isDarkMode ? 'bg-amber-600/30' : 'bg-blue-300'} md:hidden`;

    return (
        <div className={timelineContainerClasses}>
            {/* Mobile/SM Timeline Structure (Simple Left-side) */}
            <div className={`md:hidden ${mobileFallbackClasses}`}>
                <div className={mobileLineClasses}></div>
                <div className={mobileDotClasses}>
                    <Icon className="w-2 h-2 text-white" />
                </div>
                <div className={`p-5 mb-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'} leading-snug`}>{description}</p>
                </div>
            </div>
             {/* MD+ structure is simplified to a single column for this layout */}
            <div className="hidden md:block">
                <div className={contentBoxClasses}>
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{description}</p>
                </div>
            </div>
        </div>
    );
};
// -----------------------------


const AboutUsPage = () => {
  const { isDarkMode } = useTheme();

  // Dynamic styling based on theme
  const primaryBg = isDarkMode ? "bg-gray-950" : "bg-blue-700"; 
  const secondaryBg = isDarkMode ? "bg-gray-900" : "bg-white"; 
  const tertiaryBg = isDarkMode ? "bg-gray-800" : "bg-gray-50"; 
  const footerBg = isDarkMode ? "bg-neutral-800" : "bg-gray-600"; 
  const footerDarkerBg = isDarkMode ? "bg-neutral-900" : "bg-gray-700"; 
  const primaryText = isDarkMode ? "text-white" : "text-white";
  const secondaryText = isDarkMode ? "text-gray-300" : "text-gray-700";
  const footerText = isDarkMode ? "text-gray-300" : "text-gray-200";
  const headingColor = isDarkMode ? "text-amber-300" : "text-amber-400"; 
  const accentColor = isDarkMode ? "bg-amber-500" : "bg-blue-600"; 
  const accentTextColor = isDarkMode ? "text-amber-500" : "text-blue-600"; 

  // Array of timeline data for easy mapping
  const timelineData = [
    { icon: Landmark, title: "1974: The Campbell Travel Founding", description: ABOUT_DATA.history.founding_details },
    { icon: Briefcase, title: "The Wholesaler Shift", description: "Campbell Travel decided to shift its focus, becoming a strictly wholesale travel company, and was soon known simply as Sunspots Holidays." },
    { icon: Zap, title: "Core Philosophy: Quality Over Discount", description: ABOUT_DATA.history.core_philosophy },
  ];

  return (
    <section className={`min-h-screen ${secondaryBg} relative flex flex-col`}>
      
      {/* 1. Hero / Title Section */}
      <div className={`px-4 sm:px-6 lg:px-8 py-20 lg:py-32 ${primaryBg} text-center shadow-lg`}>
            <Title
                title={ABOUT_DATA.company_name}
                subtitle={ABOUT_DATA.tagline}
                titleColor={headingColor}
                subtitleColor={primaryText}
            />
        <p className={`${primaryText} font-light leading-relaxed text-lg sm:text-xl mt-6 max-w-4xl mx-auto opacity-90`}>
          {ABOUT_DATA.history.story_start}
        </p>
      </div>

      ---
      
      {/* 2. History Timeline (Placeholder for existing content flow) */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto flex-grow">
          <h2 className={`text-4xl font-extrabold text-center mb-16 ${accentTextColor}`}>Our Journey Through Time 🕰️</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT COLUMN: Main Text and Details */}
            <div className="order-1 lg:order-1">
                <h3 className={`text-3xl font-bold mb-4 ${accentTextColor}`}>The Evolution of Sunspots Holidays</h3>
                <p className={`${secondaryText} leading-relaxed text-lg mb-6`}>
                    {ABOUT_DATA.history.story_start}
                </p>
                <div className={`p-6 rounded-xl border-l-4 ${isDarkMode ? 'border-amber-500 bg-gray-800' : 'border-blue-600 bg-gray-100'}`}>
                    <h4 className={`text-xl font-bold mb-2 ${accentTextColor}`}>Our Key Differentiator</h4>
                    <p className={`${secondaryText} leading-relaxed`}>
                         {ABOUT_DATA.history.core_philosophy} 
                    </p>
                </div>
                 {/* Image (moved to below the timeline on the left side) */}
                <div className="relative h-[300px] w-full mt-8">
                    <Image
                        src="https://sunspotsholidays.com/airplanes/lanchile.jpg"
                        alt="Airplane flying over mountains"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                        priority
                    />
                </div>
            </div>

            {/* RIGHT COLUMN: Timeline Points */}
            <div className="order-2 lg:order-2 relative">
              <div className="md:border-l-4 md:border-dashed md:pl-8 md:border-gray-300">
                <TimelineItem icon={Landmark} title="1974: The Campbell Travel Founding" description={ABOUT_DATA.history.founding_details} accentColor={accentColor} isDarkMode={isDarkMode} />
                <TimelineItem icon={Briefcase} title="The Wholesaler Shift" description="Campbell Travel decided to shift its focus, becoming a strictly wholesale travel company, and was soon known simply as Sunspots Holidays." accentColor={accentColor} isDarkMode={isDarkMode} />
                <TimelineItem icon={Zap} title="Core Philosophy: Quality Over Discount" description={ABOUT_DATA.history.core_philosophy} accentColor={accentColor} isDarkMode={isDarkMode} />
              </div>
            </div>
          </div>
      </div>
      
      {/* 3. Offerings and Partnership Model (Simplified Section) */}
       <div className={`px-4 sm:px-6 lg:px-8 py-16 lg:py-24 ${tertiaryBg} relative`}>
        <h2 className={`text-4xl font-extrabold text-center mb-12 ${accentTextColor}`}>
          {ABOUT_DATA.offerings.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Offerings Description Card */}
          <div className={`p-6 rounded-xl shadow-xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <h3 className={`text-2xl font-bold ${accentTextColor} flex items-center gap-2 mb-4`}>
              <Globe className="w-6 h-6" /> Diverse Destinations
            </h3>
            <p className={`${secondaryText} leading-relaxed text-lg`}>
              {ABOUT_DATA.offerings.description}
            </p>
          </div>
          
          {/* Partnership Model Card */}
          <div className={`p-6 rounded-xl shadow-xl relative ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <h3 className={`text-2xl font-bold ${accentTextColor} flex items-center gap-2 mb-4`}>
              <CheckCircle className="w-6 h-6" /> Our Collaborative Model
            </h3>
            <p className={`${secondaryText} leading-relaxed text-lg`}>
              {ABOUT_DATA.offerings.partnership_model}
            </p>
             <Plane 
              className={`absolute right-[-20px] top-[-20px] w-10 h-10 ${accentTextColor} 
                rotate-45 transform animate-plane-float opacity-70`}
            />
          </div>
        </div>
      </div>
      
      {/* 4. Partnerships and Invitation (Dark Section) */}
      <div className={`px-4 sm:px-6 lg:px-8 py-16 ${primaryBg} text-center`}>
          {/* ... (Content for Global Reach) ... */}
          <h2 className={`text-4xl font-extrabold mb-10 ${headingColor}`}>Global Reach & Success Factors</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
              {/* Col 1 */}
              <div className="p-4 rounded-lg">
                  <Rocket className={`w-8 h-8 mb-3 ${headingColor}`} />
                  <h3 className="text-xl font-bold mb-2 text-white">40+ Air Partners</h3>
                  <p className={`${primaryText} text-sm leading-relaxed opacity-80`}>
                      {ABOUT_DATA.partnerships.air_partners_intro}
                  </p>
              </div>
              {/* Col 2 */}
              <div className="p-4 rounded-lg">
                  <Briefcase className={`w-8 h-8 mb-3 ${headingColor}`} />
                  <h3 className="text-xl font-bold mb-2 text-white">Proactive & Flexible</h3>
                  <p className={`${primaryText} text-sm leading-relaxed opacity-80`}>
                      {ABOUT_DATA.partnerships.product_flexibility}
                  </p>
              </div>
              {/* Col 3 */}
              <div className="p-4 rounded-lg">
                  <CheckCircle className={`w-8 h-8 mb-3 ${headingColor}`} />
                  <h3 className="text-xl font-bold mb-2 text-white">Commitment to Quality</h3>
                  <p className={`${primaryText} text-sm leading-relaxed opacity-80`}>
                      {ABOUT_DATA.partnerships.success_factors}
                  </p>
              </div>
          </div>
          {/* Invitation (Bold Callout) */}
          <div className="mt-12 p-8 border-4 border-double border-amber-300 rounded-xl max-w-4xl mx-auto transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
              <p className={`text-2xl sm:text-3xl font-extrabold ${headingColor}`}>
                  {ABOUT_DATA.partnerships.invitation}
              </p>
          </div>
      </div>

      
      
    </section>
  );
};

export default AboutUsPage;