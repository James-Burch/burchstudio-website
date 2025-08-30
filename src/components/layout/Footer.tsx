import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal dark:bg-gray-900 text-white">
      <div className="container section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-navy to-brand-green rounded-lg"></div>
              <span className="text-xl font-bold">Burch Studio</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Building fast, SEO-optimized websites that help small businesses
              attract more customers and increase their online presence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Template Shop
              </Link>
              <Link
                to="/projects"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                to="/faqs-costs"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                FAQs & Pricing
              </Link>
              <Link
                to="/portal"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Client Portal
              </Link>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Burch Studio. All rights reserved. Built with
            ⚡ and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
