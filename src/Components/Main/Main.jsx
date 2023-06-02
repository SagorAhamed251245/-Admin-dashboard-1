import { Outlet } from "react-router-dom";
import SideNavbar from "../Navbar/SideNavbar";
import TopNavbar from "../Navbar/TopNavbar";


const Main = () => {
    return (
        <div className="flex flex-row">
            <SideNavbar></SideNavbar>
            <div className="w-full">
                <TopNavbar></TopNavbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;