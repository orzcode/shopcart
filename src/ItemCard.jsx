import { useState } from "react";
import styles from "./ItemCard.module.css";

function ItemCard(props) {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (step) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + step));
  };

  return (
    <div className={styles.Card}>
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&q=460"
        alt="Candy"
      />
      <p>Item Name</p>
      <p>$600</p>
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
