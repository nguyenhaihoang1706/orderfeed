import React, { useState, useEffect } from "react";

import "./Home.css";
import { Card, Form } from "react-bootstrap";

import { InputNumber } from "antd";
import PrimaryButton from "../../component/PrimaryButton";

function Home(props) {
  const [order, setOrder] = useState([]);
  // useEffect(() => {
  //   fetch("https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals")
  //     .then((response) => response.json())
  //     .then((result) => setOrder(result));
  // }, []);
  const { product, handleAddProduct } = props;
  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <div className="wrapper">
      <div className="list-order">
        {product.map((item) => (
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
            <Form style={{ display: "grid" }}>
              <InputNumber
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 5,
                }}
                min={0}
                defaultValue={0}
                onChange={onChange}
                onClick={handleAddProduct(product)}
              />
              <PrimaryButton />
            </Form>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
