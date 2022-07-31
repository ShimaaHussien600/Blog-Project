import React, { useState, useEffect, useRef } from "react";
import BlogCarousel from "../components/BlogCarousel";
import RoportCard from "../components/cards/ReportCard"
import { MdArrowBackIosNew } from "react-icons/md";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import OverlayCard from "../components/cards/OverlayCard";

const articlesList = [
  {
    header: "التسويق",
    body: "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    author: "عبدالله عادل"
  },
  {
    header: "التسويق",
    body: "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    author: "عبدالله عادل"
  },
  {
    header: "التسويق",
    body: "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    author: "عبدالله عادل"
  },
  {
    header: "التسويق",
    body: "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    author: "عبدالله عادل"
  },
  {
    header: "التسويق",
    body: "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    author: "عبدالله عادل"
  },
  {
    header: "التسويق",
    body: "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    author: "عبدالله عادل"
  },
  {
    header: "التسويق",
    body: "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    author: "عبدالله عادل"
  },
  {
    header: "التسويق",
    body: "من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021",
    author: "عبدالله عادل"
  }
]

export default function Home() {

  const [openedTab, setOpenedTab] = useState(1);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleTabClick = (e, tab) => {
    // e.preventDefault();
    setOpenedTab(tab);
  }
  const data = articlesList.slice(0, 3);

  return (
    <div className="w-full flex flex-col pt-17 justify-center items-center">
      <BlogCarousel />
      <div className="md:w-11/12 w-5/6 justify-center items-center">
        <div className="flex flex-row justify-between items-center mt-12">
          <p className="text-l">الأكثر قراءة</p>
          <div className="flex flex-row items-center">
            <p className="text-xbase mx-2">عرض المزيد</p>
            <MdArrowBackIosNew color="#5DD5C4" />
          </div>
        </div>
        <div className="md:container md:mx-auto grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-5 gap-4">
          {data.map(item =>
            <OverlayCard artilesData={item} />
          )}
        </div>
        <div className="flex sm:flex-row flex-col justify-center md:gap-8 gap-6 items-center border-b border-light-gray sm:px-4 py-10 my-10">
          <RoportCard width={"594px"} widthSM={"333px"} />
          <div className="flex flex-col md:gap-8 gap-6 justify-center items-center">
            <RoportCard horiz />
            <RoportCard horiz />
            <RoportCard horiz />
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <OverlayCard artilesData={data[0]} full />
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
          <RoportCard width={"270px"} widthSM={"333px"} space />
          <RoportCard width={"270px"} widthSM={"333px"} space />
          <RoportCard width={"270px"} widthSM={"333px"} space />
          <RoportCard width={"270px"} widthSM={"333px"} space />
        </div>
        <div className="flex sm:flex-row flex-col md:gap-6 gap-4 justify-center items-center sm:px-4 my-10">
          <div className="flex flex-col gap-2 justify-center items-center">
            <RoportCard withoutImg />
            <RoportCard withoutImg />
            <RoportCard withoutImg />
          </div>
          <OverlayCard artilesData={data[0]} big />
        </div>
      </div>
    </div>
  )
}