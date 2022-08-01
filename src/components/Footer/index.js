import React from 'react';
import { Line } from 'recharts';
import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

// import { NavLink, useHistory } from 'react-router-dom';
// import Mailto from 'react-mailto';
// import cx from 'classnames';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerBottom}>
        <div className={styles.footerCont}>
          <div className={styles.footerText}>
            &copy;{new Date().getFullYear()} Picasso. All rights reserved ||
            Designed By: Spagetti
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.socialIcons}>
              <div>
                <a href="https://twitter.com/picassoftm">
                  <img
                    src="/assets/images/footer/twitter.png"
                    className={styles.socialIcon}
                  />
                </a>
                <a href="https://discord.com/invite/pumpkins">
                  <img
                    src="/assets/images/footer/discord.png"
                    className={styles.socialIcon}
                  />
                </a>
              </div>
              <div> Join our discord for support </div>{' '}
            </div>
            <div>
              Feel free to send us an email :{' '}
              <a
                href="https://mailto:jb.mouny@yahoo.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'darkblue' }}
              >
                Jb.mouny@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
