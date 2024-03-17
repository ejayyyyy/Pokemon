import Navbar from "../components/Navbar";
import { useQuery } from '@apollo/client';
import GET_POKEMONS from '../lib/services/graphql/pokemon'
import PokemonList from "../components/Pokemon/PokemonList";
import { useState } from "react";
import ModalFilter from "../components/Modal/ModalFilter";
import pokedex_loading from '../assets/Pokedex/gif/pokedex_loading.gif'

const Pokedex = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS)
    const [isFilter, setFilter] = useState(false)
    const [name, setName] = useState('')
    const [selectedTypes, setSelectedTypes] = useState([])

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const toggleFilter = () => {
        setFilter(!isFilter)
    }

    const handleTypeChange = (type) => {
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter(t => t !== type))
        } else {
            setSelectedTypes([...selectedTypes, type])
        }
    }


    const filterByType = (pokemon) => {
        if (selectedTypes.length === 0) return true;
        return pokemon.types.some(type => selectedTypes.includes(type))
    }

    let filteredPokemons = data ? data.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(name.toLowerCase()) && filterByType(pokemon)
    ) : []
    
    return (
        <div>
            { isFilter && 
                <ModalFilter
                    toggleFilter={ toggleFilter }
                    selectedTypes={ selectedTypes }
                    handleTypeChange={ handleTypeChange }
                />
            }

            <Navbar />

            <div
                className="px-10 py-10 max-w-7xl mx-auto my-0 flex flex-col gap-5"
            >
                <div
                    className="flex flex-col gap-5"
                >
                    <input
                        type="text"
                        placeholder="Encuentra tu pokemon"
                        onChange={ handleChangeName }
                        className="bg-pokemon-white-200 w-full px-5 py-2 sm:px-7 sm:py-4 rounded-3xl text-lg sm:text-2xl outline-transparent shadow-lg text-pokemon-black-100"
                    />

                    <button
                        className="bg-pokemon-white-200 px-10 py-0.5 rounded-3xl shadow-md w-[150px]"
                        onClick={ toggleFilter }
                    >Filter</button>
                </div>

                {loading ?
                    <img src={ pokedex_loading } alt="pokedex_loading" /> :
                    <PokemonList pokemons={filteredPokemons} />
                }
            </div>
        </div>
    );
}
 
export default Pokedex;