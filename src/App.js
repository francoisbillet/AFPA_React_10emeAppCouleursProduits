import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://server-ten.now.sh`)
      .then(body => body.json())
      .then(response => {
        setProducts(response);
      });
  }, []);

  const [cart, setCart] = React.useState([]);
  const addToCart = product => {
    if (
      !cart.find(
        element => element.id === product.id && element.color === product.color
      )
    ) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      setCart(
        cart.map(item => {
          if (item.id === product.id && item.color === product.color) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    }
  };
  const removeFromCart = product => {
    setCart(
      cart.filter(item => {
        return item.id !== product.id;
      })
    );
  };

  const [notes, setNotes] = React.useState([]);
  const addNote = note => {
    setNotes([...notes, note]);
  };

  return [products, cart, addToCart, removeFromCart, notes, addNote];
};

function App() {
  const [
    products,
    cart,
    addToCart,
    removeFromCart,
    notes,
    addNote
  ] = useProducts();
  console.log(cart);
  return (
    <BrowserRouter>
      <Header cart={cart} notes={notes} />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <main className="content">
              <ProductList products={products} color="black" />
            </main>
          </div>
        </Route>
        <Route exact path="/product/:id/:color">
          <ProductPage products={products} cart={cart} addToCart={addToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </Route>
      </Switch>
      <Footer addNote={addNote} />
    </BrowserRouter>
  );
}

export default App;
