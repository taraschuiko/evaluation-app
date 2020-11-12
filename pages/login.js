import React, { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { loginAsync } from '../store/actions';
import styles from '../styles/Login.module.css';

function Login({ loginAction }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    // Do something
    loginAction();
  };

  return (
    <div className={styles.container}>
      <h1>Log In</h1>
      <form className={styles.form} onSubmit={login}>
        <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />
        <input type="submit" value="Log in" className={styles.input} />
      </form>
      <span>
        Don't have an accout?
        {' '}
        <Link href="/signup"><a className={styles.registerLink}>Sign up</a></Link>
      </span>
    </div>
  );
}

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = { loginAction: loginAsync };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
