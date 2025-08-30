import React from "react";
import Hero from "../components/layout/Hero";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />

      {/* Call to Action Section - FIXED ALIGNMENT */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Boost Your Online Presence?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join hundreds of businesses that have transformed their online
              presence with Burch Studio. Fast development, proven results,
              ongoing support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-brand-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get Started Today
              </Link>

              <Link
                to="/shop"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-navy transform hover:scale-105 transition-all duration-200"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
