import React, { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import CommentItem from "../../components/CommentItem";
import Loader from "../../components/loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let blogsData = require('../../services/articlesData.json');

function Article() {
    const response = blogsData;
    const data = JSON.parse(JSON.stringify(response));
    const article = data?.mainBlog

    const [newComment, setNewComment] = useState({});
    const [articleDetails, setArticleDetails] = useState(article);

    const paragraph = (articleDetails?.paragraph).split("\n")
    const content = (articleDetails?.content).split("\n")

    const [state, setState] = useState({
        email: "",
        message: "",
        name: ""
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }
    const submitContact = async (event) => {
        event.preventDefault();
        setState({
            email: "",
            message: "",
            name: ""
        });
        const { name, message } = event.target

        let newComment = {
            "name": name.value,
            "time": "قليل",
            "comment": message.value
        };
        setNewComment(newComment);
        (articleDetails?.comments).push(newComment)
        toast.success("لقد تم ارسال تعليقك")
    };

    useEffect(() => {
        const isEmpty = Object.keys(newComment).length === 0;
        let newArticleData = articleDetails
        if (!isEmpty) {
            (newArticleData?.comments).push(newComment)
            setArticleDetails(newArticleData)
        }
    }, [newComment])

    const isEmpty = Object.keys(articleDetails).length === 0;

    return (
        <div>
            {!isEmpty ?
                <div className="w-full justify-center items-center bg-gray-baby">
                    <div className="w-full sm:h-[315px] h-[260px] flex flex-col justify-center items-center bg-cover bg-[url('https://imgs.developpaper.com/imgs/20211130144758750.png')]">
                        <div className="sm:w-5/6 w-11/12 justify-start">
                            <p className="sm:w-9/12 w-full sm:text-bigxl text-sxl text-white py-5">{articleDetails?.title}</p>
                        </div>
                        <div className="w-5/6 flex flex-row items-center justify-start">
                            <div className="w-10 h-10 flex rounded-full my-2 justify-center items-center overflow-hidden shadow-lg">
                                <img className="w-full h-full bg-cover overflow-hidden shadow-lg"
                                    src="https://img.favpng.com/25/6/13/patrick-dempsey-derek-shepherd-grey-s-anatomy-patrick-star-dr-mark-sloan-png-favpng-fkGHcw18tmKFdZKSJUi2TSUdA.jpg"></img>
                            </div>
                            <span className="text-white text-sm mx-2 my-5">بواسطة / {articleDetails?.author}  |  منذ  :{articleDetails?.time}</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div className="sm:w-4/6 w-11/12 flex justify-center items-center bg-white rounded my-5 py-5">
                            <div className="w-11/12 flex flex-col justify-center">
                                <div className="w-full sm:h-[350px] flex rounded my-2 justify-center items-center overflow-hidden shadow-lg">
                                    <img className="w-full bg-cover"
                                        src={articleDetails?.img1} />
                                </div>
                                <div className="my-5">
                                    {paragraph.map(item =>
                                        <h1 className="text-xbase text-gray-txt2">
                                            {item}
                                            <br />
                                        </h1>
                                    )}
                                </div>
                                <div className="border-r-2 border-green p-2 justify-start">
                                    <p className="text-lg">{articleDetails?.subTitle1}</p>
                                </div>
                                <div className="my-5">
                                    {paragraph.map(item =>
                                        <h1 className="text-xbase text-gray-txt2">
                                            {item}
                                            <br />
                                        </h1>
                                    )}
                                </div>
                                <div className="border-r-2 border-green p-2 justify-start">
                                    <p className="text-lg">{articleDetails?.subTitle1}</p>
                                </div>
                                <div className="w-full sm:h-[400px] flex rounded my-2 justify-center items-center overflow-hidden shadow-lg">
                                    <img className="w-full bg-cover"
                                        src={articleDetails?.img2} />
                                </div>
                                <div className="my-5">
                                    {content.map(item =>
                                        <h1 className="text-xbase text-gray-txt2">
                                            {item}
                                            <br />
                                        </h1>
                                    )}
                                </div>
                                <div className="w-full flex sm:flex-row flex-col border-y border-light-gray py-4 mb-2 justify-between items-center">
                                    <div className="flex flex-row my-2">
                                        {(articleDetails?.hashtags).map(item =>
                                            <div className="rounded-full bg-gray-light p-2 mx-1 flex justify-center items-center">
                                                #{item}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-row my-2">
                                        <div className="w-8 h-8 rounded-full border border-light-gray mx-1 flex justify-center items-center">
                                            <FaFacebookF color="#404343" />
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-light-gray mx-1 flex justify-center items-center">
                                            <FaTwitter color="#404343" />
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-light-gray mx-1 flex justify-center items-center">
                                            <FaLinkedinIn color="#404343" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col my-2">
                                    <p className="text-lg border-r-2 border-green p-2 ">التعليقات ( {(articleDetails?.comments).length} )</p>
                                    {(articleDetails?.comments).map(item =>
                                        <CommentItem commentItem={item} />
                                    )}
                                </div>
                                <p className="text-lg border-r-2 border-green p-2 my-4 ">كن اول من يعلق</p>
                                <form action="/send-data-here" method="post" onSubmit={submitContact}>

                                    <label htmlFor="message" className="block mb-2 text-sm text-black">اكتب تعليقك</label>
                                    <textarea id="message" name="message" rows={4} onChange={handleChange} value={state.message} className="block p-2.5 w-full text-sm text-black rounded-sm border border-gray-border dark:placeholder-gray-400 dark:text-white"
                                        placeholder="برجاء كتابه التعليق الخاص بك" required />

                                    <div className="flex flex-row justify-between items-center">
                                        <div className="mb-6 w-2/5 gab-4">
                                            <label htmlFor="name" className="block mb-2 text-sm text-black">الاسم</label>
                                            <input type="name" name="name" id="name" onChange={handleChange} value={state.name} className="block p-2.5 w-full text-sm text-black rounded-sm border border-gray-border dark:placeholder-gray-400 dark:text-white"
                                                placeholder="برجاء ادخال الاسم" required />
                                        </div>

                                        <div className="mb-6 w-2/5 gab-4">
                                            <label htmlFor="email" className="block mb-2 text-sm text-black">البريد الالكترونى</label>
                                            <input type="email" name="email" id="email" onChange={handleChange} value={state.email} className="block p-2.5 w-full text-sm text-black rounded-sm border border-gray-border dark:placeholder-gray-400 dark:text-white"
                                                placeholder="برجاء ادخال البريد الالكترونى" required />
                                        </div>
                                    </div>

                                    <button type="submit" className="px-10 py-3 my-4 sm:w-auto w-full rounded bg-green text-sm text-white">أضف تعليقك</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
                :
                <Loader isLoading />
            }
        </div>
    )
}

export default Article