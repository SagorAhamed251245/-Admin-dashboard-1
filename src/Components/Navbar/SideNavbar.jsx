import { FaChartPie, FaChartBar, FaBox, FaFilter, FaCcPaypal } from 'react-icons/fa';
import { TbEaseInOutControlPoints } from 'react-icons/tb';
import {  NavLink } from 'react-router-dom';
const SideNavbar = () => {
    return (
        <div className="bg-[#4E9BFF] w-[60px] ">
            <div className="p-3  pt-7 flex  flex-col  gap-10 items-center w-full h-full ">
                <NavLink to='/chart' className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}>
                    <FaChartBar></FaChartBar>
                </NavLink>

                <NavLink  to='/' className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}>

                    <FaChartPie className='text-white'></FaChartPie>
                </NavLink>

                <NavLink to='/box' className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}>
                    <FaBox></FaBox>
                </NavLink>

                <NavLink to='/filte' className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}>
                    <FaFilter></FaFilter>
                </NavLink>

                <NavLink to='/payment' className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}>
                    <FaCcPaypal></FaCcPaypal>
                </NavLink>

                <NavLink to='control/' className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}>
                    <TbEaseInOutControlPoints></TbEaseInOutControlPoints>
                </NavLink>


            </div>
        </div>
    );
};

export default SideNavbar;