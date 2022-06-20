import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ReactPlayer from 'react-player';

import { Categories } from 'constants/filter.constants';
import HeaderActions from 'actions/header.actions';
import FilterActions from 'actions/filter.actions';
import Header from 'components/header';

import card1 from 'assets/svgs/card1.svg';
import card2 from 'assets/svgs/card2.svg';
import card3 from 'assets/svgs/card3.svg';
import card4 from 'assets/svgs/card4.svg';
import search from 'assets/svgs/magnifier.svg';

import styles from './styles.module.scss';

const cards = [
  {
    icon: card1,
    title: 'Easy Connect',
    description:
      'Using Metamask Wallet. Just click "Connect Wallet" on the top right to start.',
    path: '/',
  },
  {
    icon: card2,
    title: 'Super Fast',
    description:
      'Since Picasso runs on the Fantom Opera Network, transactions are usually confirmed within 1-2 seconds.',
    path: '/',
  },
  {
    icon: card3,
    title: 'Low Transaction Fees',
    description:
      'Transactions are usually just a few cents, allowing users to create and trade many NFTs without prohibitively high network fees.',
    path: '/',
  },
  {
    icon: card4,
    title: 'Zero Platform Fees',
    description:
      'Trade NFTs via auction or direct offer without any fees taken by Picasso.',
    path: '/explore',
  },
];

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(HeaderActions.toggleSearchbar(false));
    dispatch(FilterActions.updateCategoryFilter(null));
  }, []);

  const handleViewCategory = id => {
    dispatch(FilterActions.updateCategoryFilter(id === 'all' ? null : id));
    history.push('/explore');
  };

  const renderAboutCard = (key, icon, title, desc, path) => (
    <div className={styles.aboutCard} key={key}>
      <NavLink to={path} className={styles.aboutCardLink}>
        <div className={styles.cardIconWrapper}>
          <img src={icon} />
        </div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDesc}>{desc}</div>
      </NavLink>
    </div>
  );

  const renderCategoryCard = (key, icon, label, extra = false) => (
    <div
      className={styles.categoryCard}
      key={key}
      onClick={() => handleViewCategory(key)}
    >
      <div className={styles.cardIconWrapper2}>
        <img src={icon} />
      </div>
      <div className={cx(styles.cardLabelWrapper, extra && styles.extraCard)}>
        <div className={styles.cardLabel}>{label}</div>
        <div className={styles.browseBtn}>
          <ChevronRightIcon className={styles.browseBtnIcon} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Header />
      <section
        className={styles.bannerSection}
        style={{ backgroundImage: "url('assets/images/banner/bg-1.jpg')" }}
      >
        <div className={styles.body}>
          <div className={styles.main}>
            <div className={styles.mainLeft}>
              <div
                className={styles.title}
              >{`Create, Collect And Sell Digital Items`}</div>
              <div className={styles.subtitle}>
                Digital Marketplace For Crypto Collectibles And Non-Fungible
                Tokens. Buy, Sell, And Discover Exclusive Digital Assets.
              </div>
              {/* <div className={styles.subtitle}>
              <strong>
                Warning: This is a beta version. Use at your own caution.
              </strong>
            </div> */}

              <Link to="/explore" className={styles.exploreButton}>
                Explore
              </Link>
            </div>
            <div className={styles.card}>
              <div className={styles.cardMedia}>
                <ReactPlayer
                  className={styles.player}
                  url={`rocket-psychedelic-animation-for-colorful-nft-2022-01-18-20-26-02-utc.webm`}
                  // controls={true}
                  loop={true}
                  muted={true}
                  playing={true}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div className={styles.cardInfo}>
                  <div className={styles.cardCategory}>
                    Matsushima: Blockchain developer
                  </div>
                  <div className={styles.cardName}>{'Enjoy Picasso'}</div>
                </div>
                <Link
                  to="/explore"
                  className={styles.exploreButton}
                  style={{ margin: '0 24px' }}
                >
                  Go to explorer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutTitle}>Why Picasso</div>
          <div className={styles.aboutCards}>
            {cards.map((card, key) =>
              renderAboutCard(
                key,
                card.icon,
                card.title,
                card.description,
                card.path
              )
            )}
          </div>
          <div className={styles.aboutTitle}>Browse by category</div>
          <div className={styles.categories}>
            {renderCategoryCard('all', search, 'Explore All NFTs', true)}
            {Categories.map(cat =>
              renderCategoryCard(cat.id, cat.icon, cat.label)
            )}
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

export default LandingPage;
