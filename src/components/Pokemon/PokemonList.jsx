import { useState } from "react";
import PokemonTypes from "./PokemonTypes";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    const [isCard, setCard] = useState(false)
    const [pokemon, setPokemon] = useState(null)
    
    const toggleCard = (pokemon) => {
        setCard(!isCard)
        setPokemon(pokemon)
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            { isCard && pokemon && <PokemonCard pokemon={ pokemon } toggleCard={ toggleCard } /> }
            {pokemons.map(pokemon => (
                <div
                    className="flex flex-row p-3 gap-5 rounded-2xl justify-between shadow-xl bg-red-100 cursor-pointer"
                    onClick={ () => toggleCard(pokemon) }
                    key={ pokemon.id }>
                        <div className="flex flex-col gap-2 w-[70%]">
                            <h1
                                className="text-2xl"
                            >{ pokemon.name }</h1>

                            <PokemonTypes types={ pokemon.types }/>
                        </div>
                        
                        <div
                            className="flex items-center w-[50%] h-[100px] overflow-hidden"
                        >
                            <img
                                className="w-full"
                                src={ pokemon.image }
                                alt={ pokemon.name }
                            />

                        </div>
                </div>
            ))}
        </div>
    );
}
 
export default PokemonList;