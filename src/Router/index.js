import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../component/Cart";

export const Routes = ({ product, cart, handleAddProduct }) => {
  return (
    <div>
      <Switch>
        <Route
          expact
          path="/"
          element={
            <Home product={product} handleAddProduct={handleAddProduct} />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} handleAddProduct={handleAddProduct} />}
        />
      </Switch>
    </div>
  );
};
