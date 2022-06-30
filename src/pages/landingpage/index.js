import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { useApi } from 'api';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ReactPlayer from 'react-player';
import PopularCollectionItem from 'components/PopularCollectionItem';
import { Categories } from 'constants/filter.constants';
import HeaderActions from 'actions/header.actions';
import FilterActions from 'actions/filter.actions';
import CollectionsActions from 'actions/collections.actions';
import Header from 'components/header';
import Footer from 'components/Footer';
import NFTItem from 'components/NFTCard';
import icon1 from 'assets/imgs/Wallet.png'
import icon2 from 'assets/imgs/Category.png'
import icon3 from 'assets/imgs/Image2.png'
import icon4 from 'assets/imgs/Bookmark.png'
import search from 'assets/svgs/magnifier.svg';

import styles from './styles.module.scss';
import { pop } from 'jazzicon/colors';

const cards = [
  {
    title: "Set Up Your Wallet",
    description: "Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.",
    icon : icon1,
    colorbg : "icon-color1"
},
{
    title: "Create Your Collection",
    description: "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection",
    icon : icon2,
    colorbg : "icon-color2"
},
{
    title: "Add Your NFTs",
    description: "Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    icon : icon3,
    colorbg : "icon-color3"
},
{
    title: "List Them For Sale",
    description: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
    icon : icon4,
    colorbg : "icon-color4"
},
];

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [popCollection, setPopCollection] = useState([]);
  const [tokenWithOwner, setTokenWithOwner] = useState([]);
  const {fetchAllTokens, fetchCollections, fetchAllAccounts} = useApi();
  const fetchInfo = async() => {
    dispatch(CollectionsActions.fetchStart());
    const p1 = fetchAllTokens();
    const p2 = fetchCollections();
    const p3 = fetchAllAccounts();
    const [tokens, collections, accounts] = await Promise.all([p1,p2,p3]);
    let forCollection = [];
    let pickToken = [];
    if (collections.status === 'success') {
      const verified = [];
      const unverified = [];
      collections.data.map(item => {
        if (item.isVerified) verified.push(item);
        else unverified.push(item);
      });
      dispatch(CollectionsActions.fetchSuccess([...verified, ...unverified]));
    } else dispatch(CollectionsActions.fetchFailed());
    for (let i =0;i<collections.data.length;i++){
      let sum = 0;
      let img = [];
      let owner = collections.data[i].owner;
      tokens.data.map((token)=>{
        if(token.contractAddress === collections.data[i].address) {
          sum += Number(token.liked);
          img.push(token.imageURL);
        }
      });
      accounts.data.map((account)=>{
        if(account.address === collections.data[i].owner) owner = account.alias;
      })
      forCollection.push({
        liked:sum, 
        img, 
        collectionName: collections.data[i].collectionName, 
        collectionImg: collections.data[i].logoImageHash,
        owner
      });
    }
    for (let j=0;j<tokens.data.length;j++){
      let owner = tokens.data[j].owner;
      accounts.data.map((account)=>{
        if(account.address === tokens.data[j].owner) owner = account.alias||account.address;
      })
      pickToken.push({...tokens.data[j],owner});
    }
    setTokenWithOwner(pickToken);
    setPopCollection(forCollection);
  }
  // console.log('collections: ', popCollection, tokenWithOwner);
  useEffect(() => {
    dispatch(HeaderActions.toggleSearchbar(true));
    dispatch(FilterActions.updateCategoryFilter(null));
    fetchInfo()
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
        {/* <div className={styles.browseBtn}>
          <ChevronRightIcon className={styles.browseBtnIcon} />
        </div> */}
      </div>
    </div>
  );
  const CreateItem = props => (
    <div className='col-lg-3 col-md-6 col-12'>
        <div className="sc-box-icon">
            <div className="image">
                <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>                                                                             
            </div>
            <h3 className={styles.alignLeft}>{props.item.title}</h3>
            <p className={styles.alignLeft}>{props.item.description}</p>
        </div>
    </div>
  )
  return (
    <div className={styles.container}>
      <Header />
      <section
        className={styles.bannerSection}
        style={{ backgroundImage: "url('/assets/images/banner/bg-6.jpg')" }}
      >
        <div className={styles.body}>
          <div className={styles.main}>
            <div className={styles.mainLeft}>
              <div className={styles.title}>
                <span style={{ color: 'mediumblue' }}>Discover</span> Collect
                <br />
                And Sell <span style={{ color: 'mediumblue' }}>NFT</span> Assets
              </div>
              <div className={styles.subtitle}>
                Digital Marketplace For Crypto Collectibles And Non-Fungible
                Tokens. Buy, Sell, And Discover Exclusive Digital Assets.
              </div>

              <div style={{ display: 'flex' }}>
                <Link to="/explore" className={styles.exploreButton}>
                  Explore
                </Link>
                <div style={{ width: '15px' }}></div>
                <Link to="/create" className={styles.createButton}>
                  Create
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className={styles.sectionHeaderContainer}>
          <div className={styles.sectionHeader}>
            <div
              style={{
                zIndex: 1000,
                paddingBottom: '17px',
                fontSize: "36px",
              }}
            >
              Today&apos; Pick
            </div>
          </div>
          <div className={styles.aboutCards}>
            {
              tokenWithOwner.splice(0,4).map((item,index) => (
                <NFTItem key={index} item={item} />
              ))
            }
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className={styles.sectionHeaderContainer}>
          <div className={styles.sectionHeader}>
            <div
              style={{
                zIndex: 1000,
                paddingBottom: '17px',
                fontSize: "36px",
              }}
            >
              Popular Collection
            </div>
          </div>
          <div className={styles.aboutCards}>
            {
              popCollection.sort((a,b)=>b.liked-a.liked).splice(0,3).map((item,index) => (
                <PopularCollectionItem key={index} item={item} />
              ))
            }
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className={styles.sectionHeaderContainer}>
          <div className={styles.sectionHeader}>
            <div
              style={{
                zIndex: 1000,
                paddingBottom: '17px',
                fontSize: "36px",
              }}
            >
              Create And Sell Your NFTs
            </div>
          </div>
          <div className={styles.aboutCards}>
            {cards.map((item, key) =>
              <CreateItem key={key} item={item} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
