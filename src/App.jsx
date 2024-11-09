import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to="/">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <main>
        <Outlet /> {/* The current route content will render here */}
      </main>
    </>
  );
}

export default App
