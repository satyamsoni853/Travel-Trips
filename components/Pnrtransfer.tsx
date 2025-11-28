"use client";
import React from "react";
import { Award, Briefcase, DollarSign, Globe, Heart, Shield, TrendingUp } from "lucide-react"; 
import { useTheme } from "../app/ThemeContext"; 
import Title from "./Title"; 

// --- Data for Key Benefits ---
const BENEFITS_DATA = {
    title: "Why Choose Sunspots Holidays?",
    subtitle: "Experience travel designed for you.",
    items: [
        {
            icon: Shield,
            heading: "Assured Protection",
            description: "Full financial protection and comprehensive support ensures peace of mind from booking to return.",
            delay: "delay-100", // Tailwind animation delay (assuming external definition)
        },
        {
            icon: DollarSign,
            heading: "Best Value Guarantee",
            description: "We focus on premium, non-discounted products that deliver maximum value for your travel dollar.",
            delay: "delay-200",
        },
        {
            icon: Award,
            heading: "40+ Airline Partners",
            description: "Leverage our extensive network of global carriers to reach virtually any point worldwide affordably.",
            delay: "delay-300",
        },
        {
            icon: TrendingUp,
            heading: "Off-Season Revenue",
            description: "Our innovative model helps travel agents boost their revenue even during slow travel periods.",
            delay: "delay-400",
        },
        {
            icon: Globe,
            heading: "Flexible Components",
            description: "Book air and land packages together or separately, giving you complete control over the itinerary.",
            delay: "delay-500",
        },
        {
            icon: Heart,
            heading: "Unwavering Loyalty",
            description: "Our success is built on a steadfast commitment and loyalty to our customers and agency partners.",
            delay: "delay-600",
        },
    ]
};

// --- Sub-Component: Benefit Card ---
interface BenefitCardProps {
    data: typeof BENEFITS_DATA.items[0];
    isDarkMode: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ data, isDarkMode }) => {
    const Icon = data.icon;
    
    // Conditional styling
    const cardBg = isDarkMode ? 'bg-purple-900 shadow-black/40' : 'bg-white shadow-purple-100/50';
    const headingColor = isDarkMode ? 'text-yellow-400' : 'text-purple-700';
    const descriptionColor = isDarkMode ? 'text-purple-200' : 'text-gray-600';
    const iconColor = isDarkMode ? 'text-yellow-400' : 'text-purple-600';

    return (
        <div 
            className={`
                p-6 md:p-8 rounded-xl ${cardBg} 
                border ${isDarkMode ? 'border-purple-800' : 'border-gray-200'}
                cursor-pointer 
                // Animation Classes: Fade-in and lift/pulse on hover
                transition-all duration-500 transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-purple-500/30
                // Assuming 'animate-fade-in-up' is defined externally, using Tailwind's utility class for delay
                opacity-0 animate-fade-in-up ${data.delay}
            `}
        >
            <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center 
                            ${isDarkMode ? 'bg-purple-700/50' : 'bg-purple-100'}`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            
            <h3 className={`text-xl font-bold mb-2 ${headingColor}`}>{data.heading}</h3>
            <p className={`text-sm ${descriptionColor}`}>{data.description}</p>
        </div>
    );
};


// 4. MAIN COMPONENT
const KeyBenefits = () => {
    const { isDarkMode } = useTheme();

    // --- Theme Variables ---
    const sectionBg = isDarkMode ? "bg-gray-950" : "bg-gray-50"; 
    const titleColor = isDarkMode ? "text-yellow-400" : "text-purple-700";
    const subtitleColor = isDarkMode ? "text-white" : "text-gray-900";

    return (
        <section className={`py-16 lg:py-24 ${sectionBg} transition-colors duration-500`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Title Section */}
                <div className="text-center mb-12 lg:mb-16">
                    <Title
                        title={BENEFITS_DATA.title}
                        subtitle={BENEFITS_DATA.subtitle}
                        titleColor={titleColor}
                        subtitleColor={subtitleColor}
                    />
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BENEFITS_DATA.items.map((item, index) => (
                        <BenefitCard 
                            key={index}
                            data={item}
                            isDarkMode={isDarkMode}
                        />
                    ))}
                </div>

                {/* Call to Action Bar */}
                <div 
                    className={`mt-16 p-6 md:p-8 rounded-xl text-center shadow-xl 
                                ${isDarkMode ? 'bg-purple-800 shadow-purple-900/50' : 'bg-purple-500 shadow-purple-300/50'}
                                transition-all duration-500 transform hover:scale-[1.01]`}
                >
                    <p className="text-xl font-semibold text-white mb-2">Ready to partner with us?</p>
                    <button 
                        className="px-8 py-3 text-lg font-bold rounded-full bg-yellow-400 text-purple-900 
                                   transition-colors duration-300 hover:bg-yellow-300 transform hover:scale-[1.02]"
                    >
                        Contact Sales Team <Briefcase className="w-5 h-5 inline ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default KeyBenefits;