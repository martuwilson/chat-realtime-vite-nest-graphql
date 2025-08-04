
import { Link } from 'react-router-dom';
import Auth from "./Auth";
import { useLogin } from '../../hooks/useLogin';


const Login = () => {

    const { login, error } = useLogin();

    return (
        <>
        <Auth submitLabel="Log In" onSubmit={async (request) => { await login(request); }}
        error={error}>
            <Link 
                to="/signup" 
                style={{ 
                    alignSelf: 'center',
                    textDecoration: 'none',
                    color: '#1976d2',
                    fontSize: '0.875rem'
                }}
            >
                Don't have an account? Sign Up
            </Link>
        </Auth>
        </>
    )
}

export default Login;