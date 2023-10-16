import { Link } from "react-router-dom";
import style from "./styles.module.css";

const Header = () =>{
    return <div className={style.container}>
        <nav className={style.navbar}>
            <Link to='/'>Домашная страница </Link>
            <Link to='/message'>Чат</Link>
            <Link to='/test'>Подгрузка данных</Link>
        </nav>
    </div>
}

export default Header