import "./Footer.scss";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Footer(props, ref) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // 滚动到顶部
  };

  return (
    <footer ref={ref} className="footer">
      <div className="footer__content">
        <h1 className="footer__logo">
          <span>Calis</span>
          <span className="footer__logo--highlight">Tenacy</span>
        </h1>
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <button className="footer__menu-link" onClick={() => handleNavigation('/')}>Home</button>
          </li>
          <li className="footer__menu-item">
            <button className="footer__menu-link" onClick={() => handleNavigation('/bands')}>Bands</button>
          </li>
          <li className="footer__menu-item">Rings</li>
          <li className="footer__menu-item">Bars</li>
        </ul>
        <p className="footer__description">
          CalisTenacy offers the best calisthenics products designed to help you
          achieve your fitness goals. From resistance bands to gymnastic rings,
          every product is crafted with quality and performance in mind.
        </p>
        <p className="footer__copyright">Copyright ©2025</p>
      </div>
    </footer>
  );
}

export default React.forwardRef(Footer);
