import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Login from '../Components/Log/Login';
import Register from '../Components/Register/Register';
import CheckOut from '../Page/CheckOut/CheckOut';


const Root = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:_id',
                element: <CheckOut></CheckOut>
            },
           
        ]
            
    }
])

export default Root;