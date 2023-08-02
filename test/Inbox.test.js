const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile');

// The below line is used to change networks, i.e. this will be used put ganache provider or sepolia network provider, etc.
const web3 = new Web3(ganache.provider());

const INIT_STRING = 'Hello there!';
const SET_STRING = 'General Kenobi';

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [INIT_STRING] })
        .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    })

    it ('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, INIT_STRING);
    })

    it ('can change a message', async () => {
        await inbox.methods.setMessage(SET_STRING).send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, SET_STRING);
    })
});