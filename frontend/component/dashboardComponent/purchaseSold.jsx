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

export const RenderPurchasedSold = ({
  purchasedSoldTab,
  setPurchasedSoldTab,
  purchasedItems,
  soldItems,
}) => (
  <div className="purchased-sold-section">
    <div className="section-header">
      <h2>My Items</h2>
      <div className="tab-buttons">
        <button
          className={`tab-btn ${
            purchasedSoldTab === "purchased" ? "active" : ""
          }`}
          onClick={() => setPurchasedSoldTab("purchased")}
        >
          Purchased
        </button>
        <button
          className={`tab-btn ${purchasedSoldTab === "sold" ? "active" : ""}`}
          onClick={() => setPurchasedSoldTab("sold")}
        >
          Sold
        </button>
      </div>
    </div>

    <div className="items-table">
      <div className="table-header">
        <div>Product</div>
        <div>{purchasedSoldTab === "purchased" ? "Seller" : "Buyer"}</div>
        <div>Date</div>
        <div>Price</div>
        <div>Status</div>
      </div>
      {(purchasedSoldTab === "purchased" ? purchasedItems : soldItems).map(
        (item) => (
          <div key={item.id} className="table-row">
            <div className="product-cell">
              <img
                src={item.productImage || "/placeholder.svg"}
                alt={item.productName}
              />
              <span>{item.productName}</span>
            </div>
            <div>
              {purchasedSoldTab === "purchased"
                ? item.sellerName
                : item.buyerName}
            </div>
            <div>
              {purchasedSoldTab === "purchased"
                ? item.datePurchased
                : item.dateSold}
            </div>
            <div className="amount">${item.price.toLocaleString()}</div>
            <div>
              <span
                className={`status-badge ${item.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {item.status}
              </span>
            </div>
          </div>
        )
      )}
    </div>
  </div>
);
