import React from "react";

const RoportCard = () => {
    return (
        <div className="sm:w-[360px] w-[333px] rounded overflow-hidden shadow-lg mb-10">
            <img className="w-full" src="https://www.hubspot.com/hubfs/types-of-marketing-1.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="text-sm border-r-2 border-green text-gray-800 px-2 mb-2">أفكار البزنس</div>
                <p className="text-gray-900 text-lg mb-2">
                    ما هو مستقبل التجارة الإلكترونية
                </p>
                <p className="text-gray-txt text-xbase mb-3">
                    من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021
                </p>
                <p className="text-gray-800 text-sm mb-2">
                    بواسطة عبدالله عادل
                </p>
            </div>
        </div>
    )
}

export default RoportCard