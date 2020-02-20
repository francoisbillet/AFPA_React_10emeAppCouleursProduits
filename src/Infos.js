import React from "react";
import { Link } from "react-router-dom";

const Infos = ({ product, cart, addToCart, color }) => {
  //   console.log(color);
  return (
    <React.Fragment>
      <div className="product-description">
        <span>product</span>
        <h1>{product ? product.title : ""}</h1>
        <p>{product ? product.description : ""}</p>
      </div>

      <div className="product-configuration">
        <div className="product-color">
          <span>Couleur</span>
          <div className="color-choose">
            <div>
              <input
                data-image="red"
                type="radio"
                id="red"
                name="color"
                value="red"
              />
              <label htmlFor="red">
                <Link to={`/product/${product.id}/red`}>
                  <span></span>
                </Link>
              </label>
            </div>
            <div>
              <input
                data-image="blue"
                type="radio"
                id="blue"
                name="color"
                value="blue"
              />
              <label htmlFor="blue">
                <Link to={`/product/${product.id}/blue`}>
                  <span></span>
                </Link>
              </label>
            </div>
            <div>
              <input
                data-image="black"
                type="radio"
                id="black"
                name="color"
                value="black"
              />
              <label htmlFor="black">
                <Link to={`/product/${product.id}/black`}>
                  <span></span>
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="product-price">
        <span>148€</span>
        <button
          onClick={() => addToCart({ ...product, color })}
          className="cart-btn"
        >
          Ajouter au panier
        </button>
      </div>
    </React.Fragment>
  );
};

export default Infos;
