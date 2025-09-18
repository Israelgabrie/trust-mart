import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import SignUp from "../pages/signUp/signUp";
import Login from "../pages/login/login.jsx";
import EmailVerification from "../pages/emailOtp/emailOtp";
import Home from "../pages/home/home";

import "./App.css";
import "../styles/global.css";
import Dashboard from "../pages/dashboard/dashboard";
import BuyItems from "../pages/buyItems/buyItems";
import { RenderOverview } from "../component/dashboardComponent/dashBoardOverView";
import { RenderPurchasedSold } from "../component/dashboardComponent/purchaseSold";
import { RenderOrders } from "../component/dashboardComponent/orders";
import { RenderWallet } from "../component/dashboardComponent/wallet";
import { RenderPerformance } from "../component/dashboardComponent/performace";
import SellItem from "../pages/sellItem/sellItems";
import Orders from "../pages/orders/orders";
import Settings from "../pages/settings/settings";

// Simple 404 fallback component
const NotFound = () => (
  <h2 style={{ padding: "2rem" }}>404 - Page Not Found</h2>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "verify-email",
    element: <EmailVerification />,
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true, // ✅ default for /home/dashboard
            element: <RenderOverview />,
          },
          {
            path: "overview",
            element: <RenderOverview />,
          },
          {
            path: "purchased-sold",
            element: <RenderPurchasedSold />,
          },
          {
            path: "orders",
            element: <RenderOrders />,
          },
          {
            path: "wallet",
            element: <RenderWallet />,
          },
          {
            path: "performance",
            element: <RenderPerformance />,
          },
          {
            path: "*", // ✅ catch-all inside dashboard
            element: <NotFound />,
          },
        ],
      },
      {
        path: "buy",
        element: <BuyItems />,
      },
      {
        path: "sellitems",
        element: <SellItem />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
       {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "*", // ✅ catch-all for /home/*
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*", // ✅ global fallback for unknown routes
    element: <NotFound />,
  },
]);

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;
