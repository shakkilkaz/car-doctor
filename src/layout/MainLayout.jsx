import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='w-[90%] mx-auto mt-10 items-center'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;