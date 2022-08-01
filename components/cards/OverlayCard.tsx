import React from "react";
import { useRouter } from 'next/router'
import { Article } from "../../interfaces/index";

type OverlayCardProps = {
    articleDetails: Article, 
    full?: boolean, 
    big?: boolean, 
    brief?: boolean
  }
  
const OverlayCard = ({ articleDetails, full, big, brief }: OverlayCardProps) => {

    const router = useRouter()

    const handleOnClick = () => {
        router.push(`/article/${articleDetails?.id}`)
    }
    return (
        <div onClick={handleOnClick} className={`${(full || big) ? 'w-full h-[358px]' : "sm:w-[360px] w-[333px]"} ${big ? "h-[545px]" : ''} cursor-pointer relative bg-cover items-end bg-gradient-to-t from-gray-dark to-gray-darkTxt rounded overflow-hidden shadow-lg"`}>
            <img className="w-full h-full mix-blend-overlay bg-cover" src="https://www.hubspot.com/hubfs/types-of-marketing-1.jpg" alt="Sunset in the mountains" />
            <div className={`${full ? 'top-1/2 transform -translate-y-1/2 sm:right-28 right-0 sm:left-1/2 left-0' : big ? 'right-0 bottom-0 left-1/4' : 'right-0 bottom-0 left-0'} absolute p-4`}>
                {(full || big) && <div className="text-sm border-r-2 border-green text-white px-2 mb-2">{articleDetails?.category}</div>}
                <p className="text-white text-lg mb-2">{brief ? articleDetails?.smallHeader : articleDetails?.header}</p>
                <p className="text-white text-xbase mb-3">{brief ? articleDetails?.smallBody : articleDetails?.body}</p>
                <p className="text-white text-sm mb-2">بواسطة {articleDetails?.author}</p>
            </div>
        </div>
    )
}

export default OverlayCard