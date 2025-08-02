
import { Link } from 'react-router-dom';
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";
import { useLogin } from '../../hooks/useLogin';


const Login = () => {

    const { login, error } = useLogin();

    return (
        <>
        <Auth submitLabel="Log In" onSubmit={async (request) => { await login(request); }}>
            <Link to="/signup" style={{ alignSelf: 'center' }}>
            <MuiLink>Don't have an account? Sign Up</MuiLink>
            </Link>
        </Auth>
        </>
    )
}

export default Login;