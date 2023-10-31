import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../providers/AuthProviders";
import axios from "axios";


const Checkout = () => {
    const service = useLoaderData();
    const { user } = useContext(authContext);

    const handleBookService = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const dueAmount = form.dueAmount.value;
        const comments = form.comments.value;
        const serviceRequest = {
            serviceName: service.title,
            serviceId: service._id,
            serviceImg: service.img,
            customerName: name,
            date,
            email,
            dueAmount,
            comments
        }

        axios.post('https://car-servicing-server-zeta.vercel.app/bookings', serviceRequest)
            .then(res => console.log(res.data))

    }

    return (
        <>

            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                        Book Service : {service.title}
                    </h2>
                    <form onSubmit={handleBookService}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                            <div className="w-full">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    defaultValue={user?.displayName}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="date"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Price
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    defaultValue={user.email}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="dueAmount"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Due amount
                                </label>
                                <input
                                    type="number"
                                    name="dueAmount"
                                    id="dueAmount"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    defaultValue={service?.price}
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Write your comments
                                </label>
                                <textarea
                                    name="comments"
                                    id="description"
                                    rows={8}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Write your comments"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <input
                                type="submit"
                                value="Book Now"
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
                                cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
            </section>


        </>
    );
};

export default Checkout;
