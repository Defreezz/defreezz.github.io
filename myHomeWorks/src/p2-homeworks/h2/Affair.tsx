import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    let stylePriority = (priority: string) => {
        if (priority === "high") {
            return style.priorityHigh
        } else if (priority === "middle") {
            return style.priorityMiddle
        } else return style.priorityLow
    }

    return (
        <div className={style.affair}>
            <div className={style.affairName}>{props.affair.name} </div>
            <div className={`${stylePriority(props.affair.priority)}`}>{props.affair.priority} </div>

            <SuperButton onClick={deleteCallback}>x</SuperButton>
        </div>
    )
}

export default Affair
