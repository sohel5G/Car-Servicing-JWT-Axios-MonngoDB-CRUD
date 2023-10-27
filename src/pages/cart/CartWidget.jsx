
import { FaCartArrowDown } from 'react-icons/fa';

const CartWidget = () => {


    return (
        <>
            <div className='flex justify-center items-center gap-1 cursor-pointer hover:text-primary-myPrimaryColor'>
                <div className='relative'>
                    <div className='text-2xl font-medium h-7 w-9 rounded-full flex justify-center items-center -ml-2 mt-1 text-black dark:text-white'>
                        <FaCartArrowDown></FaCartArrowDown>
                    </div>
                    <span className='text-xs font-medium absolute -top-3 -right-2 !text-white bg-primary-myPrimaryColor flex justify-center items-center w-5 h-5 rounded-full'>3</span>
                </div>
                <div>
                    <p className='text-base text-black dark:text-white font-semibold mt-2'> <span>$</span>00 </p>
                </div>
            </div>
        </>
    );
};

export default CartWidget;
