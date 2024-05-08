import "./Hero.css";
import { images } from "../../constants";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
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
          <button className="shop--button">
            <a href="">Shop Now</a>
          </button>
          <div className="hero-socials">
            <a href="">
              <img src={images.facebook} alt="" />
            </a>
            <a href="">
              <img src={images.linkedin} alt="" />
            </a>
            <a href="">
              <img src={images.instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src={images.heroImage} alt="" className="hero-image" />
          <img src={images.ellipse} alt="" className="shadow" />
        </div>
      </div>
      <div className="hero-scroll">
        <a href="">
          <img src={images.vectorImage} alt="" />
        </a>
      </div>
      <img src={images.separator} alt="" />
    </>
  );
};

export default Hero;
