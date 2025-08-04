import { useState } from "react";
import client from "../constants/apollo-client";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    const logout = async () => {
        setLoading(true);
        setError(undefined);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/logout`,
                {
                    method: "POST",
                    credentials: 'include', // Importante: Para enviar cookies
                }
            );

            if (!response.ok) {
                setError('Error during logout');
                return;
            }

            // Limpiar el cache de Apollo Client
            await client.clearStore();
            
            // Opcional: Refrescar la página para limpiar cualquier estado local
            window.location.href = '/login';
            
        } catch (err) {
            setError('An unexpected error occurred during logout');
        } finally {
            setLoading(false);
        }
    };

    return { logout, loading, error };
};

export { useLogout };
