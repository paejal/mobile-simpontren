import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function AutoComplete(props) {
  const { placeholder, data } = props;
  const [suggestions, setSugesstions] = useState([]);
  const [isHideSuggs, setIsHideSuggs] = useState(false);
  const [selectedVal, setSelectedVal] = useState('');

  const handler = e => {
    setSugesstions(data.filter(i => i.toLowerCase().startsWith(e.target.value.toLowerCase())));
  };

  const handleChange = e => {
    const input = e.target.value;
    setIsHideSuggs(false);
    setSelectedVal(input);
  };

  const hideSuggs = value => {
    setSelectedVal(value);
    setIsHideSuggs(true);
  };

  return (
    <div className={styles.root}>
      <form>
        <input
          onChange={handleChange}
          onKeyUp={handler}
          placeholder={placeholder}
          type="search"
          value={selectedVal}
        />
        <button type="submit">Search</button>
      </form>
      <div
        className={styles.suggestions}
        style={{ display: isHideSuggs ? 'none' : 'block' }}
      >
        {suggestions.map((item, idx) => (
          <div
            key={'' + item + idx}
            onClick={() => {
              hideSuggs(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

AutoComplete.propTypes = {
  data: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};
