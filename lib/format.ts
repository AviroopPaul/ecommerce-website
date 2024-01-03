import React from "react";

const format = (price: number) => {
  return (price/100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export default format;
