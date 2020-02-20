import React from "react";
import Product from "./Product";

const ProductList = props => {
  //   document.title = "Accueil";
  return (
    <ul>
      {props.products.map(product => (
        <li key={`id: ${product.id}, color: ${product.color}`}>
          <Product
            product={product}
            removeFromCart={props.removeFromCart}
            hasRemoveAction={props.hasRemoveAction}
            color={product.color}
          />
        </li>
      ))}
    </ul>
  );
};
export default ProductList;
