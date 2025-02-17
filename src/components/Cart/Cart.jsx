import React from "react";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, total, onIncrease, onDecrease, onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    onClose();
    navigate("/checkout");
    window.scrollTo(0, 0);
  };

  console.log("Cart Items:", cartItems);

  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__title">Cart ({cartItems.length})</h2>
      </div>
      <div className="cart__body">
        {cartItems.map((item) => (
          <div key={item.id} className="cart__item">
            <img
              src={item.image}
              alt={item.title}
              className="cart__item-image"
            />
            <div className="cart__item-details">
              <p className="cart__item-title">{item.title}</p>
              {/* <p className="cart__item-price">${typeof item.price === "number" ? item.price.toFixed(2) : "0.00"}</p> */}
              <p className="cart__item-price">${Number(item.price).toFixed(2)}</p>

            </div>
            <div className="cart__item-actions">
              <button
                onClick={() => onDecrease(item.id)}
                className="cart__item-btn"
              >
                -
              </button>
              <span className="cart__item-quantity">{item.quantity}</span>
              <button
                onClick={() => onIncrease(item.id)}
                className="cart__item-btn"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart__footer">
        <div className="cart__total">
          <span className="cart__total-label">Total</span>
          <span className="cart__total-value">${total.toFixed(2)}</span>
        </div>
        <div className="cart__actions">
          <button onClick={handleNavigate} className="cart__checkout-btn">
            Proceed to Checkout
          </button>
          <button className="cart__continue-btn" onClick={onClose}>
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
