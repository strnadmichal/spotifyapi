import React from 'react';
import styles from './Track.module.css';

function Track() {
  return (
    <div className={styles.box}>
      <p>Close to the Edge</p>
      <p className={styles.artist}>Yes</p>
    </div>
  );
}

export default Track;