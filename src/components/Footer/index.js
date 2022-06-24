import React from 'react';
// import { useDispatch } from 'react-redux';
// import { NavLink, useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import cx from 'classnames';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerSection}>
        <div className={styles.firstFooter}>
          <div className={styles.mailInput}>
            <div className={styles.ftHeader}>
              Get The Latest Rarible Updates
            </div>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className={styles.footerMail}
                placeholder="Your Mail Address"
              />
              <div className={styles.mailButton}>Subscribe Now</div>
            </div>
          </div>
          <div className={styles.communityLink}>
            <div className={styles.ftHeader}>Join the Community</div>
            <ul
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                padding: 0,
                margin: 0,
              }}
            >
              <li className={styles.communityIcon}>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <i className="icofont-twitter" style={{ color: 'white' }}></i>
                </a>
              </li>
              <li className={styles.communityIcon}>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <i className="icofont-twitch" style={{ color: 'white' }}></i>
                </a>
              </li>
              <li className={styles.communityIcon}>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <i className="icofont-reddit" style={{ color: 'white' }}></i>
                </a>
              </li>
              <li className={styles.communityIcon}>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <i
                    className="icofont-instagram"
                    style={{ color: 'white' }}
                  ></i>
                </a>
              </li>
              <li className={styles.communityIcon}>
                <a href="#" style={{ textDecoration: 'none' }}>
                  <i className="icofont-dribble" style={{ color: 'white' }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.secondFooter}>
          <div className={styles.ftContent}>
            <div className={styles.ftHeader}>About</div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '15px',
              }}
            >
              <li className={styles.ftList}>Explore</li>
              <li className={styles.ftList}>How it works</li>
              <li className={styles.ftList}>Support</li>
              <li className={styles.ftList}>Become a partnet</li>
            </ul>
          </div>
          <div className={styles.ftContent}>
            <div className={styles.ftHeader}>NFT Marketplace</div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '15px',
              }}
            >
              <li className={styles.ftList}>Sell your assets</li>
              <li className={styles.ftList}>FAQ</li>
              <li className={styles.ftList}>Support</li>
              <li className={styles.ftList}>Privacy/Policy</li>
              <li className={styles.ftList}>Your Purchase</li>
            </ul>
          </div>
          <div className={styles.ftContent}>
            <div className={styles.ftHeader}>Company</div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '15px',
              }}
            >
              <li className={styles.ftList}>Abut</li>
              <li className={styles.ftList}>Mission {'&'} Team</li>
              <li className={styles.ftList}>Our Blog</li>
              <li className={styles.ftList}>Services</li>
              <li className={styles.ftList}>We are Hiring</li>
            </ul>
          </div>
          <div className={styles.ftContent}>
            <div className={styles.ftHeader}>NFT Marketplace</div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '15px',
              }}
            >
              <li className={styles.ftList}>Sell your assets</li>
              <li className={styles.ftList}>FAQ</li>
              <li className={styles.ftList}>Support</li>
              <li className={styles.ftList}>Privacy/Policy</li>
              <li className={styles.ftList}>Your Purchase</li>
            </ul>
          </div>
          <div className={styles.ftContent}>
            <div className={styles.ftHeader}>Comunity</div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '15px',
              }}
            >
              <li className={styles.ftList}>NFT Token</li>
              <li className={styles.ftList}>Discussion</li>
              <li className={styles.ftList}>Voting</li>
              <li className={styles.ftList}>Suggest Feature</li>
              <li className={styles.ftList}>Language</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p style={{ textAlign: 'center' }}>
          All rights reserved &copy; Picasso || Design By:{' '}
          <span>Matsushima Goro</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
