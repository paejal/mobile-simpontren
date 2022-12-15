import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Select(props) {
  const { className, disabled, options, title } = props;
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const classes = [styles.root, className].filter(Boolean).join(' ');
  const imageStyles = !open ? {} : { transform: 'rotate(180deg' };

  const handleChange = (e) => {
    setValue(e);
    setOpen(false);
  };

  return (
    <div className={classes}>
      <button disabled={disabled} onClick={() => setOpen(!open)}>
        <p>{value || title}</p>
        <img src="./assets/polygon.png" style={imageStyles} />
      </button>
      {open && <ul>
        {options && options.map((i, idx) => (
          <li
            key={idx} onClick={() => handleChange(i)}>{i}</li>
        ))}
      </ul>}
    </div>
  );
}

Select.defaultProps = {
  className: '',
  disabled: false,
  options: [],
  title: 'Select here...',
};

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  title: PropTypes.string,
};
