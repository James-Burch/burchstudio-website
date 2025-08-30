import React from "react";
import { useParams } from "react-router-dom";

const TemplatePage: React.FC = () => {
  const { templateId } = useParams();

  return (
    <div className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-brand-charcoal dark:text-white">
            Template Details
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Template ID: {templateId}
          </p>

          {/* This will be expanded with full template details, Stripe checkout, etc. */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-brand-charcoal dark:text-white">
              Template Page Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Full template details, gallery, Stripe checkout, and onboarding
              flow will be added here.
            </p>
            <a
              href="/shop"
              className="bg-brand-navy text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Back to Shop
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
