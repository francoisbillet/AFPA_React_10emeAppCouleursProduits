import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header>
      <nav>
        <ul className="list-header">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>Cart : {props.cart.length}</li>
          <li>
            Moyenne des notes :
            {props.notes.length > 0
              ? props.notes.reduce((acc, item) => acc + item, 0) /
                props.notes.length
              : 5}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
