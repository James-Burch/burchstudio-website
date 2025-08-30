import React from "react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  const services = [
    {
      icon: "🚀",
      title: "Custom Website Development",
      description:
        "Bespoke websites built from scratch with your brand, goals, and audience in mind. Optimized for speed, SEO, and conversions.",
      features: [
        "Custom Design",
        "Mobile-First",
        "SEO Optimized",
        "90+ Lighthouse Score",
      ],
      cta: "Get Custom Site",
      link: "/contact",
    },
    {
      icon: "🛍️",
      title: "Premium Templates",
      description:
        "Ready-to-launch website templates designed for specific industries. Get online fast with professional design and functionality.",
      features: [
        "Industry-Specific",
        "Ready to Launch",
        "Includes Onboarding",
        "Lifetime Updates",
      ],
      cta: "Browse Templates",
      link: "/shop",
    },
    {
      icon: "📈",
      title: "SEO & Performance Optimization",
      description:
        "Boost your existing website's search rankings and loading speed. Get more organic traffic and better user experience.",
      features: [
        "Technical SEO",
        "Speed Optimization",
        "Local SEO",
        "Analytics Setup",
      ],
      cta: "Optimize My Site",
      link: "/contact",
    },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white">
            How We Help Your Business Grow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From custom development to ready-made templates, we provide
            everything you need to establish a powerful online presence that
            drives results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-brand-charcoal dark:text-white text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Link
                  to={service.link}
                  className="bg-brand-navy hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-brand-charcoal dark:text-white">
            Our Simple Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold mb-2 text-brand-charcoal dark:text-white">
                Discover
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We learn about your business and goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold mb-2 text-brand-charcoal dark:text-white">
                Design
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Custom mockups tailored to your brand
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold mb-2 text-brand-charcoal dark:text-white">
                Develop
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Fast, responsive development with SEO
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h4 className="font-semibold mb-2 text-brand-charcoal dark:text-white">
                Launch
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Go live and start attracting customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
