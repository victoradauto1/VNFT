import { expect} from "chai";
import hre from "hardhat";
import { ethers } from "hardhat";

describe("VNFT", function () {

  async function deployFixture() {


    const [owner, otherAccount] = await hre.ethers.getSigners();

    const VNFT = await hre.ethers.getContractFactory("VFNT");
    const contract = await VNFT.deploy();

    return { contract, owner, otherAccount };
  }

  describe("VNFT Tests", function () {

    it("Should has name", async function () {
      const { contract, owner, otherAccount } = await deployFixture();

      expect(await contract.name()).to.equal("VNFT2", "Can't get name");
    });

    
    it("Should has symbol", async function () {
      const { contract, owner, otherAccount } = await deployFixture();


      expect(await contract.symbol()).to.equal("VNFT2", "Can't get symbol");
    });

    it("Should mint", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });

      const balance = await contract.balanceOf(owner.address);
      const tokenId = 0
      const ownerOf = await contract.ownerOf(tokenId);
       const totalSupply =  await contract.totalSupply()

      expect(balance).to.equal(1, "Can't mint");
      expect(ownerOf).to.equal(owner.address, "Can't mint");
      expect(totalSupply).to.equal(1, "Can't mint");
    });

    it("Should burn", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0
      await contract.burn(tokenId);

      const balance = await contract.balanceOf(owner.address);
      const totalSupply =  await contract.totalSupply()

      expect(balance).to.equal(0, "Can't burn");
      expect(totalSupply).to.equal(0, "Can't burn");
    });

    it("Should burn (approved)", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0;
      await contract.approve(otherAccount, tokenId);
      const instance = contract.connect(otherAccount);

      await instance.burn(tokenId);

      const balance = await contract.balanceOf(owner.address);
      const totalSupply =  await contract.totalSupply()

      expect(balance).to.equal(0, "Can't burn");
      expect(totalSupply).to.equal(0, "Can't burn");
    });

    it("Should burn (approved for all)", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0;
      await contract.setApprovalForAll(otherAccount.address, true);
      const instance = contract.connect(otherAccount);

      await instance.burn(tokenId);

      const balance = await contract.balanceOf(owner.address);
      const totalSupply =  await contract.totalSupply()

      expect(balance).to.equal(0, "Can't burn for all");
      expect(totalSupply).to.equal(0, "Can't burn for all");
    });

    it("Should NOT burn (exists)", async function () {
      const { contract, owner, otherAccount } = await deployFixture();

      await expect(contract.burn(0)).to.be.revertedWithCustomError(contract,"OwnerQueryForNonexistentToken" );   
    });

    it("Should NOT burn (permission)", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0;
  
      const instance = contract.connect(otherAccount);

      await expect(instance.burn(tokenId)).to.be.revertedWithCustomError(contract, "TransferCallerNotOwnerNorApproved");
    });

    it("Should has URI metadata", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0;

      expect(await contract.tokenURI(tokenId)).to.equal( "https://victoradauto.com.br/nfts/0.json", "Can't get URI metadata");
    });

    it("Should NOT has URI metadata", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
     
      await expect(contract.tokenURI(1)).to.revertedWithCustomError(contract, "URIQueryForNonexistentToken");
    });

    it("Should transfer", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0

      await contract.transferFrom(owner.address, otherAccount.address, tokenId)
      
      const balanceFrom = await contract.balanceOf(owner.address);
      const balanceTo = await contract.balanceOf(otherAccount.address);
      const ownerOf = await contract.ownerOf(tokenId);

      expect(balanceFrom).to.equal(0, "Can't transfer");
      expect(balanceTo).to.equal(1, "Can't transfer" );
      expect(ownerOf).to.equal(otherAccount.address, "Can't tranfer");
    });

    it("Should NOT transfer(permission)", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0

      const instance = contract.connect(otherAccount);
      await expect(instance.transferFrom(owner.address, otherAccount.address, tokenId)).to.be.revertedWithCustomError(contract, "TransferCallerNotOwnerNorApproved");
      
      
    });

    it("Should NOT transfer(exists)", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await expect(contract.transferFrom(owner.address, otherAccount.address, 1)).to.be.revertedWithCustomError(contract, "OwnerQueryForNonexistentToken");

    });

    it("Should emit transfer", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0

      expect(await contract.transferFrom(owner.address, otherAccount.address, tokenId)).to.emit(contract, "transfer").withArgs(owner.address, otherAccount.address, tokenId);
    });

    it("Should transfer (approved)", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0

      const approve = await contract.approve(otherAccount.address, tokenId);
      const approved = await contract.getApproved(tokenId);

      const instance = contract.connect(otherAccount);
      await instance.transferFrom(owner.address, otherAccount.address, tokenId);

      const ownerOf = await contract.ownerOf(tokenId);
     
      expect(approve).to.emit(contract, "approval").withArgs(owner.address, otherAccount.address, tokenId);
      expect(ownerOf).to.equal(otherAccount.address, "Can't transfer");
      expect(approved).to.equal(otherAccount.address, "Can't transfer");
    });

    it("Should clean approvals after transfer", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0

      await contract.approve(otherAccount.address, tokenId);

      const instance = contract.connect(otherAccount);
      await instance.transferFrom(owner.address, otherAccount.address, tokenId);
     
      const approved = await contract.getApproved(tokenId);
     
      expect(approved).to.equal("0x0000000000000000000000000000000000000000")
    });

    it("Should transfer (approved for all)", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      await contract.mint(1, { value: ethers.parseEther("0.01") });
      const tokenId = 0

      const approve =  await contract.setApprovalForAll(otherAccount.address, true);
      const approved = await contract.isApprovedForAll(owner.address, otherAccount.address);

      const instance = contract.connect(otherAccount);
      await instance.transferFrom(owner.address, otherAccount.address, tokenId);

      const ownerOf = await contract.ownerOf(tokenId);
     
      expect(ownerOf).to.equal(otherAccount.address, "Can't transfer");
      expect(approved).to.equal(true, "Can't transfer");
      expect(approve).to.emit(contract, "ApprovalForAll").withArgs(owner.address, otherAccount.address, true);
    });

    it("Should support interfaces", async function () {
      const { contract, owner, otherAccount } = await deployFixture();
      expect( await contract.supportsInterface("0x80ac58cd")).to.equal(true, "Can't support interface");
    });
  })
});
