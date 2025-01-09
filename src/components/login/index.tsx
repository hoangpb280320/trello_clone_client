import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { handleLogin } from "../../store/modules/auth/auth.slice";

function Login() {
  const dispatch = useDispatch();

  const onClick = useGoogleLogin({
    onSuccess: (codeResponse) => {
      dispatch(handleLogin({ code: codeResponse.code }));
    },
    onError: (error) => {
      console.log("check12 err", error);
    },
    flow: "auth-code",
  });

  return (
    <div>
      <button
        onClick={onClick}
        style={{
          width: "200px",
          height: "30px",
          fontWeight: "bold",
          borderRadius: "5px",
          backgroundColor: "ButtonText",
          color: "GrayText",
        }}
      >
        Login with gg
      </button>
    </div>
  );
}

export default Login;
