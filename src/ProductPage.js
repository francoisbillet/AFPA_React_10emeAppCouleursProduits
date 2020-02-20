import React from "react";
import Infos from "./Infos";
import { useParams } from "react-router-dom";
import Image from "./Image";

const useProduct = products => {
  const { id, color } = useParams();
  const product = products.find(product => {
    return product.id === id;
  });

  return [product, color];
};

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

const ProductPage = props => {
  const [product, color] = useProduct(props.products);
  if (!product) {
    return <div>Loading...</div>;
  } else {
    document.title = `${product.title} | ${color}`;
    // console.log(product[img]);
    return (
      <React.Fragment>
        <main className="product">
          <div className="left-column">
            <Image
              src={product[getImg(color)]} // pas les {} parce que string uniquement
              alt={product.title}
            />
          </div>
          <div className="right-column">
            <Infos
              product={product}
              cart={props.cart}
              addToCart={props.addToCart}
              color={color}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
};

export default ProductPage;
