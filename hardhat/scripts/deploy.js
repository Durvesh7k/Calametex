const hre = require('hardhat')

const Main = async() => {

  const[deployer]  = await hre.ethers.getSigners();

  const contract = await hre.ethers.getContractFactory('CrowdFunding');
  const crowdFundContract  = await contract.deploy()
  await crowdFundContract.deployed();

  console.log("The contract is deployed by: ", deployer.address);
  console.log("The contract address is: ", crowdFundContract.address);

  saveFrontendFiles(crowdFundContract, 'CrowdFunding')

}


function saveFrontendFiles(contract, name) {
  const mumbai = "goerli";
  const fs = require("fs");
  const contractsDir = __dirname + "/../../pages/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-${mumbai}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);
  
  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}


const runMain = async() => {
  try{
    await Main();
    process.exit(1);
  }catch(e){
    console.log(e);
    process.exit(0);
  }
}

runMain();