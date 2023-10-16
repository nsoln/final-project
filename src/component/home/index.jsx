import { useState } from "react";
import style from "./styles.module.css";
import { useLocalStorage } from "../hook/useLocalStorage";

const Home = () => {
    //const [user, setUser] = useState('');
    const [user, setUser] = useLocalStorage('USER');
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={style.houme}>
            <div className={style.home}>
                {!user && (
                    <div>
                        <label>Введите ваше имя </label>
                        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                        <button onClick={() => setUser(inputValue)}>Сохранить</button>
                    </div>
                )}
                {user && (
                    <div className={style.homeExitBtn}>
                        <div>Приветствую вас, уважаемый {user}</div>
                        <button onClick={() => setUser('')}> Выйти </button>
                    </div>
                )}

            </div>
        </div>)
};



export default Home;