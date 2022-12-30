import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { ProductStyle } from "./style";

function ProductPage() {
  const [products, setProduct] = useState();
  

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    const fetchProducts = async () => {
      const data = await (await fetch("https://dummyjson.com/products",{signal})).json();
      setProduct(data?.products);
    };

    fetchProducts();

    return() => (
      controller.abort()
  )
  }, []);

  return (
    <ProductStyle>
      <div className="productContainer">
        <div className="productCategory">
          <h1>Products For Sale</h1>
        </div>
        <div className="productWrap">
          {products?.slice(0, 50).map((items) => (
            <div key={items?.id}>
              <h1>
                <ProductCard items={items} />
              </h1>
            </div>
          ))}
        </div>
      </div>
    </ProductStyle>
  );
}

export default ProductPage;
