import React from "react";
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

  export const RenderWallet = ({userData}) => (
    <div className="wallet-section">
      <div className="section-header">
        <h2>Wallet & Balance</h2>
        <button className="btn-primary">
          <CreditCard size={16} />
          Withdraw Funds
        </button>
      </div>

      <div className="wallet-grid">
        <div className="wallet-card balance">
          <div className="wallet-icon">
            <DollarSign size={32} />
          </div>
          <div className="wallet-content">
            <h3>${userData.walletBalance.toLocaleString()}</h3>
            <p>Current Balance</p>
          </div>
        </div>
        <div className="wallet-card earnings">
          <div className="wallet-icon">
            <TrendingUp size={32} />
          </div>
          <div className="wallet-content">
            <h3>${userData.totalEarnings.toLocaleString()}</h3>
            <p>Total Earnings</p>
          </div>
        </div>
        <div className="wallet-card spent">
          <div className="wallet-icon">
            <ShoppingCart size={32} />
          </div>
          <div className="wallet-content">
            <h3>${userData.totalSpent.toLocaleString()}</h3>
            <p>Total Spent</p>
          </div>
        </div>
      </div>

      <div className="withdrawal-options">
        <h3>Withdrawal Options</h3>
        <div className="withdrawal-methods">
          <button className="withdrawal-btn">
            <CreditCard size={20} />
            Bank Transfer
          </button>
          <button className="withdrawal-btn">
            <DollarSign size={20} />
            PayPal
          </button>
          <button className="withdrawal-btn">
            <Package size={20} />
            Crypto Wallet
          </button>
        </div>
      </div>
    </div>
  );
