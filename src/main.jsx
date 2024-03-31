import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/About/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/About/Contact/Contact.jsx';
import User from './components/About/User/User.jsx';
import UserDetails from './components/About/UserDetailes/UserDetailes.jsx';
import Posts from './components/About/Posts/Posts.jsx';
import PostDetails from './components/About/PostDetailes/PostDetailes.jsx';
import ErrorPage from './components/About/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }, {
        path: '/posts', 
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      }, 
      {
        path: '/post/:postId', 
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
