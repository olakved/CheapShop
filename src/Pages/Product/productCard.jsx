import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import {FcLike} from "react-icons/fc"

function ProductCard({ items }) {
    const [active, setActive] = useState(false);
    const toggleArrow = () => {
        setActive(!active);
    };


    return (
        <div className={active ? "productCardActive" : "productCard"}>
            <div className='productCard'>
                <img src={items?.thumbnail} alt="productImg" className="productAvatar" />
                <div className='productBox'>
                    <div className='productDetailsA'>
                        <p className='productTitle'>{items?.title}</p>
                        <div className='productPriceRate'>
                            <span>Price: {items?.price} Naira</span>
                            <span>Rating: {items?.rating}/5</span>
                        </div>
                    </div>
                    <div className='cartItems'>
                    <button>Add to cart</button>
                    <p><FcLike size={20}/></p>
                    </div>
                    <div className='productDetailsB'>
                        <p className='productDetailsArrow'><FaChevronDown size={20} onClick={toggleArrow}/></p>
                    </div>
                </div>

                {active && (
                    <div className='productMoreDetails'>
                        <p>
                            {items?.description}
                        </p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default ProductCard