import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../breadcrumb/Breadcrumb";

const ServiceDetails = () => {
    const { id } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        axios.get(`https://car-servicing-server-zeta.vercel.app/services/${id}`)
            .then((res) => setService(res.data))
    }, [id])

    return (
        <>
            <Breadcrumb routeText="Service Details" routeLink={`/service/${id}`}></Breadcrumb>
            <div className="pt-6 pb-20">
                <img className="" src={service.img} alt="Services image" />
                <h1 className="text-2xl font-medium py-5 dark:text-white"> {service.title} </h1>

                <p className="text-lg dark:text-white"> {service.description} </p>

                <p className="mt-6 text-xl font-semibold text-primary-myPrimaryColor">Price : ${service.price}</p>

                <Link to={`/checkout/${id}`} className="mt-8 btn border-2 hover:border-primary-myPrimaryColor hover:bg-primary-myPrimaryColor border-primary-myPrimaryColor bg-primary-myPrimaryColor text-white rounded-md capitalize font-semibold text-base tracking-[2px]"> Book Now </Link>

            </div>
        </>
    );
};

export default ServiceDetails;

