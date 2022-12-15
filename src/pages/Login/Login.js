import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.scoped.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <main className={styles.root}>
      <div>
        <h1>Masuk</h1>
        <p>Silahkan masuk dengan ID Pengguna atau Email</p>
        <form onSubmit={onSubmit}>
          <label>
            ID Pengguna atau Email
            <input onChange={e => setEmail(e.target.value)} placeholder="Masukkan ID Pengguna atau Email Anda" type="text" value={email} />
          </label>
          <label>
            Kata Sandi
            <input onChange={e => setPassword(e.target.value)} placeholder="Masukkan kata sandi Anda" type="text" value={password} />
          </label>
          <button>Masuk</button>
        </form>
      </div>
    </main>
  );
}
