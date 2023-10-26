import { Link } from "react-router-dom"
import slide1 from "../../assets/images/banner/1.jpg"
import slide2 from "../../assets/images/banner/2.jpg"
import slide3 from "../../assets/images/banner/3.jpg"
import slide4 from "../../assets/images/banner/4.jpg"
import slide5 from "../../assets/images/banner/5.jpg"
import slide6 from "../../assets/images/banner/6.jpg"

const Slider = () => {
    return (
        <>
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide1} className="w-full h-auto" />
                    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[500px] flex items-center pl-10">
                        <div className="w-[525px]">
                            <h1 className="text-white text-5xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="text-white py-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <Link className="btn border-2 hover:border-primary hover:bg-primary border-primary bg-primary text-white rounded-md capitalize font-semibold text-base tracking-[2px]">Discover More</Link>
                                <a className="btn border-2 hover:border-primary border-white text-white hover:bg-primary hover:text-white capitalize font-semibold text-base tracking-[2px]">Latest Project </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 justify-end left-5 right-5 bottom-7">
                        <a href="#slide6" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full h-auto" />
                    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[500px] flex items-center pl-10">
                        <div className="w-[525px]">
                            <h1 className="text-white text-5xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="text-white py-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <Link className="btn border-2 hover:border-primary hover:bg-primary border-primary bg-primary text-white rounded-md capitalize font-semibold text-base tracking-[2px]">Discover More</Link>
                                <a className="btn border-2 hover:border-primary border-white text-white hover:bg-primary hover:text-white capitalize font-semibold text-base tracking-[2px]">Latest Project </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 justify-end left-5 right-5 bottom-7">
                        <a href="#slide1" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full h-auto" />
                    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[500px] flex items-center pl-10">
                        <div className="w-[525px]">
                            <h1 className="text-white text-5xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="text-white py-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <Link className="btn border-2 hover:border-primary hover:bg-primary border-primary bg-primary text-white rounded-md capitalize font-semibold text-base tracking-[2px]">Discover More</Link>
                                <a className="btn border-2 hover:border-primary border-white text-white hover:bg-primary hover:text-white capitalize font-semibold text-base tracking-[2px]">Latest Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 justify-end left-5 right-5 bottom-7">
                        <a href="#slide2" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slide4} className="w-full h-auto" />
                    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[500px] flex items-center pl-10">
                        <div className="w-[525px]">
                            <h1 className="text-white text-5xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="text-white py-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <Link className="btn border-2 hover:border-primary hover:bg-primary border-primary bg-primary text-white rounded-md capitalize font-semibold text-base tracking-[2px]">Discover More</Link>
                                <a className="btn border-2 hover:border-primary border-white text-white hover:bg-primary hover:text-white capitalize font-semibold text-base tracking-[2px]">Latest Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 justify-end left-5 right-5 bottom-7">
                        <a href="#slide3" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❮</a>
                        <a href="#slide5" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={slide5} className="w-full h-auto" />
                    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[500px] flex items-center pl-10">
                        <div className="w-[525px]">
                            <h1 className="text-white text-5xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="text-white py-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <Link className="btn border-2 hover:border-primary hover:bg-primary border-primary bg-primary text-white rounded-md capitalize font-semibold text-base tracking-[2px]">Discover More</Link>
                                <a className="btn border-2 hover:border-primary border-white text-white hover:bg-primary hover:text-white capitalize font-semibold text-base tracking-[2px]">Latest Project </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 justify-end left-5 right-5 bottom-7">
                        <a href="#slide4" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❮</a>
                        <a href="#slide6" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={slide6} className="w-full h-auto" />
                    <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-[500px] flex items-center pl-10">
                        <div className="w-[525px]">
                            <h1 className="text-white text-5xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h1>
                            <p className="text-white py-6 text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className="flex gap-5 items-center">
                                <Link className="btn border-2 hover:border-primary hover:bg-primary border-primary bg-primary text-white rounded-md capitalize font-semibold text-base tracking-[2px]">Discover More</Link>
                                <a className="btn border-2 hover:border-primary border-white text-white hover:bg-primary hover:text-white capitalize font-semibold text-base tracking-[2px]">Latest Project </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-4 justify-end left-5 right-5 bottom-7">
                        <a href="#slide5" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-primary text-white border border-primary hover:bg-white hover:text-black hover:border-white">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;