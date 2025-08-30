import React from "react";

interface ShopFiltersProps {
  sortOrder: "low-to-high" | "high-to-low" | "";
  onSortChange: (sortOrder: "low-to-high" | "high-to-low" | "") => void;
  resultCount: number;
  totalCount: number;
}

const ShopFilters: React.FC<ShopFiltersProps> = ({
  sortOrder,
  onSortChange,
  resultCount,
  totalCount,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-gray-600 dark:text-gray-400">
          Showing {resultCount} of {totalCount} templates
        </div>

        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Sort by price:
          </label>
          <select
            value={sortOrder}
            onChange={(e) =>
              onSortChange(e.target.value as "low-to-high" | "high-to-low" | "")
            }
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">Default Order</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;
