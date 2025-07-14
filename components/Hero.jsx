"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Hero = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((LocomotiveScroll) => {
      scroll = new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
      });
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full"
    >
      {/* Hero Section */}
      <div data-scroll-section className="relative h-screen w-full overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.png" 
            alt="Yoga Background" 
            fill 
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-amber-400/20 blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-amber-300/20 blur-xl animate-pulse-slow"></div>
          <div className="absolute top-2/3 left-1/3 w-20 h-20 rounded-full bg-amber-500/20 blur-xl animate-float"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <div data-scroll data-scroll-speed="0.3" className="mb-2 opacity-90">
            <span className="px-4 py-1 bg-amber-500/30 backdrop-blur-sm rounded-full text-sm uppercase tracking-wider font-medium">Transform Your Practice</span>
          </div>
          
          <h1 
            data-scroll 
            data-scroll-speed="2" 
            className="text-5xl md:text-7xl font-bold mb-4 relative"
          >
            Find Your <span className="text-amber-300 relative inline-block">
              Inner Balance
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-amber-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,0 C25,8 75,8 100,0 L100,10 L0,10 Z" fill="currentColor"></path>
              </svg>
            </span>
          </h1>
          
          <p 
            data-scroll 
            data-scroll-speed="1.5" 
            className="text-xl md:text-2xl max-w-2xl mb-12 text-gray-200"
          >
            Transform your mind and body with our expert-guided yoga sessions
          </p>
          
          {/* Interactive CTA Section */}
          <div 
            data-scroll 
            data-scroll-speed="1"
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
          >
            <button className="group relative bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Start Your Journey
              <span className="absolute inset-0 w-full h-full rounded-full border-2 border-amber-400 animate-ping-slow opacity-0 group-hover:opacity-30"></span>
            </button>
            
            <a href="#classes" className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors duration-300 group">
              <span className="h-12 w-12 rounded-full flex items-center justify-center border border-white/30 group-hover:border-amber-300/50 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
              <span className="font-medium">View Classes</span>
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <p className="text-sm text-white/70 mb-2">Scroll to explore</p>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center items-start p-1">
              <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll-down"></div>
            </div>
          </div>
        </div>
        
        {/* Particle Overlay */}
        <div className="absolute inset-0 z-5 bg-dot-pattern opacity-30"></div>
      </div>

      {/* Features Section */}
      <div data-scroll-section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 
            data-scroll 
            data-scroll-speed="1" 
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose Our Studio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div 
              data-scroll 
              data-scroll-speed="0.5" 
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from certified yoga teachers with years of experience and knowledge.</p>
            </div>
            
            {/* Feature 2 */}
            <div 
              data-scroll 
              data-scroll-speed="0.7" 
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">Morning, afternoon, and evening classes to fit your busy lifestyle.</p>
            </div>
            
            {/* Feature 3 */}
            <div 
              data-scroll 
              data-scroll-speed="0.9" 
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Peaceful Environment</h3>
              <p className="text-gray-600">Practice in a tranquil space designed for relaxation and focus.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div data-scroll-section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 
            data-scroll 
            data-scroll-speed="1" 
            className="text-4xl font-bold text-center mb-16"
          >
            Experience Our Studio
          </h2>
          
          {/* Modified gallery with just 2 images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              data-scroll
              data-scroll-speed="0.5"
              className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg"
            >
              <div className="h-full w-full relative">
                <Image 
                  src="/yoga-1.png"
                  alt="Yoga Practice in Studio" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">Morning Flow</h3>
                  <p>Start your day with energy and purpose</p>
                </div>
              </div>
            </div>
            
            <div 
              data-scroll
              data-scroll-speed="0.7"
              className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg"
            >
              <div className="h-full w-full relative">
                <Image 
                  src="/yoga-2.png"
                  alt="Evening Meditation Session" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2">Evening Calm</h3>
                  <p>Find peace after a busy day</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional content to make the section feel complete */}
          <div 
            data-scroll 
            data-scroll-speed="0.3"
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our tranquil studio space is designed to help you disconnect from the outside world and focus on your practice.
              With natural light and calming decor, it's the perfect environment for your yoga journey.
            </p>
            <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
              See Class Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div 
        data-scroll-section 
        className="relative bg-amber-700 text-white py-20"
      >
        <div 
          data-scroll 
          data-scroll-speed="0.3"
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Ready to Begin Your Practice?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">Join our community and start your journey toward wellness and mindfulness today.</p>
          <button className="bg-white text-amber-700 hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
            Book Your First Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;