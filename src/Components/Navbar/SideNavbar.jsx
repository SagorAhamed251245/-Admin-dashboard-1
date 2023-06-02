import { FaChartPie, FaChartBar, FaBox, FaFilter, FaCcPaypal } from 'react-icons/fa';
import { TbEaseInOutControlPoints } from 'react-icons/tb';
import {  NavLink } from 'react-router-dom';
const SideNavbar = () => {
    return (
        <div className="bg-[#4E9BFF] w-[60px] ">
            <div className="p-3  pt-7 flex  flex-col  gap-10 items-center w-full h-full ">
                <NavLink>
                    <FaChartBar></FaChartBar>
                </NavLink>

                <NavLink >

                    <FaChartPie className='text-white'></FaChartPie>
                </NavLink>
                <NavLink>
                    <FaBox></FaBox>
                </NavLink>
                <NavLink>
                    <FaFilter></FaFilter>
                </NavLink>
                <NavLink>
                    <FaCcPaypal></FaCcPaypal>
                </NavLink>
                <NavLink>
                    <TbEaseInOutControlPoints></TbEaseInOutControlPoints>
                </NavLink>


            </div>
        </div>
    );
};

export default SideNavbar;