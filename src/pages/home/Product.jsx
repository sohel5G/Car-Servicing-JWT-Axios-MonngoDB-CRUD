import { AiOutlineShoppingCart } from 'react-icons/ai';
import PropTypes from 'prop-types';

// import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Product = ({product}) => {
    const { image, price, title } = product;
    return (
        <>
            <div className="p-4 border rounded shadow text-center">
                <div className='relative bg-[#F3F3F3] rounded-md flex items-center justify-center group cursor-pointer'>
                    <img className='h-52 mx-auto py-4 transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out' src={image} alt="Services image" />
                    <p className='cursor-pointer group-hover:block hidden absolute top-5 right-5 text-xl bg-white text-primary-myPrimaryColor hover:bg-primary-myPrimaryColor hover:text-white rounded-full p-3'><AiOutlineShoppingCart></AiOutlineShoppingCart></p>
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    </Stack>
                </div>
                <h1 className="text-xl font-bold py-5 dark:text-white hover:text-primary-myPrimaryColor cursor-pointer"> {title} </h1>
                <p className="text-xl font-bold text-primary-myPrimaryColor"> {price} </p>
            </div>
        </>
    );
};

export default Product;

Product.propTypes = {
    product: PropTypes.object
};