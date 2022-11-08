import React from "react";
import {DataType} from "./PS_1";


type TasksProsType = {
    data: DataType
}


export function Tasks(props: TasksProsType) {

    const taskList = props.data.tasks.map( (el) => {
        return (
            <li key={el.taskId}><input type='checkbox' checked={el.isDone}/>
                <span>{el.title}</span>
            </li>
        )
    })
    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {taskList}
            </ul>
        </div>
    )
}