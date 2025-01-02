import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './components/login'

function App() {
  const handleLoginSuccess = async (code: string) => {
    await fetch('http://localhost:3000/api/auth/google/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code
      }),
    })
            .then(response => console.log('check12 response', response))
            .catch(error => console.log('check12 error', error))
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <GoogleOAuthProvider clientId='149505907175-17o78d8eivi3hurut15q3vl9rrk2r9gt.apps.googleusercontent.com'>
        <Login handleLoginSuccess={handleLoginSuccess} />
      </GoogleOAuthProvider>
    </>
  )
}

export default App
