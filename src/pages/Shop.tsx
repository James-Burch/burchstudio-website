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
  categories: [
    {
      id: "barbers",
      name: "Barbers",
      description: "Professional barber shop websites",
    },
    {
      id: "fitness",
      name: "Fitness & Gyms",
      description: "Personal trainers and gym websites",
    },
    {
      id: "construction",
      name: "Construction",
      description: "Construction and trade businesses",
    },
    {
      id: "new-business",
      name: "New Businesses",
      description: "Starting your first business",
    },
    {
      id: "mortgage",
      name: "Mortgage Advisors",
      description: "Financial services websites",
    },
    {
      id: "lead-generation",
      name: "Lead Generation",
      description: "High-converting lead capture sites",
    },
    {
      id: "car-detailing",
      name: "Car Detailing",
      description: "Auto detailing and car care",
    },
  ],
  priceRanges: [
    { id: "under-400", label: "Under £400", min: 0, max: 399 },
    { id: "400-500", label: "£400 - £500", min: 400, max: 500 },
    { id: "500-600", label: "£500 - £600", min: 500, max: 600 },
  ],
};

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { templates, categories, priceRanges } = mockTemplateData;

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      // Category filter
      if (selectedCategory && template.category !== selectedCategory) {
        return false;
      }

      // Price filter
      if (selectedPriceRange) {
        const range = priceRanges.find((r) => r.id === selectedPriceRange);
        if (
          range &&
          (template.price < range.min || template.price > range.max)
        ) {
          return false;
        }
      }

      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          template.title.toLowerCase().includes(searchLower) ||
          template.description.toLowerCase().includes(searchLower) ||
          template.features.some((feature) =>
            feature.toLowerCase().includes(searchLower)
          )
        );
      }

      return true;
    });
  }, [
    templates,
    selectedCategory,
    selectedPriceRange,
    searchTerm,
    priceRanges,
  ]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedPriceRange("");
    setSearchTerm("");
  };

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
          categories={categories}
          priceRanges={priceRanges}
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
          searchTerm={searchTerm}
          onCategoryChange={setSelectedCategory}
          onPriceRangeChange={setSelectedPriceRange}
          onSearchChange={setSearchTerm}
          onClearFilters={clearFilters}
        />

        {/* Results Count */}
        <div className="mb-6 text-gray-600 dark:text-gray-400">
          Showing {filteredTemplates.length} of {templates.length} templates
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-brand-charcoal dark:text-white">
              No templates found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={clearFilters}
              className="bg-brand-navy text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

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
