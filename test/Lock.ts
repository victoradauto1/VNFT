import { expect } from "chai";
import hre from "hardhat";

describe("VNFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const VNFT = await hre.ethers.getContractFactory("Lock");
    const contract = await VNFT.deploy();

    return { contract, owner, otherAccount };
  }

  describe("VNFT Tests", function () {

    it("Should set the right unlockTime", async function () {
      const { contract, owner, otherAccount } = await deployFixture();

      expect(1).to.equal(1);
    });

  })

});
