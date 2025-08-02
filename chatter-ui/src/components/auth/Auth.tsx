import { Stack, TextField, Button } from "@mui/material"
import { useState } from "react";

interface AuthProps {
    submitLabel: string;
    onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
    children?: React.ReactNode;
    error?: string;
}


const Auth = ({ submitLabel, onSubmit, children, error }: AuthProps) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <Stack spacing={3} sx={{ height: '100vh', maxWidth: { xs: '70%', sm: '30%' }, justifyContent: 'center', margin: '0 auto' }}>
        <TextField
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!error}
        helperText={error}
        />
        <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!error}
        helperText={error}
        />
        <Button variant="contained" color="primary" onClick={() => onSubmit({ email, password })}>
            {submitLabel}
        </Button>
        {children}
    </Stack>
  )
}

export default Auth;