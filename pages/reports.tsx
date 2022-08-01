import React from "react";
import RoportCard from "../components/cards/ReportCard"

let blogsData = require('../services/articlesData.json');

export default function Reports() {
  const response = blogsData;
  const data = JSON.parse(JSON.stringify(response));
  const articles = data?.articles

  return (
    <div className="w-full flex pt-17 justify-center items-center bg-gray-baby">
      <div className="md:w-11/12 w-5/6 justify-center items-center">
        <h1 className="text-xxl text-center p-5">التقارير والدراسات</h1>
        <div className="md:container md:mx-auto grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center mt-5 gap-4">
          {articles.map(item =>
            <RoportCard article={item} width={"360px"} widthSM={"333px"} space />
          )}
        </div>
      </div>
    </div>
  )
}