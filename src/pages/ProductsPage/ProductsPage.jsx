import "./ProductsPage.scss";
import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import SimpleBands from "../../assets/icons/simpleBands.svg";
import RTXBands from "../../assets/icons/RTXBands.svg";
import SetBands from "../../assets/icons/setBands.svg";

function ProductsPage({ onAddToCart }) {

  const products = [
    {
      id: 1,
      title: "Simple elastic bands",
      description:
        "High-quality elastic bands suitable for light resistance training and rehabilitation exercises. Comes in vibrant colors.",
      price: 90,
      image: SimpleBands,
    },
    {
      id: 2,
      title: "RTX elastic bands",
      description:
        "Durable and versatile elastic bands designed for fitness enthusiasts. Perfect for resistance training and flexibility exercises.",
      price: 100,
      image: RTXBands,
    },
    {
      id: 3,
      title: "Set of 5 simple elastic bands",
      description:
        "A set of 5 high-quality elastic bands with varying resistance levels. Ideal for building strength and improving flexibility.",
      price: 400,
      image: SetBands,
    },
  ];


  return (
    <div className="products-page">
      <div className="products-page__content">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
