import React from "react";
import { useRouter } from 'next/router'

const RoportCard = (props) => {
    const { width, widthSM, space, horiz, withoutImg, article } = props;

    const router = useRouter()

    const handleOnClick = () => {
        router.push(`/article/${article?.id}`)
    }
    return (
        <div onClick={handleOnClick} className={`${horiz ? "flex flex-row justify-center sm:w-[560px] w-full sm:h-[175px] h-[255px]" : withoutImg ? 'w-[320px] w-full h-[175px]' : "sm:w-[${width}] w-full"} ${space ? 'mb-10' : ''} cursor-pointer rounded overflow-hidden shadow-lg`}>
            {!withoutImg && <img className={`${horiz ? "w-2/5" : 'w-full'}`} src="https://www.hubspot.com/hubfs/types-of-marketing-1.jpg" alt="Sunset in the mountains" />}
            <div className={`${horiz ? "w-3/5" : ''} px-6 py-4`}>
                <div className="text-sm border-r-2 border-green text-gray-800 px-2 mb-2">{article?.category}</div>
                <p className="text-black text-lg mb-2">{article?.header}</p>
                <p className="text-gray-txt text-xbase mb-3">{article?.smallBody}</p>
                <p className="text-gray-daktxt text-sm mb-2">بواسطة {article?.author}</p>
            </div>
        </div>
    )
}

export default RoportCard