import { useState } from "react";
import { useOutletContext } from 'react-router-dom';
import styles from "./ItemCard.module.css";


function ItemCard({ item }) {
  const { cart, setCart } = useOutletContext();
  const [quantity, setQuantity] = useState(1);


  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, { ...item, quantity }]);
  };

  const placeholderImage = "https://placehold.co/400";

  const changeQuantity = (step) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + step));
  };

  return (
    <div className={styles.Card}>
      <img
        className={styles.CardImage}
        src={item.image || placeholderImage}
        alt={item.description}
        loading="lazy"
      />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <div className={styles.QuantityInput}>
        <button className={styles.Arrow} onClick={() => changeQuantity(-1)}>
          &#9664;
        </button>
        <input
          type="number"
          className="quantity"
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.max(1, parseInt(e.target.value) || 1))
          }
          min="1"
        />
        <button className={styles.Arrow} onClick={() => changeQuantity(1)}>
          &#9654;
        </button>
      </div>
	  <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default ItemCard;
