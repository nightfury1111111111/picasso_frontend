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
    auction: '0x951Cc69504d39b3eDb155CA99f555E47E044c2F1',
    sales: '0xa06aecbb8CD9328667f8E05f288e5b3ac1CFf852',
    bundleSales: '0x56aD389A02Ea9d63f13106cB0c161342f537a92e',
    factory: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //FantomNFTFactory
    privateFactory: '0xa4fDb09e1796730bfBA8a352074F0dd65D400Dd4', //FantomNFTFactoryPrivate
    artFactory: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
    privateArtFactory: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
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
