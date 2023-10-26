import { AiOutlineShoppingCart } from 'react-icons/ai';
// import "./products.css"
import product6 from "../../assets/images/products/6.png"

const Product = () => {
    return (
        <>
            <div className="p-4 border rounded shadow text-center">
                <div className='relative bg-[#F3F3F3] rounded-md flex items-center justify-center group cursor-pointer'>
                    <img className='w-52 mx-auto py-4 transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out' src={product6} alt="Services image" />
                    <p className='cursor-pointer group-hover:block hidden absolute top-5 right-5 text-xl bg-white text-primary hover:bg-primary hover:text-white rounded-full p-3'><AiOutlineShoppingCart></AiOutlineShoppingCart></p>
                </div>
                <h1 className="text-2xl font-bold py-5 dark:text-white hover:text-primary cursor-pointer">Car Engine Plug</h1>
                <p className="text-xl font-bold text-primary">$20.00</p>
            </div>   
        </>
    );
};

export default Product;

