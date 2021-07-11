require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind pumpkin good arctic opera spread'; 
let testAccounts = [
"0xec051088431a08a8a8f94f670d54d63413842750da61ec2ecca8ad89a66bb4bc",
"0xd6f787800d1d324900abd8b1a5caf0fa964c866c1b8d11ddeeac3b4549d55a6b",
"0x81c41ff29636d257283b5075d8db2c3d168a494de75927d5401a11e5cff3b53f",
"0xb209497a400ce4ddd95df553d94606c335c4a42ba39befa563247805813145b1",
"0xf4ff0a057e50b3385170a81cc46703c5a583f90d9f16183b38e04407b7e03c31",
"0xc44dfa42f8ad83bfcedb2b3b61bd1b4bbc2beb7cd42788d4d512b7666d684fe3",
"0xf4309208988c12a3fbd8be2953517504fc9b8d92a6aef9ab6b27be14398aaf5f",
"0xfdb80cccbd1d2aaebacb584ca2c1ed1575e9fe45185b5fbfd88c9a301a3885c2",
"0xaee7e5c7f07994acf694ea3443c648fef710f9aaf6458cc78d34970e0a7d0c8c",
"0xf9f71f9fd37d6d98f3dc0cfd6e3ecf9d37307450202fab9ee4ac2b869e093c1d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

