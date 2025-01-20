import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/icons/hero.svg";
import ads from "../../assets/icons/ads.svg";
import React, { useState, useEffect } from "react"; 

function HomePage() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/bands"); // 导航到产品页面
    window.scrollTo(0, 0);
  };

  // 修改点：从后端获取产品数据
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/`);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="home">Loading...</div>;
  }

  if (error) {
    return <div className="home">Error: {error}</div>;
  }

  return (
    <>
      <section className="home">
        <div className="home__hero">
          <h1 className="home__header">
            The best{" "}
            <span className="home__title--highlight">Calisthenics</span>{" "}
            products
          </h1>
          <img src={hero} alt="hero" className="home__hero-image" />
        </div>

        <section className="home__products">
          <h2 className="home__title">
            Our <span className="home__title--highlight">Products</span>
          </h2>
          <div className="home__list">
            {products.map((product) => (
              <div className="home__card" key={product.id}>
                <div className="home__image-container">
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="home__image"
                  />
                </div>
                <h3 className="home__name">{product.title}</h3>
                <button onClick={handleNavigate} className="home__link">
                  {product.linkText} &rarr;
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="home__introduction">
          <div className="home__introduction-image-container">
            <img src={ads} alt="ads" className="home__introduction-image" />
          </div>
          <div className="home__introduction-text-container">
            <h2 className="home__introduction-header">
              Discover the best in the world of{" "}
              <span className="home__title--highlight">Calisthenics</span>
            </h2>
            <p className="home__introduction-description">
              Explore tips, tricks, and guides to achieve your fitness goals.
              Learn how to master calisthenics techniques and improve strength,
              flexibility, and balance!
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
export default HomePage;
