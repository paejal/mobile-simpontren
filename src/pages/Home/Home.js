import React from 'react';
import BannerSlider from '../../components/elements/BannerSlider';
import Cards from '../../components/elements/Cards';
import { banner, movieList } from './constants';
import styles from './styles.scoped.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <BannerSlider data={banner} />
      <hr />
      <article className={styles.article}>
        <nav>
          <hr />
          <h2>Discover Movies</h2>
          <li>
            <button>Popularity</button>
            <button>Release Date</button>
          </li>
        </nav>
        <section>
          {movieList.map((i, idx) => <Cards data={i} key={idx} />)}
        </section>
      </article>
    </div>
  );
}
