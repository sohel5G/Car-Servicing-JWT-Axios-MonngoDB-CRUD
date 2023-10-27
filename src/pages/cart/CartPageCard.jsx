

const CartPageCard = () => {

    return (
        <>
           <div className="flex border px-3">
                <div className="text-center px-2 py-3 flex justify-center items-center">
                    <img className="w-20" src='' alt="" />
                </div>
                <div className="flex-1 text-center px-2 py-3 flex justify-center items-center">
                    <h1>title</h1>
                </div>
                <div className="flex-1 text-center px-2 py-3 flex justify-center items-center">
                    <h1>brand</h1>
                </div>
                <div className="flex-1 text-center px-2 py-3 flex justify-center items-center">
                    <h1>234</h1>
                </div>
                <div className="text-center px-2 py-3 flex justify-center items-center">
                    <h1><button  className="py-2 px-5 rounded-full text-primaryColor">X</button></h1>
                </div>
           </div>
        </>
    )
};

export default CartPageCard;


