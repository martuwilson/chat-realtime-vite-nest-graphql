import ForumIcon from '@mui/icons-material/Forum';
import { Typography, Box } from '@mui/material';
import router from '../Routes';

const MobileBranding = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <ForumIcon sx={{ mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        onClick={() => router.navigate("/")}
        sx={{
          fontFamily: "monospace",
          cursor: "pointer",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        CHATTER
      </Typography>
    </Box>
  );
};

export default MobileBranding;
