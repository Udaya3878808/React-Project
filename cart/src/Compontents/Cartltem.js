import React from "react";
import { useGlobalContext } from "../Context/Context";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const CartItem = ({ id, img, title, price, amount }) => {
    const {remove,increase,decrease} = useGlobalContext()
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button
          className="remove-btn"
          onClick={() => remove(id)}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase(id)}>
          <FaAngleUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease(id)}>
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
