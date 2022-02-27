const Web3 = require("web3");
const web3 = new Web3("http://localhost:8545");
const { abi } = require('../build/contracts/HelloWorld.json');

async function getBlockNumber() {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    console.log(latestBlockNumber);

    let accounts = await web3.eth.getAccounts();
    console.log(accounts);

    let helloWorld = new web3.eth.Contract(abi, "0x58d7C4023D85b3D607fbB48cDa0768ED58B3ed21");
    const rst = await helloWorld.methods.hi().call();
    console.log("response=> " + rst);

    return latestBlockNumber;  
}
  
getBlockNumber();