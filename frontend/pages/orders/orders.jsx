"use client"

import { useState } from "react"
import "./Orders.css"

export default function Orders() {
  const [activeTab, setActiveTab] = useState("receiving")

  // Template data for receiving orders
  const receivingOrders = [
    {
      id: "ORD-001",
      productName: "Wireless Bluetooth Headphones",
      productImage: "/wireless-bluetooth-headphones.jpg",
      seller: "John Smith",
      price: 89.99,
      status: "In Transit",
      orderDate: "2024-01-15",
      deliveryPerson: "Mike Johnson",
      deliveryPhone: "+1 (555) 123-4567",
      trackingNumber: "TM789456123",
      estimatedDelivery: "2024-01-18",
    },
    {
      id: "ORD-002",
      productName: "Premium Cotton T-Shirt",
      productImage: "/premium-cotton-t-shirt.png",
      seller: "Sarah Wilson",
      price: 24.99,
      status: "Delivered",
      orderDate: "2024-01-12",
      deliveryPerson: "Lisa Brown",
      deliveryPhone: "+1 (555) 987-6543",
      trackingNumber: "TM456789012",
      estimatedDelivery: "2024-01-15",
    },
    {
      id: "ORD-003",
      productName: "Smart Security Camera",
      productImage: "/smart-security-camera.jpg",
      seller: "Tech Store Pro",
      price: 149.99,
      status: "Processing",
      orderDate: "2024-01-16",
      deliveryPerson: "Pending Assignment",
      deliveryPhone: "N/A",
      trackingNumber: "TM123456789",
      estimatedDelivery: "2024-01-20",
    },
  ]

  // Template data for selling orders
  const sellingOrders = [
    {
      id: "SELL-001",
      productName: "Ergonomic Office Chair",
      productImage: "/ergonomic-office-chair.png",
      buyer: "David Chen",
      price: 199.99,
      status: "Shipped",
      orderDate: "2024-01-14",
      deliveryPerson: "Tom Wilson",
      deliveryPhone: "+1 (555) 456-7890",
      trackingNumber: "TM987654321",
      estimatedDelivery: "2024-01-17",
    },
    {
      id: "SELL-002",
      productName: "Stainless Steel Water Bottle",
      productImage: "/stainless-steel-bottle.png",
      buyer: "Emma Rodriguez",
      price: 19.99,
      status: "Delivered",
      orderDate: "2024-01-10",
      deliveryPerson: "Alex Turner",
      deliveryPhone: "+1 (555) 234-5678",
      trackingNumber: "TM654321098",
      estimatedDelivery: "2024-01-13",
    },
    {
      id: "SELL-003",
      productName: "LED Desk Lamp",
      productImage: "/led-desk-lamp.png",
      buyer: "Michael Johnson",
      price: 45.99,
      status: "Processing",
      orderDate: "2024-01-16",
      deliveryPerson: "Pending Assignment",
      deliveryPhone: "N/A",
      trackingNumber: "TM321098765",
      estimatedDelivery: "2024-01-19",
    },
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "#10b981"
      case "in transit":
      case "shipped":
        return "#3b82f6"
      case "processing":
        return "#f59e0b"
      case "cancelled":
        return "#ef4444"
      default:
        return "#6b7280"
    }
  }

  const renderOrderCard = (order, type) => (
    <div key={order.id} className="order-card">
      <div className="order-header">
        <div className="order-info">
          <h3 className="order-id">Order #{order.id}</h3>
          <span className="order-status" style={{ backgroundColor: getStatusColor(order.status) }}>
            {order.status}
          </span>
        </div>
        <div className="order-date">Ordered: {new Date(order.orderDate).toLocaleDateString()}</div>
      </div>

      <div className="order-content">
        <div className="product-info">
          <img src={order.productImage || "/placeholder.svg"} alt={order.productName} className="product-image" />
          <div className="product-details">
            <h4 className="product-name">{order.productName}</h4>
            <p className="product-price">${order.price}</p>
            <p className="person-name">{type === "receiving" ? `Seller: ${order.seller}` : `Buyer: ${order.buyer}`}</p>
          </div>
        </div>

        <div className="delivery-info">
          <div className="delivery-details">
            <div className="detail-item">
              <span className="detail-label">Tracking Number:</span>
              <span className="detail-value">{order.trackingNumber}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Delivery Person:</span>
              <span className="detail-value">{order.deliveryPerson}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Contact:</span>
              <span className="detail-value">{order.deliveryPhone}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Expected Delivery:</span>
              <span className="detail-value">{new Date(order.estimatedDelivery).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="order-actions">
        <button className="track-button">Track Order</button>
        {order.status.toLowerCase() === "delivered" && <button className="review-button">Leave Review</button>}
      </div>
    </div>
  )

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1 className="orders-title">My Orders</h1>
        <div className="orders-toggle">
          <button
            className={`toggle-btn ${activeTab === "receiving" ? "active" : ""}`}
            onClick={() => setActiveTab("receiving")}
          >
            Receiving
          </button>
          <button
            className={`toggle-btn ${activeTab === "selling" ? "active" : ""}`}
            onClick={() => setActiveTab("selling")}
          >
            Selling
          </button>
        </div>
      </div>

      <div className="orders-content">
        {activeTab === "receiving" && (
          <div className="orders-section">
            <h2 className="section-title">Items You're Receiving</h2>
            <div className="orders-list">{receivingOrders.map((order) => renderOrderCard(order, "receiving"))}</div>
          </div>
        )}

        {activeTab === "selling" && (
          <div className="orders-section">
            <h2 className="section-title">Items You're Selling</h2>
            <div className="orders-list">{sellingOrders.map((order) => renderOrderCard(order, "selling"))}</div>
          </div>
        )}
      </div>
    </div>
  )
}
