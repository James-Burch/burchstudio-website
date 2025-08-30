import React, { useState, useMemo } from "react";
import TemplateCard from "../components/shop/TemplateCard";
import ShopFilters from "../components/shop/ShopFilters";

const mockTemplateData = {
  templates: [
    {
      id: "barber-pro",
      title: "Barber Pro Template",
      category: "barbers",
      price: 450,
      currency: "GBP",
      description:
        "Professional barber shop website with booking system, gallery, and local SEO optimization.",
      features: [
        "Online booking system",
        "Photo gallery",
        "Service pricing display",
        "Local SEO optimized",
        "Mobile-responsive design",
        "Contact forms",
      ],
      demoUrl: "https://demo.burchstudio.com/barber-pro",
      images: ["/images/templates/barber-pro-1.jpg"],
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      included: [
        "Template code/files",
        "Installation support",
        "5 hours free customization",
        "60 days free updates",
        "Domain/hosting setup help",
        "Documentation",
      ],
      timeline: "7 working days",
      stripeProductId: "prod_barber_pro_template",
    },
    {
      id: "fitness-boost",
      title: "Fitness Boost Template",
      category: "fitness",
      price: 500,
      currency: "GBP",
      description:
        "High-converting fitness and personal trainer website with class schedules and client testimonials.",
      features: [
        "Class scheduling",
        "Trainer profiles",
        "Client testimonials",
        "Nutrition blog section",
        "Membership pricing",
        "Contact & booking forms",
      ],
      demoUrl: "https://demo.burchstudio.com/fitness-boost",
      images: ["/images/templates/fitness-boost-1.jpg"],
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      included: [
        "Template code/files",
        "Installation support",
        "5 hours free customization",
        "60 days free updates",
        "Domain/hosting setup help",
        "Documentation",
      ],
      timeline: "7 working days",
      stripeProductId: "prod_fitness_boost_template",
    },
    {
      id: "construction-build",
      title: "Construction Build Template",
      category: "construction",
      price: 400,
      currency: "GBP",
      description:
        "Professional construction company website showcasing projects and services with quote request forms.",
      features: [
        "Project portfolio",
        "Service breakdowns",
        "Quote request forms",
        "Team profiles",
        "Testimonials section",
        "Local area coverage map",
      ],
      demoUrl: "https://demo.burchstudio.com/construction-build",
      images: ["/images/templates/construction-build-1.jpg"],
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      included: [
        "Template code/files",
        "Installation support",
        "5 hours free customization",
        "60 days free updates",
        "Domain/hosting setup help",
        "Documentation",
      ],
      timeline: "7 working days",
      stripeProductId: "prod_construction_build_template",
    },
  ],
};

const Shop: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<
    "low-to-high" | "high-to-low" | ""
  >("");

  const { templates } = mockTemplateData;

  const sortedTemplates = useMemo(() => {
    if (!sortOrder) return templates;

    return [...templates].sort((a, b) => {
      if (sortOrder === "low-to-high") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }, [templates, sortOrder]);

  return (
    <div className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white">
            Premium Website Templates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready-to-launch websites designed for specific industries. Get
            online fast with professional design, 5 hours of customization
            included, and ongoing support.
          </p>
        </div>

        {/* Filters */}
        <ShopFilters
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          resultCount={sortedTemplates.length}
          totalCount={templates.length}
        />

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-brand-charcoal dark:text-white">
            Need Something Custom?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Can't find exactly what you need? We'll build a completely custom
            website tailored to your business.
          </p>
          <a
            href="/contact"
            className="bg-brand-navy text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Request Custom Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
