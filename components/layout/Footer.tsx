import React from "react";
import Link from 'next/link';
import { BsEnvelope } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Newsletter from './Newsletter';

const Footer = () => {

    return (
        <footer className="bg-gray-light mx-auto justify-center h-72">
            <Newsletter />
            <div className="flex w-full sm:h-24 h-50 my-15 justify-center items-center bg-white">
                <div className="w-5/6 mx-auto flex sm:flex-row flex-col justify-between sm:pb:auto pb-6 items-center">
                    <p className="py-5 sm:w-1/4 w-full text-center text-gray-txt text-sm">جميع الحقوق محفوظة لشركة مدونة 2022</p>
                    <div className="flex w-2/4 justify-center items-center sm:flex-row flex-col">

                        <div className="flex gap-3 sm:justify-center justify-between sm:w-auto w-full items-center">
                            <Link href={"/"}>
                                <a className="w-10 h-10 rounded-full bg-gray-baby mx-1 flex justify-center items-center">
                                    <BsEnvelope color="#888888" />
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className="w-10 h-10 rounded-full bg-gray-baby mx-1 flex justify-center items-center">
                                    <FiFacebook color="#888888" />
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className="w-10 h-10 rounded-full bg-gray-baby mx-1 flex justify-center items-center">
                                    <FiInstagram color="#888888" />
                                </a>
                            </Link>
                            <Link href={"/"}>
                                <a className="w-10 h-10 rounded-full bg-gray-baby mx-1 flex justify-center items-center">
                                    <FiTwitter color="#888888" />
                                </a>
                            </Link>

                        </div>
                        <button className='px-10 py-5 m-4 sm:w-auto w-full rounded bg-orange text-sm text-white'>كن كاتب معنا </button>
                    </div>
                    <p className="text-gray-txt sm:w-1/4 w-full text-center text-sm">الشروط والاحكام</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;