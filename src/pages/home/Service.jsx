import { BsArrowRight } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, price, title, _id } = service;
    return (
        <div className="p-4 border rounded shadow">
            <Link to={`/service/${_id}`}>
                <img className="cursor-pointer transform scale-100 hover:scale-105 transition-transform duration-500 ease-in-out" src={img} alt="Services image" />
            </Link>
            <Link to={`/service/${_id}`}>
                <h1 className="text-2xl font-medium py-5 dark:text-white hover:text-primary-myPrimaryColor"> {title} </h1>
            </Link>
            <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-primary-myPrimaryColor">Price : ${price}</p>
                <Link to={`/service/${_id}`}>
                    <p className="text-xl font-semibold text-primary-myPrimaryColor"><BsArrowRight></BsArrowRight></p>
                </Link>
            </div>
        </div>
    );
};

export default Service;

Service.propTypes = {
    service: PropTypes.object
};

