import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";



export default function Search(){

    const [searchPuppy, setSearchPuppy] = useState('');
    const [players, setplayers] = useState([]);

    async function fetchSinglePlayer(){

        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${name}`);
        const players = await response.json();
        setplayers(players);
    }

    function handleChange(event){
        setSearchPuppy(event.target.value);
    }
    return (
        <>
        <div className="pt-2 relative mx-auto text-gray-600">
            <input 
                type = 'text' 
                value = {searchPuppy} 
                onChange = {handleChange}
                classname = "border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none">
                </input>
            <button onClick = {fetchSinglePlayer}>Search Player</button>
            <div>
            { players.map((player)=>{
            return <PlayerCard key = {player.id} player={player}/>
        
        })
       }
       </div>
       </div>
        </>
    )
}