// reusable card component
import React from "react";
import CartButton from "./CartButton";

const GroceryItem = (props) => {
  return <>
  <div className="Divitem">
    <img src={props.imgURL}/>
    <h3>{props.title}</h3>
    <p>Discount : {props.discount}</p>
    
    <div id="cart11">
    <p className="one1">mrp: {props.mrp}</p>
    <p className="one1">price: {props.sellingPrice}</p>
    </div>
    
    {/* <button>Add to Cart</button> */}
    <div id="btn">
    <CartButton/>
    </div>
  </div>
  </>;
};
export default GroceryItem;
