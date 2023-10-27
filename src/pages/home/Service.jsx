import service1 from "../../assets/images/services/1.jpg"
import { BsArrowRight } from 'react-icons/bs';

const Service = () => {
    return (
        <div className="p-4 border rounded shadow">
            <img className="cursor-pointer transform scale-100 hover:scale-105 transition-transform duration-500 ease-in-out" src={service1} alt="Services image" />
            <h1 className="text-2xl font-medium py-5 dark:text-white">Electrical System</h1>
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-primary-myPrimaryColor">Price : $20.00</p>
                <p className="text-xl font-semibold text-primary-myPrimaryColor"><BsArrowRight></BsArrowRight></p>
            </div>
        </div>
    );
};

export default Service;

