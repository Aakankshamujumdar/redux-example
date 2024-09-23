import React from "react";
import "../css/Home.css";
import "boxicons";
import { Link } from "react-router-dom";
import Product from "./Product";
import beauty from "../image/beautyproduct.jpg";
import beauty3 from "../image/beauty3.webp";
import beauty4 from "../image/beauty4.webp";
import { useSelector } from "react-redux";


const Home = () => {
  const cartitems=useSelector((state)=>state.cart.cart)

  return (
    <div>
      <div className="navbar">
        <h1 className="title">LOGO</h1>
        <Link to="/checkout" element={"checkout"}>
          <h2 style={{ textDecoration: "none" }}>
            <box-icon color="white" size="35px" name="cart-download"></box-icon>{" "}
            <small style={{color:"white"}}>{cartitems.length}</small>
          </h2>
        </Link>
      </div>

      <div className="maincontainer">   
        <div className="prodcutContainer">
          <Product
            id="1"
            image={beauty}
            description="2,362,348 Beauty Products Royalty-Free Images, Stock Photos & Pictures | Shutterstock"
            price="999"
          />
        </div>
        <div className="prodcutContainer">
          <Product
            id="2"
            image={beauty3}
            description="2,362,348 Beauty Products, Stock Photos & Pictures | Shutterstock"
            price="1599"
          />
        </div>
        <div className="prodcutContainer">
          <Product
             id="3"
            image={beauty4}
            description="26,253 Beauty Toner , Stock Photos"
            price="499"
          />
        </div>
       
      </div>
    </div>
  );
};

export default Home;
