import React, {useState} from 'react';
import styles from '../styles/Signup.module.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const signup = e => {
    e.preventDefault();
    // Do something
  }

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form className={styles.form} onSubmit={signup}>
        <input type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} className={styles.input}/>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className={styles.input}/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className={styles.input}/>
        <input type="password" placeholder="Repeat password" value={passwordRepeat} onChange={e => setPasswordRepeat(e.target.value)} className={styles.input}/>
        <input type="submit" value="Sign up" className={styles.input}/>
      </form>
    </div>
  )
}