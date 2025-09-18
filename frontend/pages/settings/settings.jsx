import { useState } from "react"
import "./settings.css"

export default function Settings() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    state: "California",
    city: "Los Angeles"
  })

  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80")
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Read-only user details
  const userDetails = {
    userId: "TM-2024-001",
    memberSince: "January 2024",
    totalPurchases: 47,
    totalSales: 23,
    rating: 4.8,
    verificationStatus: "Verified"
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setProfileImage(imageUrl)
      console.log("Profile image changed:", file)
    }
  }

  const handleSave = () => {
    const dataToSend = {
      ...formData,
      profileImage,
      emailNotifications,
      smsNotifications,
      darkMode
    }
    console.log("Sending data to backend:", dataToSend)
  }

  const handleToggle = (toggleType, value) => {
    switch(toggleType) {
      case 'email':
        setEmailNotifications(value)
        console.log("Email notifications:", value)
        break
      case 'sms':
        setSmsNotifications(value)
        console.log("SMS notifications:", value)
        break
      case 'darkMode':
        setDarkMode(value)
        console.log("Dark mode:", value)
        break
    }
  }

  return (
    <div className="settings-page">
      <div className="page-header">
        <div className="header-content">
          <div className="title-section">
            <h1 className="page-title">Settings</h1>
            <p className="page-subtitle">Manage your account preferences</p>
          </div>
        </div>
      </div>

      <div className="settings-container">
        {/* Profile Image Section */}
        <div className="settings-section">
          <h2 className="section-title">Profile Picture</h2>
          <div className="profile-image-section">
            <div className="current-image">
              <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
            <div className="image-controls">
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
              />
              <label htmlFor="image-upload" className="upload-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="17,8 12,3 7,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Change Photo
              </label>
            </div>
          </div>
        </div>

        {/* Editable Information */}
        <div className="settings-section">
          <h2 className="section-title">Personal Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="form-input"
              />
            </div>
          </div>
        </div>

        {/* Account Details (Read-only) */}
        <div className="settings-section">
          <h2 className="section-title">Account Details</h2>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">User ID</span>
              <span className="detail-value">{userDetails.userId}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Member Since</span>
              <span className="detail-value">{userDetails.memberSince}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Total Purchases</span>
              <span className="detail-value">{userDetails.totalPurchases}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Total Sales</span>
              <span className="detail-value">{userDetails.totalSales}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Rating</span>
              <span className="detail-value">
                <div className="rating-display">
                  <span className="rating-number">{userDetails.rating}</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < Math.floor(userDetails.rating) ? "filled" : ""}`}>★</span>
                    ))}
                  </div>
                </div>
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Verification Status</span>
              <span className="detail-value">
                <span className="verified-badge">{userDetails.verificationStatus}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="settings-section">
          <h2 className="section-title">Notification Preferences</h2>
          <div className="toggles-container">
            <div className="toggle-item">
              <div className="toggle-info">
                <span className="toggle-label">Email Notifications</span>
                <span className="toggle-description">Receive review notifications via email</span>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) => handleToggle('email', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="toggle-item">
              <div className="toggle-info">
                <span className="toggle-label">SMS Notifications</span>
                <span className="toggle-description">Receive review notifications via SMS</span>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={smsNotifications}
                  onChange={(e) => handleToggle('sms', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="toggle-item">
              <div className="toggle-info">
                <span className="toggle-label">Dark Mode</span>
                <span className="toggle-description">Switch to dark theme</span>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(e) => handleToggle('darkMode', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="save-section">
          <button onClick={handleSave} className="save-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="17,21 17,13 7,13 7,21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7,3 7,8 15,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}