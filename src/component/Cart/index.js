import React from "react";
import { Card } from "react-bootstrap";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="wrapper">
      <div className="list-order">
        {cart.map((item) => (
          <Card
            key={item.id}
            style={{
              borderBottom: "1px solid #D6DAD9",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Card.Img
              style={{ width: "100px", height: "50px" }}
              variant="top"
              src={item.image}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>{item.price}$ </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cart;
