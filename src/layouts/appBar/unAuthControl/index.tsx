import { GoogleOAuthProvider } from "@react-oauth/google";
import { Button } from "../../../components/common";
import "../styles.scss";
import Login from "../../../components/login";

export default function AuthControl() {
  return (
    <div className="un-auth-control">
      <GoogleOAuthProvider clientId="149505907175-17o78d8eivi3hurut15q3vl9rrk2r9gt.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
      <Button variant="contained" color="primary">
        Login
      </Button>
      <Button variant="contained" color="primary">
        Register
      </Button>
    </div>
  );
}
