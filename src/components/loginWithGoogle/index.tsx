// import { useGoogleLogin } from "@react-oauth/google";
// import { useDispatch } from "react-redux";
// import { onLoginWithGoogle } from "../../store/modules/auth/action";

import { Grid2 } from "@mui/material";
import { Button } from "../common";

import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import AppleIcon from "@mui/icons-material/Apple";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./styles.scss";

export default function LoginWithGoogle() {
  // const dispatch = useDispatch();

  // const onClick = useGoogleLogin({
  //   onSuccess: (codeResponse) => {
  //     dispatch(onLoginWithGoogle({ code: codeResponse.code }));
  //   },
  //   onError: (error) => {
  //     console.log("check12 err", error);
  //   },
  //   flow: "auth-code",
  // });

  return (
    <>
      <Grid2 textAlign={"center"} className="login-with">
        <span>Or continue with:</span>
      </Grid2>
      <Grid2>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          startIcon={<GoogleIcon />}
        >
          Google
        </Button>
      </Grid2>
      <Grid2>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          startIcon={<MicrosoftIcon />}
        >
          Microsoft
        </Button>
      </Grid2>
      <Grid2>
        <Button
          variant="outlined"
          color="success"
          fullWidth
          startIcon={<AppleIcon />}
        >
          Apple
        </Button>
      </Grid2>
      <Grid2>
        <Button
          variant="outlined"
          color="warning"
          fullWidth
          startIcon={<GitHubIcon />}
        >
          Github
        </Button>
      </Grid2>
      {/* <GoogleOAuthProvider
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
        >
          <Login />
        </GoogleOAuthProvider> */}
    </>
  );
}
