import Home from '../../pages/Home'
import Pokedex from '../../pages/Pokedex';

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/pokedex",
        element: <Pokedex />,
    }
]

export default routes;