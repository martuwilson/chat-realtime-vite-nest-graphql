import { Stack, TextField, Button } from "@mui/material"

const Auth = () => {
  return (
    <Stack spacing={2}>
        <TextField label="Email" type="email" variant="outlined" />
        <TextField label="Password" type="password" variant="outlined" />
        <Button variant="contained" color="primary">
          Login
        </Button>
    </Stack>
  )
}

export default Auth;