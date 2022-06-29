import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const ExploreCollections = ({ endTime, type }) => {
  const [auctionTime, setAuctionTime] = useState(0);
  const [clockType, setClockType] = useState(1);
  //   const [now, setNow] = useState(new Date());

  useEffect(() => {
    // setAuctionTime(endTime);
    const timerObj = setInterval(() => {
      setAuctionTime(endTime - Math.floor(Date.now() / 1000));
      //   setAuctionTime(endTime - Math.floor(now.getTime() / 1000));
    }, 1000);
    return () => clearInterval(timerObj);
  }, [endTime]);

  useEffect(() => {
    setClockType(type);
  }, [type]);

  if (auctionTime < 0) {
    return <></>;
  }
  if (clockType == 1) {
    return (
      <div className={styles.firstClockWrapper}>
        {Math.floor(auctionTime / 86400)}D{' '}
        {Math.floor((auctionTime % 86400) / 3600)}H{' '}
        {Math.floor((auctionTime % 3600) / 60)}M {Math.floor(auctionTime % 60)}{' '}
        S
      </div>
    );
  } else {
    return (
      <div className={styles.secondClockWrapper}>
        {Math.floor(auctionTime / 86400)}:{' '}
        {Math.floor((auctionTime % 86400) / 3600)}:{' '}
        {Math.floor((auctionTime % 3600) / 60)}: {Math.floor(auctionTime % 60)}{' '}
      </div>
    );
  }
};

export default ExploreCollections;
