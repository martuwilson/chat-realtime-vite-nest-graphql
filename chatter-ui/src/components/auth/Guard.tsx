import { type JSX } from "react";
import { useLocation } from "react-router-dom";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import EXCLUDE_ROUTES from "../../constants/exclude-routes";
import { CircularProgress, Box } from "@mui/material";

interface GuardProps {
    children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
    const location = useLocation();
    const isPublicRoute = EXCLUDE_ROUTES.includes(location.pathname);
    
    // Para rutas públicas, usar redirect inverso (redirige si YA está autenticado)
    // Para rutas privadas, usar redirect normal (redirige si NO está autenticado)
    const { loading } = useAuthRedirect({
        requireAuth: !isPublicRoute,
        redirectTo: isPublicRoute ? '/home' : '/login'
    });

    // Mantener log simple para debugging
    /* if (isAuthenticated) {
        console.log("✅ Usuario autenticado accediendo a:", location.pathname);
    } */

    // Mostrar loading mientras verifica autenticación
    if (loading) {
        return (
            <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                minHeight="100vh"
            >
                <CircularProgress />
            </Box>
        );
    }

    // Si llegamos aquí, el usuario tiene los permisos correctos para la ruta
    return children;
};

export default Guard;