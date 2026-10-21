function Login() {
  return (
    <section className="login-page">
      <div className="welcome-section">
        <h1>Welcome to My PatientHUB!</h1>
        <p>We provide smart healthcare services in your hands.</p>
      </div>

      <section className="login-box">
        <h2>Sign in to My PatientHUB</h2>

        <div className="social-login" aria-label="Social login options">
          <button type="button" className="social-btn" aria-label="Continue with Google">
            G
          </button>
          <button type="button" className="social-btn" aria-label="Continue with Facebook">
            f
          </button>
        </div>

        <form className="login-form">
          <input type="text" placeholder="Email or Phone number" />
          <input type="password" placeholder="Please Enter Your Password" />
          <button type="submit" className="primary-btn">SIGN IN</button>

          <div className="login-options">
            <a href="#">Forgot password?</a>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>

          <div className="or">
            <span>or</span>
          </div>

          <button type="button" className="secondary-btn">SIGN UP</button>
        </form>
      </section>

      <footer className="app-footer">
        <a href="#">Google Play Store APP</a>
        <a href="#">App Store App</a>
        <a href="#">About MyPatientHUB</a>
        <a href="#">About Us</a>
        <a href="#">Our Blog</a>
      </footer>
    </section>
  );
}

export default Login;
