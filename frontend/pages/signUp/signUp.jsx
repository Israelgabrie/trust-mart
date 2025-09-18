import { useState } from "react";
import "./SignUp.css";
import Image from "../../public/img/ChatGPT Image Sep 16, 2025, 11_05_42 AM.png"
import { EyeIcon, EyeOffIcon } from "../../component/icons/icons";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    state: "",
    businessType: "",
    profilePicture: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profilePicture: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Console log the form data as requested
    console.log("Form submitted with data:", formData);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    alert("Account created successfully!");
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
    alert("Google signup would be implemented here");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Logo Section */}
        <div className="logo-section">
           <img 
           src="../../public/img/ChatGPT Image Sep 16, 2025, 11_05_42 AM.png"
           width={150}
           />
          <h1 style={{margin:0}} className="signup-title">Join TrustMart</h1>
          <p className="signup-subtitle">Create your account to start buying and selling</p>
        </div>

        {/* Google Signup */}
        <button type="button" className="google-btn" onClick={handleGoogleSignup}>
          <svg className="google-icon" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="divider">
          <span className="divider-text">Or continue with email</span>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Full Name */}
          <div className="input-group">
            <label htmlFor="fullName" className="input-label">
              Full Name / Business Name *
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name or business name"
              className="form-input"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="form-input"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password *
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="form-input"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon/> : <EyeIcon/>}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label htmlFor="confirmPassword" className="input-label">
              Confirm Password *
            </label>
            <div className="password-wrapper">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="form-input"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOffIcon/> : <EyeIcon/>}
              </button>
            </div>
          </div>

          {/* Phone Number */}
          <div className="input-group">
            <label htmlFor="phone" className="input-label">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="form-input"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          {/* City & State Row */}
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="city" className="input-label">City *</label>
              <input
                id="city"
                type="text"
                placeholder="City"
                className="form-input"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="state" className="input-label">State *</label>
              <input
                id="state"
                type="text"
                placeholder="State"
                className="form-input"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Account Type */}
          <div className="input-group">
            <label htmlFor="businessType" className="input-label">Account Type *</label>
            <select
              id="businessType"
              className="form-select"
              value={formData.businessType}
              onChange={(e) => handleInputChange("businessType", e.target.value)}
              required
            >
              <option value="">Select account type</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          {/* Profile Picture */}
          <div className="input-group">
            <label htmlFor="profilePicture" className="input-label">
              Profile Picture / Store Logo (Optional)
            </label>
            <div className="file-upload">
              <input
                id="profilePicture"
                type="file"
                accept="image/*"
                className="file-input"
                onChange={handleFileChange}
              />
              <div className="file-upload-content">
                <span className="file-upload-text">
                  {formData.profilePicture ? formData.profilePicture.name : "Click to upload image"}
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-btn"
            disabled={isLoading || formData.password !== formData.confirmPassword}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <div className="login-link">
          <p>
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
}