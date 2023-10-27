import { useContext } from "react";
import { authContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const {user, loading } = useContext(authContext);

    if (loading){
        return <div className="flex justify-center mt-10"><span className="loading loading-spinner loading-lg"></span></div>
    }

    return (
        <>
            {
                user ? children : <Navigate to={'/login'}></Navigate>
            }
        </>
    );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
};

