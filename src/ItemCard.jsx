import { useState } from "react";
import styles from "./ItemCard.module.css";


function ItemCard({ item }) {
  const [quantity, setQuantity] = useState(1);

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
	  <button>Add to Cart</button>
    </div>
  );
}

export default ItemCard;
