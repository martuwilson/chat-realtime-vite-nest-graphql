import { Button, Container, Typography, Box } from '@mui/material';
import { useLogout } from '../../hooks/useLogout';
import { useGetMe } from '../../hooks/useGetMe';

const Home = () => {
    const { logout, loading } = useLogout();
    const { data: user } = useGetMe();

    const handleLogout = async () => {
        await logout();
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                mt: 4 
            }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    ¡Bienvenido al Chat!
                </Typography>
                
                {user?.me && (
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Hola, {user.me.email}
                    </Typography>
                )}

                <Box sx={{ mt: 3 }}>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={handleLogout}
                        disabled={loading}
                    >
                        {loading ? 'Cerrando sesión...' : 'Cerrar Sesión'}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;