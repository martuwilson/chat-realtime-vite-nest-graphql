import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { GRAPHQL_URL } from './urls';

// Crear el link HTTP para GraphQL
const httpLink = createHttpLink({
    uri: GRAPHQL_URL,
    credentials: 'include', // Importante: incluye cookies en las requests
});

// Configurar Apollo Client con cache y manejo de errores
const client = new ApolloClient({
    link: httpLink,
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