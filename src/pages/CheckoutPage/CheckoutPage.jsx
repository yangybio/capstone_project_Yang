import React, { useState } from "react";
import "./CheckoutPage.scss";
import InputField from "../../components/InputField/InputField";

const CheckoutPage = ({ cartItems = [], total = 0, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
    electronicMoney: "",
    pinNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone || !/^\+?\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Invalid phone number.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Payment processed successfully!");
      onSubmit(formData); // 调用父组件传入的提交回调
    }
  };

  return (
    <div className="checkout-page">
      {/* Form Section */}
      <div className="checkout-page__form">
        <h2 className="checkout-page__form-title">Verify</h2>
        <div className="checkout-page__form-content">
        <div className="checkout-page__content-top">
          <InputField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <InputField
            label="Phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            placeholder="+12 345 678 6960"
          />
          </div>

          <h2 className="checkout-page__form-subtitle">Shipping information</h2>

          <div className="checkout-page__content-shipping">
          <InputField
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <InputField
            label="ZIP Code"
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
          />
          <InputField
            label="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          <InputField
            label="Country"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="checkout-page__summary">
        <h2 className="checkout-page__title">Order Summary</h2>
        <div className="checkout-page__items">
          {cartItems.map((item) => (
            <div key={item.band_id} className="checkout-page__item">
              <img
                src={item.image}
                alt={item.title}
                className="checkout-page__item-image"
              />
              <div className="checkout-page__item-details">
                <p className="checkout-page__item-title">{item.title}</p>
                <p className="checkout-page__item-quantity">
                  Quantity: {item.quantity}
                </p>
                <p className="checkout-page__item-price">
                ${Number(item.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-page__total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          className="checkout-page__close-btn"
          onClick={handleSubmit}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
