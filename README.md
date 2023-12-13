# Project : Inbox
This is a small project made to learn and walk through ethereum test networks and test written contract's edge cases. The Inbox contract handles a simple operation of initializing and setting a message in the contract.

## Design

![eth_inbox drawio](https://github.com/rajeshsatpathy1/Inbox/assets/21288436/82757cab-5b49-460c-902a-eb937f1b047b)

## Writing and deploying the contract

### Remote

For writing the contract, the [Remix - Ethereum IDE](https://remix.ethereum.org/) is used. This helps to get the ABI, the contract Bytecode and run it on the Remix VM network.

### Local

To compile and deploy the contract of choosing, scripts such as the compile.js, deploy.js are written. The deploy script is made to be flexible to use network selected in a given wallet provider (Metamask in this case) as a plugin network. 
Truffle's HDWallet Provider library is used for this. Accounts are taken from ethereum test network and the first account in the accounts array is used as the contract deploying account by default. Web3js library is used for all transaction based logic.

## Testing

To test the contract Mocha library is used. Test cases are written for different scenarios for checking successful contract deployment, initializing message in contract and setting a new message in the contract.
