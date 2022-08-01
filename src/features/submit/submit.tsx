import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import styles from './submit.module.css';

export const Submit: React.FC<{}> = () => {
    const navigaterTo = useNavigate();
    return (
        <div className={styles.container}>
            <p>You have successfully submited.</p>
            <p>Thank you for trusting us.</p>
            <p>Our team will contact you in 24 hours.</p>
            <button
                onClick={() => navigaterTo('/')}
                data-testid="back-to-home"
            >
                <FaHome /> Back to Home
            </button>
        </div>
    )
}
