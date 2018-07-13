import env from '../../constants/env';

export default [
  {
    name: 'mainnet',
    ssl: true,
    port: 443,
    nethash: 'fe561132f28c3d6da8690c42fd4be8c5bcdad7b5a74d7f4e13355c7aef1e75ad'
  }
];

/*, {
    name: 'Testnet',
    testnet: true,
    ssl: true,
    port: 443,
  }, {
    name: 'Custom Node',
    custom: true,
    address: 'http://localhost:4000',
    ...(env.production ? {} : {
      testnet: true,
      nethash: '198f2b61a8eb95fbeed58b8216780b68f697f26b849acf00c8c93bb9b24f783d',
    }),
  },*/
