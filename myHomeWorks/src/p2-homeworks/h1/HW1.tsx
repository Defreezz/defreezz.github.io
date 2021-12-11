import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://cs8.pikabu.ru/images/big_size_comm/2016-03_6/145936207814459518.jpg',
    name: 'Саня',
    message: 'Сейчас я буду устанавливать все игры',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
