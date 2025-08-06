import ForumIcon from '@mui/icons-material/Forum';
import { Typography } from '@mui/material';
import router from '../Routes';


const Branding = () => {
  return (
    <>
     <ForumIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => router.navigate('/')}
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              cursor: 'pointer',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CHATTER
          </Typography>
    </>
  );
};

export default Branding;
