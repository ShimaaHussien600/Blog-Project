import React from "react";
import { BiStopwatch } from "react-icons/bi";
import { Comment } from "../interfaces/index";

type CommentItemProps = {
    commentItem: Comment
}

const CommentItem = ({ commentItem }: CommentItemProps) => {
    return (
        <div className="flex flex-col border-b border-light-gray py-4">
            <div className="w-full flex sm:flex-row flex-col justify-between">
                <span className="text-base2x">{commentItem?.name}</span>
                <div className="flex flex-row justify-center items-center">
                    <BiStopwatch color="#A0A8A7" />
                    <span className="text-sm text-gray-txt3">منذ {commentItem?.time}</span>
                </div>
            </div>
            <p className="text-gray-txt2 -text-sm my-2">{commentItem?.comment}</p>
        </div>
    )
}

export default CommentItem