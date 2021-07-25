import React,{useState} from 'react'

const Fetch = (props) => {
    const [pokemon,setPokemon] = useState([]);
    const all = (e) =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then((x) => setPokemon(x.results))
            .catch("error")
    };
    return (
        <div>

                <button onClick={all}>Fetch Pokemons</button>
                {
                    pokemon.map((pokemon,index) => (
                        <div key={ index }>
                            <p>{ pokemon.url }</p>
                        </div>
                    ))
                }
        </div>
    );
};

export default Fetch
