import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center text-center">
           <div>
                <h1 className="text-5xl">404</h1>
                <br /><br />
                <Link btn to={'/'}> <button>Go back to home</button> </Link>
           </div>
        </div>
    );
};

export default ErrorPage;