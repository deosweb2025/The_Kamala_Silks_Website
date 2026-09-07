import React from 'react';
import Hero from '../components/home/Hero';
import { AboutGlimpse, TrustBanner, ServicesGlimpse, ProductsGlimpse, GalleryGlimpse } from '../components/home/HomeGlimpses';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <AboutGlimpse />
      <TrustBanner />
      <ServicesGlimpse />
      <ProductsGlimpse />
      <GalleryGlimpse />
      <Testimonials />
    </div>
  );
};

export default Home;
