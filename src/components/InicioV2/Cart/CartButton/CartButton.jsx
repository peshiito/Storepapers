import React from "react";
import { useCart } from "../CartContext/CartContext";
import "./CartButton.css";

const CartButton = ({ onToggle }) => {
  const { getTotalItems, getTotal } = useCart();
  const totalItems = getTotalItems();
  const totalMoney = getTotal();

  return (
    <button className="cart-button" onClick={onToggle} aria-label="Abrir carrito">
      <span className="cart-emoji">🛒</span>
      {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      <span className="cart-sum">${Number(totalMoney).toFixed(2)}</span>
    </button>
  );
};

export default CartButton;