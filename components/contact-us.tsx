"use client";
import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
// Assuming ThemeContext is correctly imported and provides useTheme hook
import { useTheme } from "../app/ThemeContext"; 

// --- CONTACT DATA (based on the image and your input) ---
const CONTACT_DATA = {
  address: {
    line1: "150 Ferrand Drive, Ste 511,",
    line2: "Toronto, ON M3C 3E5",
  },
  contact: {
    phoneLocal: "(416) 484-8144",
    phoneToll: "+1 800 657-8721",
    email: "info@sunspotsholidays.com",
  },
  social: {
    facebook: "https://www.facebook.com/people/Sunspots-Holidays/100069403603134/",
    twitter: "#", // Placeholder for Twitter
  },
  // Google Maps embed URL for 150 Ferrand Drive, Toronto, ON
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.234913386057!2d-79.33777422363712!3d43.71261327109201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd519f7e7f6f%3A0x868b75e1f0e42d76!2s150%20Ferrand%20Dr%20Suite%20511%2C%20Toronto%2C%20ON%20M3C%203E5%2C%20Canada!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

// --- Form State Management (Simulated Submission) ---
const useContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | React.TextareaHTMLAttributes<HTMLTextAreaElement>['value']>) => {
    // Cast event target value to string for compatibility with both input and textarea
    const value = e.target.value as string;
    setFormData({ ...formData, [e.target.name]: value });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Check for basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      // In a real application, you would send this to your backend API here.
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Reset form
      // Optional: Reset status after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 2000);
  };

  return { formData, status, handleChange, handleSubmit };
};

// --- Contact Info & Map Sidebar Component ---
const ContactSidebar = () => {
  const { isDarkMode } = useTheme();

  // Conditional Styling
  const bgClass = isDarkMode ? "bg-gray-800" : "bg-white";
  const titleColor = isDarkMode ? "text-yellow-400" : "text-purple-700";
  const iconColor = isDarkMode ? "text-purple-400" : "text-purple-600";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-300";
  const linkColor = isDarkMode ? "text-yellow-400 hover:text-purple-400" : "text-purple-600 hover:text-purple-800";
  const socialBorder = isDarkMode ? "border-gray-600" : "border-gray-400";
  const socialText = isDarkMode ? "text-gray-400" : "text-gray-600";
  const subHeadingColor = isDarkMode ? "text-white" : "text-gray-900";


  return (
    <div className={`lg:w-1/3 p-8 ${bgClass} rounded-xl shadow-2xl space-y-8 transition-colors duration-500`}>
      <h2 className={`text-3xl font-bold ${titleColor} border-b pb-3 ${borderColor}`}>
        Our Contacts
      </h2>

      {/* Address Info */}
      <div className="space-y-2">
        <h3 className={`flex items-center text-xl font-semibold ${subHeadingColor}`}>
          <MapPin className={`w-6 h-6 mr-3 ${iconColor}`} /> Address Info
        </h3>
        <p className={`${textColor} ml-9`}>{CONTACT_DATA.address.line1}</p>
        <p className={`${textColor} ml-9`}>{CONTACT_DATA.address.line2}</p>
      </div>

      {/* Phone Info */}
      <div className="space-y-2">
        <h3 className={`flex items-center text-xl font-semibold ${subHeadingColor}`}>
          <Phone className={`w-6 h-6 mr-3 ${iconColor}`} /> Phone:
        </h3>
        <p className={`${textColor} ml-9`}>
          **Local:** {CONTACT_DATA.contact.phoneLocal}
        </p>
        <p className={`${textColor} ml-9`}>
          **Toll-Free:** {CONTACT_DATA.contact.phoneToll}
        </p>
      </div>

      {/* Email Info */}
      <div className="space-y-2">
        <h3 className={`flex items-center text-xl font-semibold ${subHeadingColor}`}>
          <Mail className={`w-6 h-6 mr-3 ${iconColor}`} /> Email:
        </h3>
        <a
          href={`mailto:${CONTACT_DATA.contact.email}`}
          className={`${linkColor} transition ml-9 text-lg`}
        >
          {CONTACT_DATA.contact.email}
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center space-x-4 pt-4">
        <a
          href={CONTACT_DATA.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialText} hover:text-blue-400 transition p-2 rounded-full border ${socialBorder} hover:border-blue-400`}
          aria-label="Twitter link"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href={CONTACT_DATA.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={`${socialText} hover:text-blue-600 transition p-2 rounded-full border ${socialBorder} hover:border-blue-600`}
          aria-label="Facebook link"
        >
          <Facebook className="w-6 h-6" />
        </a>
      </div>

      {/* Map Embed */}
      <div className={`mt-8 pt-4 border-t ${borderColor}`}>
        <h3 className={`text-xl font-semibold ${subHeadingColor} mb-4`}>Find Us</h3>
        <div className="shadow-lg rounded-lg overflow-hidden">
             <iframe
                src={CONTACT_DATA.mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

// --- Main Contact Form Component ---
const ContactForm = ({ formData, status, handleChange, handleSubmit }: ReturnType<typeof useContactForm>) => {
  const { isDarkMode } = useTheme();

  // Conditional Styling
  const formBg = isDarkMode ? "bg-gray-900" : "bg-white";
  const mainTitle = isDarkMode ? "text-white" : "text-gray-900";
  const secondaryText = isDarkMode ? "text-gray-400" : "text-gray-600";
  const inputBg = isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-gray-900 placeholder-gray-500";
  const inputFocus = "focus:ring-purple-500 focus:border-purple-500";
  const successBg = isDarkMode ? "bg-green-500/10 border-green-500 text-green-300" : "bg-green-50 border-green-400 text-green-700";
  const errorText = isDarkMode ? "text-red-400" : "text-red-600";

  const inputClass = `w-full p-3 border rounded-lg transition duration-300 ${inputBg} ${inputFocus}`;
  const labelClass = `block text-sm font-medium ${secondaryText} mb-1`;
  
  const submitButtonContent = {
    idle: (
      <>
        <Send className="w-5 h-5 mr-2" /> Send Message
      </>
    ),
    loading: (
      <>
        <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...
      </>
    ),
    success: (
      <>
        <CheckCircle className="w-5 h-5 mr-2" /> Sent Successfully!
      </>
    ),
    error: (
      <>
        <Send className="w-5 h-5 mr-2" /> Try Again
      </>
    ),
  };

  return (
    <div className={`lg:w-2/3 p-8 ${formBg} rounded-xl shadow-2xl transition-colors duration-500`}>
      <h2 className={`text-3xl font-bold ${mainTitle} mb-6 border-b pb-4 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
        Send Us a Message
      </h2>
      <p className={`${secondaryText} mb-8`}>
        We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>

      {/* Success State */}
      {status === 'success' ? (
        <div className={`p-6 border-l-4 ${successBg} rounded-lg flex items-center`}>
            <CheckCircle className="w-6 h-6 mr-3" />
            <p className="font-semibold">Thank you for your message! We have received it and will respond soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className={labelClass}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className={inputClass}
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className={labelClass}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className={inputClass}
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className={labelClass}>Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange as unknown as (e: React.ChangeEvent<HTMLTextAreaElement>) => void} // Type assertion for textarea
              placeholder="Write your message here..."
              required
              className={inputClass}
            ></textarea>
          </div>

          {/* Submission Feedback */}
          {status === 'error' && (
            <p className={`${errorText} font-medium`}>Error: Please ensure all fields are filled correctly.</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm transition duration-300 ${
              status === "loading"
                ? "bg-purple-700 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            {submitButtonContent[status]}
          </button>
        </form>
      )}
    </div>
  );
};

// --- Main Page Component ---
const ContactUsPage = () => {
  const { isDarkMode } = useTheme();
  const formProps = useContactForm();

  // Conditional Styling
  const mainBg = isDarkMode ? "bg-gray-950" : "bg-white";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const accentColor = "text-purple-400";
  const subtextColor = isDarkMode ? "text-gray-400" : "text-gray-600";


  return (
    <div className={`min-h-screen ${mainBg} py-12 sm:py-24 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-extrabold ${headingColor} sm:text-6xl tracking-tight`}>
            Get in <span className={accentColor}>Touch</span>
          </h1>
          <p className={`mt-4 text-xl ${subtextColor}`}>
            Reach out to the Sunspots Holidays team for reservations, support, or partnership inquiries.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: Form */}
          <ContactForm {...formProps} />
          
          {/* Right Column: Details & Map */}
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;