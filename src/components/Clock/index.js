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
        <div
          style={{
            width: '56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '15px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'white',
              borderRadius: '4px',
              fontSize: '22px',
              fontWeight: '700',
            }}
          >
            {Math.floor(auctionTime / 86400)}
          </div>
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Days{' '}
          </div>
        </div>
        <div
          style={{
            width: '56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '15px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'white',
              borderRadius: '4px',
              fontSize: '22px',
              fontWeight: '700',
            }}
          >
            {Math.floor((auctionTime % 86400) / 3600)}
          </div>
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Hours{' '}
          </div>
        </div>
        <div
          style={{
            width: '56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '15px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'white',
              borderRadius: '4px',
              fontSize: '22px',
              fontWeight: '700',
            }}
          >
            {Math.floor((auctionTime % 3600) / 60)}
          </div>
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Mins{' '}
          </div>
        </div>
        <div
          style={{
            width: '56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '15px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'white',
              borderRadius: '4px',
              fontSize: '22px',
              fontWeight: '700',
            }}
          >
            {Math.floor(auctionTime % 60)}
          </div>
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Secs{' '}
          </div>
        </div>
      </div>
    );
  }
};

export default ExploreCollections;
