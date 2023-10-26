/* eslint-disable react/no-unescaped-entities */

import Service from "./Service";

const Services = () => {
    return (
        <>
            <div className="text-center lg:w-2/4 mx-auto pt-7">
                <p className="text-primary font-bold text-lg">Service</p>
                <h1 className="text-4xl font-bold dark:text-white"> Our Service Area </h1>
                <p className="pt-6 text-xl dark:text-white"> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 py-14">
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
            </div>
        </>
    );
};

export default Services;