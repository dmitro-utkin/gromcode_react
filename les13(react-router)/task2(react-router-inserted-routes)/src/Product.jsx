import React from "react";

function Product({ ...rest }) {
  return (
  <div className="product">
    {rest.match.params.productId}
  </div>
  );
}

export default Product;
