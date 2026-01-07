import React from 'react';
import Navbar from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;