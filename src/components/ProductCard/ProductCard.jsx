import React, { useState } from "react";
import "./ProductCard.scss";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
        onAddToCart(product, quantity); // 将商品和数量传递到 App
        setQuantity(0); // 清空选择的数量
      }
  };

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
        />
      </div>
      <div className="product-card__content">
        <h2 className="product-card__title">{product.title}</h2>
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__price">${product.price}.00</p>
        <div className="product-card__actions">
          <div className="product-card__quantity">
            <button
              onClick={handleDecrease}
              className="product-card__quantity-btn"
            >
              -
            </button>
            <span className="product-card__quantity-value">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="product-card__quantity-btn"
            >
              +
            </button>
          </div>
          <button
            className="product-card__add-to-cart"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
