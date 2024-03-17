import { IoClose } from "react-icons/io5";
import { TYPES } from "../../lib/constants/pokemonTypes";

const ModalFilter = ({ toggleFilter, selectedTypes, handleTypeChange }) => {
    return (
        <>
            <div
                className="fixed w-full flex flex-col rounded-b-3xl p-10 gap-8 z-20 bg-gradient-to-t from-pokemon-yellow-300 via-pokemon-yellow-200 to-pokemon-yellow-100"
            >
                <IoClose
                    className="absolute top-[15px] right-[40px] text-5xl text-pokemon-black-100 font-medium cursor-pointer"
                    onClick={ toggleFilter }
                />

                <h1
                    className="text-3xl font-semibold"
                >TYPE</h1>

                <div
                    className="grid grid-cols-3 gap-5"
                >
                    {Array.from(new Set(TYPES.flatMap(type =>(
                        <label
                            key={type}
                            className="flex items-center gap-2 sm:gap-5"
                        >
                            <input
                                type="checkbox"
                                value={ type }
                                checked={ selectedTypes.includes(type) }
                                onChange={ () => handleTypeChange(type) }
                                className="h-3 w-3 sm:h-5 sm:w-5 appearance-none rounded-full border-2 border-gray-300 cursor-pointer checked:bg-red-500 checked:border-transparent outline-none ring-2 ring-offset-2 ring-black"
                            />

                            <p
                                className="text-2xl"
                            >{ type }</p>
                        </label>
                    ))))}
                </div>
            </div>

            <div className="fixed top-0 w-full z-[1] h-[100vh] bg-black opacity-50"></div>
        </>
    );
}
 
export default ModalFilter;