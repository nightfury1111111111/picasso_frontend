import React from 'react';
import { Link } from 'react-router-dom';
import { getRandomIPFS, getExactImageUrl } from 'utils';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CheckIcon from '@material-ui/icons/Check';
import styles from './styles.module.scss';

const PopularCollectionItem = props => (
  <div className={styles.container}>
    <div className="swiper-wrapper">
      <div className="swiper-slide">
        <div className="slider-item">
          <div className="sc-card-collection style-2 home2">
            <div className="card-bottom">
              <div
                className="author"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <div className="sc-author-box style-2">
                  <div className="author-avatar">
                    {console.log('sdfdssfsdf', props.item.collectionImg)}
                    <img
                      src={`${getRandomIPFS('', true)}${
                        props.item.collectionImg
                      }`}
                      alt=""
                      className="avatar"
                    />
                    <div className="badge">
                      <CheckIcon />
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h4>{props.item.collectionName}</h4>
                  <div className="infor">
                    <span>Created by</span>
                    <span style={{ color: 'black', marginLeft: '10px' }}>
                      {props.item.owner}
                      {console.log('sdsdsdsd', props.item.owner)}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="wishlist-button public"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <FavoriteBorderIcon />
                <span className="number-like">{props.item.liked}</span>
              </div>
            </div>
            <div className="media-images-collection">
              <div className="box-left">
                <img src={getExactImageUrl(props.item.img[0])} alt="axies" />
              </div>
              <div className="box-right">
                <div className="top-img">
                  <img src={getExactImageUrl(props.item.img[1])} alt="axies" />
                  <img src={getExactImageUrl(props.item.img[2])} alt="axies" />
                </div>
                <div className="bottom-img">
                  <img src={getExactImageUrl(props.item.img[3])} alt="axies" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  //     {/* <div className={styles.ranking}>
  //         100
  //     </div>
  // </div> 	 */}
);

export default PopularCollectionItem;
