import { Divider, Grid2, Link, Paper } from "@mui/material";
import reactIcon from "../../assets/react.svg";
import classnames from "classnames";
import ErrorIcon from "@mui/icons-material/Error";

import "./styles.scss";
import { Button } from "../../components/common";
import LoginWithGoogle from "../../components/loginWithGoogle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { useEffect, useState } from "react";
import { emailSchema, passwordSchema } from "../../schemas";
import Login from "../../components/login";
import { useDispatch } from "react-redux";
import { onLogin } from "../../store/modules/auth/action";
import ls from "localstorage-slim";
import { secretKey } from "../../configs/configEnv";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const token = ls.get("token", { secret: secretKey });

  useEffect(() => {
    console.log(token);
  }, [token]);

  const handleSubmitEmail = async () => {
    emailSchema
      .validate(email)
      .then(() => {
        setIsValidEmail(true);
        setError(null);
      })
      .catch(() => {
        setError("invalid email");
        setIsValidEmail(false);
      });
  };

  const handleSubmitPassword = async () => {
    passwordSchema
      .validate(password)
      .then(() => {
        dispatch(onLogin({ email, password }));
        setError(null);
        setIsValidEmail(false);
      })
      .catch(() => setError("invalid password"));
  };

  return (
    <div className={classnames("login-page", "flex-center")}>
      <Paper className="main-content">
        <Grid2 container direction={"column"} spacing={2}>
          <Grid2 className={classnames("flex-center", "header")}>
            <img src={reactIcon} alt="react-icon" />
            <h1>Trello</h1>
          </Grid2>
          <Grid2 textAlign={"center"}>
            <span>Log in to continue</span>
          </Grid2>
          <Grid2>
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              isValidEmail={isValidEmail}
              error={error}
              handleSubmitEmail={handleSubmitEmail}
              handleSubmitPassword={handleSubmitPassword}
            />
          </Grid2>
          <Grid2 className="remember-me">
            <input type="checkbox" />
            <span>Remember me</span>
            <ErrorIcon />
          </Grid2>
          <Grid2>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={isValidEmail ? handleSubmitPassword : handleSubmitEmail}
            >
              Continue
            </Button>
          </Grid2>
          <Grid2
            className="login-with-google"
            container
            direction={"column"}
            spacing={2}
          >
            <LoginWithGoogle />
          </Grid2>
          <Grid2 container className={classnames("flex-center", "footer")}>
            <Link href="#" underline="hover">
              Can't log in?
            </Link>
            <FiberManualRecordIcon />
            <Link href="#" underline="hover">
              Create an account
            </Link>
          </Grid2>
          <Grid2>
            <Divider />
          </Grid2>
        </Grid2>
      </Paper>
    </div>
  );
}
