import React,{useState} from 'react'
import axios from 'axios';


const Fetch = (props) => {
    const [pokemon,setPokemon] = useState([]);
    const all = (e) =>{
        // fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        //     .then(response => response.json())
        //     .then((x) => setPokemon(x.results))
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{setPokemon(response.data.results)})
            .catch("error")
    };
    return (
        <div>

                <button onClick={all}>Axios Pokemons</button>
                {
                    pokemon.map((pokemon,index) => (
                        <div key={ index }>
                            <p>{ pokemon.name }</p>
                        </div>
                    ))
                }
        </div>
    );
};

export default Fetch
