import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <p>Brandatron&copy;</p>
        </div>
    )
}
