import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GRAPHQL_URL } from './urls';

// Crear el link HTTP para GraphQL
const httpLink = createHttpLink({
    uri: GRAPHQL_URL,
    credentials: 'include', // Importante: incluye cookies en las requests
});

// Crear el link de autenticación (ya no necesario para JWT en cookies)
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            // Las cookies se envían automáticamente con credentials: 'include'
        }
    }
});

// Configurar Apollo Client con cache, autenticación y manejo de errores
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        // Configuración del cache para optimizar queries
        typePolicies: {
            User: {
                fields: {
                    // Ejemplo: configurar como se cachean los usuarios
                }
            },
            // Agregar más políticas de cache según necesites
        }
    }),
    // Configuraciones adicionales
    defaultOptions: {
        watchQuery: {
            errorPolicy: 'ignore',
        },
        query: {
            errorPolicy: 'all',
        },
    },
});

export default client;