import React, {useEffect, useRef, useState} from 'react';
import {createDeck, resultPage} from "../utils/constants.js";

const Game = ({name,changePage,changeResult}) => {
    const compDeck = useRef([]);
    const playerDeck = useRef([]);
    const [compCard, setCompCard] = useState("Comp card");
    const [playerCard, setPlayerCard] = useState("Player card");
    const [result, setResult] = useState({
        compGameScore: 0,
        playerGameScore: 0
    });

    useEffect(() => {
        const deck = createDeck();
        deck.sort(()=> Math.random() - 0.5);
        compDeck.current = deck.slice(0, deck.length/2);
        playerDeck.current = deck.slice(deck.length/2);
    }, []);


    const handleClickNext = () => {
        if(playerDeck.current.length){
            const player = playerDeck.current.pop();
            const comp = compDeck.current.pop();
            if(player.rank > comp.rank){
                setResult({
                    compGameScore: result.compGameScore,
                    playerGameScore: result.playerGameScore+1
                })
            }
            if(comp.rank > player.rank){
                setResult({
                    compGameScore: result.compGameScore + 1,
                    playerGameScore: result.playerGameScore
                })
            }
            setCompCard(`${comp.suit} ${comp.rank}`);
            setPlayerCard(`${player.suit} ${player.rank}`);
        }else{
            changeResult(result);
            changePage(resultPage);
        }
    }
    return (
        <div>
            <h2>Computer</h2>
            <div>
                <p>{compCard}</p>
                <p>{playerCard}</p>
            </div>
            <h2>{name}</h2>
            <h5>{result.compGameScore} - {result.playerGameScore}</h5>
            <button onClick={handleClickNext}>Next</button>
        </div>
    );
};

export default Game;