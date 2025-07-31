
// URLs del backend usando variables de entorno de Vite
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:3001/graphql';

export {
    API_URL,
    GRAPHQL_URL
}