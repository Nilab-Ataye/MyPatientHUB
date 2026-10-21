import "./PatientHubLogin.css";

function PatientHubLogin({ onSignIn, onSignUp }) {
  const handleSignIn = (event) => {
    event.preventDefault();
    onSignIn();
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();

    alert("Password recovery will be added soon.");
  };

  return (
    <div className="patient-login-page">

      {/* Welcome Section */}
      <section className="patient-welcome">
        <h1>Welcome to My PatientHUB!</h1>
        <p>
          We provide smart healthcare services in your hands.
        </p>
      </section>

      {/* Login Box */}
      <section className="patient-login-box">

        <h2>Sign in to My PatientHUB</h2>

        {/* Social Login */}
        <div className="patient-social-login">

          <button
            type="button"
            aria-label="Sign in with Google"
          >
            <img
              src="/images/google.png"
              alt="Google"
            />
          </button>

          <button
            type="button"
            aria-label="Sign in with Facebook"
          >
            <img
              src="/images/facebook.png"
              alt="Facebook"
            />
          </button>

        </div>

        {/* Login Form */}
        <form onSubmit={handleSignIn}>

          <input
            type="text"
            placeholder="Email or Phone number"
            aria-label="Email or Phone number"
            required
          />

          <input
            type="password"
            placeholder="Please Enter Your Password"
            aria-label="Password"
            required
          />

          {/* Sign In Button */}
          <button
            className="patient-sign-in"
            type="submit"
          >
            SIGN IN
          </button>

          {/* Login Options */}
          <div className="patient-login-options">

            <a
              href="#forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </a>

            <label>
              <input type="checkbox" />
              Remember me
            </label>

          </div>

          {/* OR Divider */}
          <div className="patient-or">
            <span>or</span>
          </div>

          {/* Sign Up Button */}
          <button
            className="patient-sign-up"
            type="button"
            onClick={onSignUp}
          >
            SIGN UP
          </button>

        </form>
      </section>

      {/* Footer */}
      <footer className="patient-login-footer">

        <a href="#google-play">
          Google Play Store APP
        </a>

        <a href="#app-store">
          App Store App
        </a>

        <a href="#patient-hub">
          About MyPatientHUB
        </a>

        <a href="#about-us">
          About Us
        </a>

        <a href="#blog">
          Our Blog
        </a>

      </footer>

    </div>
  );
}

export default PatientHubLogin;