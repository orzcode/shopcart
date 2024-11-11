import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

import './App.module.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    //#root
    <>
      <nav>
        <Link to="/">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <header>
        <h1>ShopCart App - I'm wrapped in a div, "header"</h1>
      </header>
      <main>
        <Outlet /> {/* The current route content will render here */}
      </main>
      <footer>Created by Orz <a href='https://github.com/orzcode' target='_blank'><i className='fa-brands fa-github'></i></a>
      </footer>
    </>
  );
}

export default App
