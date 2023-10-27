/* eslint-disable react/no-unescaped-entities */

import Product from "./Product";

const Products = () => {
    return (
        <>
            <div className="text-center lg:w-2/4 mx-auto pt-7">
                <p className="text-primary-myPrimaryColor font-bold text-lg">Popular Products</p>
                <h1 className="text-4xl font-bold dark:text-white"> Browse Our Products </h1>
                <p className="pt-6 text-xl dark:text-white"> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-14">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>

            <div className="pb-14 text-center">
                <a className="btn border-2 hover:border-primary-myPrimaryColor border-primary-myPrimaryColor text-primary-myPrimaryColor hover:bg-primary-myPrimaryColor hover:text-white capitalize font-semibold text-base tracking-[2px]">More Products</a>
            </div>
        </>
    );
};

export default Products;

