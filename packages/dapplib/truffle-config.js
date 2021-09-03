require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remember equip imitate prison food skate'; 
let testAccounts = [
"0xf9841e104db616c2b0c3f05b3bcfa77475ae179091b9c5862e7714808766bafa",
"0x11a234b03af72a2ec2b98a9b3fb48303ebd006ec50312c25f61cf01db555bbcb",
"0xcd5055fad5ab9f110aa364ec2c2ca4110d836200d21452682a67e21058df1019",
"0x0db70670405b08bfcd3bfaebd9687a5dae4e27bd13fca778ad4f4568bbaa5d41",
"0xe13694acd7cc7f5b651b9859f4f1632d0b07a5656fc7f593c655491bbe2d390c",
"0x2b11294a7d0acaa6eb4b4e9fde5cd5e0611e66f6e91efd2bfe966132944b6e0d",
"0x73cff201c07be4b0ec56ad2b5f6b1bc7ae2d5c573c8cacb95d4a674d482a02a8",
"0x86e3822addc0411296f81f6104fc90136b76538ac3d753948f6baa89242270d8",
"0x75aa16f25384eecd0b77b0a6e9acbd9ba4280b355c28e9e1df8ceb777aa23088",
"0x949cd66b3198c1903eabedda72458c535c5ad4aa302af6a71586f684bc266197"
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

