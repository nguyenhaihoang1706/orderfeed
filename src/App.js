import Header from "./component/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Router";
import { useState } from "react";
import data from "./component/Data/data";

function App() {
  const { product } = data;
  const [cart, setCart] = useState([]);

  const handleAddProduct = (productItem) => {
    const productExists = cart.find((item) => item.id === productItem.id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === productItem.id
            ? { ...productExists, quantity: productExists.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...productItem, quantity: 1 }]);
    }
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes
          product={product}
          cart={cart}
          handleAddProduct={handleAddProduct}
        />
      </Router>
    </div>
  );
}

export default App;
