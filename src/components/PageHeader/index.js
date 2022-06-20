import React from 'react';
import styles from './styles.module.scss';

const PageHeader = ({ text }) => {
  return (
    <section
      className={styles.pageHeader}
      style={{
        backgroundImage: 'url(' + '/assets/images/banner/bg-4.png' + ')',
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.pageHeaderContent}>
        <div className="page-header-inner">
          <div className="page-title">
            <h2>{`${text.heading}`} </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
