
const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/'

export async function fetchAllPlayers(){
    try{
        const response = await fetch(`${APIURL}/players`)
        const result = await response.json();
        if(result.success){
            return result.data.players;
        }
    } catch(error) {
        console.log(error);
    }
};

export async function fetchSinglePlayer(playerId){
    try{
        const response = await fetch(`${APIURL}/players/${playerId}`)
        const result = await response.json();
        if(result.success){
            return result.data.player;
        }
    } catch(error) {
        console.log(error);
    }
}



export async function fetchAllPlayersTeams(){
    try{
        const response =await fetch(`${APIURL}/teams`)
        const result = await response.json();
        if(result.success){
            return result.data.teams;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function createPlayer(data){
    try {
        const response =await fetch(`${APIURL}/players`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        
        return result;
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

export async function deletePlayer(){
    try{
        const response = await fetch(`${APIURL}/player/${player.Id}`,{
            method: 'Delete',
        });
        const result = await response.json();
        console.log(result);

    }catch (err) {
            console.error(
                `Whoops, trouble removing player #${player.Id} from the roster!`,
                err
            );
    }
};