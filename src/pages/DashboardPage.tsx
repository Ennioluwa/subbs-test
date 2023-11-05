import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  return (
    <div className="min-w-full h-screen bg-white text-text-dark flex flex-col ">
      <Navbar />
      <div className="flex w-full h-screen overflow-hidden mt-20">
        <Sidebar />
        <div className=" w-full px-5 py-8 max-w-7xl mx-auto overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
