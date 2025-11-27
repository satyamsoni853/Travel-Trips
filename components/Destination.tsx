"use client";
import React from "react";
import Title from "./Title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "../app/ThemeContext"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// modules
import { Pagination, Autoplay } from "swiper/modules";

const Destination = () => {
  const { isDarkMode } = useTheme();

  // Determine the background color for the main section
  const sectionBgClass = isDarkMode ? "bg-gray-900" : "bg-white";

  return (
    <section className={`relative max-container padding-container flex flex-col gap-12 py-8 ${sectionBgClass}`}>
      <div className="top">
        <Title
          title=" Sunspoat top destination"
          subtitle="Explore top destination"
          isDarkMode={isDarkMode} 
        />
      </div>

      <div className="bottom flex items-center justify-between">
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          loop={true}
          pagination={{ clickable: true }}
          // ⭐ Smooth + Slow Scroll Added
          autoplay={{
            delay: 3500, // slides every 3.5 seconds
            disableOnInteraction: false,
          }}
          speed={1200} // smooth sliding animation
          modules={[Pagination, Autoplay]}
          breakpoints={{
            "@0.00": { slidesPerView: 1, spaceBetween: 10 },
            "@0.75": { slidesPerView: 1, spaceBetween: 20 },
            "@1.15": { slidesPerView: 2, spaceBetween: 40 },
            "@1.60": { slidesPerView: 3, spaceBetween: 60 },
          }}
          className={isDarkMode ? "swiper-dark-mode" : ""}
        >
          {/* Swiper Slides (kept for context, but not changed) */}
          <SwiperSlide className="pb-12"><DestinationCard img="/beach2.jpg" place="Paradise Beach, Bantayan Island" country="Rome, Italy" price="$550.16" rating="4.8" /></SwiperSlide>
          <SwiperSlide className="pb-12"><DestinationCard img="/ocean.jpg" place="Ocean with full of Colors" country="Maldives" price="$20.99" rating="4.5" /></SwiperSlide>
          <SwiperSlide className="pb-12"><DestinationCard img="/mountain.jpg" place="Mountain View, Above the cloud" country="United Arab Emeries" price="$150.99" rating="5.0" /></SwiperSlide>
          <SwiperSlide className="pb-12"><DestinationCard img="/snorkeling.jpg" place="Gili Trawangan Island" country="Lombok, Indonesia" price="$750.00" rating="4.8" /></SwiperSlide>
          <SwiperSlide className="pb-12"><DestinationCard img="/boat.jpg" place="Kuta Island" country="Bali, Indonesia" price="$670.50" rating="4.6" /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

// Interface remains the same
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
  const cardBgClass = isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white";
  const placeTextColor = isDarkMode ? "text-gray-100" : "text-gray-900";
  const countryTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  
  // New: Hover shadow color for animation
  const hoverShadowClass = isDarkMode ? "hover:shadow-purple-500/50" : "hover:shadow-purple-500/30";

  return (
    <div 
        className={`
          h-[380px] w-full max-w-[400px] mx-auto rounded-3xl flex flex-col overflow-hidden 
          
          // **Animation Classes**
          transition-all duration-300 ease-in-out hover:scale-[1.02] 
          hover:shadow-2xl 
          ${hoverShadowClass} // Dynamic shadow color
          
          ${cardBgClass}`}
    >
      <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
        <Image
          src={img}
          alt={place}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110" // **Image Zoom Animation**
          priority={false}
        />
        {/* Animated Overlay for image polish */}
        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 hover:bg-black/0" /> 
      </div>

      <div className="flex-1 px-5 py-4 flex flex-col justify-between">
        <div>
          <div className="place-price flex justify-between items-start gap-3">
            <p className={`font-bold text-base flex-1 line-clamp-2 leading-tight ${placeTextColor}`}>
              {place}
            </p>
            <p className="text_pink font-bold text-base whitespace-nowrap">
              {price}
            </p>
          </div>
          <p className={`mt-2 text-sm ${countryTextColor}`}>{country}</p>
        </div>

        <div className="mt-3 flex gap-2 items-center">
          <p className="text_orange font-bold text-sm">{rating}</p>
          <Image src="/star.png" alt="star" width={14} height={14} /> 
        </div>
      </div>
    </div>
  );
};

export default Destination;