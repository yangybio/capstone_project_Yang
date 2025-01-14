import "./Footer.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__content">
        <h1 className="footer__logo">
          <span>Calis</span>
          <span className="footer__logo--highlight">Tenacy</span>
        </h1>
        <ul className="footer__menu">
          <li className="footer__menu-item">Home</li>
          <li className="footer__menu-item">Bands</li>
          <li className="footer__menu-item">Rings</li>
          <li className="footer__menu-item">Bars</li>
          <li className="footer__menu-item">Parallettes</li>
          <li className="footer__menu-item">Vests</li>
        </ul>
        <p className="footer__description">
          CalisTenacy offers the best calisthenics products designed to help you achieve your fitness goals. From resistance bands to gymnastic rings, every product is crafted with quality and performance in mind.
        </p>
        <p className="footer__copyright">Copyright ©2023</p>
      </div>
    </footer>
  );
}

export default Footer;
