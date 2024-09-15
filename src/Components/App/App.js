import React from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Tracklist from '../Tracklist/Tracklist';


function App() {
  return (
      <div className={styles.App}>
        <nav>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>...SpotifyAPI</h1>
          </div>
          <div className={styles.searchBar}>
              <SearchBar />
          </div>
        </nav>
        <div className={styles.tracksBox}>
          <div className={styles.trackList}>
            <Tracklist />
          </div>
          <div className={styles.trackList}>
            <Tracklist />
          </div>
        </div>
      </div>
  );
}

export default App;
