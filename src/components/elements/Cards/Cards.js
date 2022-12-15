import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Cards(props) {
  const { id, image, rate, title, genre, release } = props.data;

  return (
    <div className={styles.root}>
      <div>
        <span>{rate}</span>
        <img src={image} />
        <div className={styles.overlay}>
          <div>
            <div><img src="assets/star.png" /><h3>{rate}</h3></div>
            <h4>{genre}</h4>
            <a href={`/details/${id}`}>View</a>
          </div>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{release}</p>
    </div>
  );
}

Cards.propTypes = {
  data: PropTypes.object.isRequired,
};

