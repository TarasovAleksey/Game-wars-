import React, {useState} from 'react';
import {gamePage} from "../utils/constants.js";

const Start = ({changePage, changeName}) => {
    const [name,setName] = useState('');
    const handleClickStart = () => {
        changePage(gamePage);
        changeName(name);
    }
    return (
        <>
            <h1>Ready For War</h1>
            <input
                value={name}
                onChange={e=>setName(e.target.value.toUpperCase())}
                type={'text'}
                placeholder={"Enter your name"}
            />
            <button onClick={handleClickStart}>Start</button>
        </>
    );
};

export default Start;