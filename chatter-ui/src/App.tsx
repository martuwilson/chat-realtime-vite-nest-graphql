
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <h1>Welcome to Chatter UI</h1>
        <p>This is a simple chat application interface.</p>
        {/* Additional components can be added here */}
      </Container>
    </ThemeProvider>
  )
}

export default App
