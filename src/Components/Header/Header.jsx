import './Header.css';
import { Link } from 'react-router-dom';

function Header({ cartItems = [], toggleCart }) {
  return (
    <header className="header">
      <div className="brand">
        <img src="./UniCart.png" alt="Unicart Logo" className="logo" />
        <span className="brand-name">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            UniCart
          </Link>
        </span>
      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <div className="cart-wrapper" onClick={toggleCart}>
          <img
            src="./carticon-removebg-preview.png"
            alt="Cart"
            className="cart-icon"
          />
          <span className="cart-count" id="cart-count">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
          {/* <span className="cart-count" id="cart-count">{cartItems.length}</span> */}
        </div>
      </nav>
      <div className="header-line"></div>
    </header>
  );
}

export default Header;
