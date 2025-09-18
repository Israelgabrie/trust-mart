import React from "react";

export const DashboardIcon = ({ size = 20, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z"
    />
  </svg>
);


export const BuyIcon = ({ size = 20, color  }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M6 6h15l-1.5 9h-13z" />
    <circle cx="9" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
  </svg>
);

export const SellIcon = ({ size = 20, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 7l10 10m0 0l-4 4-10-10V7h10l4-4 4 4-4 4z"
    />
  </svg>
);

export const OrdersIcon = ({ size = 20, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 6h11M9 12h11M9 18h11M5 6h.01M5 12h.01M5 18h.01"
    />
  </svg>
);



export const SettingsIcon = ({ size = 20, color  }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm7.4-3.5a5.9 5.9 0 0 0-.1-1.1l2.1-1.6-2-3.5-2.5 1a6.5 6.5 0 0 0-1.9-1.1L14.5 2h-5l-.5 2.7a6.5 6.5 0 0 0-1.9 1.1l-2.5-1-2 3.5 2.1 1.6a5.9 5.9 0 0 0-.1 1.1c0 .4 0 .7.1 1.1l-2.1 1.6 2 3.5 2.5-1c.6.5 1.2.8 1.9 1.1l.5 2.7h5l.5-2.7c.7-.3 1.3-.6 1.9-1.1l2.5 1 2-3.5-2.1-1.6c.1-.4.1-.7.1-1.1z" />
  </svg>
);


// Eye (Show Password)
export const EyeIcon = ({ size = 20, color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Eye Off (Hide Password)
export const EyeOffIcon = ({ size = 20, color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <path d="M17.94 17.94A10.97 10.97 0 0 1 12 20c-7 0-11-8-11-8a21.77 21.77 0 0 1 5.06-6.94M9.9 4.24A10.97 10.97 0 0 1 12 4c7 0 11 8 11 8a21.77 21.77 0 0 1-2.6 3.7M15 12a3 3 0 0 1-3 3m0-6a3 3 0 0 1 3 3m-6 0a3 3 0 0 1 3-3" />
    <line x1="1" y1="1" x2="23" y2="23" stroke={color} strokeWidth="2" />
  </svg>
);

// Email Icon
export const EmailIcon = ({ size = 20, color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
    <polyline points="3,7 12,13 21,7" />
  </svg>
);

// Search / Magnifying Glass
export const SearchIcon = ({ size = 20, color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="16.65" y1="16.65" x2="21" y2="21" />
  </svg>
);


// Logout / Exit Icon
export const LogoutIcon = ({ size = 20, color = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
  </svg>
);
export const NotificationBell = ({ size = 30, color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 26"   // 🔑 increased height in viewBox
    stroke={color}
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19h5l-1.405-1.405A2.032 2.032 0 0118 16.158V12a6 6 0 10-12 0v4.159c0 .538-.214 1.055-.595 1.436L4 19h5m6 0a3 3 0 11-6 0h6z"
    />
  </svg>
);
