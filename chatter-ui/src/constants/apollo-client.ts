import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GRAPHQL_URL } from './urls';

// Crear el link HTTP para GraphQL
const httpLink = createHttpLink({
    uri: GRAPHQL_URL,
});

// Crear el link de autenticación para agregar JWT token
const authLink = setContext((_, { headers }) => {
    // Obtener el token del localStorage si existe
    const token = localStorage.getItem(import.meta.env.VITE_JWT_STORAGE_KEY || 'chatter_token');
    
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
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