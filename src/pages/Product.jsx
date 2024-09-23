import React from "react";
import { useDispatch } from "react-redux";
import "../css/Product.css";
import { addToCart } from "../redux/cartSlice";
const Product = ({ id, image, price, description }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="prodcutImageContainer">
        <img className="image" src={image} alt="Image" />
      </div>

      <div className="productTextContainer">
        <h3 className="description">{description}</h3>
        <h2 className="price">₹{price}</h2>
        <button
          className="btn"
          onClick={() => dispatch(addToCart({ id, image, price, description }))}
        >
          Add to cart
        </button>
        {/* <button>Buy now</button> */}
      </div>
    </div>
  );
};

export default Product;
