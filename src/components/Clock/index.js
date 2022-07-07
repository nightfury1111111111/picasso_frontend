import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Clock = ({ leftTime, type }) => {
  const [clockType, setClockType] = useState(1);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    setTimeElapsed(leftTime);
  }, [leftTime]);

  useEffect(() => {
    const timerObj = setTimeout(() => {
      setTimeElapsed(timeElapsed - 1);
    }, 1000);
    return () => clearTimeout(timerObj);
  }, [timeElapsed]);

  useEffect(() => {
    setClockType(type);
  }, [type]);

  if (timeElapsed < 0) {
    return <></>;
  }
  if (clockType == 1) {
    return (
      <div className={styles.firstClockWrapper}>
        {Math.floor(timeElapsed / 86400)}D{' '}
        {Math.floor((timeElapsed % 86400) / 3600)}H{' '}
        {Math.floor((timeElapsed % 3600) / 60)}M {Math.floor(timeElapsed % 60)}{' '}
        S
      </div>
    );
  } else {
    return (
      <div className={styles.secondClockWrapper}>
        {Math.floor(timeElapsed / 86400)}:{' '}
        {Math.floor((timeElapsed % 86400) / 3600)}:{' '}
        {Math.floor((timeElapsed % 3600) / 60)}: {Math.floor(timeElapsed % 60)}{' '}
      </div>
    );
  }
};

export default Clock;
