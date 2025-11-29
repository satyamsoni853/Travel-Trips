"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useTheme } from "../app/ThemeContext";

export const NAV_LINKS_UPDATED = [
  { key: "home", label: "Homepage" },
  { key: "about", label: "About Us" },
  { key: "flights", label: "Flights" },
  {
    key: "weekly-flyers",
    label: "Weekly E-flyers",
    submenu: [
      { key: "e-brochure", label: "E-Brochure" },
      { key: "truesum-rewards", label: "Truesum Rewards" },
    ],
  },
  {
    key: "special-packages",
    label: "Special Packages",
    submenu: [
      { key: "groups", label: "Groups" },
      { key: "insurance", label: "insurance" },
    ],
  },
  { key: "contact-us", label: "Contact Us" },
  { key: "pnr-transfer", label: "PNR Transfer" },
];

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close mobile menu on screen resize (optional but helpful)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // 1024px is Tailwind's 'lg' breakpoint
        setNavbarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme-aware classes for reusability
  const baseTextColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const hoverBgClass = isDarkMode ? "hover:bg-gray-700" : "hover:bg-purple-50";
  const hoverTextColorClass = isDarkMode
    ? "hover:text-white"
    : "hover:text-purple-600";
  const borderColorClass = isDarkMode ? "border-gray-700" : "border-gray-200";

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolling ? "py-3" : "py-5"
        }`}
      >
        {/* --- GLASS EFFECT ADDED HERE --- */}
        <div
          className={`absolute inset-0 z-0 transition-all duration-500 ${
            scrolling
              ? isDarkMode
                ? "bg-gray-900/40 backdrop-blur-md"
                : "bg-white/40 backdrop-blur-md"
              : isDarkMode
              ? "bg-gray-900/30 backdrop-blur-sm"
              : "bg-white/30 backdrop-blur-sm"
          }`}
        />
        <div className="max-w-8xl mx-auto px-4 relative z-10">
          <div
            className={`flex items-center justify-between rounded-full border transition-all duration-500 ${
              isDarkMode
                ? // Dark Mode
                  scrolling
                  ? `${borderColorClass} bg-gray-900/80 px-6 py-3 shadow-lg backdrop-blur-xl`
                  : "border-transparent bg-gray-900/90 px-6 py-3 shadow-md backdrop-blur-md"
                : // Light Mode
                scrolling
                ? "border-gray-200/60 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-xl"
                : "border-transparent bg-white/90 px-6 py-3 shadow-md backdrop-blur-md"
            }`}
          >
            {/* Logo */}
            <Image
              src="/travel-logo.png" // Consider a dark/light logo swap here
              alt="Sunspot logo"
              width={80}
              height={80}
              className="object-contain transition-all duration-500"
            />

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-4">
              {NAV_LINKS_UPDATED.map((link) => (
                <li
                  key={link.key}
                  className="relative group"
                  onMouseEnter={() => link.submenu && setOpenDropdown(link.key)}
                  onMouseLeave={() => link.submenu && setOpenDropdown(null)}
                >
                  <Link href={link.key === "home" ? "/" : `/${link.key}`}>
                    <span
                      className={`flex items-center gap-1 cursor-pointer rounded-full px-3 py-2 text-[16px] font-medium transition-all duration-300 ${baseTextColor} ${hoverBgClass} ${hoverTextColorClass}`}
                    >
                      {link.label}
                      {link.submenu && (
                        <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </span>
                  </Link>

                  {link.submenu && (
                    <ul
                      className={`absolute left-0 top-full mt-2 w-48 rounded-2xl shadow-lg border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-gray-800/90 border-gray-700 backdrop-blur-md"
                          : "bg-white/90 border-gray-200 backdrop-blur-md" // Added glass effect to dropdown
                      } ${
                        openDropdown === link.key
                          ? "opacity-100 pointer-events-auto translate-y-0"
                          : "opacity-0 pointer-events-none translate-y-2"
                      }`}
                    >
                      {link.submenu.map((item) => (
                        <li
                          key={item.key}
                          className={`px-4 py-3 cursor-pointer ${baseTextColor} ${hoverBgClass} ${hoverTextColorClass}`}
                        >
                          <Link href={`/${item.key}`}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Buttons and Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isDarkMode
                    ? "text-yellow-400 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>

              <button
                className={`rounded-full border-2 px-6 py-2.5 text-sm font-semibold transition-all duration-300 
                ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:border-purple-500 hover:bg-gray-700 hover:text-white"
                    : "border-gray-300 text-gray-700 hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600"
                }`}
              >
                Login
              </button>
              <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5">
                Sign Up
              </button>
            </div>

            {/* Mobile Toggle & Theme Button Container */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Theme Toggle - Mobile */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isDarkMode
                    ? "text-yellow-400 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Toggle menu"
              >
                {navbarOpen ? (
                  <XMarkIcon className={`h-6 w-6 ${baseTextColor}`} />
                ) : (
                  <Bars3Icon className={`h-6 w-6 ${baseTextColor}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {navbarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed left-0 right-0 top-24 z-50 mx-4 overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 lg:hidden ${
          navbarOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        } ${
          isDarkMode
            ? "bg-gray-800/95 border border-gray-700 backdrop-blur-md" // Added glass effect
            : "bg-white/95 border border-gray-200/60 backdrop-blur-md" // Added glass effect
        }`}
      >
        <ul className="flex flex-col p-4">
          {NAV_LINKS_UPDATED.map((link) => (
            <li key={link.key} className="mb-2">
              <Link href={link.key === "home" ? "/" : `/${link.key}`}>
                <div
                  className={`cursor-pointer rounded-2xl px-5 py-4 font-medium flex justify-between items-center transition-colors ${baseTextColor} ${hoverBgClass} ${hoverTextColorClass}`}
                  onClick={() => {
                    if (!link.submenu) setNavbarOpen(false);
                    setOpenDropdown(
                      openDropdown === link.key ? null : link.key
                    );
                  }}
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openDropdown === link.key ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </div>
              </Link>

              {/* Mobile Submenu */}
              {link.submenu && (
                <div
                  // Use max-h for smooth CSS transition on height
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === link.key
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className={`ml-4 border-l ${borderColorClass}`}>
                    {link.submenu.map((item) => (
                      <li
                        key={item.key}
                        className={`px-5 py-3 cursor-pointer transition-colors ${
                          isDarkMode
                            ? "text-gray-400 hover:text-white hover:bg-gray-700/50"
                            : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                        }`}
                      >
                        <Link href={`/${item.key}`}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}

          {/* Mobile Buttons */}
          <div
            className={`mt-4 flex flex-col gap-3 pt-4 ${
              isDarkMode
                ? "border-t border-gray-700"
                : "border-t border-gray-100"
            }`}
          >
            <button
              className={`rounded-full border-2 py-3.5 text-sm font-semibold transition-all duration-300 
                ${
                  isDarkMode
                    ? "border-gray-600 text-gray-300 hover:border-purple-500 hover:bg-gray-700 hover:text-white"
                    : "border-gray-300 text-gray-700 hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600"
                }`}
            >
              Login
            </button>
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
