pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Web3Token is ERC20 {
    uint256 public constant INITIAL_SUPPLY = 21000000; // 21,000,000 WEB3

    string public constant name = "Web3 Token";
    string public constant symbol = "WEB3";
    uint8 public constant decimals = 18;

    constructor() public {
        // Set initial supply to 21,000,000 WEB3
        _mint(msg.sender, 21000000 * (10 ** uint256(decimals)));
    }
}
