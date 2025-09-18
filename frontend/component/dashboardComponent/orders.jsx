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

export const RenderOrders = ({orders}) => (
    <div className="orders-section">
      <div className="section-header">
        <h2>Orders Management</h2>
        <div className="header-actions">
          <select className="filter-select">
            <option>All Orders</option>
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Canceled</option>
          </select>
        </div>
      </div>

      <div className="orders-table">
        <div className="table-header">
          <div>Order ID</div>
          <div>Product</div>
          <div>Customer</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Status</div>
        </div>
        {orders.map((order) => (
          <div key={order.orderId} className="table-row">
            <div className="order-id">{order.orderId}</div>
            <div>{order.productName}</div>
            <div>{order.buyerSeller}</div>
            <div>{order.date}</div>
            <div className="amount">${order.amount.toLocaleString()}</div>
            <div>
              <span className={`status-badge ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
