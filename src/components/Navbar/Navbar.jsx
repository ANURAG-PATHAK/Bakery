import "./Navbar.css";
import { images } from "../../constants";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-bar">
        <div className="nav-heading">
          <a href="">Bakery</a>
        </div>
        <div className="nav-items">
          <div className="items">
            <a href="http://">Home</a>
          </div>
          <div className="items">
            <a href="http://">Shop</a>
          </div>
          <div className="items">
            <a href="http://">Services</a>
          </div>
          <div className="items">
            <a href="http://">Blog</a>
          </div>
        </div>
        <div className="nav-register">
          <div className="register">
            <a href="">Login/Register</a>
          </div>
          <div className="cart">
            <a href="" className="favorites">
              <img src={images.heart} alt="favorites" />
            </a>
            <a href="" className="basket">
              <img src={images.basket} alt="cart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
