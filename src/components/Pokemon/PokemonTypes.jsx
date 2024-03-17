import { COLORS } from "../../lib/constants/pokemonColors";

const PokemonTypes = ({ types }) => {
    const colorTypes = (type) => {
        return COLORS[type] || 'text-gray-600'
    }

    return (
        <div>
            <p
                className="mb-0.5 "
            >Types: </p>
            <div className="grid grid-cols-2 gap-1">
                {types.map((type, index) => (
                    <div key={ index }>
                            <p
                                className={`text-pokemon-black-100 text-xs ${ colorTypes(type) } rounded-xl text-center py-0.5`}
                            >{ type }</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default PokemonTypes;