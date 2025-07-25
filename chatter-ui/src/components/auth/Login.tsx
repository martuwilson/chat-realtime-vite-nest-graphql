
import { Link } from 'react-router-dom';
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";


const Login = () => {
    return (
        <>
        <Auth submitLabel="Log In" onSubmit={async () => {}}>
            <Link to="/signup" style={{ alignSelf: 'center' }}>
            <MuiLink>Don't have an account? Sign Up</MuiLink>
            </Link>
        </Auth>
        </>
    )
}

export default Login;