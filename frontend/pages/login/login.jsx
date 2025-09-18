import { useState } from "react";
import "./Login.css";
import { EmailIcon, EyeIcon, EyeOffIcon } from "../../component/icons/icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Login Data:", formData);
    setIsLoading(false);
    alert("Login successful!");
  };

  const handleGoogleLogin = () => {
    console.log("Google login attempted");
    alert("Google login would be implemented here");
  };

  return (
   

    <div className="login-container">
      <div className="login-card">
        {/* Logo Section */}
        <div className="logo-container">
          <img src="../../public/img/ChatGPT Image Sep 16, 2025, 11_05_42 AM.png" alt="TrustMart Logo" className="logo" />
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your TrustMart account</p>
        </div>

        {/* Google Login */}
        <button type="button" className="google-button" onClick={handleGoogleLogin}>
          <svg className="w-5 h-5" viewBox="0 0 24 24">
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

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label" style={{textAlign:"left"}}>
              Email Address
            </label>
            <div className="input-container">
              <span className="input-icon"><EmailIcon/></span>
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
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password" className="form-label" style={{textAlign:"left"}}>
              Password
            </label>
            <div className="input-container" style={{cursor:"pointer"}} onClick={() => setShowPassword(!showPassword)}>
                <div
                type="button"
                className="input-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon/> : <EyeIcon/>}
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="form-input password-input"
                value={formData.password}
                style={{paddingLeft:55}}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
              />
              
            </div>
          </div>

          {/* Forgot Password */}
          <div className="forgot-password">
            <a href="/forgot-password">Forgot your password?</a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Signup Link */}
        <div className="signup-link">
          <p>
            Don't have an account? <a href="/signup">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}