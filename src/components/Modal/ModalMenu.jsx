import { Link } from "react-router-dom";
import pokemon_logo from '../../assets/Menu/img/pokemon_logo.png'
import { IoClose } from "react-icons/io5";

const ModalMenu = ({ toggleMenu }) => {
    return (
        <>
            <div className="absolute w-full bg-pokemon-yellow-100 flex flex-col items-center rounded-b-3xl py-10 gap-2 z-20 top-0">
                <IoClose
                    className="absolute top-[15px] right-[40px] text-5xl text-pokemon-black-100 font-medium cursor-pointer"
                    onClick={ toggleMenu }
                />

                <Link to="/">
                    <img
                        className='w-36 cursor-pointer'
                        src={ pokemon_logo }
                        alt="Logo"
                        onClick={ toggleMenu }
                    />
                </Link>

                <div className="flex flex-col text-center gap-6">
                    <Link
                        className='cursor-pointer text-3xl text-pokemon-black-100 font-medium'
                        to={'/pokedex'}
                        onClick={ toggleMenu }
                    >Pokedex</Link>
                    
                    <Link
                        className='cursor-pointer text-3xl text-pokemon-black-100 font-medium'
                        to={'/'}
                        onClick={ toggleMenu }
                    >Legenddarios</Link>
                    
                    <Link
                        className='cursor-pointer text-3xl text-pokemon-black-100 font-medium'
                        to={'/'}
                        onClick={ toggleMenu }
                    >El quipo</Link>
                    
                    <Link
                        className='cursor-pointer text-3xl text-pokemon-black-100 font-medium'
                        to={'/'}
                        onClick={ toggleMenu }
                    >Documentaction</Link>
                </div>
            </div>

            <div className="absolute top-0 w-full z-[1] h-[100vh] bg-black opacity-50"></div>
        </>
    );
}

export default ModalMenu;