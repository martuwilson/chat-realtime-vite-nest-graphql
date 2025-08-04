import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGetMe } from './useGetMe';

interface UseAuthRedirectOptions {
    requireAuth?: boolean; // true = requiere autenticación, false = requiere NO estar autenticado
    redirectTo?: string;   // ruta de redirección personalizada
}

const useAuthRedirect = ({ 
    requireAuth = true, 
    redirectTo 
}: UseAuthRedirectOptions = {}) => {
    const { data: user, loading } = useGetMe();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // No hacer nada mientras está cargando
        if (loading) return;

        const isAuthenticated = !!user?.me;

        if (requireAuth && !isAuthenticated) {
            // Usuario no autenticado pero la página requiere autenticación
            const redirectPath = redirectTo || '/login';
            //console.log(`🔒 Redirigiendo a ${redirectPath} - Usuario no autenticado`);
            navigate(redirectPath, { replace: true });
        } else if (!requireAuth && isAuthenticated) {
            // Usuario autenticado pero la página no requiere autenticación (login/signup)
            const redirectPath = redirectTo || '/home';
            //console.log(`✅ Redirigiendo a ${redirectPath} - Usuario ya autenticado`);
            navigate(redirectPath, { replace: true });
        }
    }, [user, loading, navigate, requireAuth, redirectTo, location.pathname]);

    return {
        isAuthenticated: !!user?.me,
        loading,
        user: user?.me
    };
};

export { useAuthRedirect };
