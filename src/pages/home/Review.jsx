/* eslint-disable react/no-unescaped-entities */
import { Carousel, IconButton } from "@material-tailwind/react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import quote from "../../assets/icons/quote 1.png";
import person1 from "../../assets/icons/parson1.png";
import person2 from "../../assets/icons/parson2.png";

const Review = () => {
    return (
        <>
            <div className="text-center lg:w-2/4 mx-auto pt-14">
                <p className="text-primary font-bold text-lg">Testimonial</p>
                <h1 className="text-4xl font-bold dark:text-white">What Customer Says</h1>
                <p className="pt-6 text-xl dark:text-white"> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>
            <Carousel
                className="py-28"
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="gray"
                        onClick={handlePrev}
                        className="!absolute top-2/4 left-0 -translate-y-2/4 bg-[#E8E8E8] rounded-full hover:bg-primary hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="gray"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-0 -translate-y-2/4 bg-[#E8E8E8] rounded-full hover:bg-primary hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </IconButton>
                )}
            >
                <div className="flex flex-col lg:flex-row gap-8 items-center px-16">
                    <div className="py-5 lg:py-0">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={person1} alt="Person" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Awlad Hossain</h3>
                                    <p className="dark:text-white"><b>Businessman</b></p>
                                </div>
                            </div>
                            <div>
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg py-5 dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Rating className="!text-[#FF912C]" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                    
                    <div className="py-5 lg:py-0">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={person2} alt="Person" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Awlad Hossain</h3>
                                    <p className="dark:text-white"><b>Businessman</b></p>
                                </div>
                            </div>
                            <div>
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg py-5 dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Rating className="!text-[#FF912C]" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex flex-col lg:flex-row gap-8 items-center px-16">
                    <div className="py-5 lg:py-0">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={person1} alt="Person" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Awlad Hossain</h3>
                                    <p className="dark:text-white"><b>Businessman</b></p>
                                </div>
                            </div>
                            <div>
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg py-5 dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Rating className="!text-[#FF912C]" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                    
                    <div className="py-5 lg:py-0">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={person2} alt="Person" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Awlad Hossain</h3>
                                    <p className="dark:text-white"><b>Businessman</b></p>
                                </div>
                            </div>
                            <div>
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg py-5 dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Rating className="!text-[#FF912C]" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex flex-col lg:flex-row gap-8 items-center px-16">
                    <div className="py-5 lg:py-0">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={person1} alt="Person" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Awlad Hossain</h3>
                                    <p className="dark:text-white"><b>Businessman</b></p>
                                </div>
                            </div>
                            <div>
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg py-5 dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Rating className="!text-[#FF912C]" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                    
                    <div className="py-5 lg:py-0">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={person2} alt="Person" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Awlad Hossain</h3>
                                    <p className="dark:text-white"><b>Businessman</b></p>
                                </div>
                            </div>
                            <div>
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg py-5 dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Rating className="!text-[#FF912C]" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex flex-col lg:flex-row gap-8 items-center px-16">
                    <div className="py-5 lg:py-0">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={person1} alt="Person" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Awlad Hossain</h3>
                                    <p className="dark:text-white"><b>Businessman</b></p>
                                </div>
                            </div>
                            <div>
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg py-5 dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Rating className="!text-[#FF912C]" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                    
                    <div className="py-5 lg:py-0">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={person2} alt="Person" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Awlad Hossain</h3>
                                    <p className="dark:text-white"><b>Businessman</b></p>
                                </div>
                            </div>
                            <div>
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg py-5 dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Rating className="!text-[#FF912C]" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex flex-col lg:flex-row gap-8 items-center px-16">
                    <div className="py-5 lg:py-0">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={person1} alt="Person" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Awlad Hossain</h3>
                                    <p className="dark:text-white"><b>Businessman</b></p>
                                </div>
                            </div>
                            <div>
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg py-5 dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Rating className="!text-[#FF912C]" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                    
                    <div className="py-5 lg:py-0">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={person2} alt="Person" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white">Awlad Hossain</h3>
                                    <p className="dark:text-white"><b>Businessman</b></p>
                                </div>
                            </div>
                            <div>
                                <img src={quote} alt="quote" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg py-5 dark:text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div>
                            <Stack spacing={1}>
                                <Rating className="!text-[#FF912C]" name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                </div>
                
                

            </Carousel>
        </>
    );
};

export default Review;

