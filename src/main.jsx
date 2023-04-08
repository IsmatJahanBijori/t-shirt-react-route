import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Review from './components/Review/Review';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('tShirts.json')
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
