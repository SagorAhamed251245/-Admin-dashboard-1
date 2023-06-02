import { Outlet } from "react-router-dom";
import SideNavbar from "../Navbar/SideNavbar";
import TopNavbar from "../Navbar/TopNavbar";


const Main = () => {
    return (
        <div className="flex flex-row">
            <SideNavbar></SideNavbar>
            <div className="w-full bg-[#F0F3FD] h-screen">
                <div className="w-[95%] mx-auto">
                <TopNavbar></TopNavbar>
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;