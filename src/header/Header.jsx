import { Link, NavLink } from "react-router-dom";
import useThemeMode from "../hooks/useThemeMode";
import LogoDark from "../assets/images/logo/logo-black.png";
import logoWhite from "../assets/images/logo/logo-white.png";
import "./header.css";
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import CartWidget from "../pages/cart/CartWidget";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const { changeThemeMode, themeMode } = useThemeMode();

    const navItems =
        <>
            <li className="my-5"> <NavLink className="dark:text-white py-2 px-3 rounded-md font-medium hover:bg-primary-myPrimaryColor hover:text-white" to={'/'}> Home </NavLink> </li>
            <li className="my-5"> <NavLink className="dark:text-white py-2 px-3 rounded-md font-medium hover:bg-primary-myPrimaryColor hover:text-white" to={'/about'}> About </NavLink> </li>
            <li className="my-5"> <NavLink className="dark:text-white py-2 px-3 rounded-md font-medium hover:bg-primary-myPrimaryColor hover:text-white" to={'/services'}> Services </NavLink> </li>
            <li className="my-5"> <NavLink className="dark:text-white py-2 px-3 rounded-md font-medium hover:bg-primary-myPrimaryColor hover:text-white" to={'/blog'}> Blog </NavLink> </li>
            <li className="my-5"> <NavLink className="dark:text-white py-2 px-3 rounded-md font-medium hover:bg-primary-myPrimaryColor hover:text-white" to={'/contact'}> Contact </NavLink> </li>
           
        </>

    return (
        <>
            <div className="navbar items-center py-4">
                <div className="navbar-start">
                    <div className="dropdown z-50">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden bg-primary-myPrimaryColor text-white hover:bg-primary-myPrimaryColor hover:text-white mr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content w-[220px] shadow-md bg-white dark:bg-gray-900">
                            {navItems}
                        </ul>
                    </div>
                    <Link> {themeMode === 'light' ? <>
                        <img className="w-20" src={LogoDark} alt="Logo" />
                    </> : <>
                        <img className="w-20" src={logoWhite} alt="Logo" />
                    </>} </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-center items-center gap-5 text-lg">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end items-center flex gap-3 md:gap-5">
                    <button className="flex justify-center items-center themeSwitchBtn text-2xl" onClick={changeThemeMode}>
                        {themeMode === 'light' ?
                            <> <span className="text-black hover:text-primary-myPrimaryColor flex items-center gap-1">
                                <MdDarkMode></MdDarkMode>
                            </span>
                            </> :
                            <> <span className="text-white hover:text-primary-myPrimaryColor flex items-center gap-1">
                                <MdLightMode></MdLightMode>
                            </span>
                            </>
                        }
                    </button>

                    <Link to={'login'} className="text-black hover:text-primary-myPrimaryColor dark:text-white text-xl cursor-pointer"> <FaUserAlt></FaUserAlt> </Link>

                    <a className="text-black hover:text-primary-myPrimaryColor dark:text-white text-xl cursor-pointer"> <FaRegCalendarAlt></FaRegCalendarAlt> </a>

                    <CartWidget></CartWidget>
                </div>
            </div>
        </>
    );
};

export default Header;

