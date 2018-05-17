var EggFactory = artifacts.require("./EggFactory.sol");

module.exports = function (deployer) {
  deployer.deploy(EggFactory);
};
