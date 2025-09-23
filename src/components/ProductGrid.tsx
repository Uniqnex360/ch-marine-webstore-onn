import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/Product';
import { categoryStructure, brands, priceRanges } from '../data/products';

interface ProductGridProps {
  products: Product[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedBrand,
  setSelectedBrand,
  searchQuery,
  setSearchQuery
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const { addToCart } = useCart();

  const allProducts = products; // Use all products for category/brand extraction
  const categories = Object.keys(categoryStructure);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    setPriceRange([0, 10000]);
  };

  const toggleCategoryExpansion = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceRangeSelect = (range: { min: number; max: number }) => {
    setPriceRange([range.min, range.max]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>

            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Category Filter */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Categories</h4>
                <div className="space-y-1">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="text-blue-600 mr-3"
                    />
                    <span className="text-gray-700">All Categories</span>
                  </label>
                  {categories.map(category => {
                    const isExpanded = expandedCategories.includes(category);
                    const productCount = allProducts.filter(p => p.category === category).length;
                    
                    return (
                      <div key={category} className="border-l-2 border-gray-100 pl-2">
                        <div className="flex items-center justify-between">
                          <label className="flex items-center flex-1 cursor-pointer">
                            <input
                              type="radio"
                              name="category"
                              checked={selectedCategory === category}
                              onChange={() => setSelectedCategory(category)}
                              className="text-blue-600 mr-3"
                            />
                            <span className="text-gray-700 font-medium">{category}</span>
                            <span className="text-gray-500 text-sm ml-2">({productCount})</span>
                          </label>
                          <button
                            onClick={() => toggleCategoryExpansion(category)}
                            className="p-1 text-gray-400 hover:text-gray-600"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                        {isExpanded && categoryStructure[category] && (
                          <div className="ml-6 mt-2 space-y-1">
                            {categoryStructure[category].subcategories.map(subcat => (
                              <div key={subcat} className="text-sm text-gray-600 py-1">
                                • {subcat}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Brands</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === ''}
                      onChange={() => setSelectedBrand('')}
                      className="text-blue-600 mr-3"
                    />
                    <span className="text-gray-700">All Brands</span>
                  </label>
                  {brands.map(brand => {
                    const productCount = allProducts.filter(p => p.brand === brand).length;
                    return (
                      <label key={brand} className="flex items-center">
                        <input
                          type="radio"
                          name="brand"
                          checked={selectedBrand === brand}
                          onChange={() => setSelectedBrand(brand)}
                          className="text-blue-600 mr-3"
                        />
                        <span className="text-gray-700">{brand}</span>
                        <span className="text-gray-500 text-sm ml-2">({productCount})</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <label key={index} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={priceRange[0] === range.min && priceRange[1] === range.max}
                        onChange={() => handlePriceRangeSelect(range)}
                        className="text-blue-600 mr-3"
                      />
                      <span className="text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <div className="text-sm text-gray-600 mb-2">Custom Range:</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">$</span>
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
                    />
                    <span className="text-sm">-</span>
                    <span className="text-sm">$</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                      className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>

              {/* In Stock Filter */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Availability</h4>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="text-blue-600 mr-3"
                  />
                  <span className="text-gray-700">In Stock Only</span>
                </label>
              </div>

              <button
                onClick={clearFilters}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <p className="text-gray-600">
              Showing {sortedProducts.length} of {allProducts.length} products
              {selectedCategory && <span className="font-medium"> in {selectedCategory}</span>}
              {selectedBrand && <span className="font-medium"> from {selectedBrand}</span>}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="brand">Brand A-Z</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      {product.inStock ? (
                        <div className="bg-green-500 text-white px-2 py-1 text-xs rounded font-medium">
                          In Stock
                        </div>
                      ) : (
                        <div className="bg-red-500 text-white px-2 py-1 text-xs rounded font-medium">
                          Out of Stock
                        </div>
                      )}
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="bg-blue-600 text-white px-2 py-1 text-xs rounded font-medium">
                        {product.category}
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{product.brand}</span>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-gray-500 mb-2">
                    SKU: {product.sku}
                  </p>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-2 rounded-md transition-colors flex items-center gap-1"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span className="hidden sm:inline">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <ShoppingCart className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters to see more results.</p>
              <button
                onClick={clearFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;