/* eslint-disable react/no-unescaped-entities */
import Breadcrumb from "../breadcrumb/Breadcrumb";
import img1 from "../../assets/images/services/1.jpg"
import img2 from "../../assets/images/services/2.jpg"
import img3 from "../../assets/images/services/3.jpg"
import img4 from "../../assets/images/services/4.jpg"

const Blogs = () => {
    return (
        <>
            <Breadcrumb routeText="Blog" routeLink="/blog"></Breadcrumb>
            

            <div className="container mx-auto p-4">
                {/* Blog Post 1 */}
                <div className="mb-4">
                    <div className="bg-white p-4 rounded shadow">
                        <img src={img1} alt="Blog Post 1" className="mb-2 rounded-lg w-full h-96 object-cover" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">The Importance of Regular Car Maintenance</h2>
                        <p className="text-gray-600">
                            Regular car maintenance is a crucial aspect of car ownership. It involves routine checks and services that keep your vehicle running smoothly and prevents costly repairs down the road. Regular maintenance includes oil changes, brake inspections, tire rotations, and more. Neglecting maintenance can lead to decreased performance, reduced fuel efficiency, and even safety risks. In this blog post, we'll explore the importance of regular car maintenance and the key tasks every car owner should perform.
                        </p>
                        <a href="#" className="mt-2 block p-2 rounded bg-red-500 hover:bg-red-700 text-center text-white">Read More</a>
                    </div>
                </div>

                {/* Blog Post 2 */}
                <div className="mb-4">
                    <div className="bg-white p-4 rounded shadow">
                        <img src={img2} alt="Blog Post 2" className="mb-2 rounded-lg w-full h-96 object-cover" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">The Ultimate Guide to Engine Oil Changes</h2>
                        <p className="text-gray-600">
                            Engine oil changes are a fundamental part of car maintenance. They ensure that your engine runs smoothly and efficiently, preventing wear and tear on critical components. In this comprehensive guide, we'll cover everything you need to know about changing your car's engine oil. You'll learn about the benefits of regular oil changes, the steps involved in the process, and the recommended oil types for different vehicles. By the end of this guide, you'll be well-equipped to perform this essential maintenance task or understand the process when it's done by a professional.
                        </p>
                        <a href="#" className="mt-2 block p-2 rounded bg-red-500 hover:bg-red-700 text-center text-white">Read More</a>
                    </div>
                </div>

                {/* Blog Post 3 */}
                <div className="mb-4">
                    <div className="bg-white p-4 rounded shadow">
                        <img src={img3} alt="Blog Post 3" className="mb-2 rounded-lg w-full h-96 object-cover" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Top Signs Your Car Needs Brake Service</h2>
                        <p className="text-gray-600">
                            Your car's brakes play a crucial role in ensuring your safety on the road. However, over time, they may show signs of wear and require servicing. In this blog post, we'll highlight the top signs that indicate your car's brakes may need attention. Whether it's squeaky noises, reduced braking performance, or warning lights on your dashboard, recognizing these signs is essential. We'll also discuss why prompt action is critical when it comes to brake service. Neglecting brake issues can lead to dangerous situations on the road, making brake maintenance a top priority for every car owner.
                        </p>
                        <a href="#" className="mt-2 block p-2 rounded bg-red-500 hover.bg-red-700 text-center text-white">Read More</a>
                    </div>
                </div>

                {/* Blog Post 4 */}
                <div className="mb-4">
                    <div className="bg-white p-4 rounded shadow">
                        <img src={img4} alt="Blog Post 4" className="mb-2 rounded-lg w-full h-96 object-cover" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">The Benefits of Regular Tire Maintenance</h2>
                        <p className="text-gray-600">
                            Your car's tires are the only point of contact with the road, making their maintenance essential for safety and performance. In this blog post, we'll explore the benefits of regular tire maintenance. Proper tire care can improve fuel efficiency, enhance handling and braking, and extend the life of your tires. We'll cover tire pressure checks, rotations, and alignment to help you understand the key aspects of tire maintenance. Whether you're a car enthusiast or a regular driver, knowing how to care for your tires will lead to a smoother and safer driving experience.
                        </p>
                        <a href="#" className="mt-2 block p-2 rounded bg-red-500 hover:bg-red-700 text-center text-white">Read More</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;

