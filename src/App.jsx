import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './About.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
   },
  {
    path: "shop",
    element: <Shop />,
  },
    {
    path: "cart",
    element: <Cart />,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
      <RouterProvider router={router} />
      </div>

    </>
  )
}

export default App
