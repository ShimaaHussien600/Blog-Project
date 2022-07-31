import React from "react";

const RoportCard = (props) => {
    const { width, widthSM, space, horiz } = props;
    return (
        <div className={`${horiz ? "flex flex-row justify-center sm:w-[560px] w-full sm:h-[175px] h-[255px]" : `sm:w-[${width}] w-full`} ${space ? 'mb-10':''} rounded overflow-hidden shadow-lg`}>
            <img className={`${horiz ? "w-2/5" : 'w-full'}`} src="https://www.hubspot.com/hubfs/types-of-marketing-1.jpg" alt="Sunset in the mountains" />
            <div className={`${horiz ? "w-3/5" : ''} px-6 py-4`}>
                <div className="text-sm border-r-2 border-green text-gray-800 px-2 mb-2">أفكار البزنس</div>
                <p className="text-black text-lg mb-2">
                    ما هو مستقبل التجارة الإلكترونية
                </p>
                <p className="text-gray-txt text-xbase mb-3">
                    من المتوقع أن تزيد المبيعات من 1.3 تريليون في عام 2014 إلى 4.5 تريليون في عام 2021
                </p>
                <p className="text-gray-daktxt text-sm mb-2">
                    بواسطة عبدالله عادل
                </p>
            </div>
        </div>
    )
}

export default RoportCard