import PatientHubLogin from "../pages/PatientHubLogin";

function Login({ onSignIn, onSignUp }) {
  return <PatientHubLogin onSignIn={onSignIn} onSignUp={onSignUp} />;
}

export default Login;
