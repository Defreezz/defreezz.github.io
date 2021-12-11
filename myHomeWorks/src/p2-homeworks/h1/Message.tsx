import React from 'react'
import mssg from './Message.module.css'

type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropsType) {
    return (
        <div className={mssg.body}>


            <img src={props.avatar} className={mssg.avatar}></img>

            <div className={mssg.angle}></div>

            <div className={mssg.messageBlock}>
                <div className={mssg.name}>
                    {props.name}
                </div>
                <div className={mssg.message}>
                    {props.message}
                </div>
                <div className={mssg.time}>
                    {props.time}
                </div>
            </div>

        </div>
    )
}

export default Message
