import { useEffect, useState } from "react";
import style from "./styles.module.css";

const ApiTest = () => {
    const [teamData, setTeamData] = useState([]);
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {

        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd9bf6fbf44msh9765b5486d956cdp1d569bjsna98204ef59e2',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        };

        console.log("fetching data");
        fetch(url, options).then((response) => response.json()).then(response => {
            console.log(response);
            setIsLoad(false)
            setTeamData(response.data)
        });

    });
    return <div className={style.conteyner}>
        <div className={style.teams}>
            <div> КОМАНДЫ </div> <br></br>
            <div>
                {isLoad && <div>Загрузка данных ...</div>}
                {teamData.map((el, i) => {
                    return (
                        <div key={el.id}>
                            {i + 1}. {el.abbreviation} {el.city}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
};

export default ApiTest;