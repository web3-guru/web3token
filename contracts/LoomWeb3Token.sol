pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LoomWeb3Token is ERC20 {
    address public gateway;

    string public constant name = "Web3 Token";
    string public constant symbol = "WEB3";
    uint8 public constant decimals = 18;

    constructor(address gatewayAddress) public {
        gateway = gatewayAddress;
    }

    function mintToGateway(uint256 amount) public {
        require(msg.sender == gateway, "only the gateway is allowed to mint");

        _mint(gateway, amount);
    }
}
