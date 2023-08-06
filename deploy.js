const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'diet snow neck yellow urban fashion omit above term robot enemy cactus',
    'https://eth-sepolia.g.alchemy.com/v2/VLvHCP0vCSgBezMWUiijnTv5_ruucnGl'
);

const web3 = new Web3(provider);

(async() => {
    try{
        const accounts = await web3.eth.getAccounts();
        
        console.log("Attempting to deploy from account", accounts[0]);

        const result = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({ data: bytecode, arguments: ["Hello there!"] })
            .send({ gas: 1000000, from: accounts[0]});

        console.log("Contract deployed to", result.options.address);
    }catch(err){
        console.log("What the error?", err);
    }
    provider.engine.stop();
})();