import { Link, NavLink } from "react-router-dom";
import useThemeMode from "../hooks/useThemeMode";
import LogoDark from "../assets/images/logo/logo-black.png";
import logoWhite from "../assets/images/logo/logo-white.png"
import "./header.css";

const Header = () => {
    const { changeThemeMode, themeMode } = useThemeMode();

    const navItems =
        <>
            <li className="my-5"> <NavLink className="dark:text-white py-2 px-3 rounded-md font-medium hover:bg-primary hover:text-white" to={'/'}> Home </NavLink> </li>
            <li className="my-5"> <NavLink className="dark:text-white py-2 px-3 rounded-md font-medium hover:bg-primary hover:text-white" to={'/about'}> About </NavLink> </li>
            <li className="my-5"> <NavLink className="dark:text-white py-2 px-3 rounded-md font-medium hover:bg-primary hover:text-white" to={'/services'}> Services </NavLink> </li>
            <li className="my-5"> <NavLink className="dark:text-white py-2 px-3 rounded-md font-medium hover:bg-primary hover:text-white" to={'/blog'}> Blog </NavLink> </li>
            <li className="my-5"> <NavLink className="dark:text-white py-2 px-3 rounded-md font-medium hover:bg-primary hover:text-white" to={'/contact'}> Contact </NavLink> </li>
            <li className="my-5"> <span className="py-2 px-3 rounded-md font-medium cursor-pointer" onClick={changeThemeMode}>{themeMode === 'light' ? <><b>Dark</b></> : <><b className="dark:text-white">Light</b></>}</span> </li>
        </>

    return (
        <>
            <div className="navbar items-center py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden bg-primary text-white hover:bg-primary hover:text-white mr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content w-[220px] shadow-md bg-white dark:bg-slate-700">
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
                <div className="navbar-end">
                    <a className="btn border-2 hover:border-primary border-primary text-primary hover:bg-primary hover:text-white capitalize font-semibold text-base tracking-[2px]">Appointment</a>
                </div>
            </div>
        </>
    );
};

export default Header;