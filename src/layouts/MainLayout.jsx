import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ScrollToTop from "../components/shared/ScrollToTop";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop/>
      <ToastContainer/>
      <Navbar/>
      <div className="flex-1"><Outlet/></div>
      <Footer/>
    </div>
  )
}

export default MainLayout