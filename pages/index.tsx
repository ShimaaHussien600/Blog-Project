import React, { useState, useEffect, useRef } from "react";
import BlogCarousel from "../components/BlogCarousel";
import RoportCard from "../components/cards/ReportCard"
import { MdArrowBackIosNew } from "react-icons/md";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import OverlayCard from "../components/cards/OverlayCard";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { blogArticlesSelector } from "../features/blog/selectors";
import { getBlogArticlesdata } from "../features/blog/actions";
import { wrapper } from "../app/store";
import Loader from "../components/loader";

let blogsData = require('../services/articlesData.json');

export default function Home(props) {
  const { articles, slider, mainBlog } = props.data
  const [openedTab, setOpenedTab] = useState(1);

  // const dispatch = useAppDispatch();
  // const {
  //   data,
  //   pending,
  //   error,
  // } = useAppSelector(blogArticlesSelector);
  
  const handleTabClick = (e, tab) => {
    setOpenedTab(tab);
  }
  const articlesData = articles.slice(0, 3);
  const articlesData4 = articles.slice(0, 4);
  const isEmptySlider = Object.keys(slider).length === 0;

  return (
    <div className="w-full flex flex-col pt-17 justify-center items-center">
      {!isEmptySlider && <BlogCarousel slider={slider} />}
      {articlesData.length > 0 ?
      <div className="md:w-11/12 w-5/6 justify-center items-center">
        <div className="flex flex-row justify-between items-center mt-12">
          <p className="text-l">الأكثر قراءة</p>
          <div className="flex flex-row items-center">
            <p className="text-xbase mx-2">عرض المزيد</p>
            <MdArrowBackIosNew color="#5DD5C4" />
          </div>
        </div>
        <div className="md:container md:mx-auto grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-5 gap-4">
          {articlesData.map(item =>
            <OverlayCard articleDetails={item} brief />
          )}
        </div>
        <div className="flex sm:flex-row flex-col justify-center md:gap-8 gap-6 items-center border-b border-light-gray sm:px-4 py-10 my-10">
          <RoportCard article={mainBlog} width={"594px"} widthSM={"333px"} />
          <div className="flex flex-col md:gap-8 gap-6 justify-center items-center">
            {articlesData.map(item =>
              <RoportCard article={item} horiz />
            )}
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <OverlayCard articleDetails={articlesData[0]} full />
        </div>
        <div className="flex flex-row w-full justify-between items-center my-5">
          <div className="sm:inline-flex my-5">
            <div className='inline-flex flex-row ml-auto w-auto items-center items-start h-auto'>
              <div className={`${openedTab === 1 ?
                'border-b-2 border-green text-green' : 'text-black'} sm:inline-flex sm:w-auto px-3 py-2 mx-3 font-l2g items-center justify-center hover:text-green`}
                onClick={(e) => handleTabClick(e, 1)}>
                الاكثر مشاهدة
              </div>
              <div className={`${openedTab === 2 ?
                'border-b-2 border-green text-green' : 'text-black'} sm:inline-flex sm:w-auto px-3 py-2 mx-3 font-l2g items-center justify-center hover:text-green`}
                onClick={(e) => handleTabClick(e, 2)}
              >
                الاكثر شهرة
              </div>
              <div className={`${openedTab === 3 ?
                'border-b-2 border-green text-green' : 'text-black'} sm:inline-flex sm:w-auto px-3 py-2 mx-3  font-l2g items-center justify-center hover:text-green`}
                onClick={(e) => handleTabClick(e, 3)}>
                الاكثر قراءة
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 text-l2g">
            <RiArrowRightCircleLine color="#808686" />
            <RiArrowLeftCircleLine color="#808686" />
          </div>

        </div>
        <div className="md:container md:mx-auto grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-5 gap-4">
          {articlesData4.map(item =>
            <RoportCard article={item} width={"270px"} widthSM={"333px"} space />
          )}
        </div>
        <div className="flex sm:flex-row flex-col md:gap-6 gap-4 justify-center items-center sm:px-4 my-10">
          <div className="flex flex-col gap-2 justify-center items-center">
            {articlesData.map(item =>
              <RoportCard article={item} withoutImg />
            )}
          </div>
          <OverlayCard articleDetails={articlesData[0]} big />
        </div>
      </div>
      :
      <Loader isLoading/>
            }
    </div>
  )
}
export async function getServerSideProps(context) {
  // here fetching the articles data from the api using axios or fetch 
    //   const response = await axios.get('https://test/');
    //   const res = await fetch(`https://...`)
    //   const data = await res.json()

    // store.dispatch();

    const response = blogsData;
    const data = JSON.parse(JSON.stringify(response));

    return {
      props: { data }, // will be passed to the page component as props
    }
}
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
    
//   })