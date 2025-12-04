import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./product.module.css";
import { FaFacebookF, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import product1 from "../../Components/Common/assets/product1.avif";
import product2 from "../../Components/Common/assets/product2.avif";
import product3 from "../../Components/Common/assets/product3.avif";
import product4 from "../../Components/Common/assets/product4.avif";
import product5 from "../../Components/Common/assets/product 5.avif";
import product6 from "../../Components/Common/assets/product6.avif";
import { useCart } from "../../Components/Cart/Cartcontext";

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();


  const products = [
    {
      id: 1,
      title: "Ultra HD Smart TV",
      price: 599,
      desc: "Experience immersive 4K visuals with the latest smart technology.",
      image: product1,
      optionLabel: "Size",
      options: ["43 inch", "55 inch", "65 inch"],
    },
    {
      id: 2,
      title: "Multi-Functional Blender",
      price: 89,
      desc: "Blend, chop, and mix your favorite ingredients with ease.",
      image: product2,
      optionLabel: "Power",
      options: ["500W", "750W", "1000W"],
    },
    {
      id: 3,
      title: "Stylish Smartwatch",
      price: 199,
      desc: "Track your health, calls, and fitness goals with style.",
      image: product3,
      optionLabel: "Color",
      options: ["Black", "Silver", "Blue"],
    },
    {
      id: 4,
      title: "Noise Cancelling Earbuds",
      price: 89,
      desc: "Enjoy music without distractions with advanced noise cancellation.",
      image: product4,
      optionLabel: "Type",
      options: ["Wireless", "Wired"],
    },
    {
      id: 5,
      title: "Compact Air Fryer",
      price: 129,
      desc: "Crispy, oil-free cooking for a healthy lifestyle.",
      image: product5,
      optionLabel: "Capacity",
      options: ["3.5L", "5L", "6.5L"],
    },
    {
      id: 6,
      title: "Smart Kitchen Scale",
      price: 49,
      desc: "Measure ingredients accurately for perfect recipes.",
      image: product6,
      optionLabel: "Color",
      options: ["White", "Silver", "Black"],
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.left}>
        <img src={product.image} alt={product.title} />
      </div>

      
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.price}>${product.price}.00</p>

        <div className={styles.formGroup}>
          <label>{product.optionLabel} *</label>
          <select>
            <option>Select</option>
            {product.options.map((opt, index) => (
              <option key={index}>{opt}</option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Quantity *</label>
          <div className={styles.quantityBox}>
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>
<button className={styles.cartBtn} onClick={() => addToCart(product)}>
  Add to Cart
</button>
        
<div className={styles.socialIcons}>
          <FaFacebookF className={styles.icon} />
          <FaPinterestP className={styles.icon} />
          <FaWhatsapp className={styles.icon} />
          <FaXTwitter className={styles.icon} />
        </div>
        
        <Link to="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Product;
