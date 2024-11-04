import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashbord from './components/Dashbord/Dashbord.jsx';
import BooksDetails from './components/BooksDetails/BooksDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
         path:'/books/:bookId',
         loader:()=>fetch('./booksData.json'),
         element:<BooksDetails></BooksDetails>
      },
      {
          path:'/listedbooks',
          element:<ListedBooks></ListedBooks>,
          loader:()=>fetch('./booksData.json')
      },
      {
        path:'/dashbord',
        element:<Dashbord></Dashbord>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer></ToastContainer>
  </StrictMode>,
)
