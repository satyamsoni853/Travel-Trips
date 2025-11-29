"use client";
import React from "react";
import Image from "next/image";
import { Users, Briefcase, Heart, Plane, Shield, Sun, Moon, Landmark } from "lucide-react"; 
import { useTheme } from "../app/ThemeContext"; 
import Title from "./Title"; 

// --- Mock Data for Group Travel Page ---
const GROUP_DATA = {
    title: "Seamless Group Travel Packages",
    tagline: "Unforgettable journeys designed for every type of group.",
    intro: "Whether you're organizing a corporate retreat, a destination wedding, or a spiritual pilgrimage, Sunspots Holidays provides dedicated, tailored packages to ensure your group travels seamlessly and affordably.",
    cards: [
        {
            icon: Users,
            title: "Corporate & Incentive Travel",
            description: "Reward your team with incentive travel or hold your next conference in an exotic locale. We handle all logistics, venue booking, and activity planning.",
            details: ["Customizable agendas", "Exclusive event venues", "Dedicated on-site support"],
            image: "/corporate_group.jpg", // Mock image path
            bg: "bg-purple-700/10",
        },
        {
            icon: Heart,
            title: "Destination Weddings",
            description: "Simplify the process of planning your special day abroad. We coordinate travel and accommodation for all guests, leaving you to enjoy the celebration.",
            details: ["Guest travel management", "Venue sourcing & negotiation", "Pre- and post-wedding excursions"],
            image: "/wedding_group.jpg", // Mock image path
            bg: "bg-yellow-400/10",
        },
        {
            icon: Landmark,
            title: "Pilgrimage & Spiritual Journeys",
            description: "Specialized packages for groups seeking spiritual enrichment or mission work. We focus on comfort and logistics for these unique and profound journeys.",
            details: ["Special visa assistance", "Accommodation near key sites", "Guided, culturally sensitive tours"],
            image: "/pilgrimage_group.jpg", // Mock image path
            bg: "bg-purple-700/10",
        },
        {
            icon: Briefcase,
            title: "Educational & Student Tours",
            description: "Creating safe, engaging, and educational travel experiences for school and university groups across Europe, North America, and beyond.",
            details: ["Age-appropriate itineraries", "Risk management planning", "Budget-friendly options"],
            image: "/student_group.jpg", // Mock image path
            bg: "bg-yellow-400/10",
        },
    ]
};

// --- Sub-Component: Feature Card (With Animations) ---
interface FeatureCardProps {
    data: typeof GROUP_DATA.cards[0];
    isDarkMode: boolean;
    reverse: boolean;
    accentColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ data, isDarkMode, reverse, accentColor }) => {
    
    const cardBg = isDarkMode ? 'bg-purple-900 shadow-xl shadow-black/40' : 'bg-white shadow-lg';
    const textColor = isDarkMode ? 'text-purple-100' : 'text-gray-700';
    const titleColor = isDarkMode ? 'text-yellow-400' : 'text-purple-700';
    const iconColor = isDarkMode ? 'text-yellow-400' : 'text-purple-600';

    return (
        <div 
            className={`
                grid md:grid-cols-2 gap-12 items-center mb-24 lg:mb-32 
                transition-all duration-700 transform opacity-0 translate-y-10 
                // Utility class assuming external CSS or scroll observer for fade-in/parallax
                animate-fade-in-on-scroll 
                ${reverse ? 'md:grid-flow-col-dense' : ''}
            `}
        >
            {/* Image Column */}
            <div className={reverse ? 'md:order-2' : 'md:order-1'}>
                <div className="relative h-[350px] w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-[1.05]"
                        priority={false}
                    />
                    <div className={`absolute inset-0 opacity-20 ${isDarkMode ? 'bg-purple-700' : 'bg-purple-400'}`}></div>
                </div>
            </div>

            {/* Content Column */}
            <div className={reverse ? 'md:order-1' : 'md:order-2'}>
                <div className={`p-8 rounded-xl ${cardBg} transition-shadow duration-500 hover:shadow-purple-500/50`}>
                    <data.icon className={`w-10 h-10 mb-4 ${iconColor}`} />
                    <h2 className={`text-4xl font-extrabold mb-4 ${titleColor}`}>{data.title}</h2>
                    <p className={`text-lg mb-6 ${textColor}`}>{data.description}</p>
                    
                    <ul className={`space-y-2 ${textColor}`}>
                        {data.details.map((detail, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Shield className={`w-4 h-4 ${iconColor} flex-shrink-0`} />
                                <span className="font-medium text-base">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


// 3. MAIN GROUP TRAVEL COMPONENT
const GroupTravel = () => {
    const { isDarkMode } = useTheme();

    // --- Conditional Color Variables (Matching previous purple theme) ---
    const primaryBg = isDarkMode ? "bg-purple-800" : "bg-white"; 
    const secondaryBg = isDarkMode ? "bg-gray-950" : "bg-white"; 
    const tertiaryBg = isDarkMode ? "bg-purple-900" : "bg-gray-50"; 
    
    const headingColor = "text-yellow-400";
    const accentColor = "bg-purple-600";
    const accentTextColor = isDarkMode ? "text-purple-400" : "text-purple-700";
    const mainText = isDarkMode ? "text-purple-200" : "text-gray-700";

    return (
        <section className={`min-h-screen ${secondaryBg} relative flex flex-col transition-colors duration-500`}>
            
            {/* 1. Hero / Title Section */}
            <div className={`px-4 sm:px-6 lg:px-8 py-20 lg:py-32 ${primaryBg} text-center shadow-xl ${isDarkMode ? 'shadow-purple-900/50' : 'shadow-purple-200/50'} transition-colors duration-500`}>
                <Title
                    title={GROUP_DATA.title}
                    subtitle={GROUP_DATA.tagline}
                    titleColor={headingColor}
                    subtitleColor={isDarkMode ? 'text-white' : 'text-gray-900'} 
                />
                <p className={`${isDarkMode ? 'text-purple-100' : 'text-gray-600'} font-light leading-relaxed text-xl mt-6 max-w-4xl mx-auto opacity-90 transition-transform duration-700 transform`}>
                    {GROUP_DATA.intro}
                </p>
            </div>

            <hr className="border-purple-600 border-opacity-50" />
            
            {/* 2. Key Features / Alternating Layout */}
            <div className={`px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto flex-grow ${tertiaryBg} w-full transition-colors duration-500`}>
                <h3 className={`text-4xl font-extrabold text-center mb-16 ${accentTextColor}`}>Travel Simplified, Experiences Amplified ✈️</h3>

                {GROUP_DATA.cards.map((card, index) => (
                    <FeatureCard 
                        key={index}
                        data={card}
                        isDarkMode={isDarkMode}
                        reverse={index % 2 !== 0} // Alternate the layout for visual interest
                        accentColor={accentColor}
                    />
                ))}
            </div>

            {/* 3. Call to Action (Unique Animation) */}
            <div className={`py-16 ${primaryBg} text-center transition-colors duration-500`}>
                <div className="max-w-4xl mx-auto">
                    <h3 className={`text-4xl font-extrabold mb-4 ${headingColor}`}>Ready to Plan Your Group Adventure?</h3>
                    <p className={`${isDarkMode ? 'text-purple-100' : 'text-gray-600'} text-xl mb-8`}>
                        Contact our dedicated group travel specialists for a custom quote and itinerary designed just for you.
                    </p>
                    <button 
                        className={`
                            px-12 py-4 text-lg font-bold rounded-full shadow-2xl transition-all duration-500 
                            bg-yellow-400 text-purple-900 hover:scale-[1.05] hover:bg-yellow-300 
                            // Custom 'pulse' effect for the button
                            animate-pulse-slow
                        `}
                    >
                        Request a Group Quote
                    </button>
                    <Plane 
                        className={`mt-8 w-12 h-12 mx-auto ${headingColor} 
                        rotate-[-20deg] animate-bounce-slow`} // Unique animation for this page
                    />
                </div>
            </div>
            
        </section>
    );
};

export default GroupTravel;