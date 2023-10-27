/* eslint-disable react/no-unescaped-entities */
import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-8 items-center pt-32 pb-28 lg:pb-48">
                <div className="flex-1 relative">
                    <img className="w-[490px] " src={person} alt="Person" />
                    <img className="w-[340px] border-[5px] border-white absolute -bottom-24 right-44" src={parts} alt="Parts" />
                </div>
                <div className="flex-1 mt-32 lg:mt-0">
                    <p className="text-primary-myPrimaryColor font-bold text-lg">About Us</p>
                    <h1 className="text-4xl font-bold dark:text-white">We are qualified & of experience in this field</h1>
                    <p className="pt-6 text-xl dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6 text-xl dark:text-white">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="flex gap-5 items-center">
                        <Link className="btn border-2 hover:border-primary-myPrimaryColor hover:bg-primary-myPrimaryColor border-primary-myPrimaryColor bg-primary-myPrimaryColor text-white rounded-md capitalize font-semibold text-base tracking-[2px]">Get More Info</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;