import React from "react";
import ProductList from "./ProductList";

const Cart = props => {
  document.title = "Cart";
  return (
    <section className="content">
      <ProductList
        products={props.cart}
        removeFromCart={props.removeFromCart}
        hasRemoveAction
      />
    </section>
  );
};

export default Cart;
