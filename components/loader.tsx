import React from "react";

const Loader = (props) => {
    const { isLoading } = props

    return (
        isLoading ?
            <div className="flex items-center justify-center ">
                <div className="w-40 h-40 border-t-4 border-b-4 border-green rounded-full animate-spin"></div>
            </div>
            : <></>
    );
}
export default Loader