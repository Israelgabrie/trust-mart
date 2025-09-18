"use client"

import { useState } from "react"
import "./BuyItems.css"
import { SearchIcon } from "../../component/icons/icons"

export default function BuyItems() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")
  const [condition, setCondition] = useState("all")

  // Template product data
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1696446672323-0ef98a329565?w=600&auto=format&fit=crop&q=80",
      category: "electronics",
      rating: 4.5,
      reviews: 234,
      discount: 31,
      inStock: true,
      condition: "new",
    },
    {
      id: 2,
      name: "Premium Cotton T-Shirt",
      price: 24.99,
      originalPrice: 34.99,
      image: "/premium-cotton-t-shirt.png",
      category: "clothing",
      rating: 4.3,
      reviews: 156,
      discount: 29,
      inStock: true,
      condition: "used",
    },
    {
      id: 3,
      name: "Smart Home Security Camera",
      price: 149.99,
      originalPrice: 199.99,
      image: "/smart-security-camera.jpg",
      category: "electronics",
      rating: 4.7,
      reviews: 89,
      discount: 25,
      inStock: true,
      condition: "refurbished",
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      price: 299.99,
      originalPrice: 399.99,
      image: "/ergonomic-office-chair.png",
      category: "furniture",
      rating: 4.6,
      reviews: 67,
      discount: 25,
      inStock: false,
      condition: "new",
    },
    {
      id: 5,
      name: "Stainless Steel Water Bottle",
      price: 19.99,
      originalPrice: 29.99,
      image: "/stainless-steel-bottle.png",
      category: "sports",
      rating: 4.4,
      reviews: 312,
      discount: 33,
      inStock: true,
      condition: "used",
    },
    {
      id: 6,
      name: "LED Desk Lamp",
      price: 45.99,
      originalPrice: 65.99,
      image: "/led-desk-lamp.png",
      category: "home",
      rating: 4.2,
      reviews: 98,
      discount: 30,
      inStock: true,
      condition: "refurbished",
    },
    {
      id: 7,
      name: "Wireless Gaming Mouse",
      price: 79.99,
      originalPrice: 99.99,
      image: "/wireless-gaming-mouse.png",
      category: "electronics",
      rating: 4.8,
      reviews: 445,
      discount: 20,
      inStock: true,
      condition: "new",
    },
    {
      id: 8,
      name: "Yoga Mat Premium",
      price: 39.99,
      originalPrice: 59.99,
      image: "/premium-yoga-mat.png",
      category: "sports",
      rating: 4.5,
      reviews: 178,
      discount: 33,
      inStock: true,
      condition: "used",
    },
  ]

  const categories = [
    { id: "all", name: "All Categories", icon: "🏪" },
    { id: "electronics", name: "Electronics", icon: "📱" },
    { id: "clothing", name: "Clothing", icon: "👕" },
    { id: "home", name: "Home & Garden", icon: "🏠" },
    { id: "sports", name: "Sports", icon: "⚽" },
    { id: "furniture", name: "Furniture", icon: "🪑" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCondition = condition === "all" || product.condition === condition
    return matchesSearch && matchesCategory && matchesPrice && matchesCondition
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  const addToCart = (product) => {
    console.log("Added to cart:", product)
    // Add cart functionality here
  }

  const addToWishlist = (product) => {
    console.log("Added to wishlist:", product)
    // Add wishlist functionality here
  }

  return (
    <div className="buy-page">
      <div className="page-header">
        <div className="header-content">
          <div className="title-section">
            <h1 className="page-title">Buy Items</h1>
            <p className="page-subtitle">Browse listings from sellers</p>
          </div>
          <div className="sort-section">
            <label htmlFor="sort-select">Sort by:</label>
            <select id="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
           <SearchIcon/>
          </button>
        </div>
      </div>

      <div className="filters-row">
        <div className="filter-item">
          <label htmlFor="category-select">Category:</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-dropdown"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="condition-select">Condition:</label>
          <select
            id="condition-select"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="filter-dropdown"
          >
            <option value="all">All Conditions</option>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="refurbished">Refurbished</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Price Range:</label>
          <div className="price-range-container">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number.parseInt(e.target.value)])}
              className="price-slider"
            />
            <span className="price-display">$0 - ${priceRange[1]}</span>
          </div>
        </div>

        <div className="filter-item">
          <label>View:</label>
          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Grid View"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
                <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <button
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              title="List View"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
                <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
                <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" strokeWidth="2" />
                <line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="products-header">
          <div className="products-count">{sortedProducts.length} products found</div>
        </div>

        <div className={`products-grid ${viewMode}`}>
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
                {product.discount > 0 && <div className="discount-badge">-{product.discount}%</div>}
                {!product.inStock && <div className="out-of-stock-overlay">Out of Stock</div>}
                <button className="wishlist-btn" onClick={() => addToWishlist(product)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>

                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < Math.floor(product.rating) ? "filled" : ""}`}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rating-text">({product.reviews})</span>
                </div>

                <div className="product-price">
                  <span className="current-price">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="original-price">${product.originalPrice}</span>
                  )}
                </div>

                <button
                  className={`add-to-cart-btn ${!product.inStock ? "disabled" : ""}`}
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="no-products">
            <div className="no-products-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
