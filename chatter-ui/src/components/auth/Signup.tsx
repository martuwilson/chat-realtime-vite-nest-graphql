
import { Link } from "react-router-dom";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useState } from "react";
import { ExtractErrorMessage } from "../../utils/error";


const SignUp = () => {

    const [createUser] = useCreateUser();
    const [error, setError] = useState("");

    return (
        <>
        <Auth submitLabel="Sign Up" error={error} onSubmit={async ({email, password}) => {

            try {
                await createUser({
                    variables: {
                        createUserInput: {
                            email: email,
                            password: password
                        }
                    }
                });
                setError("");
            } catch (err) {
                const errorMessage = ExtractErrorMessage(err);
                if (errorMessage) {
                    setError(errorMessage);
                    return;
                }
                setError("An unexpected error occurred. Please try again later.");
            }
        }}>
            <Link 
                to="/login" 
                style={{ 
                    alignSelf: 'center',
                    textDecoration: 'none',
                    color: '#1976d2',
                    fontSize: '0.875rem'
                }}
            >
                Already have an account? Log In
            </Link>
        </Auth>
        </>
    )
}

export default SignUp;