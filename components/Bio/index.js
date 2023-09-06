import React from 'react'
import styles from '../../styles/bio.module.scss'


export default function Bio({ headshot, email, tagline, role }) {
  return (
    <div className={styles.bio}>
      <div className={styles.bioImage}>
      <img src={headshot} alt={`Headshot of ${email}`} />
      </div>
      <div className={styles.bioContent}>
        <p className={styles.bioContentName}>
          { email }
        </p>
        <p className={styles.bioContentTagline}>
          { tagline }
        </p>
        <p className={styles.bioContentRole}>
          { role }
        </p>
      </div>
    </div>
  );
}

