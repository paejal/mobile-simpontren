import React from 'react';
import Cards from '../../components/elements/Cards';
import { movieList, reviews } from './constants';
import styles from './styles.scoped.css';

export default function Details() {
  return (
    <>
      <header className={styles.header}>
        <img src="assets/posters/poster-1.png" />
        <main>
          <img src="assets/star.png" />
          <h3>7.0</h3>
          <ol>
            <h5>User Score</h5>
            <h5>3621 Votes</h5>
          </ol>
          <li>
            <h5>Status</h5>
            <h5>Released</h5>
          </li>
          <li>
            <h5>language</h5>
            <h5>english</h5>
          </li>
          <li>
            <h5>budget</h5>
            <h5>$200,000,000.00</h5>
          </li>
          <li>
            <h5>production</h5>
            <h5>DC Entertainment</h5>
          </li>
        </main>
      </header>
      <section className={styles.hero}>
        <nav>
          <img src="assets/posters/poster-5.png" />
          <li className={styles.info}>
            <h6>2020</h6>
            <h2>Wonder Woman 1984</h2>
            <h5>Fantasy, Action, Adventure</h5>
            <h3>OVERVIEW</h3>
            <p>Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.</p>
          </li>
        </nav>
        <h4>REVIEWS</h4>
        <main>
          {reviews.map((i, idx) => (
            <article key={idx}>
              <div className={styles.head}>
                <div />
                <h3>{i.name}</h3>
                <h5>{i.date}</h5>
                <span>
                  <img src="assets/star.png" />
                  <h4>{i.rating}</h4>
                </span>
              </div>
              <i>{i.review} {idx === 0 && <a>read the rest</a>}</i>
            </article>
          ))}
        </main>
      </section>
      <section className={styles.recommendation}>
        <h4>RECOMMENDATION MOVIES</h4>
        <main>
          {movieList.map((i, idx) => (
            <Cards data={i} key={idx} />
          ))}
        </main>
      </section>
    </>
  );
}
