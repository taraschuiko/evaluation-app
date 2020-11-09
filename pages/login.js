import React, {useState} from 'react';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = e => {
    e.preventDefault();
    // Do something
  }

  return (
    <form className={styles.form} onSubmit={login}>
      <h1>Log In</h1>
      <input type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} className={styles.input}/>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className={styles.input}/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className={styles.input}/>
      <input type="submit" value="Log in"/>
    </form>
  )
}