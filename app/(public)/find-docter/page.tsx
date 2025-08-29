import DoctorsDetails from "@/components/DoctorsDetails";
import DoctorState from "@/components/DoctorState"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const HomePage = () => {
  return (
    <>
    <Header/>
    <div>
      <DoctorState/>
    </div>
    <div>
      <DoctorsDetails/>
    </div>
    <Footer/>
    </>
  );
};

export default HomePage;