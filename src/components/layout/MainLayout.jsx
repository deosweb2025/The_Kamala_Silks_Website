import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';
import ScrollToTop from '../common/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingCallButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
