import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, ApolloProvider } from '@apollo/client';
import routes from './lib/services/routes';
import './index.css'
import client from './lib/services/graphql/client';

const router = createBrowserRouter(routes)
const pokemon = new ApolloClient(client);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={pokemon}>
      <RouterProvider router={ router } />
    </ApolloProvider>
  </React.StrictMode>
)