import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className="py-[100px]">
           <Outlet></Outlet>
           </div>
        
          <Footer></Footer>
          <ScrollRestoration />
        </div>
    );
};

export default MainLayout;