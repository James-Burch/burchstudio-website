import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-navy text-white section-padding min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Fast, SEO-Optimized Websites That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              {" "}
              Convert
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            We build lightning-fast, mobile-first websites that rank higher,
            convert better, and help small businesses attract more customers
            online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/contact"
              className="bg-white text-brand-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Get Your Website 🚀
            </Link>

            <Link
              to="/shop"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-navy transform hover:scale-105 transition-all duration-200"
            >
              Browse Templates
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-300">90+ Lighthouse scores guaranteed</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-semibold mb-2">Mobile-First</h3>
              <p className="text-gray-300">Perfect on every device</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold mb-2">SEO Optimized</h3>
              <p className="text-gray-300">Built to rank and convert</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
