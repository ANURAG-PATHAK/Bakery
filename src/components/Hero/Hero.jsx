import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import "./Hero.css";
import { images } from "../../constants";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1 className="hero-heading">
          Sweet moments,
          <br />
          freshly baked with love
        </h1>
        <h3 className="hero-content">
          Customized cakes, treats, and everything sweet
          <br />
          for all your special moments
        </h3>
        <div className="shop--button">
          <button>
            <a href="">Shop Now</a>
          </button>
        </div>
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
      <div className="right">
        <img src={images.heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
