import "./Header.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/icons/Menu.svg";
import CartIcon from "../../assets/icons/cart.svg";

function Header({ cartItemCount, onCartIconClick }) {
  const navigate = useNavigate();

  return (
    <nav className="header">
      <NavLink to="/">
        <img src={MenuIcon} alt="Menu" />
      </NavLink>

      <h1 className="header__title">Calis<span className="home__title--highlight">Tenacy</span></h1>

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
