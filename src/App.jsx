import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

import styles from './App.module.css'

function App() {
  const [cart, setCart] = useState([]);

  return (
    //#root
    <>
      <nav>
        <Link className={styles.navLink} to="/">About</Link>
        <Link className={styles.navLink} to="/shop">Shop</Link>
        <Link className={styles.navLink} to="/cart">Cart</Link>
      </nav>
      <header>
        <h1>ShopCart App - I'm wrapped in a div, "header"</h1>
      </header>
      <main>
        <Outlet context={{ cart, setCart }} /> {/* The current route content will render here */}
      </main>
      <footer>Created by Orz <a href='https://github.com/orzcode' target='_blank'><i className='fa-brands fa-github'></i></a>
      </footer>
    </>
  );
}

export default App
