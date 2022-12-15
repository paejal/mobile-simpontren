import React from 'react';
import Cards from '../../components/elements/Cards';
import Select from '../../components/elements/Select';
import { movieList } from './constants';
import styles from './styles.scoped.css';

export default function List() {
  const option = [ 'Popularity Ascending','Popularity Descending','Release Date Ascending','Release Date Descending','Rating Ascending','Rating Descending'];
  return (
    <>
      <hr className={styles.panel} />
      <div className={styles.root}>
        <hr />
        <h2>Movies</h2>
        <main>
          <aside className={styles.side}>
            <h3>Sort Result By</h3>
            <hr />
            <Select options={option} />
            <hr />
            <h3>Genres</h3>
            <hr />
            <div className={styles.check}>
              <label>Action</label>
              <input type="checkbox" value="Action" />
              <label>Adventure</label>
              <input type="checkbox" value="Adventure" />
              <label>Animation</label>
              <input type="checkbox" value="Animation" />
              <label>Comedy</label>
              <input type="checkbox" value="Comedy" />
              <label>Crime</label>
              <input type="checkbox" value="Crime" />
              <label>Documentary</label>
              <input type="checkbox" value="Documentary" />
              <label>Drama</label>
              <input type="checkbox" value="Drama" />
              <label>Family</label>
              <input type="checkbox" value="Family" />
              <label>Fantasy</label>
              <input type="checkbox" value="Fantasy" />
              <label>History</label>
              <input type="checkbox" value="History" />
              <label>Horror</label>
              <input type="checkbox" value="Horror" />
            </div>
          </aside>
          <section>
            {movieList.map((i, idx) => <Cards data={i} key={idx} />)}
            <nav>
              <button>Load More</button>
            </nav>
          </section>
        </main>
      </div>
    </>
  );
}
