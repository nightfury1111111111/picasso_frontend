import React from 'react';
// import { useDispatch } from 'react-redux';
// import { NavLink, useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import cx from 'classnames';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerBottom}>
        <p className={styles.footerCont}>
          All rights reserved &copy; Picasso || Design By:{' '}
          <span>Matsushima Goro</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
