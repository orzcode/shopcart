import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import styles from './Shop.module.css';

function Shop() {
  const [itemsArray, setItemsArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Initial state is loading

  // Fetch items when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery', { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setItemsArray(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false)); // Set loading to false only after fetch completes
  }, []);

  return (
    <div className={styles.Shop}>
      <h2>Shop</h2>
      <div className={styles.ShopCards}>
        {loading ? (
          <div>Loading...</div> // Show loading while fetching data
        ) : error ? (
          <div>Error: {error}</div> // Show error if fetch fails
        ) : (
          itemsArray.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default Shop;
