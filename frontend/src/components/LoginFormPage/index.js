import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';

export default function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
            <div className={styles.errList}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            </div>
            <div className={styles.inputdiv}>            
                <input 
                className={styles.input}
                type="text"
                placeholder="Username or Email"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                />
            </div>
            <div className={styles.inputdiv}>
                <input 
                className={styles.input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
                <label for="boxy"> Remember Me</label>
                <input name="boxy" type="checkbox" className={styles.remember}/>
            <button className={styles.submitButton} type="submit">Log In</button>
        </form>
        <div className={styles.forgot}>
            <a href="/" className={styles.forgot}>Forgot UserName/Password?</a>
        </div>
    </div>
  );
}

