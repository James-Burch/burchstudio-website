import React from "react";
import type { Category, PriceRange } from "../../types";

interface ShopFiltersProps {
  categories: Category[];
  priceRanges: PriceRange[];
  selectedCategory: string;
  selectedPriceRange: string;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (priceRange: string) => void;
  onSearchChange: (search: string) => void;
  onClearFilters: () => void;
}

const ShopFilters: React.FC<ShopFiltersProps> = ({
  categories,
  priceRanges,
  selectedCategory,
  selectedPriceRange,
  searchTerm,
  onCategoryChange,
  onPriceRangeChange,
  onSearchChange,
  onClearFilters,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Search Templates
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name or features..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Category Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Price Range
          </label>
          <select
            value={selectedPriceRange}
            onChange={(e) => onPriceRangeChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">All Prices</option>
            {priceRanges.map((range) => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          <button
            onClick={onClearFilters}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;
