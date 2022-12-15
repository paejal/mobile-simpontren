import React from 'react';
import PropTypes from 'prop-types';
import Headers from '../../elements/Headers';
import Footer from '../../elements/Footer';
import styles from './styles.scoped.css';

export default function MainBase(props) {
  const { children } = props;

  return (
    <div className={styles.root}>
      <Headers />
      <main className={styles.main}> {children} </main>
      <Footer />
    </div>
  );
}

MainBase.propTypes = {
  children: PropTypes.node.isRequired,
};
