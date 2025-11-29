"use client";
import React from "react";
import {
  Heart,
  CalendarOff,
  Briefcase,
  Shield,
  CheckCircle,
  Phone,
} from "lucide-react";
import { useTheme } from "../app/ThemeContext";

// --- 1. DATA STRUCTURE ---
const INSURANCE_DATA = {
  title: "Travel Insurance",
  tagline: "Protect your journey, travel with peace of mind.",
  intro:
    "We highly recommend purchasing comprehensive travel insurance to protect you against unforeseen events before and during your trip. Our trusted partners offer policies designed specifically for your travel needs.",
  benefits: [
    {
      name: "Emergency Medical Coverage",
      description: "Covers emergency hospital and medical bills during your trip.",
      icon: Heart,
      color: "text-red-500",
    },
    {
      name: "Trip Cancellation/Interruption",
      description: "Reimburses non-refundable expenses if your trip is cancelled or cut short due to covered reasons.",
      icon: CalendarOff,
      color: "text-orange-500",
    },
    {
      name: "Baggage Loss & Delay",
      description: "Provides compensation for lost, stolen, or damaged baggage, and essentials purchased due to delay.",
      icon: Briefcase,
      color: "text-yellow-500",
    },
    {
      name: "24/7 Assistance",
      description: "Access to emergency services, travel assistance, and claims support around the clock.",
      icon: Phone,
      color: "text-blue-500",
    },
  ],
};

// --- 2. SUB-COMPONENT: Feature Card ---
const FeatureCard = ({ feature, isDarkMode, delay }: any) => {
  const Icon = feature.icon;
  const cardBg = isDarkMode ? "bg-gray-800 hover:bg-gray-700/80" : "bg-white hover:bg-purple-50";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const titleColor = isDarkMode ? "text-white" : "text-gray-900";

  return (
    <div
      className={`rounded-xl shadow-lg p-6 space-y-3 transition-all duration-700 transform hover:scale-[1.03] hover:shadow-2xl 
                  animate-fadeInSlideUp opacity-0 ${delay} ${cardBg}`}
      style={{ animationFillMode: 'forwards' }}
    >
      <Icon className={`w-8 h-8 ${feature.color}`} />
      <h3 className={`text-xl font-bold ${titleColor}`}>{feature.name}</h3>
      <p className={`text-sm ${textColor}`}>{feature.description}</p>
    </div>
  );
};

// --- 3. MAIN COMPONENT ---
const InsurancePage = () => {
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
`;

  return (
    <div className={`min-h-screen ${mainBg} py-12 sm:py-24 transition-colors duration-500`}>
      {/* Global Styles for Animation */}
      <style jsx global>{ANIMATION_STYLES}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInSlideUp opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
          <h1 className={`text-5xl font-extrabold ${headingColor} sm:text-6xl tracking-tight`}>
            {INSURANCE_DATA.title} <Shield className="inline w-10 h-10 mb-2" style={{ color: '#4c1d95' }}/>
          </h1>
          <p className={`mt-4 text-xl font-medium ${accentColor}`}>{INSURANCE_DATA.tagline}</p>
        </div>

        {/* Introduction Block */}
        <div className={`p-8 rounded-xl shadow-xl mb-12 ${isDarkMode ? "bg-gray-800" : "bg-white"} animate-fadeInSlideUp opacity-0 delay-300`} style={{ animationFillMode: 'forwards' }}>
            <p className={`text-lg leading-relaxed ${textColor}`}>
                {INSURANCE_DATA.intro}
            </p>
            <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                <p className="text-sm font-semibold text-red-400 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-red-500" /> 
                    We advise all clients to carefully review policy details and exclusions before purchase.
                </p>
            </div>
        </div>

        {/* Coverage Grid */}
        <h2 className={`text-3xl font-bold text-center ${headingColor} mb-10 animate-fadeInSlideUp opacity-0 delay-400`} style={{ animationFillMode: 'forwards' }}>
            Core Coverage Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSURANCE_DATA.benefits.map((feature, index) => (
            <FeatureCard 
              key={feature.name} 
              feature={feature} 
              isDarkMode={isDarkMode} 
              // Stagger the animation delay
              delay={`delay-${(index * 100) + 500}`} 
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className={`mt-20 p-8 text-center rounded-xl border-4 border-dashed border-purple-500 animate-fadeInSlideUp opacity-0 delay-900`} style={{ animationFillMode: 'forwards' }}>
            <p className={`text-2xl font-bold ${headingColor} mb-4`}>Ready to secure your travel insurance?</p>
            <p className={`${textColor} mb-6`}>
                Contact your Sunspots Holidays travel agent today to discuss the best policy options for your upcoming trip.
            </p>
            <button
                className={`inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-300 transform hover:scale-105`}
            >
                Get an Insurance Quote
            </button>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;