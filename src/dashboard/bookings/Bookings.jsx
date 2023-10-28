import { useContext, useEffect, useState } from "react";
import { authContext } from "../../providers/AuthProviders";
import axios from "axios";
import Booking from "./Booking";

const Bookings = () => {
    const { user } = useContext(authContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/bookings?email=${user.email}`)
            .then((res) => setBookings(res.data));
    }, [user])

    const handleDelete = id => {
        const proceed = confirm('Are you sure, you want to delete this service? ')

        if (proceed) {
            axios.delete(`http://localhost:5000/bookings/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        // axios.get(`http://localhost:5000/bookings?email=${user.email}`)
                        //     .then((res) => setBookings(res.data));

                        const remainBookings = bookings.filter(booking => booking._id !== id)
                        setBookings(remainBookings);
                    }
                })
        }
    }

    const handleConfirm = id => {
        axios.patch(`http://localhost:5000/bookings/${id}`, {status:'confirmed'})
            .then(res => {
                if (res.data.modifiedCount > 0){
                    const remaining = bookings.filter(booking => booking._id !== id);  
                    const confirmedBooking = bookings.find(booking => booking._id === id);
                    confirmedBooking.status = 'confirmed'
                    const newUpdatedBookings = [...remaining, confirmedBooking]
                    setBookings(newUpdatedBookings)
                }
            })
    }


    return (
        <>
            <h1>Total Booked {bookings.length}</h1>

            <div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 ">

                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    <span className="text-sm !font-bold">Service Name</span>
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    <span className="text-sm !font-bold">Total Due</span>
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    <span className="text-sm !font-bold">Date</span>
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    <span className="text-sm !font-bold">Status</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(booking => <Booking key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></Booking>)}
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    );
};

export default Bookings;

