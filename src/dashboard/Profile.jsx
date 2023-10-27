import { useContext } from "react";
import { authContext } from "../providers/AuthProviders";

const Profile = () => {

    const { user, userlogOut } = useContext(authContext);

    const handleLogOut = () => {
        userlogOut()
            .then(() => {
                console.log(' Sign-out successful ')
            }).catch(() => {
                console.log('Logout : An error happened')
            });
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center py-10">
                    <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={user?.photoURL || 'https://picsum.photos/200'}
                        alt="Bonnie image"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {user?.displayName}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {user?.email}
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <button
                            onClick={handleLogOut}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-myPrimaryColor rounded-lg hover:bg-primary-myPrimaryColor focus:ring-4 focus:outline-none focus:ring-primary-myPrimaryColor dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Log out
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;