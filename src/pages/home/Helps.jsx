import timetable from "../../assets/icons/001-timetable.png"
import group34 from "../../assets/icons/Group 34.png"
import group35 from "../../assets/icons/Group 35.png"

const Helps = () => {
    return (
        <div className="bg-black flex lg:flex-row flex-col gap-8 justify-around py-20 items-center my-20">
            <div className="flex gap-6 items-center justify-center">
                <div>
                    <img src={timetable} alt="" />
                </div>
                <div>
                    <p className="text-white text-lg">We are open monday-friday</p>
                    <p className="text-white font-semibold text-2xl">7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="flex gap-6 items-center justify-center">
                <div>
                    <img src={group34} alt="" />
                </div>
                <div>
                    <p className="text-white text-lg">Have a question?</p>
                    <p className="text-white font-semibold text-2xl">+2546 251 2658</p>
                </div>
            </div>
            <div className="flex gap-6 items-center justify-center">
                <div>
                    <img src={group35} alt="" />
                </div>
                <div>
                    <p className="text-white text-lg">Need a repair? our address</p>
                    <p className="text-white font-semibold text-2xl">Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Helps;