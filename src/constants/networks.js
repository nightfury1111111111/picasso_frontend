import { ChainId } from 'constants/chainid';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.FANTOM]: {
    auction: '0x2790db7fC1364D4B3594D59FC5bb84091906ff19',
    sales: '0x845A66D5Fdf7BCA85c5A1699f0dEbCf7F4bb0042',
    bundleSales: '0x8aDF375E8ecA7b5b9Ccf293d96989Bf451fDd67d',
    factory: '0xcbfb77d00CC57B5d0B4Fff97224074be87e19C56', //FantomNFTFactory
    privateFactory: '0x05Dd6CEfD4223462101e289520e5176398317201', //FantomNFTFactoryPrivate
    artFactory: '0xEB31992FadD9eb265199A10289F1D6f37A789612', //FantomArtFactory
    privateArtFactory: '0x10916d070e5e6256A91B3e05453d9a2C48587213', //FantomArtFactoryPrivate
  },
  [ChainId.FANTOM_TESTNET]: {
    auction: '0x04F677F85c908febe9105F6E2bE41343EF3cfc2e',
    sales: '0xc964b0ebA0B32fe0F8fc9e46591Eee79fCDcF30b',
    bundleSales: '0x901426885454C38e9C079A99f4E07203CB7AE339',
    factory: '0xEd965428614957e74783a155a7C16a15F8Ac54BD', //FantomNFTFactory
    privateFactory: '0x9eB151d7468b1b95d5528A52F4964a4b8c9D6628', //FantomNFTFactoryPrivate
    artFactory: '0xA6d9FE6E3eD58d654EfB89648Eee4b3d42df217E', //FantomArtFactory
    privateArtFactory: '0x41A02b88Ac3c5b3e0Fb5dB04662606f89346D660', //FantomArtFactoryPrivate
  },
};
