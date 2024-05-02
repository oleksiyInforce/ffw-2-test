import React, { useEffect, useState } from 'react';

import styles from './Countdown.module.scss';
import { Icon } from 'components/ui/Icon/Icon';
import { toNormalCase } from 'helpers/text';

export const Countdown = ({ dueDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const due = new Date(dueDate);
    const difference = due - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return {
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      };
    } else {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [dueDate]);

  return (
    <div className={styles.wrapper}>
      {Object.keys(timeLeft).map((key, index) => (
        <>
          <div className={styles.texts}>
            <span className={styles.number}>{timeLeft[key]}</span>
            <span className={styles.label}>{toNormalCase(key)}</span>
          </div>

          {index < Object.keys(timeLeft).length - 1 && (
            <Icon name={'dots'} className={styles.dots} />
          )}
        </>
      ))}
    </div>
  );
};
