import React from "react";
import { Link } from "react-router-dom";
import type { Template } from "../../types";

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
      {/* Template Image */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        {template.images[0] ? (
          <img
            src={template.images[0]}
            alt={template.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <span className="text-4xl">🖼️</span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-brand-navy text-white px-3 py-1 rounded-full text-sm font-semibold">
          £{template.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-brand-navy dark:text-blue-400 font-medium capitalize">
            {template.category.replace("-", " ")}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {template.timeline}
          </span>
        </div>

        <h3 className="text-xl font-bold text-brand-charcoal dark:text-white mb-2">
          {template.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {template.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {template.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {template.features.length > 3 && (
              <span className="text-xs text-gray-500">
                +{template.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <a
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center py-2 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            View Demo
          </a>

          <Link
            to={`/shop/${template.id}`}
            className="flex-1 bg-brand-navy text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
