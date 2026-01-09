import React from 'react';
import Navbar from '../../component/Header/Navbar';
import Footer from '../../component/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;