import { Container } from 'components/ui/Container/Container';
import React from 'react';

import styles from './VideoEnd.module.scss';
import { CallToForm } from './CallToForm/CallToForm';
import { Countdown } from 'components/global/Countdown/Countdown';

const date = process.env.REACT_APP_DUE_DATE;

export const VideoEnd = () => {
  return (
    <Container style={{ gap: 48 }}>
      <Countdown dueDate={date} />
      <p className={styles.text}>
        <span>Join the waiting list</span> and stay connected as we fuel up <br /> and build
        something extraordinary.
      </p>

      <CallToForm />
    </Container>
  );
};
