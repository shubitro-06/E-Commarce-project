import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from './RootLayOut';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';

const router = createBrowserRouter([
   {path: "/",
    Component: RootLayOut,
    children: [
      { index: true, Component: Home },
      { path: "Shop", Component: ProductPage },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
