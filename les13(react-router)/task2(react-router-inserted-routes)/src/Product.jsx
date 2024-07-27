import React from "react";
import { Link } from "react-router-dom";

function Product({ ...rest }) {
  return (
  <div className="product">
    {`Product is a ${rest.match.params.productId}`}
  </div>
  );
}

export default Product;
