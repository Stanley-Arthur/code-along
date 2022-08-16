import React from "react";
import {TrashIcon} from "@heroicons/react/solid";

function TaskItem({task}){
    return (
        <div className="flex bg-teal-100 p-2 border-2 border-grey-300 rounded-md">
                <div className="flex-1">{task}</div>
                <div className="bg-blue-800 p-2 rounded-md">
                    <TrashIcon height ={24} color="white"/>
                </div>
                </div>
    );
}
export default TaskItem;
