import React from 'react';
import {gamePage} from "../utils/constants.js";

const Result = ({changePage, currentScore, totalScore}) => {
    return (
        <div>
            <h2>{currentScore.resultString} {currentScore.compScore} -
                {currentScore.playerScore}</h2>
            <h3>{totalScore.compTotalScore} - {totalScore.playerTotalScore}</h3>
            <button onClick={() => changePage(gamePage)}>Again?</button>
        </div>
    );
};

export default Result;