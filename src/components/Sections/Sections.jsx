import "./Sections.css";
import { images } from "../../constants";
function Products() {
  return (
    <>
      <div className="image-container">
        <img src={images.separator} alt="" />
        <div className="overlay-content">
          <div>
            <div className="section--top">
              <div className="section--top-left">
                <div className="section--top-heading">See Collection</div>
                <div className="section--top-content">
                  OUR FINE HOME
                  <br /> MADE CHOCOLATES
                </div>
              </div>
              <div className="section--top-right">
                <div>
                  <img
                    className="section--top-right-image"
                    src={images.productsLine}
                    alt=""
                  />
                </div>
                <div className="section-top-right-content">
                  <div className="section-top-right-content-title">
                    There are some redeming factors in greeking text
                  </div>
                  <div className="section-top-right-content-title">
                    There are some redeming factors in greeking text
                  </div>
                  <div className="section-top-right-content-title">
                    There are some redeming factors in greeking text
                  </div>
                </div>
              </div>
            </div>
            <div className="section--bestseller">
              <div className="section--bestseller-heading">
                <img
                  className="section--bestseller-heading-line"
                  src={images.line}
                  alt=""
                />
                <div className="section--bestseller-heading-text">
                  OUR BEST SELLERS
                </div>
                <img
                  className="section--bestseller-heading-line"
                  src={images.line}
                  alt=""
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
