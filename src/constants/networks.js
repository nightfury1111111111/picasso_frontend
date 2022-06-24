import { ChainId } from '@sushiswap/sdk';

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
    auction: '0x0e2e5c87aA9629e0E3DE3E12FaE17A641C02c067',
    sales: '0xeb012b6ee25A6C8307776b1aaABd48b06315a495',
    bundleSales: '0x732B2b7961D7A2faDfD5D8244B573a2a2Adc9Ff2',
    factory: '0xdF32D0563C02a668baba719f461017F229cab135', //FantomNFTFactory
    privateFactory: '0xc40a0Cfd3A7D2cD33B6b80F0B4f5B2839C18f972', //FantomNFTFactoryPrivate
    artFactory: '0x35B8088636118D4920491115Bf70bB0Ad8465c63', //FantomArtFactory
    privateArtFactory: '0x84A76f55ef08d327e1Da995cd51eE12326D19813', //FantomArtFactoryPrivate
  },
  [ChainId.RINKEBY]: {
    auction: '0xF284015dE2e5bC5BB5bb566aBcf7B5043A6a8349',
    sales: '0xE2DD770d3051F65d8a7fF333C4b5e43eF0257093',
    bundleSales: '0x8Bfdde621AC8816c19b4c261737f10863E089A06',
    factory: '0x34D4935D69511C233eA481679FabeD579685afa9', //FantomNFTFactory
    privateFactory: '0xcce6E084590f6695aF7681d00e1958B405fE0f0c', //FantomNFTFactoryPrivate
    artFactory: '0x9F36067198BE7F48e2Cff58D2E40FCba6f9d4da9', //FantomArtFactory
    privateArtFactory: '0xAD6503dd1545bDD84c5006D6CF8E09715c5bd9B9', //FantomArtFactoryPrivate
  },
};
