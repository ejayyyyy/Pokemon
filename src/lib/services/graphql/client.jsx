import { InMemoryCache } from '@apollo/client';

const client = {
    uri: 'https://graphql-pokemon2.vercel.app/', // Replace with your GraphQL endpoint
    cache: new InMemoryCache()
}

export default client