import loading from '../assets/Pokedex/gif/loading.gif'

const Loading = () => {
    return (
        <div
            className='absolute w-full h-[100vh] bg-pokemon-white-100 flex justify-center items-center z-50'
        >
            <img
                src={ loading }
                alt='loading'
                className='scale-125'
            />
        </div>
    );
}
 
export default Loading;