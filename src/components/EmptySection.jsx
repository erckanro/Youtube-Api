import React from 'react';
import styles from './EmptySection.module.scss'

function EmptySection() {
  return (
    <div className={`${styles['empty-message']}`}>
        <img 
            src="/Hapi.png" alt="hapi" 
            className={`${styles['image']}`}
        />
        <div>
            <h2>Search something . . .</h2>
            <h3>Discover endless possibilities! </h3>
            Begin your journey by searching for videos that interest you.
        </div>
        
    </div>
  );
}

export default EmptySection;
