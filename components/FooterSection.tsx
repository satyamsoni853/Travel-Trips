// FooterSection.tsx

import React from "react";
import { MapPin, Phone, Mail, Twitter, Facebook, Link, Landmark } from "lucide-react"; 

// 1. DEFINE THE INTERFACES FOR TYPE SAFETY

interface FooterAddress {
    line1: string;
    line2: string;
    fullAddress: string;
}

interface FooterContact {
    phone: string;
    phoneToll: string;
    email: string;
}

interface FooterData {
    address: FooterAddress;
    contact: FooterContact;
    brochure: string[];
}

interface FooterSectionProps {
    footerData: FooterData;
    isDarkMode: boolean;
    // Assume color classes are passed from the parent component for reusability
    footerBg: string;
    footerTitleColor: string;
    footerText: string;
    footerAccentIconColor: string;
    footerAccentHover: string;
}

// 2. REUSABLE FOOTER COMPONENT
const FooterSection: React.FC<FooterSectionProps> = ({
    footerData,
    isDarkMode,
    footerBg,
    footerTitleColor,
    footerText,
    footerAccentIconColor,
    footerAccentHover,
}) => {
    return (
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
                                    {footerData.address.line1}<br/>{footerData.address.line2}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 pt-2">
                                <Phone className={`w-5 h-5 ${footerAccentIconColor} flex-shrink-0`} />
                                <div>
                                    <a href={`tel:${footerData.contact.phone}`} className={`block ${footerAccentHover} transition duration-200`}>{footerData.contact.phone} (Local)</a>
                                    <a href={`tel:${footerData.contact.phoneToll}`} className={`block ${footerAccentHover} transition duration-200`}>Toll Free: {footerData.contact.phoneToll}</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className={`w-5 h-5 ${footerAccentIconColor} flex-shrink-0`} />
                                <a href={`mailto:${footerData.contact.email}`} className={`${footerAccentHover} transition duration-200`}>{footerData.contact.email}</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Map Embed */}
                    <div className="md:col-span-2">
                        <h4 className={`text-xl font-bold mb-5 ${footerTitleColor} border-b ${isDarkMode ? 'border-purple-700' : 'border-purple-200'} pb-2`}>🗺️ Find Us</h4>
                        <div className="h-48 w-full rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                            {/* Placeholder for the Map component */}
                            
                        </div>
                    </div>
                    
                    {/* Column 3: Brochure Links & Social Media */}
                    <div>
                        <h4 className={`text-xl font-bold mb-5 ${footerTitleColor} border-b ${isDarkMode ? 'border-purple-700' : 'border-purple-200'} pb-2`}>🔗 Resources & Social</h4>
                        
                        <h5 className={`text-lg font-semibold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'} mb-3`}>Popular Brochures</h5>
                        <ul className={`${footerText} space-y-1.5 text-sm mb-6`}>
                            {footerData.brochure.slice(0, 4).map((item: string, index: number) => (
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
    );
};

export default FooterSection;