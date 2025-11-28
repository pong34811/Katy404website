import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";


export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      {/* Outlet ใช้ flex-grow เพื่อขยายเต็มพื้นที่ที่เหลือ */}
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}