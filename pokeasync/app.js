// we are going to make a request to the pokemon api and generate a new pokemon each request.

// This function make a api request the the endpoint specifed and returns that data.

let pokemonTeamState =[];
let pokemonOpponentTeam =[];

const button = document.querySelector("button");
const rock = document.querySelector("#stone");
const pokemon = document.querySelector("img");
const catchBtn = document.querySelector("#catch");
const team =document.querySelector(".teamContainer");
const h2Team=document.querySelector('#h2Team');
const h2OpponentReam=document.querySelector('#h2OpponentTeam');
const opponentTeam = document.querySelector(".opponentTeam")


button.addEventListener("click",async()=>{
    const value = await apiRequest();
    pokemon.src = value;
    console.log(value)
});

rock.addEventListener("click",async ()=>{
    const val = await apiRequest();
    console.log('val',val);
    const img = document.createElement("img");
    img.src = pokemon.src;
    if(pokemonOpponentTeam.length<6){
        opponentTeam.append(img);
        pokemonOpponentTeam.push(pokemon.src)
        pokemon.src = val;
    }else{
        h2OpponentTeam.innerHTML='You already have 6 pokemons'
    }
});

catchBtn.addEventListener("click", async () => {
    const val = await apiRequest();
    pokemonTeamState.push(pokemon.src);
    addPokemonDom();
    pokemon.src = val;
});

async function apiRequest() {
    try {
        const endpoint = `https://pokeapi.co/api/v2/pokemon/${randomize()}`;
        const request = await fetch(endpoint);
        const data = await request.json();
        // here we can find movies
        console.log('data',data)
        return data.sprites.front_shiny;
    } catch (error) {
        console.error(error);
    }
}

function addPokemonDom(){
    if(pokemonTeamState.length<=6){
        team.innerHTML='';
        pokemonTeamState.forEach((src)=>{
            const img = document.createElement("img");
            img.src = src;
            console.log('src',src)
            team.append(img);
        })
    }else{
        h2Team.innerHTML='You already have 6 pokemons'
    }

}

const randomize = () => {
    return Math.floor(Math.random() * 900 + 1);
};



// assignment
// create a constraint that only allows 6 pokemon in the team
// add styling that wraps the element to the new line.
// Create a container for your opponent
// every pokemon you do not select your opponent gets.
// render your opponents team right next to your team.

/*
    ## homework
    opkemon_name{
    ing:"url";
    moves:[' 4 random moves'];
    мы выдим покемона и 4 рандомные характеристики о нем.
    далее мы можем нажать на одного из и вывести его в окошко.
    тоже самое и для соперника
    придумать, как они будут сражаться
    https://play.pokemonshowdown.com/

*/