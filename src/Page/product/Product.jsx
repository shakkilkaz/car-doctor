import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";

const Product = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
      fetch("/product.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  return (
    <div className="text-center my-20 space-y-5">
        <h3 className="text-4xl font-semibold">Browse Our Products</h3>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
         words which don't look even slightly believable. </p>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center mt-10">
            {
                products.map((product) =><ProductCart product={product} key={product._id}></ProductCart>)
            }
         </div>
    </div>
  );
};

export default Product;
