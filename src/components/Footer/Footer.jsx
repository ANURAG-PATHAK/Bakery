import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <h2 className="footer-heading">
            <a href="">Bakery</a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolorum sequi corporis facilis minima magni optio
            itaque et, atque facere aut quae eligendi necessitatibus
            exercitationem veniam consequatur? Voluptatibus, nobis illo.
          </p>
          <div className="hero-socials">
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="footer-middle">
          <h3>Our Stores</h3>
          <a href="">Slovakia</a>
          <a href="">Czech Republic</a>
          <a href="">Finland</a>
          <a href="">Poland</a>
        </div>
        <div className="footer-right">
          <h3>Useful Links</h3>
          <a href="">Home</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms Condition</a>
          <a href="">Contact Us</a>
        </div>
      </div>
      <div className="credits">
        <div className="credits-content">
          Designed by <a href="">ll cc</a> and developed by{" "}
          <a href="">anuraag</a>
        </div>
        <div className="credits-copyright">© Bakery All rights reserved.</div>
      </div>
    </>
  );
};

export default Footer;
