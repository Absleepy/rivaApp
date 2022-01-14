import React from 'react';
import Footer from '../components/layout/Footer/Footer';
import Header from '../components/layout/Header/Header';

const MainLayout = ({ children }) => (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );

export default MainLayout;
