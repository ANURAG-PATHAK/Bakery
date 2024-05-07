import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <h2 className="footer-heading">
          <a href="">Bakery</a>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dolorum sequi corporis facilis minima magni optio itaque et, atque
          facere aut quae eligendi necessitatibus exercitationem veniam
          consequatur? Voluptatibus, nobis illo.
        </p>
      </div>
      <div className="middle">
        <h3>Our Stores</h3>
        <a href="">Slokova</a>
        <a href="">Shop</a>
        <a href="">Services</a>
        <a href="">Blog</a>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Footer;
