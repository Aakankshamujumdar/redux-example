import React from "react";
import "../css/checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Checkout = () => {
  const cartitems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>cartitems</h2>
      {cartitems.map((item) => {
        return (
          <div className="prodcutContainer" key={item}>
            <div className="prodcutImageContainer">
              <img className="image" src={item.image} alt="Image" />
            </div>

            <div className="productTextContainer">
              <h3 className="description">{item.description}</h3>
              <h2 className="price">₹{item.price}</h2>
              <button onClick={()=>dispatch(removeFromCart({id:item.id}))}className="btn">Remove to cart</button>
              {/* <button>Buy now</button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
