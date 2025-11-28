"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Changed Button import to Link for simplicity/portability
import { useTheme } from "../app/ThemeContext";

// A simple button/link component to handle styling consistency
type CustomButtonProps = {
  title: string;
  variant?: string;
  href?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant,
  href = "#",
}) => {
  // Determine base classes based on variant, ensuring responsiveness and hover effects
  let baseClasses =
    "rounded-full font-semibold px-8 py-3 transition duration-300 transform hover:scale-[1.02] shadow-lg";
  let activeClasses = "";

  switch (variant) {
    case "btn_purple":
      activeClasses =
        "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-purple-500/50 hover:shadow-purple-500/70";
      break;
    case "btn_outline":
      activeClasses =
        "border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:text-purple-700";
      break;
    default:
      activeClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
  }

  return (
    <Link href={href} className={`${baseClasses} ${activeClasses}`}>
      {title}
    </Link>
  );
};

// Custom Keyframes and Global Styles for animations
const CustomStyles = () => (
  <style jsx global>{`
    /* Custom floating animation */
    @keyframes float {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(0, -10px);
      }
      100% {
        transform: translate(0, 0);
      }
    }

    /* Custom delayed float */
    @keyframes float-delay {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(0, 10px);
      }
      100% {
        transform: translate(0, 0);
      }
    }

    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    .animate-float-delay {
      animation: float-delay 5s ease-in-out infinite;
    }

    /* Custom entrance animation */
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .slide-in-up {
      animation: slideInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    /* NEW: Plane movement animation for background */
    @keyframes planeBackgroundMove {
      0% {
        transform: translate(-100vw, var(--start-y)) rotate(var(--rotation));
        opacity: 0;
      }
      10% {
        opacity: 0.1;
      }
      90% {
        opacity: 0.1;
      }
      100% {
        transform: translate(100vw, var(--end-y)) rotate(var(--rotation));
        opacity: 0;
      }
    }
  `}</style>
);

const Hero = () => {
  const { isDarkMode } = useTheme();

  const [currentImage, setCurrentImage] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // All frames (including frame3)
  const images = ["/frame.png", "/frame1.png", "/frame2.png", "/frame3.png"];

  // Plane configurations - Expanded to 10 golden planes
  // UPDATED: Increased 'size' values for larger planes.
  const planeConfigs = [
    {
      size: "20px",
      color: "text-yellow-400",
      rotation: "-5deg",
      startY: "20vh",
      endY: "50vh",
      duration: 25,
      delay: 0,
    },
    {
      size: "15px",
      color: "text-yellow-300",
      rotation: "15deg",
      startY: "80vh",
      endY: "10vh",
      duration: 30,
      delay: 3,
    },
    {
      size: "23px",
      color: "text-yellow-500",
      rotation: "5deg",
      startY: "5vh",
      endY: "40vh",
      duration: 20,
      delay: 8,
    },
    {
      size: "17px",
      color: "text-yellow-600",
      rotation: "-10deg",
      startY: "60vh",
      endY: "0vh",
      duration: 35,
      delay: 13,
    },

    // New 6 Planes
    {
      size: "19px",
      color: "text-yellow-400",
      rotation: "20deg",
      startY: "15vh",
      endY: "70vh",
      duration: 22,
      delay: 18,
    },
    {
      size: "14px",
      color: "text-yellow-300",
      rotation: "-15deg",
      startY: "90vh",
      endY: "20vh",
      duration: 28,
      delay: 2,
    },
    {
      size: "25px",
      color: "text-yellow-500",
      rotation: "10deg",
      startY: "0vh",
      endY: "55vh",
      duration: 40,
      delay: 10,
    },
    {
      size: "16px",
      color: "text-yellow-600",
      rotation: "-25deg",
      startY: "75vh",
      endY: "-5vh",
      duration: 45,
      delay: 25,
    },
    {
      size: "21px",
      color: "text-yellow-400",
      rotation: "3deg",
      startY: "30vh",
      endY: "60vh",
      duration: 27,
      delay: 6,
    },
    {
      size: "18px",
      color: "text-yellow-500",
      rotation: "-8deg",
      startY: "45vh",
      endY: "5vh",
      duration: 32,
      delay: 16,
    },
  ];

  // Image carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Slower cycle for better viewing

    // Trigger entrance animation
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [images.length]);

  // Dynamic Class Definitions
  const mainBgClass = isDarkMode ? "bg-gray-950" : "bg-white";
  const headingColorClass = isDarkMode ? "text-white" : "text-gray-900";
  const paragraphColorClass = isDarkMode ? "text-gray-400" : "text-gray-600";
  const badgeBgClass = isDarkMode
    ? "bg-gray-800 shadow-gray-700/50"
    : "bg-white shadow-lg";
  const indicatorActiveColor = isDarkMode ? "bg-purple-400" : "bg-purple-600";
  const indicatorInactiveColor = isDarkMode ? "bg-gray-700" : "bg-gray-300";

  // Utility function for delayed animation classes
  const getEntranceClass = (delay = 0) =>
    `${
      hasAnimated ? "slide-in-up" : "opacity-0 translate-y-4"
    } transition-all duration-700 ease-out`;

  return (
    <section
      className={`relative max-container pt-20 pb-16 md:pb-15 overflow-hidden ${mainBgClass}`}
    >
      <CustomStyles /> {/* Inject custom CSS animations */}
      {/* Background Gradient/Graphic */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 h-48 w-48 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 bg-pink-500/20 rounded-full filter blur-3xl" />
      </div>
      {/* 10 Small moving planes in the background (Golden) */}
      {planeConfigs.map((plane, index) => (
        <div
          key={index}
          className={`fixed top-0 left-0 ${plane.color} z-1 opacity-0`}
          style={
            {
              fontSize: plane.size,
              "--start-y": plane.startY,
              "--end-y": plane.endY,
              "--rotation": plane.rotation,
              animation: `planeBackgroundMove ${plane.duration}s linear infinite ${plane.delay}s`,
            } as React.CSSProperties
          }
        >
          ✈️
        </div>
      ))}
      <div className="padding-container flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-0 relative z-10">
        {/* LEFT: Text Content */}
        <div className="relative z-2 flex flex-1 flex-col gap-8 xl:w-2/5 max-w-xl xl:max-w-none text-center xl:text-left">
          {/* Floating Explore Badge */}
          <div
            className={`${getEntranceClass(0)} self-center xl:self-start`}
            style={{ animationDelay: "0s" }}
          >
            <div
              className={`flex gap-2 w-fit rounded-full py-2 px-6 transition-all duration-300 hover:scale-[1.05] cursor-pointer ${badgeBgClass} ${
                isDarkMode ? "text-purple-300" : "text-purple-600"
              }`}
            >
              <p className="font-semibold text-sm">Explore the world!</p>
              {/* Simple inline SVG for theme consistency */}
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 18.269c-2.316 0-4.195-1.879-4.195-4.195S9.684 9.879 12 9.879s4.195 1.879 4.195 4.195-1.879 4.195-4.195 4.195zm0-6.195c-1.102 0-2 .898-2 2s.898 2 2 2 2-.898 2-2-.898-2-2-2zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1
            className={`text-5xl md:text-7xl font-extrabold leading-tight ${headingColorClass} ${getEntranceClass(
              0.15
            )}`}
            style={{ animationDelay: "0.15s" }}
          >
            Travel <span className="text-purple-500">top destination </span>
            of the world
          </h1>

          {/* Paragraph */}
          <p
            className={`text-lg md:text-xl ${paragraphColorClass} ${getEntranceClass(
              0.3
            )}`}
            style={{ animationDelay: "0.3s" }}
          >
            We always make our customer happy by providing as many choices as
            possible. Book your next adventure with confidence and ease.
          </p>

          {/* Buttons */}
          <div
            className={`flex justify-center xl:justify-start gap-4 mt-4 ${getEntranceClass(
              0.45
            )}`}
            style={{ animationDelay: "0.45s" }}
          >
            <CustomButton title="Plan Your Trip" variant="btn_purple" />
            {/* <CustomButton title="Learn More" variant="btn_outline" /> */}
          </div>
        </div>

        {/* RIGHT: Image Carousel with Layering */}
        <div className="relative z-1 xl:w-3/5 flex justify-center pt-16 xl:pt-0">
          <div className="relative w-full max-w-[550px] min-h-[400px] sm:min-h-[500px] aspect-square">
            {/* Background Decorative Element (The back frame) */}
            <div
              className={`absolute inset-0 rounded-[3rem] transition-colors duration-500 ${
                isDarkMode
                  ? "bg-gray-800/50 border border-gray-700/50 shadow-xl"
                  : "bg-white/70 border-gray-100 border-4 shadow-2xl"
              } transform rotate-3 scale-[1.05]`}
            />

            {/* Image Carousel */}
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`frame ${index + 1}`}
                // Use consistent large size for better control within the container
                width={750}
                height={750}
                className={`absolute inset-0 w-full h-full rounded-[3rem] object-cover transition-all duration-1000 ease-in-out border-4 ${
                  isDarkMode
                    ? "border-gray-700/50 shadow-2xl"
                    : "border-white shadow-2xl"
                } ${
                  currentImage === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{
                  // Subtle lift and rotation for the primary image
                  transform:
                    currentImage === index
                      ? "translateY(-10px) rotate(-1deg)"
                      : "translateY(0) rotate(0deg)",
                  transitionDelay: currentImage === index ? "0.2s" : "0s",
                  zIndex: currentImage === index ? 10 : 1,
                }}
              />
            ))}

            {/* FLOATING ICONS & BADGE */}

            {/* Map Icon (Top Left) */}
            <div
              className={`absolute -top-4 -left-4 sm:-top-6 sm:-left-6 p-2 sm:p-3 rounded-full ${
                isDarkMode
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "bg-white"
              } shadow-xl animate-float transition-all duration-300 hover:scale-110 cursor-pointer`}
            >
              {/* Inline SVG Map Pin */}
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>

            {/* People Icon (Bottom Right) */}
            <div
              className={`absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 p-2 sm:p-3 rounded-full ${
                isDarkMode
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "bg-white"
              } shadow-xl animate-float-delay transition-all duration-300 hover:scale-110 cursor-pointer`}
            >
               {/* Inline SVG Users */}
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S13.66 5 12 5s-3 1.34-3 3 1.34 3 3 3zM8 13c-2.21 0-4 1.79-4 4v2h16v-2c0-2.21-1.79-4-4-4H8z" />
              </svg>
            </div>

            {/* FLOATING LOCATION BADGE (Bottom Left) */}
            <div
              className={`absolute -bottom-10 left-1/2 -translate-x-1/2 sm:-bottom-14 sm:-left-12 sm:translate-x-0 flex gap-2 rounded-full py-2 px-3 sm:px-4 shadow-xl text-xs sm:text-sm ${badgeBgClass} ${
                isDarkMode ? "text-white" : "text-gray-900"
              } animate-float-delay`}
              style={{ animationDuration: "4.5s" }}
            >
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 12c0-4.41-3.59-8-8-8S4 7.59 4 12s3.59 8 8 8 8-3.59 8-8zm-8 6c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
              </svg>
              <p className="font-semibold">Top 10 Places</p>
            </div>

            {/* INDICATOR DOTS */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20 md:hidden">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? `${indicatorActiveColor} w-6`
                      : `${indicatorInactiveColor} w-2`
                  }`}
                  onClick={() => setCurrentImage(index)} // Allow manual navigation
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
