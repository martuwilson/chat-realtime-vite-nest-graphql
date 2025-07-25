
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import router from './components/Routes'
import { RouterProvider } from 'react-router-dom'

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
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  )
}

export default App
