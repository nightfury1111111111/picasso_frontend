import React, { useRef, useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, Redirect } from 'react-router-dom';
import Header from 'components/header';
import Skeleton from 'react-loading-skeleton';
import cx from 'classnames';
import { compareAsc, format } from 'date-fns';

import ActivityActions from 'actions/activity.action';
import Identicon from 'components/Identicon';
import styles from './styles.module.scss';
import Footer from 'components/Footer';

import { useApi } from 'api';
import { fa } from 'faker/lib/locales';
import { Maximize } from '@material-ui/icons';
import { getExactImageUrl } from 'utils';

const AccountDetails = () => {
  const [activities, setActivities] = useState([]);
  const [validActivities, setValidActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState(0);
  const [pageNum, setPageNum] = useState(0);
  const [maxPageNum, setMaxPageNum] = useState(0);

  const dispatch = useDispatch();
  const { getActivityInfo } = useApi();

  const { fetching, activity } = useSelector(state => state.Activity);

  useEffect(() => {
    setIsLoading(true);
    dispatch(ActivityActions.fetchStart());
    const fetchActivityInfo = async () => {
      try {
        const data = await getActivityInfo();
        dispatch(ActivityActions.updateActivity(data));
        let tmpActivities = [];
        tmpActivities = tmpActivities.concat(
          data.bids,
          data.offers,
          data.listings,
          data.listings,
          data.sold,
          data.follow,
          data.likes
        );
        tmpActivities.sort(
          (a, b) =>
            Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
        );
        setActivities(tmpActivities);
        setMaxPageNum(Math.floor(tmpActivities.length / 6));
        setValidActivities(tmpActivities.slice(0, 6 * (pageNum + 1)));
      } catch {
        dispatch(ActivityActions.fetchFailed());
      }
      setIsLoading(false);
    };
    fetchActivityInfo();
  }, []);

  const showRecentActivities = () => {
    if (fetching) return;
    setPageNum(0);
    setActiveFilter(0);
    let tmpActivities = [];
    tmpActivities = tmpActivities.concat(
      activity.bids,
      activity.offers,
      activity.listings,
      activity.sold,
      activity.follow,
      activity.likes
    );
    tmpActivities.sort(
      (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
    );

    setActivities(tmpActivities);
    setValidActivities(tmpActivities.slice(0, 6));
    setMaxPageNum(Math.floor(tmpActivities.length / 6));
  };

  const showListing = () => {
    if (fetching) return;
    setPageNum(0);
    setActiveFilter(1);
    setActivities(activity.listings);
    setValidActivities(activity.listings.slice(0, 6));
    setMaxPageNum(Math.floor(activity.listings.length / 6));
  };

  const showOffers = () => {
    if (fetching) return;
    setPageNum(0);
    setActiveFilter(2);
    setActivities(activity.offers);
    setValidActivities(activity.offers.slice(0, 6));
    setMaxPageNum(Math.floor(activity.offers.length / 6));
  };

  const showSales = () => {
    if (fetching) return;
    setPageNum(0);
    setActiveFilter(3);
    setActivities(activity.sold);
    setValidActivities(activity.sold.slice(0, 6));
    setMaxPageNum(Math.floor(activity.sold.length / 6));
  };

  const showBids = () => {
    if (fetching) return;
    setPageNum(0);
    setActiveFilter(4);
    setActivities(activity.bids);
    setValidActivities(activity.bids.slice(0, 6));
    setMaxPageNum(Math.floor(activity.bids.length / 6));
  };

  const showLikes = () => {
    if (fetching) return;
    setPageNum(0);
    setActiveFilter(5);
    setActivities(activity.likes);
    setValidActivities(activity.likes.slice(0, 6));
    setMaxPageNum(Math.floor(activity.likes.length / 6));
  };

  const showFollows = () => {
    if (fetching) return;
    setPageNum(0);
    setActiveFilter(6);
    setActivities(activity.follow);
    setValidActivities(activity.follow.slice(0, 6));
    setMaxPageNum(Math.floor(activity.follow.length / 6));
  };

  const shortAddress = address => {
    return address.slice(0, 5) + '...' + address.slice(-4);
  };

  useEffect(() => {
    setValidActivities(activities.slice(0, 6 * (pageNum + 1)));
  }, [pageNum]);

  return (
    <>
      <Header border />
      <div className={styles.container}>
        <div className={styles.activityWrapper}>
          <div className={styles.activityHeader}>Sitewide Activities</div>
          {isLoading ? (
            <Skeleton width="100%" height="160px" count={3}></Skeleton>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {activities.length ? (
                <>
                  {validActivities.map((activ, idx) => {
                    return (
                      <div key={idx} className={styles.activityCard}>
                        <div className={styles.activityImage}>
                          {activ.imageURL ? (
                            activ.imageURL.slice(0, 4) === 'http' ? (
                              <img
                                src={activ.imageURL}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  borderRadius: '15px',
                                }}
                              />
                            ) : (
                              <img
                                src={getExactImageUrl(activ.imageURL)}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  borderRadius: '15px',
                                }}
                              />
                            )
                          ) : (
                            <Identicon
                              account={activ.operator}
                              size={160}
                              className={styles.userAvatar}
                            />
                          )}
                        </div>
                        <div
                          style={{ display: 'flex', flexDirection: 'column' }}
                        >
                          <div className={styles.activityName}>
                            {activ.name.length > 15
                              ? shortAddress(activ.name)
                              : activ.name}
                          </div>
                          <div className={styles.activityInfo}>
                            operation: {activ.event}
                          </div>
                          <div className={styles.activityInfo}>
                            By:{' '}
                            <Link
                              to={`/account/${activ.operator}`}
                              className={styles.operatorLink}
                            >
                              {activ.alias || shortAddress(activ.operator)}
                            </Link>
                          </div>
                          <div className={styles.activityInfo}>
                            At:{' '}
                            {format(
                              new Date(activ.createdAt),
                              'MM/dd/yyyy hh:mm aaaa'
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div
                    className={styles.loadmoreBtn}
                    onClick={() => {
                      setPageNum(pageNum + 1);
                    }}
                    style={
                      maxPageNum <= pageNum
                        ? { display: 'none' }
                        : { display: 'block' }
                    }
                  >
                    Load More
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
        <div className={styles.activityFilter}>
          <div className={styles.filterHeader}>Filter</div>
          <ul className={styles.filterContent}>
            <li
              className={cx(
                styles.filterButton,
                activeFilter == 0 && styles.activeFilter
              )}
              onClick={showRecentActivities}
            >
              <i className="icofont-history"></i> Recent
            </li>
            <li
              className={cx(
                styles.filterButton,
                activeFilter == 1 && styles.activeFilter
              )}
              onClick={showListing}
            >
              <i className="icofont-listine-dots"></i> Listing
            </li>
            <li
              className={cx(
                styles.filterButton,
                activeFilter == 2 && styles.activeFilter
              )}
              onClick={showOffers}
            >
              <i className="icofont-cart"></i> Offers
            </li>
            <li
              c
              className={cx(
                styles.filterButton,
                activeFilter == 3 && styles.activeFilter
              )}
              onClick={showSales}
            >
              <i className="icofont-sale-discount"></i> Sales
            </li>
            <li
              className={cx(
                styles.filterButton,
                activeFilter == 4 && styles.activeFilter
              )}
              onClick={showBids}
            >
              <i className="icofont-court-hammer"></i> Bids
            </li>
            <li
              className={cx(
                styles.filterButton,
                activeFilter == 5 && styles.activeFilter
              )}
              onClick={showLikes}
            >
              <i className="icofont-like"></i> Likes
            </li>
            <li
              className={cx(
                styles.filterButton,
                activeFilter == 6 && styles.activeFilter
              )}
              onClick={showFollows}
            >
              <i className="icofont-favourite"></i> Following
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountDetails;
