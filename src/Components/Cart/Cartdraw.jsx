import React from "react";
import styles from "./Cart.module.css";
import { useCart } from "./Cartcontext";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cartdraw = () => {
  const { cartItems, removeFromCart, updateQty, total, isCartOpen, setIsCartOpen } =
    useCart();

  return (
    <div
      className={`${styles.drawer} ${isCartOpen ? styles.open : ""}`}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className={styles.cartBox}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2>Cart ({cartItems.length} items)</h2>
          <button
            className={styles.closeBtn}
            onClick={() => setIsCartOpen(false)}
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className={styles.empty}>Your cart is empty</p>
        ) : (
          <>
            <div className={styles.items}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.info}>
                    <h4>{item.title}</h4>
                    <p>${item.price}.00</p>
                    <div className={styles.qtyBox}>
                      <button onClick={() => updateQty(item.id, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <FaTrashAlt
                    className={styles.delete}
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.total}>
                <p>Estimated total</p>
                <h3>${total.toFixed(2)}</h3>
              </div>
           <Link to="/CheckOut/:id"><button className={styles.checkout}>Checkout</button></Link>
              <button className={styles.viewCart}>View Cart</button>
              <p className={styles.secure}>🔒 Secure Checkout</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cartdraw;
