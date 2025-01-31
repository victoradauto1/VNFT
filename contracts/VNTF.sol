// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "erc721a/contracts/ERC721A.sol";

contract VFNT is ERC721A {
   
   address payable private _owner;

    constructor() ERC721A("VNFT2", "VNFT2") {
        _owner = payable(msg.sender);
    }

    function mint(uint256 quantity) public payable {
        require( msg.value >= 0.01 ether, "insufficent payment");
        _mint(msg.sender, quantity);
    }

    function withdraw() external{
        require(msg.sender == _owner, "You do not have permission");
        uint256 amount = address(this).balance;
        (bool sucess,) = _owner.call{value: amount}("");
        require(sucess == true, "Failed withdraw");
    }

    function burn(uint256 tokenId) external{
        _burn(tokenId, true);
    }

    function _baseURI() internal pure override returns(string memory) {
        return "https://victoradauto.com.br/nfts/";
    }

    function tokenURI(uint256 tokenId) public view override(ERC721A) returns(string memory){
        return string.concat(super.tokenURI(tokenId), ".json");
    }
}