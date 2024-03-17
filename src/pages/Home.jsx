import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import home_pikachu from "../assets/Home/img/home_pikachu.png"

const Home = () => {
    return (
        <div className='bg-gradient-to-t from-pokemon-yellow-300 via-pokemon-yellow-200 to-pokemon-yellow-100'>
            <Navbar />

            <div className='flex flex-col-reverse lg:flex-row justify-end lg:justify-center mx-auto my-0 items-center text-center lg:text-left py-10 h-full max-w-6xl'>
                <div className="flex flex-col gap-9 w-[70vw] lg:w-[40vw]">
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h1 className='text-6xl lg:text-7xl'>
                                <span className='font-semibold'>Find </span>
                                all your favorite
                                <span className='font-semibold'> Pokemon</span>
                            </h1>
                        </div>

                        <p
                            className='flex text-lg sm:text-xl w-[60vw] lg:w-[330px] self-center lg:self-start'
                        >You can know the type  of Pokemon, its strengths, disadvantage and abilities</p>
                    </div>
                    
                    <Link
                        className='bg-pokemon-green-100 w-full lg:w-[300px] py-2 rounded-lg cursor-pointer border-b-8 border-pokemon-green-200 font-semibold text-lg md:text-xl text-center'
                        to={ '/pokedex' }
                    >See pokemons</Link>
                </div>

                <img className='w-[100vw] lg:w-[50vw] pt-5 md:p-0' src={ home_pikachu } alt="Logo" />
            </div>
        </div>
    );
}
 
export default Home;