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
    auction: '0xe8600c201E75605E10Ee8d5D227E67f15D3730ce',
    sales: '0x231FE9A5798Fa4b489bb60df891695C4B54350D7',
    bundleSales: '0x8954b43506C2a29EAe4b6f8628366B2cE3339575',
    factory: '0x4f9540c3a5b7A42EfbEd4C7eC30f38A286FF2102', //FantomNFTFactory
    privateFactory: '0x6f01DD8e57e6FA85396dbe56B2E49eA3ECf4dfEA', //FantomNFTFactoryPrivate
    artFactory: '0x53BCB325C7Cc8839452e7ded8C67220cD08C696C', //FantomArtFactory
    privateArtFactory: '0xF42e233991e613B19a8cA3f4b60b0FD9f2C569B5', //FantomArtFactoryPrivate
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
