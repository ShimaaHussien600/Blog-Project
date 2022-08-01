import React, { useState, useEffect, useRef } from "react";
import { Slider } from "../interfaces/index";
import PreviousIcon from "../components/icons/svgs/PreviousIcon"
import NextIcon from "../components/icons/svgs/NextIcon"


let count = 0;
let slideInterval;

type BlogCarouselProps = {
    sliderData: Slider
}

const BlogCarousel = ({ sliderData }: BlogCarouselProps) => {
    const sliderImgs = sliderData?.imgs
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef<HTMLInputElement>(null);

    const removeAnimation = () => {
        slideRef?.current?.classList?.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        const productsLength = (sliderImgs).length;
        count = (count + 1) % productsLength;
        setCurrentIndex(count);
        slideRef?.current?.classList?.add("fade-anim");
    };
    const handleOnPrevClick = () => {
        const productsLength = (sliderImgs).length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef?.current?.classList?.add("fade-anim");
    };
    const handleClick = (index) => {
        setCurrentIndex(index)
    }

    return (

        <div ref={slideRef} id="indicators-carousel" className="relative w-full" data-carousel="static">

            <div className="overflow-hidden relative w-full h-52 sm:h-96">

                <div className="duration-700 ease-in-out absolute justify-center items-center inset-0 bg-gradient-to-b from-gray-800 to-gray-500 overflow-hidden transition-all transform translate-x-0 z-20" data-carousel-item="active">
                <img src={sliderImgs[currentIndex]} className="block absolute bg-cover overflow-hidden top-1/2 left-1/2 w-full mix-blend-overlay -translate-x-1/2 -translate-y-1/2" alt="overlay" />
                </div>

            </div>

            <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2">
                {sliderImgs.map((item, index) =>
                    <button type="button" className={`${currentIndex === index ? "bg-green " : "border border-white"} w-3 h-3 mx-1 rounded-full`} aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"
                        onClick={() => handleClick(index)}
                        key={index.toString()} />
                )}
            </div>

            <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <p className="sm:text-x2l text-sxl text-center text-bold text-white my-2">{sliderData?.header}</p>
                <p className="sm:text-xl text-sm text-center text-white">{sliderData?.body}</p>
            </div>

            <button type="button" className="flex absolute top-0 left-0 sm:left-28 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev=""
                onClick={handleOnPrevClick}>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <PreviousIcon />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="flex absolute top-0 right-0 sm:right-28 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next=""
                onClick={handleOnNextClick}>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <NextIcon />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    );
};

export default BlogCarousel;