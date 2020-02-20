import React from "react";
import ProductList from "./ProductList";

const HomePage = props => {
  document.title = "Accueil";
  return (
    <div className="App">
      <main className="content">
        <ProductList products={props.products} />
      </main>
    </div>
  );
};

export default HomePage;
