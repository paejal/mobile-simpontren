import React from 'react';
import { Carousel } from '@mantine/carousel';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function BannerSlider(props) {
  const { data } = props;
  return (
    <Carousel
      align="center"
      height="33.1875rem"
      initialSlide={4}
      loop
      slideGap="s"
      slideSize="40%"
      styles={{
        indicator: {
          width: '0.75rem',
          height: '0.75rem',
          marginBottom: '3rem',
          transition: 'width 250ms ease',

          '&[data-active]': {
            backgroundColor: '#E74C3C',
            height: '0.75rem',
            width: '3.75rem',
          },
        },
      }}
      withIndicators
    >
      {data.map((i, idx) => (
        <Carousel.Slide key={idx}>
          <div className={styles.root}>
            <img src={i.image} />
            <li className={styles.list}>
              <div>
                <img src="assets/star.png" />
                <h4>{i.rate}</h4>
              </div>
              <h3>{i.title}</h3>
              <div>
                <h5>{i.release}</h5>
                <div />
                <h5>{i.genre}</h5>
              </div>
              <p>{i.description}</p>
            </li>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}

BannerSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

