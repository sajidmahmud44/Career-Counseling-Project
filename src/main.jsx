import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './PagesLayout/ErrorPage.jsx';
import Home from './PagesLayout/Home.jsx';
import Profile from './PagesLayout/Profile.jsx';
import ClickDetail from './components/ClickDetail/ClickDetail.jsx';
import AuthLayout from './components/Layouts/AuthLayout.jsx';
import Login from './PagesLayout/Login.jsx';
import Register from './PagesLayout/Register.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
      element: <Home></Home>,
      },
      {
        path: 'servicedetail/:id',
        element: <PrivateRoute>
          <ClickDetail></ClickDetail>
        </PrivateRoute>,
        loader: ()=> fetch('/blog.json')
      },
      {
        path: '/profile',
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ]
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>  
  </StrictMode>,
)
