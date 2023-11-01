/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logoWhite from "../assets/images/logo/logo-white.png"

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 text-white dark:text-white grid grid-cols-2 lg:grid-cols-5 gap-8">
                <nav className="col-span-2">
                    <Link> <img className="w-20" src={logoWhite} alt="Logo" /> </Link>
                    <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </nav>
                <nav>
                    <header className="text-2xl mb-5">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="text-2xl mb-5">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="text-2xl mb-5">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </>
    );
};

export default Footer;