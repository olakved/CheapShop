import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { ProductStyle } from "./style";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

function ProductSection() {
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
      <div className="homeProductContainer">
        <div className="productCategory">
          <h2>Products</h2>
          <p><Link to='/product'><FaChevronCircleRight size={20}/></Link></p>
        </div>
        <div className="productWrap">
          {products?.slice(0, 8).map((items) => (
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

export default ProductSection;
