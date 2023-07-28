import React, { useState } from "react";
import { Button } from "antd";

function PrimaryButton() {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };
  return (
    <Button
      style={{ color: "white", backgroundColor: "#8A2B07" }}
      type="primary"
      loading={loadings[0]}
      onClick={() => enterLoading(0)}
    >
      Add
    </Button>
  );
}

export default PrimaryButton;
