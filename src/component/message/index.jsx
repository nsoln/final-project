import { useState } from "react";
import style from "./styles.module.css";
import { useLocalStorage } from "../hook/useLocalStorage";

const Massage = () =>{

const [messageData, setMessageData] = useLocalStorage("BLOG" , []);
const [inputValue, setInputValue] = useState ();
console.log(`message Data ${messageData}`);

const [user] = useLocalStorage ('USER');

const changeBlog = () =>{
    setMessageData([...messageData, `${user ? user: "Аноним"}: ${inputValue}`]);
    setInputValue("")
};
    return <div className={style.conteyner}>
        <div className={style.blog}>
            <div>Блог</div>
            {messageData.map((el, i) => {
                return (
                    <div key={i}>
                        {i + 1}. {el}
                    </div>
                )
            })}
        </div>
        <div className={style.wrapper}>
            <label>Напиши комментарий</label>
            <input value={inputValue} onChange={(e) => setInputValue (e.target.value)}/>
            <button onClick={changeBlog}>Отправить</button>
            <button onClick={() => setMessageData([])}>Удалить список</button>
        </div>
    
    </div>
}

export default Massage



