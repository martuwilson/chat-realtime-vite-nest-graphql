import { type JSX } from "react";
import { useGetMe } from "../../hooks/useGetMe";
import EXCLUDE_ROUTES from "../../constants/exclude-routes";

interface GuardProps {
    children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
    const { data: user } = useGetMe();

    // Mantener un log simple para confirmar que la autenticación funciona
    if (user?.me) {
        console.log("✅ User authenticated:", user.me.email);
    }
    
    // TODO: Implementar lógica de redirección y protección de rutas
    // if (loading) return <div>Loading...</div>;
    // if (error || !user?.me) return <Navigate to="/login" />;
    
    return (
        <>
            {
                EXCLUDE_ROUTES.includes(window.location.pathname)
                ? children : user && <>{children}</>
            }
        </>
    );
};

export default Guard;