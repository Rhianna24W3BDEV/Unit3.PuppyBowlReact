import { useNavigate } from "react-router-dom";
export default function SinglePlayerCard({player}){

    const navigate = useNavigate()

    function handleClick(){
        navigate(`/`);
    }

    return (
        <div className="bg-white shadow-md rounded-lg px-18 py-18">
             <button onClick= {handleClick} className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Go Back</button>
        <div className="mt-4">
            <h1 className="text-lg uppercase font-bold">{player.name}</h1>
            <p className="mt-2 text-gray-600 text-sm">{player.breed}</p>
            <p className="mt-2 text-gray-600 text-sm">{player.status}</p>
            <p className="mt-2 text-gray-600 text-sm">{player.score}</p>
        </div>
        <img src = {player.imageUrl} className="rounded md"/>
        <div className="mt-6 flex justify-between items-center">
           
            <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Delete</button>
        </div>
    </div>
       
            )};