import { useGoogleLogin } from "@react-oauth/google";

function Login ({ handleLoginSuccess }: { handleLoginSuccess: (code: string) => void }) {
    const handleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
          console.log('check12 code', codeResponse)
          handleLoginSuccess(codeResponse.code)
        },
        onError: (error) => {
          console.log('check12 err', error)
        },
        flow: 'auth-code'
    })

  return (
    <div>
      <button onClick={handleLogin} style={{ width: '200px', height: '30px', fontWeight: 'bold', borderRadius: '5px', backgroundColor: 'ButtonText', color: 'GrayText' }}>Login with gg</button>
    </div>
  );
}

export default Login;