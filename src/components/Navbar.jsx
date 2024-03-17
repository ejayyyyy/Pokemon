import { Link } from 'react-router-dom';
import pokemon_logo from '../assets/Menu/img/pokemon_logo.png'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import ModalMenu from './Modal/ModalMenu';

const Navbar = () => {
    const [isMenu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!isMenu)
    }

    return (
        <div className='sticky top-0 z-10 bg-pokemon-yellow-100 py-1 shadow-lg'>
            { isMenu && <ModalMenu toggleMenu={ toggleMenu } /> }
            <div
                className='flex justify-between items-center max-w-7xl mx-auto my-0 px-12'
            >
                <Link to="/">
                    <img className='w-36 cursor-pointer' src={pokemon_logo} alt="Logo" />
                </Link>

                <div className='hidden md:flex text-lg text-pokemon-black-100 font-medium gap-4'>
                    <Link
                        className='relative after:bg-pokemon-black-100 after:absolute after:h-0.5 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
                        to={ '/' }
                    >Home</Link>

                    <Link
                        className='relative after:bg-pokemon-black-100 after:absolute after:h-0.5 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
                        to={ '/pokedex' }
                    >Pokedex</Link>
                </div>

                { !isMenu && 
                    <IoMenu
                        className='block md:hidden text-3xl text-pokemon-black-100 font-medium cursor-pointer'
                        onClick={ toggleMenu }
                    />
                }
            </div>
        </div>
    );
}
 
export default Navbar;