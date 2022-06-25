import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const ExploreCollections = ({ endTime }) => {
  const [auctionTime, setAuctionTime] = useState(0);
  //   const [now, setNow] = useState(new Date());

  useEffect(() => {
    // setAuctionTime(endTime);
    const timerObj = setInterval(() => {
      setAuctionTime(endTime - Math.floor(Date.now() / 1000));
      //   setAuctionTime(endTime - Math.floor(now.getTime() / 1000));
    }, 1000);
    return () => clearInterval(timerObj);
  }, [endTime]);

  return (
    <div className={styles.clockWrapper}>
      {Math.floor(auctionTime / 86400)}D{' '}
      {Math.floor((auctionTime % 86400) / 3600)}H{' '}
      {Math.floor((auctionTime % 3600) / 60)}M {Math.floor(auctionTime % 60)} S
    </div>
  );
};

export default ExploreCollections;
