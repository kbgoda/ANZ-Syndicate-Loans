var SyndLoanANZ = artifacts.require("./SynLoanData.sol");

/* 
Don't use the file name of the contract, 
use actual the name of the contract 
artifacts.require uses the JSON files in [project root]/build/contracts, 
which are named after the contract's name, not it's file's name
*/

module.exports = function(deployer) {
  deployer.deploy(SyndLoanANZ);
};