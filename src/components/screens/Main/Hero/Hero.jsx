import React from 'react';

import styles from './Hero.module.scss';

import { Container } from 'components/ui/Container/Container';
import { Icon } from 'components/ui/Icon/Icon';
import { ScrollDown } from './ScrollDown';
import { Countdown } from 'components/global/Countdown/Countdown';

import { motion } from 'framer-motion';

const countdownVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.4 } },
};

const date = process.env.REACT_APP_DUE_DATE;

export const Hero = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.logoWrapper}>
        <Icon name={'lambo'} width={116} />
      </div>
      <h1 className={styles.title}>Wen Lambo?</h1>
      <h2 className={styles.sub}>...Now</h2>
      <motion.div variants={countdownVariants} initial='hidden' animate='visible'>
        <Countdown dueDate={date} />
      </motion.div>
      <ScrollDown />
    </Container>
  );
};
