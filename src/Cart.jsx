import { useOutletContext } from 'react-router-dom';

function Cart() {
	const { cart, setCart } = useOutletContext();
	const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

	return (
		<div className='cartBox'>
			<h1>Cart</h1>
			<table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
		{cart.length === 0 ? (<p>Empty cart - canvas some goods!</p>) : (cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          )))}
    

        </tbody>
      </table>
      <div className='totalCost'>
        <h2>Total: ${totalCost.toFixed(2)}</h2>
      </div>
      <button onClick={() => alert('Proceeding to checkout')}>Checkout</button>
		</div>
	)
}

export default Cart