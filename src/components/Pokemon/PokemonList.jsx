import PokemonTypes from "./PokemonTypes";

const PokemonList = ({ pokemons }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {pokemons.map(pokemon => (
                <div
                    className="flex flex-row p-3 gap-5 rounded-2xl justify-between shadow-xl bg-red-100"
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