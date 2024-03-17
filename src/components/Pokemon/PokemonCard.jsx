import { COLORS_CARD } from "../../lib/constants/PokemonColorCard";
import PokemonTypes from "./PokemonTypes";
import { IoClose } from "react-icons/io5";

const PokemonCard = ({ pokemon, toggleCard }) => {
    const healthBarWidth = pokemon.maxHP > 10000 ? 'full' : `${Math.round((pokemon.maxHP / 10000) * 100)}`;
    const combatBarWidth = pokemon.maxCP > 10000 ? 'full' : `${Math.round((pokemon.maxCP / 10000) * 100)}`;

    const colorTypes = (type) => {
        return COLORS_CARD[type] || 'text-gray-600'
    }
    return (
        <>
            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[11]"
            >
                <div
                    className="bg-pokemon-white-100 shadow-2xl px-10 py-14 rounded-2xl w-[350px] md:w-[500px] relative"
                >
                    <IoClose
                        className="absolute top-[15px] right-[20px] text-5xl text-pokemon-black-100 font-medium cursor-pointer"
                        onClick={ toggleCard }
                    />
                    <img
                        src={ pokemon.image }
                        alt={ pokemon.id }
                        className="w-[300px] mb-5 md:w-[400px]"
                    />

                    <div className={`flex flex-col gap-5 ${ colorTypes(pokemon.types[0]) } rounded-2xl p-5 shadow-lg`}>
                        <div className="flex flex-col gap-3">
                            <h1
                                className="text-2xl md:text-4xl"
                            >
                                { pokemon.name }
                            </h1>

                            <PokemonTypes types={ pokemon.types }/>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <p
                                    className="text-md md:text-xl flex justify-between"
                                >Maximum Health Points:
                                    <span
                                        className="font-semibold"
                                    >{ pokemon.maxHP }</span>
                                </p>
                                <div className="bg-white h-3 w-full mb-2 rounded-md">
                                    <div
                                        className={`bg-pokemon-green-200 h-full rounded-md`}
                                        style={{ width: healthBarWidth + '%' }}
                                    ></div>
                                </div>
                            </div>

                            <div>
                                <p
                                    className="text-md md:text-xl flex justify-between"
                                >Maximum Combat Points:
                                    <span
                                        className="font-semibold"
                                    >{ pokemon.maxCP }</span>
                                </p>

                                <div className="bg-white h-3 mb-2 rounded-md">
                                    <div
                                        className={`bg-pokemon-yellow-200 h-full rounded-md`}
                                        style={{ width: combatBarWidth + '%' }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-[10] h-[100vh] bg-black opacity-50"
                onClick={ toggleCard }
            ></div>
        </>
    );
}
 
export default PokemonCard;