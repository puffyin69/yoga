"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div 
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled 
                ? "bg-white shadow-md text-gray-800 py-2" 
                : "bg-transparent text-white py-4"
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="h-10 w-10 relative mr-2">
                        <div className="absolute inset-0 bg-amber-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">SY</span>
                        </div>
                    </div>
                    <h1 className="text-xl font-bold">Shailee Yoga</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    <div className="font-medium hover:text-amber-400 transition-colors cursor-pointer">
                        Home
                    </div>
                    <div className="font-medium hover:text-amber-400 transition-colors cursor-pointer">
                        Classes
                    </div>
                    <div className="font-medium hover:text-amber-400 transition-colors cursor-pointer">
                        About Us
                    </div>
                    <div className="font-medium hover:text-amber-400 transition-colors cursor-pointer">
                        Contact
                    </div>
                    <button className={`px-5 py-2 rounded-full font-medium transition-all ${
                        scrolled 
                        ? "bg-amber-500 text-white hover:bg-amber-600" 
                        : "bg-white text-amber-600 hover:bg-gray-100"
                    }`}>
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden focus:outline-none" 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-6">
                    <div className="flex flex-col gap-4">
                        <div className="text-gray-800 font-medium hover:text-amber-400 cursor-pointer">
                            Home
                        </div>
                        <div className="text-gray-800 font-medium hover:text-amber-400 cursor-pointer">
                            Classes
                        </div>
                        <div className="text-gray-800 font-medium hover:text-amber-400 cursor-pointer">
                            About Us
                        </div>
                        <div className="text-gray-800 font-medium hover:text-amber-400 cursor-pointer">
                            Contact
                        </div>
                        <button className="bg-amber-500 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-600 transition-colors w-full mt-2">
                            Book Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;