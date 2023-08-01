const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile');

// The below line is used to change networks, i.e. this will be used put ganache provider or sepolia network provider, etc.
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy to deploy the contract
    new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hello there!'] });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    })
});