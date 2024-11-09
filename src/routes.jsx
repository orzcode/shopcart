import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './About';
import Shop from './Shop';
import Cart from './Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // App Layout with <Outlet /> where children render
    children: [
      { path: "/", element: <About /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> }
    ]
  }
]);

export default router;
