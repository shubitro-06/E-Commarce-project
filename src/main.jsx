import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from './RootLayOut';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
// import { store } from './app/store'
import { Provider } from 'react-redux'
import store from './Store'
import ProductDetails from './ProductDetails';
import AddToCart from './Pages/AddToCart';
import WishList from './Pages/WishList';

const router = createBrowserRouter([
   {path: "/",
    Component: RootLayOut,
    children: [
      { index: true, Component: Home },
      { path: "Shop", Component: ProductPage },
      { path: "Details/:id", Component: ProductDetails },
      { path: "Cart", Component: AddToCart },
      { path: "wishlist", Component: WishList },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />,
    </Provider>,
  </StrictMode>,
)
