/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                setProducts(res.data)
            })

    }, [])

    return (
        <>
            <div className="text-center lg:w-2/4 mx-auto pt-7">
                <p className="text-primary-myPrimaryColor font-bold text-lg">Popular Products</p>
                <h1 className="text-4xl font-bold dark:text-white"> Browse Our Products </h1>
                <p className="pt-6 text-xl dark:text-white"> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-14">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

            <div className="pb-14 text-center">
                <a className="btn border-2 hover:border-primary-myPrimaryColor border-primary-myPrimaryColor text-primary-myPrimaryColor hover:bg-primary-myPrimaryColor hover:text-white capitalize font-semibold text-base tracking-[2px]">More Products</a>
            </div>
        </>
    );
};

export default Products;


[
    {
        "title": "Oil Change Service",
        "image": "https://i.ibb.co/RpnNhbD/1.png",
        "description": "Get your car's oil changed with our premium oil and filter replacement service.",
        "price": 49.99
    },
    {
        "title": "Brake Pad Replacement",
        "image": "https://i.ibb.co/171bg0g/2.png",
        "description": "Ensure your car's safety by replacing worn-out brake pads with our high-quality replacements.",
        "price": 79.99
    },
    {
        "title": "Tire Rotation and Balancing",
        "image": "https://i.ibb.co/dM2VTn3/3.png",
        "description": "Extend the lifespan of your tires and improve handling with our tire rotation and balancing service.",
        "price": 39.99
    },
    {
        "title": "Engine Tune-Up",
        "image": "https://i.ibb.co/Hphq2sd/4.png",
        "description": "Maximize your car's performance and fuel efficiency with our comprehensive engine tune-up.",
        "price": 99.99
    },
    {
        "title": "Car Wash and Detailing",
        "image": "https://i.ibb.co/jr9rJnx/5.png",
        "description": "Give your vehicle a sparkling clean look with our car wash and detailing package.",
        "price": 59.99
    },
    {
        "title": "Diagnostic Checkup",
        "image": "https://i.ibb.co/C5vbcxC/6.png",
        "description": "Identify and resolve any issues with your car's systems with our advanced diagnostic checkup.",
        "price": 29.99
    }
]


