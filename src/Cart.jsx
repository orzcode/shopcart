import { useOutletContext } from 'react-router-dom';
import styles from './Cart.module.css';

function Cart() {
	const { cart, setCart } = useOutletContext();
	const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  
  return (
    <div className={styles.cartBox}>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th className={styles.col1}>Quantity</th>
            <th className={styles.col2}>Item</th>
            <th className={styles.col3}>Price</th>
            <th className={styles.col4}>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan="4">Empty cart - canvas some goods!</td>
            </tr>
          ) : (
            cart.map((item, index) => (
              <tr key={index}>
                <td className={styles.col1}>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10);
                      const updatedCart = cart.map((cartItem, cartIndex) =>
                        cartIndex === index ? { ...cartItem, quantity: newQuantity } : cartItem
                      );
                      setCart(updatedCart);
                    }}
                  />
                </td>
                <td className={styles.col2}>{item.title}</td>
                <td className={styles.col3}>${item.price.toFixed(2)}</td>
                <td className={styles.col4}>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className={styles.totalCost}>
        <h2>Total: ${totalCost.toFixed(2)}</h2>
        <button onClick={() => alert('Proceeding to checkout')}>Checkout</button>
      </div>
      
    </div>
  );
}

export default Cart