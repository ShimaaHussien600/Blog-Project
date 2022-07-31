import React, { useState, useEffect, useRef } from "react";
import BlogCarousel from "../components/BlogCarousel";
import RoportCard from "../components/cards/ReportCard"
import { MdArrowBackIosNew } from "react-icons/md";
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

  const data = articlesList.slice(0, 3);

  return (
    <div className="w-full flex flex-col pt-17 justify-center items-center">
      <BlogCarousel />
      {/* <div className="md:w-11/12 w-5/6 justify-center items-center">
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
        <div className="flex flex-row justify-center gap-8 items-center border-b border-light-gray p-4 py-10">
          <RoportCard width={"594px"} widthSM={"333px"} />

          <div className="flex flex-col gap-6 justify-center items-center">
            <RoportCard  horiz />
            <RoportCard  horiz />
            <RoportCard  horiz />
          </div>
        </div>
      </div> */}
    </div>
  )
}