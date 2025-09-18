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

  export const RenderOverview = ({userData,recentActivity}) => (
    <div className="dashboard-overview">
      {/* Stats Summary Cards */}
      <div className="stats-grid">
        <div className="stat-card purchases">
          <div className="stat-icon">
            <ShoppingCart size={28} />
          </div>
          <div className="stat-content">
            <h3>{userData.totalPurchases}</h3>
            <p>Total Purchases</p>
            <span className="stat-change positive">+12% this month</span>
          </div>
        </div>
        <div className="stat-card sales">
          <div className="stat-icon">
            <Package size={28} />
          </div>
          <div className="stat-content">
            <h3>{userData.totalSales}</h3>
            <p>Total Sales</p>
            <span className="stat-change positive">+18% this month</span>
          </div>
        </div>
        <div className="stat-card wallet">
          <div className="stat-icon">
            <DollarSign size={28} />
          </div>
          <div className="stat-content">
            <h3>${userData.walletBalance.toLocaleString()}</h3>
            <p>Wallet Balance</p>
            <span className="stat-change positive">+5.2% this week</span>
          </div>
        </div>
        <div className="stat-card rating">
          <div className="stat-icon">
            <Star size={28} />
          </div>
          <div className="stat-content">
            <h3>{userData.rating}</h3>
            <p>Rating ({userData.reviewsCount} reviews)</p>
            <span className="stat-change positive">+0.1 this month</span>
          </div>
        </div>
        <div className="stat-card orders">
          <div className="stat-icon">
            <Activity size={28} />
          </div>
          <div className="stat-content">
            <h3>{userData.activeOrders.pending}</h3>
            <p>Active Orders</p>
            <span className="stat-details">
              {userData.activeOrders.delivered} delivered,{" "}
              {userData.activeOrders.canceled} canceled
            </span>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="recent-activity-section">
        <h2>Recent Activity</h2>
        <div className="activity-table">
          <div className="table-header">
            <div>Product</div>
            <div>Buyer/Seller</div>
            <div>Date</div>
            <div>Amount</div>
            <div>Status</div>
          </div>
          {recentActivity.slice(0, 6).map((activity) => (
            <div key={activity.id} className="table-row">
              <div className="product-cell">
                <img
                  src={activity.productImage || "/placeholder.svg"}
                  alt={activity.productName}
                />
                <span>{activity.productName}</span>
              </div>
              <div>{activity.buyerSeller}</div>
              <div>{activity.date}</div>
              <div className="amount">${activity.amount.toLocaleString()}</div>
              <div>
                <span
                  className={`status-badge ${activity.status.toLowerCase()}`}
                >
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );