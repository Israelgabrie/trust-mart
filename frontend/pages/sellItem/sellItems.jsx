import { useState } from "react"
import "./sellItems.css"

export default function SellItem() {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    condition: "",
    category: "",
    customCategory: "",
    description: "",
    images: [],
  })

  const [showCustomCategory, setShowCustomCategory] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const categories = [
    "Electronics",
    "Fashion & Clothing",
    "Home & Garden",
    "Sports & Outdoors",
    "Books & Media",
    "Toys & Games",
    "Health & Beauty",
    "Automotive",
    "Other",
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (field === "category") {
      setShowCustomCategory(value === "Other")
      if (value !== "Other") {
        setFormData((prev) => ({ ...prev, customCategory: "" }))
      }
    }
  }

  const handleImageUpload = (files) => {
    const newImages = Array.from(files).slice(0, 5 - formData.images.length)
    const imageUrls = newImages.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      name: file.name,
    }))

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...imageUrls],
    }))
  }

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Sell Item Data:", formData)
    alert("Item listed successfully!")
  }

  return (
    <div className="sell-item-container" style={{marginTop:10,marginBottom:30}}>
      <div className="sell-item-header">
        <h1>List Your Item</h1>
        <p>Fill in the details below to list your item for sale</p>
      </div>

      <form onSubmit={handleSubmit} className="sell-item-form">
        {/* Product Images */}
        <div className="form-section">
          <label className="section-label">Product Images (Max 5)</label>
          <div
            className={`image-upload-area ${dragActive ? "drag-active" : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files)}
              className="image-input"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="upload-label">
              <div className="upload-icon">📷</div>
              <div className="upload-text">
                <span>Click to upload or drag and drop</span>
                <small>PNG, JPG, GIF up to 10MB each</small>
              </div>
            </label>
          </div>

          {formData.images.length > 0 && (
            <div className="image-preview-grid">
              {formData.images.map((image, index) => (
                <div key={index} className="image-preview">
                  <img src={image.url || "/placeholder.svg"} alt={`Preview ${index + 1}`} />
                  <button type="button" className="remove-image" onClick={() => removeImage(index)}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="form-section">
          <label className="section-label">Product Details</label>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="productName">Product Name *</label>
              <input
                type="text"
                id="productName"
                value={formData.productName}
                onChange={(e) => handleInputChange("productName", e.target.value)}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price ($) *</label>
              <input
                type="number"
                id="price"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="condition">Condition *</label>
              <select
                id="condition"
                value={formData.condition}
                onChange={(e) => handleInputChange("condition", e.target.value)}
                required
              >
                <option value="">Select condition</option>
                <option value="new">New</option>
                <option value="like-new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                required
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {showCustomCategory && (
            <div className="form-group">
              <label htmlFor="customCategory">Custom Category *</label>
              <input
                type="text"
                id="customCategory"
                value={formData.customCategory}
                onChange={(e) => handleInputChange("customCategory", e.target.value)}
                placeholder="Enter your custom category"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe your item (optional)"
              rows="4"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            List Item
          </button>
        </div>
      </form>
    </div>
  )
}
