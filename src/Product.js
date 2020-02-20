import React from "react";
import { Link } from "react-router-dom";

const getImg = color => {
  switch (color) {
    case "black":
      return "img";
      break;
    case "red":
      return "img2";
      break;
    case "blue":
      return "img3";
      break;
    default:
      return "img";
  }
};

const Product = ({ product, removeFromCart, hasRemoveAction, color }) => {
  //   console.log(product.color);
  return (
    <div className="product">
      <img src={product[getImg(color)]} />
      <div className="product-content">
        <h3>
          <Link to={`/product/${product.id}/${color}`}>{product.title}</Link>
        </h3>
        {product.quantity ? <p>Quantité : {product.quantity}</p> : ""}
        {hasRemoveAction ? (
          <button onClick={() => removeFromCart(product)}>
            Supprimer du panier
          </button>
        ) : null}
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
