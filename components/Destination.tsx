"use client";
import React from "react";
import Title from "./Title";
import Image from "next/image";
import { Star, MapPin, DollarSign } from "lucide-react"; // Importing Lucide icons for a cleaner look
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "../app/ThemeContext"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// modules
import { Pagination, Autoplay } from "swiper/modules";

// --- Destination Card Component (Redesigned) ---
interface DestinationCardProps {
  img: string;
  place: string;
  country: string;
  price: string;
  rating: string;
}

const DestinationCard = ({
  img,
  place,
  country,
  price,
  rating,
}: DestinationCardProps) => {
  const { isDarkMode } = useTheme();

  // Dynamic classes based on theme
  const cardBgClass = isDarkMode ? "bg-gray-800 border border-purple-900" : "bg-white";
  const placeTextColor = isDarkMode ? "text-white" : "text-gray-900";
  const countryTextColor = isDarkMode ? "text-purple-300" : "text-purple-700";
  const priceTextColor = isDarkMode ? "text-yellow-400" : "text-purple-600"; // Purple/Yellow Accent
  const hoverShadowClass = isDarkMode ? "hover:shadow-purple-500/50" : "hover:shadow-purple-300/50";
  const ratingIconColor = isDarkMode ? "text-yellow-400" : "text-purple-500";


  return (
    <div 
      className={`
          h-[420px] w-full max-w-[400px] mx-auto rounded-3xl flex flex-col overflow-hidden 
          relative cursor-pointer group 
          
          // **Enhanced Animation Classes**
          transition-all duration-500 ease-in-out hover:scale-[1.03] hover:translate-y-[-5px]
          shadow-lg ${hoverShadowClass} 
          
          ${cardBgClass}
      `}
    >
      {/* Image Area with Zoom Effect */}
      <div className="relative w-full h-[280px] overflow-hidden flex-shrink-0">
        <Image
          src={img}
          alt={place}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.15]" // More pronounced zoom
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/10" /> 
        
        {/* Price Tag Overlay (top right) */}
        <div className={`absolute top-4 right-4 px-4 py-2 rounded-full ${isDarkMode ? 'bg-purple-600/90' : 'bg-purple-700/90'} backdrop-blur-sm shadow-xl`}>
            <span className="text-white font-extrabold text-lg flex items-center gap-1">
                <DollarSign className="w-4 h-4 text-yellow-300" />
                {price}
            </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-5 py-5 flex flex-col justify-between">
        
        {/* Place and Country */}
        <div>
          <p className={`font-extrabold text-xl line-clamp-1 ${placeTextColor} transition-colors duration-300 group-hover:text-purple-400`}>
            {place}
          </p>
          <p className={`mt-1 text-sm flex items-center gap-1 font-medium ${countryTextColor}`}>
            <MapPin className="w-4 h-4" />
            {country}
          </p>
        </div>

        {/* Rating and Action */}
        <div className="mt-3 flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Star className={`w-4 h-4 fill-current ${ratingIconColor}`} /> 
            <p className="font-bold text-sm" style={{ color: isDarkMode ? '#FFF' : '#333' }}>{rating}</p>
          </div>
          
          <button 
            className={`px-4 py-2 text-sm rounded-full font-semibold transition-colors duration-300 
                        ${isDarkMode ? 'bg-purple-700 text-white hover:bg-purple-600' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
// ----------------------------------------------------


const Destination = () => {
  const { isDarkMode } = useTheme();

  // Determine the background color for the main section
  const sectionBgClass = isDarkMode ? "bg-gray-900" : "bg-gray-50"; // Use light gray in light mode for a subtle lift

  // Title colors
  const titleColor = isDarkMode ? "text-white" : "text-gray-900";
  const subtitleColor = isDarkMode ? "text-yellow-400" : "text-purple-600";

  return (
    <section className={`relative max-container padding-container flex flex-col gap-12 py-16 ${sectionBgClass} transition-colors duration-500`}>
      <div className="top">
        <Title
          title="SUNSPOT TOP DESTINATIONS"
          subtitle="Explore the World's Best Destinations"
          // We will pass custom colors to Title based on the theme
          titleColor={subtitleColor} // Purple/Yellow Accent for main title
          subtitleColor={titleColor} // White/Dark text for subtitle
        />
      </div>

      <div className="bottom flex items-center justify-between">
        <Swiper
          slidesPerView={3}
          spaceBetween={40} // Reduced space for better look
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500, 
            disableOnInteraction: false,
          }}
          speed={1200}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            "@0.00": { slidesPerView: 1, spaceBetween: 20 },
            "@0.75": { slidesPerView: 1, spaceBetween: 30 },
            "@1.15": { slidesPerView: 2, spaceBetween: 30 },
            "@1.60": { slidesPerView: 3, spaceBetween: 40 },
          }}
          // Dynamic styling for pagination dots (requires external CSS setup, but we add a class)
          className={isDarkMode ? "swiper-dark-mode" : "swiper-light-mode"}
        >
          {/* Swiper Slides (updated to use the new DestinationCard) */}
          <SwiperSlide className="pb-12"><DestinationCard img="/beach2.jpg" place="Paradise Beach, Bantayan Island" country="Rome, Italy" price="$550.16" rating="4.8" /></SwiperSlide>
          <SwiperSlide className="pb-12"><DestinationCard img="/ocean.jpg" place="Ocean with full of Colors" country="Maldives" price="$20.99" rating="4.5" /></SwiperSlide>
          <SwiperSlide className="pb-12"><DestinationCard img="/mountain.jpg" place="Mountain View, Above the cloud" country="United Arab Emirates" price="$150.99" rating="5.0" /></SwiperSlide>
          <SwiperSlide className="pb-12"><DestinationCard img="/snorkeling.jpg" place="Gili Trawangan Island" country="Lombok, Indonesia" price="$750.00" rating="4.8" /></SwiperSlide>
          <SwiperSlide className="pb-12"><DestinationCard img="/boat.jpg" place="Kuta Island" country="Bali, Indonesia" price="$670.50" rating="4.6" /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Destination;