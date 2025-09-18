"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Bell,
  ShoppingCart,
  Package,
  TrendingUp,
  Star,
  BarChart3,
  DollarSign,
  CreditCard,
  Award,
  Users,
  Activity,
} from "lucide-react";
import "./dashboard.css";
import { RenderOverview } from "../../component/dashboardComponent/dashBoardOverView";
import { RenderPurchasedSold } from "../../component/dashboardComponent/purchaseSold";
import { RenderOrders } from "../../component/dashboardComponent/orders";
import { RenderWallet } from "../../component/dashboardComponent/wallet";
import { RenderPerformance } from "../../component/dashboardComponent/performace";
import {
  Link,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [notifications, setNotifications] = useState(8)
  const [purchasedSoldTab, setPurchasedSoldTab] = useState("purchased");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location);
    if (location.pathname == "/home/dashboard") {
      navigate("/home/dashboard/overview");
    }
  }, []);

  const userData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@trustmart.com",
    profilePicture: "/user-profile-illustration.png",
    accountType: "Premium Seller",
    walletBalance: 4250.75,
    totalPurchases: 47,
    totalSales: 234,
    rating: 4.9,
    totalEarnings: 18450.5,
    totalSpent: 3200.25,
    activeOrders: { pending: 12, delivered: 156, canceled: 3 },
    reviewsCount: 189,
  };

  const recentActivity = [
    {
      id: 1,
      productImage: "/modern-smartphone.png",
      productName: "iPhone 15 Pro Max",
      buyerSeller: "Michael Chen",
      date: "2024-01-15",
      amount: 1199.99,
      status: "Completed",
      type: "sale",
    },
    {
      id: 2,
      productImage: "/modern-tablet-display.png",
      productName: "iPad Air M2",
      buyerSeller: "Emma Wilson",
      date: "2024-01-14",
      amount: 749.99,
      status: "Pending",
      type: "purchase",
    },
    {
      id: 3,
      productImage: "/vintage-camera-still-life.png",
      productName: "Canon EOS R6 Mark II",
      buyerSeller: "David Rodriguez",
      date: "2024-01-13",
      amount: 2499.99,
      status: "Completed",
      type: "sale",
    },
    {
      id: 4,
      productImage: "/abstract-geometric-shapes.png",
      productName: "MacBook Pro 16-inch",
      buyerSeller: "Lisa Thompson",
      date: "2024-01-12",
      amount: 2799.99,
      status: "Refunded",
      type: "purchase",
    },
  ];

  const purchasedItems = [
    {
      id: 1,
      productImage: "/modern-tablet-display.png",
      productName: "iPad Air M2 256GB",
      sellerName: "TechStore Pro",
      datePurchased: "2024-01-10",
      price: 749.99,
      status: "Delivered",
    },
    {
      id: 2,
      productImage: "/abstract-geometric-shapes.png",
      productName: "AirPods Pro 2nd Gen",
      sellerName: "AudioWorld",
      datePurchased: "2024-01-08",
      price: 249.99,
      status: "Delivered",
    },
    {
      id: 3,
      productImage: "/modern-smartphone.png",
      productName: "Samsung Galaxy S24 Ultra",
      sellerName: "MobileHub",
      datePurchased: "2024-01-05",
      price: 1299.99,
      status: "In Transit",
    },
  ];

  const soldItems = [
    {
      id: 1,
      productImage: "/vintage-camera-still-life.png",
      productName: "Canon EOS R6 Mark II",
      buyerName: "Photography Studio Inc",
      dateSold: "2024-01-13",
      price: 2499.99,
      status: "Completed",
    },
    {
      id: 2,
      productImage: "/modern-smartphone.png",
      productName: "iPhone 15 Pro Max 512GB",
      buyerName: "John Martinez",
      dateSold: "2024-01-11",
      price: 1399.99,
      status: "Shipped",
    },
    {
      id: 3,
      productImage: "/abstract-geometric-shapes.png",
      productName: "MacBook Air M3",
      buyerName: "Creative Agency LLC",
      dateSold: "2024-01-09",
      price: 1299.99,
      status: "Completed",
    },
  ];

  const orders = [
    {
      orderId: "ORD-2024-001",
      productName: "iPhone 15 Pro Max",
      buyerSeller: "Michael Chen",
      date: "2024-01-15",
      amount: 1199.99,
      status: "Delivered",
    },
    {
      orderId: "ORD-2024-002",
      productName: "Canon EOS R6 Mark II",
      buyerSeller: "Photography Studio",
      date: "2024-01-13",
      amount: 2499.99,
      status: "Shipped",
    },
    {
      orderId: "ORD-2024-003",
      productName: "MacBook Pro 16-inch",
      buyerSeller: "Creative Agency",
      date: "2024-01-12",
      amount: 2799.99,
      status: "Pending",
    },
    {
      orderId: "ORD-2024-004",
      productName: "iPad Air M2",
      buyerSeller: "Emma Wilson",
      date: "2024-01-10",
      amount: 749.99,
      status: "Canceled",
    },
  ];

  return (
    <div className="user-dashboard">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <div className="user-welcome">
            <img
              src={userData.profilePicture || "/placeholder.svg"}
              alt="Profile"
              className="header-avatar"
            />
            <div>
              <h1>Welcome back, {userData.name}!</h1>
              <p>{userData.accountType}</p>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="search-container">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search products, orders, customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="dashboard-nav">
        <Link
          to="/home/dashboard/overview"
          className={`nav-tab ${
            location.pathname.includes("overview") ? "active" : ""
          }`}
        >
          <BarChart3 size={18} />
          Overview
        </Link>

        <Link
          to="/home/dashboard/purchased-sold"
          className={`nav-tab ${
            location.pathname.includes("purchased-sold") ? "active" : ""
          }`}
        >
          <Package size={18} />
          My Items
        </Link>

        <Link
          to="/home/dashboard/orders"
          className={`nav-tab ${
            location.pathname.includes("orders") ? "active" : ""
          }`}
        >
          <ShoppingCart size={18} />
          Orders
        </Link>

        <Link
          to="/home/dashboard/wallet"
          className={`nav-tab ${
            location.pathname.includes("wallet") ? "active" : ""
          }`}
        >
          <CreditCard size={18} />
          Wallet
        </Link>

        <Link
          to="/home/dashboard/performance"
          className={`nav-tab ${
            location.pathname.includes("performance") ? "active" : ""
          }`}
        >
          <Award size={18} />
          Performance
        </Link>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <Routes>
          <Route
            path="overview" // ✅ relative to /home/dashboard
            element={
              <RenderOverview
                userData={userData}
                recentActivity={recentActivity}
              />
            }
          />
          <Route
            path="purchased-sold" // ✅ relative
            element={
              <RenderPurchasedSold
                purchasedSoldTab={purchasedSoldTab}
                setPurchasedSoldTab={setPurchasedSoldTab}
                purchasedItems={purchasedItems}
                soldItems={soldItems}
              />
            }
          />
          <Route path="orders" element={<RenderOrders orders={orders} />} />
          <Route path="wallet" element={<RenderWallet userData={userData} />} />
          <Route
            path="performance"
            element={<RenderPerformance userData={userData} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
