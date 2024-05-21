import React from 'react';

import styles from './Footer.module.scss';
import {Paragraph} from 'components/ui/Text/Text';

export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <Paragraph>Copyright © 2024 Automobili Lamborghini S.p.A</Paragraph>
            <div className={styles.right}>
                <Paragraph link={'/terms-of-use'}
                           target="_blank"
                           rel="noopener noreferrer"
                >Terms and Conditions</Paragraph>
                <Paragraph link={'/privacy-policy'}
                           target="_blank"
                           rel="noopener noreferrer"
                >Privacy Policy</Paragraph>
            </div>
        </footer>
    );
};
