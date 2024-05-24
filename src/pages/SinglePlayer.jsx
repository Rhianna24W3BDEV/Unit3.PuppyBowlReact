import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";
//import PlayerCard from "../components/PlayerCard"; 
import { useState, useEffect } from "react";
import SinglePlayerCard from "../components/SinglePlayerCard";


export default function SinglePlayer(){
    const{playerId} =useParams()

    const [player, setPlayer] = useState([]);    
    useEffect(()=>{
        (async function(){
            const receivedPlayer = await fetchSinglePlayer(playerId);
            setPlayer(receivedPlayer);
        })();
    },[]);
    return (
    <>
    <SinglePlayerCard player={player}/>
    </>
    );
   
}