import { useState } from "react";
import "./SignUp.css";

function SignUp({ onSignUp, onBackToLogin }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (formData.password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (onSignUp) {
      onSignUp({
        fullName: formData.fullName,
        email: formData.email,
      });
    } else {
      setMessage(
        "Form validated. Connect an authentication service to create your account."
      );
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-logo">✚</div>

        <h1>Create Account</h1>
        <p className="signup-subtitle">
          Join MyPatientHUB and manage your healthcare.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            minLength={8}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Enter your password again"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          {message && (
            <p className="signup-message" role="alert">
              {message}
            </p>
          )}

          <button type="submit" className="signup-button">
            Create Account
          </button>
        </form>

        <p className="signup-footer">
          Already have an account?{" "}
          <a
            href="#login"
            onClick={(event) => {
              event.preventDefault();
              onBackToLogin();
            }}
          >
            Log In
          </a>
        </p>

        <p className="signup-terms">
          Your health journey starts here.
        </p>
      </div>
    </div>
  );
}

export default SignUp;