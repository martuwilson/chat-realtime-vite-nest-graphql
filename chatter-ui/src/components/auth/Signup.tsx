
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";


const SignUp = () => {
    return (
        <>
        <Auth submitLabel="Sign Up" onSubmit={async () => {}}>
            <Link to="/login" style={{ alignSelf: 'center' }}>
            <MuiLink>Already have an account? Log In</MuiLink>
            </Link>
        </Auth>
        </>
    )
}

export default SignUp;