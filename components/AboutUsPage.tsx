"use client";
import React from "react";
import Image from "next/image";
import { Plane, Landmark, Briefcase, Globe, CheckCircle, Rocket, Zap, MapPin, Phone, Mail, Twitter, Facebook, Link } from "lucide-react"; 
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
        fullAddress: "150 Ferrand Drive, Ste 511, Toronto, ON M3C 3E5"
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

const FloatingPlaneStyle = {
    animation: 'float 4s ease-in-out infinite',
};

// --- Timeline Item Component ---
type TimelineItemProps = {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    accentColor: string;
    isDarkMode: boolean;
};

const TimelineItem = ({ icon: Icon, title, description, accentColor, isDarkMode }: TimelineItemProps) => {
    const contentBg = isDarkMode ? 'bg-purple-900 shadow-black/40' : 'bg-white shadow-purple-200/50';
    const contentText = isDarkMode ? 'text-purple-200' : 'text-gray-700';
    const contentTitle = isDarkMode ? 'text-yellow-400' : 'text-purple-700';
    const dotBorder = isDarkMode ? 'border-gray-950' : 'border-white';
    
    const contentBoxClasses = `p-5 rounded-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] transform hover:rotate-1 shadow-lg ${contentBg}`;
    const dotClasses = `absolute top-0 w-6 h-6 rounded-full ${accentColor} flex items-center justify-center 
        transition-all duration-500 group-hover:scale-125 border-4 ${dotBorder} 
        left-1/2 -translate-x-1/2 z-10 hidden md:flex`;
    const mobileLineClasses = `absolute top-0 left-3 w-1 h-full ${isDarkMode ? 'bg-purple-400/30' : 'bg-purple-300'} md:hidden`;

    return (
        <div className="relative group mb-12 min-h-[100px]">
            {/* Mobile/SM Timeline Structure */}
            <div className={`md:hidden pl-10 relative`}>
                <div className={mobileLineClasses}></div>
                <div className={`absolute top-0 left-3 w-4 h-4 rounded-full ${accentColor} flex items-center justify-center -translate-x-1/2 z-10`}>
                    <Icon className="w-2 h-2 text-white" />
                </div>
                <div className={`p-5 mb-8 rounded-xl shadow-lg ${isDarkMode ? 'bg-purple-800' : 'bg-gray-100'}`}>
                    <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
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
    // Using the actual Theme Context
    const { isDarkMode } = useTheme();

    // --- Conditional Color Variables ---
    // Primary/Hero/Partnerships Background (Purple in Dark, White/Light Gray in Light)
    const primaryBg = isDarkMode ? "bg-purple-800" : "bg-white"; 
    
    // Main Section Background (Dark Gray in Dark, White/Light Gray in Light)
    const secondaryBg = isDarkMode ? "bg-gray-950" : "bg-white"; 
    
    // Secondary Section Background (Darker Purple in Dark, Light Gray in Light)
    const tertiaryBg = isDarkMode ? "bg-purple-900" : "bg-gray-50"; 
    
    // Footer Background (Purple in Dark, Light Gray in Light)
    const footerBg = isDarkMode ? "bg-purple-950" : "bg-gray-100"; 
    
    // Accent Colors 
    const headingColor = "text-yellow-400"; // Gold/Yellow for "Sunspots"
    const accentColor = "bg-purple-600"; // Main purple accent background color
    const accentTextColor = isDarkMode ? "text-purple-400" : "text-purple-700"; // Main purple text color

    // Text Colors
    const mainText = isDarkMode ? "text-purple-200" : "text-gray-700"; // Main body text
    const footerText = isDarkMode ? "text-purple-300" : "text-gray-600"; 
    const footerTitleColor = isDarkMode ? headingColor : "text-purple-700";
    const footerAccentIconColor = isDarkMode ? "text-yellow-400" : "text-purple-600";
    const footerAccentHover = isDarkMode ? "hover:text-yellow-400" : "hover:text-purple-900";


    const timelineData = [
        { icon: Landmark, title: "1974: The Campbell Travel Founding", description: ABOUT_DATA.history.founding_details },
        { icon: Briefcase, title: "The Wholesaler Shift", description: "Campbell Travel decided to shift its focus, becoming a strictly wholesale travel company, and was soon known simply as Sunspots Holidays." },
        { icon: Zap, title: "Core Philosophy: Quality Over Discount", description: ABOUT_DATA.history.core_philosophy },
    ];

    return (
        <section className={`min-h-screen ${secondaryBg} relative flex flex-col transition-colors duration-500`}>
            
            {/* Theme Toggle Button REMOVED as requested. It is assumed to be in the Navbar. */}

            {/* 1. Hero / Title Section */}
            <div className={`px-4 sm:px-6 lg:px-8 py-20 lg:py-32 ${primaryBg} text-center shadow-2xl ${isDarkMode ? 'shadow-purple-900/50' : 'shadow-purple-200/50'} transition-colors duration-500`}>
                <Title
                    title={ABOUT_DATA.company_name}
                    subtitle={ABOUT_DATA.tagline}
                    titleColor={headingColor}
                    subtitleColor={isDarkMode ? 'text-white' : 'text-gray-900'} 
                />
                <p className={`${isDarkMode ? 'text-purple-100' : 'text-gray-600'} font-light leading-relaxed text-lg sm:text-xl mt-6 max-w-4xl mx-auto opacity-90 transition-transform duration-700 transform hover:scale-[1.01]`}>
                    {ABOUT_DATA.history.story_start}
                </p>
            </div>

            <hr className="border-purple-600 border-opacity-50" />
            
            {/* 2. History Timeline */}
            <div className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto flex-grow">
                <h2 className={`text-4xl font-extrabold text-center mb-16 ${accentTextColor}`}>Our Journey Through Time 🚀</h2>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT COLUMN: Main Text and Details */}
                    <div className="order-1 lg:order-1 transition-opacity duration-700 delay-200 opacity-100">
                        <h3 className={`text-3xl font-bold mb-4 ${accentTextColor}`}>The Evolution of Sunspots Holidays</h3>
                        <p className={`${mainText} leading-relaxed text-lg mb-6`}>
                            {ABOUT_DATA.history.story_start}
                        </p>
                        <div className={`p-6 rounded-xl border-l-4 ${isDarkMode ? 'border-yellow-400 bg-purple-900' : 'border-purple-600 bg-purple-50'} transition-transform duration-300 hover:translate-x-1`}>
                            <h4 className={`text-xl font-bold mb-2 ${headingColor}`}>Our Key Differentiator</h4>
                            <p className={`${mainText} leading-relaxed`}>
                                {ABOUT_DATA.history.core_philosophy} 
                            </p>
                        </div>
                        {/* Image with subtle hover animation */}
                        <div className="relative h-[300px] w-full mt-8">
                            <Image
                                src="https://sunspotsholidays.com/airplanes/lanchile.jpg"
                                alt="Airplane flying over mountains"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-purple-500/50"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Timeline Points */}
                    <div className="order-2 lg:order-2 relative">
                        {/* Add a central line for MD+ timeline look */}
                        <div className={`md:border-l-4 md:border-dashed md:pl-8 ${isDarkMode ? 'md:border-purple-700' : 'md:border-gray-300'}`}>
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
            
            {/* 3. Offerings and Partnership Model (Secondary Section) */}
            <div className={`px-4 sm:px-6 lg:px-8 py-16 lg:py-24 ${tertiaryBg} relative ${isDarkMode ? 'shadow-inner shadow-purple-950/50' : 'shadow-inner shadow-gray-200/50'} transition-colors duration-500`}>
                <h2 className={`text-4xl font-extrabold text-center mb-12 ${headingColor}`}>
                    {ABOUT_DATA.offerings.title}
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Offerings Description Card */}
                    <div className={`p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-purple-500/50 hover:scale-[1.01] ${isDarkMode ? 'bg-purple-800' : 'bg-white'}`}>
                        <h3 className={`text-2xl font-bold ${headingColor} flex items-center gap-2 mb-4`}>
                            <Globe className="w-6 h-6" /> Diverse Destinations
                        </h3>
                        <p className={`${mainText} leading-relaxed text-lg`}>
                            {ABOUT_DATA.offerings.description}
                        </p>
                    </div>
                    
                    {/* Partnership Model Card */}
                    <div className={`p-8 rounded-2xl shadow-xl relative transition-all duration-300 hover:shadow-purple-500/50 hover:scale-[1.01] ${isDarkMode ? 'bg-purple-800' : 'bg-white'}`}>
                        <h3 className={`text-2xl font-bold ${headingColor} flex items-center gap-2 mb-4`}>
                            <CheckCircle className="w-6 h-6" /> Our Collaborative Model
                        </h3>
                        <p className={`${mainText} leading-relaxed text-lg`}>
                            {ABOUT_DATA.offerings.partnership_model}
                        </p>
                        {/* Plane Animation */}
                        <Plane 
                            className={`absolute right-[-20px] top-[-20px] w-10 h-10 ${headingColor} 
                            rotate-45 transform opacity-70`}
                            style={FloatingPlaneStyle} 
                        />
                    </div>
                </div>
            </div>
            
            {/* 4. Partnerships and Invitation (Primary Purple Section) */}
            <div className={`px-4 sm:px-6 lg:px-8 py-16 ${primaryBg} text-center shadow-lg transition-colors duration-500`}>
                <h2 className={`text-4xl font-extrabold mb-10 ${headingColor}`}>Global Reach & Success Factors</h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
                    {/* Col 1 */}
                    <div className="p-4 rounded-lg transition-transform duration-300 hover:scale-[1.05] hover:bg-purple-700/50">
                        <Rocket className={`w-8 h-8 mb-3 ${headingColor}`} />
                        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>40+ Air Partners</h3>
                        <p className={`${isDarkMode ? 'text-white' : 'text-gray-700'} text-sm leading-relaxed opacity-80`}>
                            {ABOUT_DATA.partnerships.air_partners_intro}
                        </p>
                    </div>
                    {/* Col 2 */}
                    <div className="p-4 rounded-lg transition-transform duration-300 hover:scale-[1.05] hover:bg-purple-700/50">
                        <Briefcase className={`w-8 h-8 mb-3 ${headingColor}`} />
                        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Proactive & Flexible</h3>
                        <p className={`${isDarkMode ? 'text-white' : 'text-gray-700'} text-sm leading-relaxed opacity-80`}>
                            {ABOUT_DATA.partnerships.product_flexibility}
                        </p>
                    </div>
                    {/* Col 3 */}
                    <div className="p-4 rounded-lg transition-transform duration-300 hover:scale-[1.05] hover:bg-purple-700/50">
                        <CheckCircle className={`w-8 h-8 mb-3 ${headingColor}`} />
                        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Commitment to Quality</h3>
                        <p className={`${isDarkMode ? 'text-white' : 'text-gray-700'} text-sm leading-relaxed opacity-80`}>
                            {ABOUT_DATA.partnerships.success_factors}
                        </p>
                    </div>
                </div>
                {/* Invitation (Bold Callout) */}
                <div className={`mt-12 p-8 border-4 border-double border-yellow-400 rounded-xl max-w-4xl mx-auto transition-transform duration-300 hover:scale-[1.03] cursor-pointer ${isDarkMode ? 'bg-purple-700/30' : 'bg-purple-50'}`}>
                    <p className={`text-2xl sm:text-3xl font-extrabold ${accentTextColor}`}>
                        {ABOUT_DATA.partnerships.invitation}
                    </p>
                </div>
            </div>
            
            {/* 5. Footer Section (THEMATICALLY RESPONSIVE) */}
            <footer className={`py-12 ${footerBg} shadow-inner ${isDarkMode ? 'shadow-black/50' : 'shadow-purple-200/50'} transition-colors duration-500`}>
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        
                        {/* Column 1: Contact Info */}
                        <div>
                            <h4 className={`text-xl font-bold mb-5 ${footerTitleColor} border-b ${isDarkMode ? 'border-purple-700' : 'border-purple-200'} pb-2`}>📍 Our Head Office</h4>
                            <div className={`${footerText} space-y-3 text-sm`}>
                                <div className="flex items-start gap-2">
                                    <MapPin className={`w-5 h-5 mt-1 ${footerAccentIconColor} flex-shrink-0`} />
                                    <p className={`${footerAccentHover} transition duration-200`}>
                                        {FOOTER_DATA.address.line1}<br/>{FOOTER_DATA.address.line2}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 pt-2">
                                    <Phone className={`w-5 h-5 ${footerAccentIconColor} flex-shrink-0`} />
                                    <div>
                                        <a href={`tel:${FOOTER_DATA.contact.phone}`} className={`block ${footerAccentHover} transition duration-200`}>{FOOTER_DATA.contact.phone} (Local)</a>
                                        <a href={`tel:${FOOTER_DATA.contact.phoneToll}`} className={`block ${footerAccentHover} transition duration-200`}>Toll Free: {FOOTER_DATA.contact.phoneToll}</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className={`w-5 h-5 ${footerAccentIconColor} flex-shrink-0`} />
                                    <a href={`mailto:${FOOTER_DATA.contact.email}`} className={`${footerAccentHover} transition duration-200`}>{FOOTER_DATA.contact.email}</a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Map Embed */}
                        <div className="md:col-span-2">
                            <h4 className={`text-xl font-bold mb-5 ${footerTitleColor} border-b ${isDarkMode ? 'border-purple-700' : 'border-purple-200'} pb-2`}>🗺️ Find Us</h4>
                            <div className="h-48 w-full rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                                
                            </div>
                        </div>
                        
                        {/* Column 3: Brochure Links & Social Media */}
                        <div>
                            <h4 className={`text-xl font-bold mb-5 ${footerTitleColor} border-b ${isDarkMode ? 'border-purple-700' : 'border-purple-200'} pb-2`}>🔗 Resources & Social</h4>
                            
                            <h5 className={`text-lg font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'} mb-3`}>Popular Brochures</h5>
                            <ul className={`${footerText} space-y-1.5 text-sm mb-6`}>
                                {FOOTER_DATA.brochure.slice(0, 4).map((item, index) => (
                                    <li key={index} className={`${footerAccentHover} transition duration-200 cursor-pointer flex items-center`}>
                                        <Link className={`w-3 h-3 inline mr-2 ${footerAccentIconColor}`}/>{item}
                                    </li>
                                ))}
                            </ul>

                            <h5 className={`text-lg font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'} mb-3`}>Connect</h5>
                            <div className="flex space-x-4">
                                {/* Social icons use fixed bg-purple-700 for branding, but text adjusts */}
                                <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-purple-700 hover:bg-yellow-400 transition duration-300 transform hover:scale-110">
                                    <Twitter className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-purple-700 hover:bg-yellow-400 transition duration-300 transform hover:scale-110">
                                    <Facebook className="w-5 h-5 text-white" />
                                </a>
                                <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-purple-700 hover:bg-yellow-400 transition duration-300 transform hover:scale-110">
                                    <Landmark className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Bottom Bar */}
                    <div className={`mt-10 pt-4 border-t ${isDarkMode ? 'border-purple-700' : 'border-purple-300'} text-center text-sm ${isDarkMode ? 'text-purple-500' : 'text-purple-600'}`}>
                        <p>© {new Date().getFullYear()} Sunspots Holidays. All rights reserved.</p>
                        <p className="mt-1">Awesome airlines, beautiful places.</p>
                    </div>
                </div>
            </footer>
            
        </section>
    );
};

export default AboutUsPage;