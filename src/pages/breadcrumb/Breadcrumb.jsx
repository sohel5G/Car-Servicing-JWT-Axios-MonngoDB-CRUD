import { Link } from "react-router-dom";
import breadcrumb from "../../assets/images/checkout/checkout.png"
import PropTypes from 'prop-types';

const Breadcrumb = ({routeText, routeLink}) => {
    return (
        <>
            <div className="bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${breadcrumb})`}}>
                <div className="bg-[#0000004f] h-56 md:h-72 lg:h-96 relative flex items-center">
                    <h1 className="text-3xl md:text-5xl text-white font-bold ml-2 md:ml-9 lg:ml-32"> {routeText} </h1>
                    <div style={{ clipPath:"polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)"}} className="absolute py-2 px-14  bottom-0 left-1/2 -ml-28 bg-primary-myPrimaryColor">
                        <span className="text-white"> <Link className="hover:underline" to={'/'}>Home</Link> / <Link className="hover:underline" to={`${routeLink}`}>{routeText}</Link> </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;
Breadcrumb.propTypes = {
    routeText: PropTypes.string,
    routeLink: PropTypes.string
};
