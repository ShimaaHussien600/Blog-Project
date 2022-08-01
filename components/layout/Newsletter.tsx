import React, { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const submitContact = async (event) => {
        event.preventDefault();
        setEmail("");
        toast("لقد تم الاشتراك في النشره البريديه بنجاح")
    };
    return (
        <section className="bg-gray-light mt-20 h-50 text-center justify-center items-center">
            <div className="flex flex-col w-5/6 mx-auto py-5 text-center justify-center items-center">
                <p className="py-2 w-full text-center text-gray-dark text-lg">اشترك في النشرة البريدية</p>
                <p className="py-2 w-full text-center text-gray-txt text-xbase">وكن أول من يعلم عن كل جديد في عالم التجارة الالكترونية</p>
                <form action="/send-data-here" method="post" onSubmit={submitContact}>
                    <div className="flex sm:flex-row flex-col w-full items-center justify-center">
                        <div className="flex flex-row sm:w-96 w-full items-center justify-start  bg-white rounded p-3">
                            <BsEnvelope color="#FF9F4B" />
                            <input type="email" id="email-address-icon" value={email} onChange={onChangeEmail} className="w-full text-gray-900 text-sm pr-3 outline-none" placeholder="البريد الإلكتروني" required />
                        </div>
                        <button className='px-10 py-3 my-4 sm:w-auto w-full rounded bg-green text-sm text-white'>اشتراك</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </section>
    )
} 