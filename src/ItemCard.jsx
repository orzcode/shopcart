import { useState } from "react";
import useFakeAPI from "./FakeStoreAPI";
import styles from "./ItemCard.module.css";

// {
//   "id": 9,
//   "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//   "price": 64,
//   "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//   "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
// }

function ItemCard(props) {
  const [quantity, setQuantity] = useState(1);
  const { fakeItem, error, loading } = useFakeAPI();

  const placeholderImage = "https://placehold.co/400";

  const changeQuantity = (step) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + step));
  };

  
  if (loading || !fakeItem) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className={styles.Card}>
      <img
        className={styles.CardImage}
        src={fakeItem.image || placeholderImage}
        alt={fakeItem.description}
        loading="lazy"
      />
      <p>{fakeItem.title}</p>
      <p>${fakeItem.price}</p>
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
