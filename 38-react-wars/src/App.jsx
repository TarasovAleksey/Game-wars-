import './App.css'
import Start from "./components/Start.jsx";
import Game from "./components/Game.jsx";
import ResultGame from "./components/Result.jsx";
import {useState} from "react";
import {gamePage, resultPage, startPage} from "./utils/constants.js";

function App() {
    const [page, setPage] = useState(startPage);
    const [name, setName] = useState("YOU");
    const [currentScore, setCurrentScore] = useState({
        compScore: 0,
        playerScore: 0,
        resultString: ""
    });
    const [totalScore, setTotalScore] = useState({
        compTotalScore: 0,
        playerTotalScore: 0
    });

    const changeResult = (result) => {
        let res = "DRAW";
        if (result.compGameScore > result.playerGameScore) {
            setTotalScore({
                compTotalScore: totalScore.compTotalScore + 1,
                playerTotalScore: totalScore.playerTotalScore
            })
            res = "LOSE";
        }
        if (result.compGameScore < result.playerGameScore) {
            setTotalScore({
                compTotalScore: totalScore.compTotalScore,
                playerTotalScore: totalScore.playerTotalScore + 1
            })
            res = "WIN";
        }
        setCurrentScore({
            compScore: result.compGameScore,
            playerScore: result.playerGameScore,
            resultString: res
        });
    }

    switch (page) {
        case startPage:
            return <Start changeName={setName} changePage={setPage}/>
        case gamePage:
            return <Game name={name} changePage={setPage} changeResult={changeResult}/>
        case resultPage:
            return <ResultGame changePage={setPage} totalScore={totalScore} currentScore={currentScore}/>
    }
}

export default App