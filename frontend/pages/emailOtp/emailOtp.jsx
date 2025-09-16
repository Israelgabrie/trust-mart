import React from "react"
import "./emailOtp.css"

import { useState, useEffect, useRef } from "react"

export default function EmailVerification() {
  const [otp, setOtp] = useState(["", "", "", "", ""])
  const [timer, setTimer] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRefs = useRef([])

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setCanResend(true)
    }
  }, [timer])

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (value.length > 1) return // Only allow single digit

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto focus next input
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus()
    }

    // Auto submit when all 5 digits are entered
    if (newOtp.every((digit) => digit !== "") && newOtp.join("").length === 5) {
      handleSubmit(newOtp.join(""))
    }
  }

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 5)
    const newOtp = pastedData.split("").concat(["", "", "", "", ""]).slice(0, 5)
    setOtp(newOtp)

    if (newOtp.every((digit) => digit !== "")) {
      handleSubmit(newOtp.join(""))
    }
  }

  // Submit OTP
  const handleSubmit = async (otpCode) => {
    setIsSubmitting(true)
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("OTP submitted:", otpCode)
      setIsLoading(false)
      setIsSubmitting(false)
      // Handle success/error here
    }, 2000)
  }

  // Resend OTP
  const handleResend = () => {
    setTimer(60)
    setCanResend(false)
    setOtp(["", "", "", "", ""])
    setIsLoading(true)

    // Simulate resend API call
    setTimeout(() => {
      setIsLoading(false)
      inputRefs.current[0]?.focus()
    }, 1000)
  }

  // Format timer display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="verification-container">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
          <p className="loading-text">{isSubmitting ? "Verifying your code..." : "Sending new code..."}</p>
        </div>
      )}

      <div className="verification-card">
        {/* Logo */}
        <div className="logo-container">
          <img src="../../public/img/ChatGPT Image Sep 16, 2025, 11_05_42 AM.png"
          style={{height:100}}
          alt="TrustMart" className="logo" />
        </div>

        {/* Header */}
        <div className="header-section">
          <h1 className="title">Verify Your Email</h1>
          <p className="subtitle">We've sent a 5-digit verification code to your email address</p>
        </div>

        {/* Expiry Info */}
        <div className="expiry-info">
          <div className="expiry-badge">
            <span className="clock-icon">⏰</span>
            <span>Code expires in 1 hour</span>
          </div>
        </div>

        {/* OTP Input */}
        <div className="otp-section">
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`otp-input ${digit ? "filled" : ""} ${isSubmitting ? "submitting" : ""}`}
                disabled={isLoading}
              />
            ))}
          </div>
        </div>

        {/* Timer and Resend */}
        <div className="resend-section">
          {!canResend ? (
            <p className="timer-text">
              Request new code in <span className="timer">{formatTime(timer)}</span>
            </p>
          ) : (
            <button onClick={handleResend} className="resend-btn" disabled={isLoading}>
              Send New Code
            </button>
          )}
        </div>

        {/* Help Text */}
        <div className="help-section">
          <p className="help-text">Didn't receive the code? Check your spam folder or try again</p>
        </div>
      </div>
    </div>
  )
}
