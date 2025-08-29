import React from 'react';
import ChooseDepartment from '@/components/ChooseDepartment';
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Home: React.FC = () => {
  return (
    <div>
      <Header/>
      <ChooseDepartment />
      <Footer/>
    </div>
  );
};

export default Home;

