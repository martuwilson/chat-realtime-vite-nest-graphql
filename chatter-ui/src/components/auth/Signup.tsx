
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";


const SignUp = () => {

    const [createUser] = useCreateUser();

    return (
        <>
        <Auth submitLabel="Sign Up" onSubmit={async ({email, password}) => {
            await createUser({
                variables: {
                    createUserInput: {
                        email: email,
                        password: password
                    }
                }
            });
        }}>
            <Link to="/login" style={{ alignSelf: 'center' }}>
            <MuiLink>Already have an account? Log In</MuiLink>
            </Link>
        </Auth>
        </>
    )
}

export default SignUp;