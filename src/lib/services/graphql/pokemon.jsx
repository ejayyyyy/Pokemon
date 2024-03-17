import { gql } from '@apollo/client';

const GET_POKEMONS = gql`
  {
    pokemons(first: 20) {
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
    }
  }
`;

export default GET_POKEMONS