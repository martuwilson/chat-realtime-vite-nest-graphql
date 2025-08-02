import { useState } from "react";
import client from "../constants/apollo-client";

interface LoginRequest {
    email: string;
    password: string;
}

const useLogin = () => {
  const [error, setError] = useState<boolean>();

  const login = async (request: LoginRequest) => {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }
    );

    if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
    }

    setError(false);
    await client.refetchQueries({
        include: 'active', // Refresca las queries activas para obtener el usuario autenticado
    })
  }

    return { login, error };
};

export { useLogin };
