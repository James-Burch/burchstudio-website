import React from "react";
import Hero from "../components/layout/Hero";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />

      {/* Services Section - Coming next */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8 text-brand-charcoal dark:text-white">
            Why Choose Burch Studio?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-charcoal dark:text-white">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                90+ Lighthouse scores with optimized performance and SEO
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-charcoal dark:text-white">
                Mobile-First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Responsive design that looks perfect on every device
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3 text-brand-charcoal dark:text-white">
                More Leads
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strategic design focused on converting visitors into customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
