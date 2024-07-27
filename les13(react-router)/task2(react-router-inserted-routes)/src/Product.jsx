import React from "react";

function Product({ ...rest }) {
  return (
  <div className="product">
    {`Product is a ${rest.match.params.productId}`}
  </div>
  );
}

export default Product;
