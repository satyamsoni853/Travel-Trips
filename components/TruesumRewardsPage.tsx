"use client";
import React from "react";
import Image from "next/image";
import { DollarSign, Gift, Heart, ArrowRight, Plane, Globe } from "lucide-react";
import { useTheme } from "../app/ThemeContext"; // Assuming your ThemeContext is here

// --- Data Structure ---
const REWARDS_DATA = {
  title: "Truesun Rewards",
  intro:
    "At Sunspots Holidays, we believe in rewarding travel agents – and that's why we developed our Truesun Rewards. For every booking with us, you can earn booking incentives that can be paid in money or gift cards, or donated to charity.",
  incentiveOptions: {
    title: "Incentive Options",
    description: "You can choose to receive your booking incentives as cash or select one of our preferred gift card retailers.",
    details: [
      { name: "Cash Payment", icon: DollarSign, color: "text-green-500" },
      { name: "The Bay Gift Cards", icon: Gift, color: "text-red-500" },
      { name: "Sears Gift Cards", icon: Gift, color: "text-blue-500" },
      { name: "Petro Canada Gift Cards", icon: Gift, color: "text-orange-500" },
      { name: "Any Other Gift Card Request", icon: Gift, color: "text-purple-500" },
    ],
  },
  charityDonation: {
    title: "Donate to Charity",
    description: "We've also made it easy to donate your TrueSun Rewards to a worthy cause of your choice. Simply tell us which organization you wish to gift your rewards to, and we will make a donation in your name.",
    charities: [
      "World Vision",
      "Canadian Feed the Children",
      "Canadian Red Cross",
      "MV Canada",
      "the Canadian Cancer Society",
      "Heifer International",
      "or any other charity of your choice.",
    ],
  },
  image: "/AirCanadaPlane.jpg", // Placeholder for the plane image
};

// --- Sub Component: Reward Option Card ---
const RewardOptionCard = ({ item, isDarkMode }: { item: (typeof REWARDS_DATA.incentiveOptions.details)[0]; isDarkMode: boolean }) => {
  const Icon = item.icon;
  const cardBg = isDarkMode ? "bg-gray-800 hover:bg-gray-700/80" : "bg-white hover:bg-purple-50";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";

  return (
    <div className={`p-5 rounded-lg shadow-md flex items-center space-x-4 transition-all duration-300 transform hover:scale-[1.03] ${cardBg}`}>
      <Icon className={`w-8 h-8 ${item.color} flex-shrink-0`} />
      <p className={`text-lg font-semibold ${textColor}`}>{item.name}</p>
    </div>
  );
};


// --- Main Component ---
const TruesunRewardsPage = () => {
  const { isDarkMode } = useTheme();

  // Conditional Styling
  const mainBg = isDarkMode ? "bg-gray-950" : "bg-white-50";
  const sectionBg = isDarkMode ? "bg-gray-900" : "bg-white";
  const headingColor = isDarkMode ? "text-purple-400" : "text-purple-700";
  const subHeadingColor = isDarkMode ? "text-white" : "text-gray-900";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const listBg = isDarkMode ? "bg-gray-800" : "bg-gray-100";
  const listText = isDarkMode ? "text-purple-200" : "text-gray-800";


  return (
    <div className={`min-h-screen ${mainBg} py-12 sm:py-20 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className={`text-5xl font-extrabold ${headingColor} sm:text-6xl tracking-tight`}>
            {REWARDS_DATA.title}
          </h1>
          <p className={`mt-4 text-xl ${textColor} max-w-4xl mx-auto`}>
            {REWARDS_DATA.intro}
          </p>
        </div>

        {/* Main Content Grid: Image and Rewards Info */}
        <div className={`p-8 rounded-2xl shadow-xl ${sectionBg} transition-colors duration-500`}>
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Left Column: Image with Frame */}
            <div className="relative h-96 w-full rounded-xl shadow-2xl overflow-hidden group">
                <Image
                    src="/AboutPageCaursal1.jpg" // Using one of your existing carousel images as a placeholder for the airplane image
                    alt="Air Canada Plane in the Sky"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Plane className="w-16 h-16 text-white/80 animate-pulse" />
                </div>
            </div>

            {/* Right Column: Incentive Options */}
            <div className="space-y-6">
              <h2 className={`text-3xl font-bold ${subHeadingColor} flex items-center border-b pb-2 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
                <DollarSign className={`w-6 h-6 mr-3 ${headingColor}`} /> {REWARDS_DATA.incentiveOptions.title}
              </h2>
              <p className={`${textColor} text-lg`}>{REWARDS_DATA.incentiveOptions.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {REWARDS_DATA.incentiveOptions.details.map((item, index) => (
                  <RewardOptionCard key={index} item={item} isDarkMode={isDarkMode} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Donation Section (Full Width) */}
        <div className={`mt-12 p-8 rounded-2xl shadow-xl ${sectionBg} transition-colors duration-500`}>
            <h2 className={`text-3xl font-bold ${subHeadingColor} flex items-center border-b pb-2 mb-6 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
                <Heart className={`w-6 h-6 mr-3 ${headingColor}`} /> {REWARDS_DATA.charityDonation.title}
            </h2>
            <p className={`${textColor} text-lg mb-6`}>{REWARDS_DATA.charityDonation.description}</p>
            
            <div className={`p-5 rounded-lg ${listBg}`}>
                <h3 className={`text-xl font-semibold mb-3 ${listText}`}>Preferred Charities:</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {REWARDS_DATA.charityDonation.charities.map((charity, index) => (
                        <li key={index} className="flex items-center space-x-2 text-base font-medium">
                            <Globe className={`w-4 h-4 flex-shrink-0 ${headingColor}`} />
                            <span className={textColor}>{charity}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Note on Booking */}
        <div className="mt-10 text-center">
            <p className={`text-lg italic ${textColor}`}>
                **How to Earn:** Rewards are earned for **every booking** made with Sunspots Holidays.
            </p>
        </div>
      </div>
    </div>
  );
};

export default TruesunRewardsPage;