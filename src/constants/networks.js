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
    auction: '0x6240D2029836dDEFE4be2187fb2CBea88d359Ad1',
    sales: '0x78647fC356aCeE56DEbE58dDF993C877D93c9395',
    bundleSales: '0x48cBbbAF1dFa65C980C338c55e68CD282A687Dd3',
    factory: '0x719e023b7a3dBC2fCD03A859De3d08E67BB0f3D9', //FantomNFTFactory
    privateFactory: '0x5c64661368957ac19d6673063D0160aD3A27d079', //FantomNFTFactoryPrivate
    artFactory: '0x21ab799aEDBB9f79149b5A07b528365c29306625', //FantomArtFactory
    privateArtFactory: '0x7039E456A4C18e20452e3D53cb4Cff42da0651E2', //FantomArtFactoryPrivate
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
