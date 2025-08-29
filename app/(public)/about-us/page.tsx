import { NextPage } from 'next';
import Aboutus from "@/components/Aboutus"
import ProgressBarContainer from '@/components/ProgressBarContainer';
import StatsContainer from '@/components/StatsContainer';
import CustomersReviews from '@/components/CustomersReviews';
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const Home: NextPage = () => {
  return (
    <>
    <Header/>
    <div>
      <Aboutus/>
    </div>
    
    <div>
      <StatsContainer />
    </div>
    <div>
      <CustomersReviews/>
    </div>
    <div>
      <ProgressBarContainer />
    </div>
    <Footer/>

    </>
  );
};

export default Home;
