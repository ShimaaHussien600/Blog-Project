import React from "react";

const OverlayCard = (props) => {
    const { artilesData } = props;

    return (
        <div className="sm:w-[360px] w-[333px] relative bg-cover items-end bg-gradient-to-t from-gray-dark to-gray-darkTxt rounded overflow-hidden shadow-lg">
            <img className="w-full mix-blend-overlay bg-cover" src="https://www.hubspot.com/hubfs/types-of-marketing-1.jpg" alt="Sunset in the mountains" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-lg mb-2">{artilesData.header}</p>
                <p className="text-white text-xbase mb-3">{artilesData.body}</p>
                <p className="text-white text-sm mb-2">{artilesData.author}</p>
            </div>
        </div>
    )
}

export default OverlayCard