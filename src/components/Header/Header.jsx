import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/icons/Menu.svg";
import CartIcon from "../../assets/icons/cart.svg";

function Header({ cartItemCount, onCartIconClick, onMenuClick }) {
  return (
    <nav className="header">
      <button onClick={onMenuClick} className="header__menu">
        <img className="header__menu-icon" src={MenuIcon} alt="Menu" />
      </button>

      <h1 className="header__title">
        Calis<span className="home__title--highlight">Tenacy</span>
      </h1>

      <div className="header__cart" onClick={onCartIconClick}>
        <img src={CartIcon} alt="Cart" className="header__cart-icon" />
        {cartItemCount > 0 && (
          <span className="header__cart-badge">{cartItemCount}</span>
        )}
      </div>
    </nav>
  );
}

export default Header;
