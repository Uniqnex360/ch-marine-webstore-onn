import React from 'react';
import { Link } from 'react-router-dom';
import { products, categoryStructure } from '../data/products';
import { Package, ArrowRight } from 'lucide-react';

const Categories: React.FC = () => {
  const categories = Object.keys(categoryStructure);
  const categoryStats = categories.map(category => ({
    name: category,
    count: products.filter(p => p.category === category).length,
    image: products.find(p => p.category === category)?.image || '',
    subcategories: categoryStructure[category].subcategories
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Categories</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive range of marine equipment and parts, organized by category for easy browsing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryStats.map((category) => (
          <Link
            key={category.name}
            to={`/?category=${encodeURIComponent(category.name)}`}
            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Package className="w-12 h-12 text-white opacity-80" />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <p className="text-gray-600">
                {category.count} product{category.count !== 1 ? 's' : ''} available
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {category.subcategories.slice(0, 3).map((subcat, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {subcat}
                  </span>
                ))}
                {category.subcategories.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{category.subcategories.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-gray-600 mb-6">
          Our team of marine experts is here to help you find the right equipment for your vessel.
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-flex items-center gap-2"
        >
          Contact Our Experts
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Categories;