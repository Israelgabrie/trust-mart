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


export const RenderPerformance = ({userData}) => (
    <div className="performance-section">
      <div className="section-header">
        <h2>Performance & Rating</h2>
      </div>

      <div className="performance-grid">
        <div className="performance-card rating-overview">
          <div className="rating-display">
            <div className="rating-number">{userData.rating}</div>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(userData.rating) ? "filled" : ""}
                />
              ))}
            </div>
            <p>{userData.reviewsCount} total reviews</p>
          </div>
        </div>

        <div className="performance-card rating-breakdown">
          <h4>Rating Breakdown</h4>
          <div className="rating-bars">
            <div className="rating-bar">
              <span>5 stars</span>
              <div className="bar">
                <div className="fill" style={{ width: "78%" }}></div>
              </div>
              <span>78%</span>
            </div>
            <div className="rating-bar">
              <span>4 stars</span>
              <div className="bar">
                <div className="fill" style={{ width: "15%" }}></div>
              </div>
              <span>15%</span>
            </div>
            <div className="rating-bar">
              <span>3 stars</span>
              <div className="bar">
                <div className="fill" style={{ width: "5%" }}></div>
              </div>
              <span>5%</span>
            </div>
            <div className="rating-bar">
              <span>2 stars</span>
              <div className="bar">
                <div className="fill" style={{ width: "1%" }}></div>
              </div>
              <span>1%</span>
            </div>
            <div className="rating-bar">
              <span>1 star</span>
              <div className="bar">
                <div className="fill" style={{ width: "1%" }}></div>
              </div>
              <span>1%</span>
            </div>
          </div>
        </div>

        <div className="performance-card achievements">
          <h4>Achievements</h4>
          <div className="achievement-badges">
            <div className="badge">
              <Award size={24} />
              <span>Top Seller</span>
            </div>
            <div className="badge">
              <Users size={24} />
              <span>Trusted Vendor</span>
            </div>
            <div className="badge">
              <Star size={24} />
              <span>5-Star Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );