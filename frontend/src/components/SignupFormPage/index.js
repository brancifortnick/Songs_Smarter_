// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from "./SignupFormPage.module.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/song" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <ul className={styles.errList}>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <h1 className={styles.welcometext} type="text">
          Join our Community
        </h1>
        <div className={styles.inputdiv}>
          <input
            className={styles.input}
            type="text"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputdiv}>
          <input
            type="text"
            className={styles.input}
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputdiv}>
          <input
            type="password"
            className={styles.input}
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputdiv}>
          <input
            type="password"
            className={styles.input}
            placeholder="Confirm Password..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button className={styles.submitButton} type="submit">
          Register
        </button>
      </form>
      <div className={styles.outerform}>
        <div className={styles.box_check}>
          <label className={styles.checkbox} for="boxy">
            Send me Emails!
          </label>
          <input name="boxy" type="checkbox" className={styles.remember} />
        </div>
        <div className={styles.forgot}>
          <div className={styles.redirect}>
            <a href="/login" className={styles.forgot}>
              Have an Account? Login Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupFormPage;
