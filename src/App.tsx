import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/login";

function App() {
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
      <GoogleOAuthProvider clientId="149505907175-17o78d8eivi3hurut15q3vl9rrk2r9gt.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
