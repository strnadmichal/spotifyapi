import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist() {
  return (
    <div className={styles.box}>
        <Track />
        <Track />
        <Track />
    </div>
  );
}

export default Tracklist;