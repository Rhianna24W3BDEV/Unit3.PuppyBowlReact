import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import PlayerCard from "../components/PlayerCard";


export default function AllPlayers(){
    const [players, setplayers] = useState([]);
    console.log(players);

    useEffect(()=>{
        //IIFE
        (async function(){
            const receivedPlayers = await fetchAllPlayers();
            setplayers(receivedPlayers);
        })();
    },[]);



    return(
        <>
        <div className="flex flec-col justify-center bg-gray-100">
            <div className="flex justify-between items-center px-20 py-5">
                <h1 className="text-2xl uppercase font-bold nt-19 text-center nb-18">
                    Puppy Bowl
                </h1>
            </div>
         </div>
         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-18">
         { players.map((player)=>{
            return <PlayerCard key = {player.id} player={player}/>
        
        })
       }
         
         </div>
       
       
    </>
    )
};