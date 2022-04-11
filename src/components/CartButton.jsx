
// keep the add to cart component here
import React ,{useState} from "react";
const CartButton = () => {
    //manage state of the count 
    const [count,setCount] =useState(0)
    const Inc=(value)=>{
      setCount(count+value)
    }


  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
  <button>Add to Cart</button>
  <p className="count-item">{count}</p>

  
      <button onClick={()=>{Inc(1)}}>+</button>
      <button onClick={()=>{Inc(-1)}}>-</button>
  </div>
  </>;
};
export default CartButton
