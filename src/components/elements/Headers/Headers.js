import React, { useState } from 'react';
import AutoComplete from '../AutoComplete/AutoComplete';
import styles from './styles.scoped.css';

export default function Headers() {
  const [open, setOpen] = useState(false);
  const data = [
    'Wonder',
    'Wonder Woman',
    'Wonder Woman 1987',
    'Wonder Park',
    'Wonder Boys',
    'Wonder Woman: Bloodlines',
  ];

  return (
    <>
      <header className={styles.root}>
        <a href="/"><img src="assets/logo.png" /></a>
        <AutoComplete
          data={data}
          placeholder="Find Movie" />
        <nav className={styles.links}>
          <a onClick={() => setOpen(!open)}><img src="assets/ic-grid.svg" /><p>Categories</p></a>
          <a href="/list">Movies</a>
          <a>TV Shows</a>
          <a>Login</a>
          {open && <Categories />}
        </nav>
      </header>
    </>
  );
}

export function Categories() {
  return (
    <ul>
      <li>Action</li>
      <li>Adventure</li>
      <li>Animation</li>
      <li>Comedy</li>
      <li>Crime</li>
      <li>Documentary</li>
      <li>Drama</li>
      <li>Family</li>
      <li>Fantasy</li>
      <li>History</li>
      <li>Horror</li>
    </ul>
  );
}
