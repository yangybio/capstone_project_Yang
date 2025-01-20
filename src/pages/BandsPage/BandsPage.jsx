import "./BandsPage.scss";
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

function BandsPage({ onAddToCart }) {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // 从后端获取 bands 数据
  useEffect(() => {
    const fetchBands = async () => {
      try {
        // const response = await fetch("http://localhost:8080/bands");
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/bands`);

 
        if (!response.ok) {
          throw new Error("Failed to fetch bands");
        }
        const data = await response.json();
        setBands(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBands();
  }, []);

  if (loading) {
    return <div className="bands-page">Loading...</div>;
  }

  if (error) {
    return <div className="bands-page">Error: {error}</div>;
  }

  return (
    <div className="bands-page">
      <div className="bands-page__content">
        {bands.map((band) => (
          <ProductCard key={band.id} product={band} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default BandsPage;
