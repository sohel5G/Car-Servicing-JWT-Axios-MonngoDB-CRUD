import PropTypes from 'prop-types';

const Booking = ({ booking, handleDelete, handleConfirm }) => {
    const { serviceImg, serviceName, dueAmount, _id, date, status } = booking;
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <button onClick={() => handleDelete(_id)} className='text-primary-myPrimaryColor py-0 px-1'>X</button>
                    </div>
                </td>
                <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                    <img
                        className="w-14 h-14 rounded-md"
                        src={serviceImg}
                        alt="Services Image"
                    />
                    <div className="pl-3">
                        <div className="text-base font-semibold"> {serviceName} </div>
                    </div>
                </th>
                <td className="px-6 py-4 text-lg font-bold">{dueAmount}</td>
                <td className="px-6 py-4">
                    {date}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center font-bold">
                        {
                            status === 'confirmed' ? <>
                                <span className='text-green-500'>
                                    Confirmed
                                </span>
                            </> :
                            <>
                                <button className='text-black' onClick={() => handleConfirm(_id)}>
                                    Confirm
                                </button>
                            </>
                        }
                        
                    </div>
                </td>
            </tr>
        </>
    );
};

export default Booking;

Booking.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
    handleConfirm: PropTypes.func
};
