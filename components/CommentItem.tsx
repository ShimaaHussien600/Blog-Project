import React from "react";
import { BiStopwatch } from "react-icons/bi";

const CommentItem = () => {
    return (
        <div className="flex flex-col border-b border-light-gray py-4">
            <div className="w-full flex sm:flex-row flex-col justify-between">
                <span className="text-base2x">أبو جود</span>
                <div className="flex flex-row justify-center items-center">
                    <BiStopwatch color="#A0A8A7" />
                    <span className="text-sm text-gray-txt3">منذ يوم</span>
                </div>
            </div>
            <p className="text-gray-txt2 -text-sm my-2">
                حرصنا من تمكين التجار من التسويق بشكل قوي وبأدوات سهلة وبسيطة. حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء مع تحديد الشريحة المستهدفة بإحترافية وسهولة حرصنا من تمكين التجار من التسويق بشكل قوي وبأدوات سهلة وبسيطة. حيث يمكنك عمل حملات تسويقية وإرسالها للعملاء
            </p>
        </div>
    )
}

export default CommentItem