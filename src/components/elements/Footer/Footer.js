import React from 'react';
import styles from './styles.scoped.css';

export default function Footer() {
  return (
    <footer className={styles.root}>
      <p>© 2021 MoovieTime. All rights reserved.</p>
      <img src="assets/logo-grey.svg" />
      <p>Made With ReactJS</p>
    </footer>
  );
}
