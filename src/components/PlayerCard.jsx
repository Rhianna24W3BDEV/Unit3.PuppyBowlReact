import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../API";

export default function PlayerCard({player}){

    const navigate = useNavigate()

    function handleClick(){
        navigate(`/single-player/${player.id}`);
    }

    function handleClickDelete(){
        
    }

    return (
        <div className="bg-white shadow-md rounded-lg px-18 py-18">
            <div className="mt-4">
                <h1 className="text-lg uppercase font-bold">{player.name}</h1>
                <p className="mt-2 text-gray-600 text-sm">{player.breed}</p>
            </div>
            <img src = {player.imageUrl} className="rounded md"/>
            <div className="mt-6 flex justify-between items-center">
                <button onClick= {handleClick} className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">See Details</button>
                <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Delete</button>
            </div>
        </div>
    )
}