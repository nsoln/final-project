import { Route, Switch } from "react-router-dom";
import style from "./styles.module.css";
import Home from "../home";
import Massage from "../message";
import ApiTest from "../api-test";

const Main = () =>{
    return <div className={style.container}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/message' component={Massage}/>
            <Route path='/test' component={ApiTest}/>
        </Switch>

    </div>
}

export default Main