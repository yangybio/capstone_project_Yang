import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/icons/hero.svg";
import ads from "../../assets/icons/ads.svg";
import Bands from "../../assets/icons/Bands.svg";
import Rings from "../../assets/icons/Rings.svg";
import Bar from "../../assets/icons/Bar.svg";

function HomePage() {
  const productData = [
    {
      id: 1,
      imgSrc: Bands,
      title: "Elastic Bands",
      linkText: "Learn More",
    },
    {
      id: 2,
      imgSrc: Rings,
      title: "Gymnastic Rings",
      linkText: "Learn More",
    },
    {
      id: 3,
      imgSrc: Bar,
      title: "Pull-up Bar",
      linkText: "Learn More",
    },
  ];

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products"); // 导航到产品页面
    window.scrollTo(0, 0);
  };

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
            {productData.map((product) => (
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
