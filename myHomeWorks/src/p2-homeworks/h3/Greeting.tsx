import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = (error !== '' ? s.errorInput : s.defaultInput) // need to fix with (?:)
    const names = (totalUsers === 1 ? 'name' : 'names')

    return (
        <div className={s.wrapper}>
            <SuperInputText value={name} onChange={setNameCallback} placeholder={"SuperInputText"} error={error}/>
            <br/>
            <SuperButton onClick={addUser}>Add</SuperButton>
            <br/>

            <input value={name} onChange={setNameCallback} className={inputClass} placeholder={"Введите имя"}/>
            <button onClick={addUser} className={s.button}>add</button>

            <span> {`the array has ${totalUsers} ${names}`}</span>
            <br/>
            <span className={s.error}> {error}</span>
        </div>
    )
}

export default Greeting
