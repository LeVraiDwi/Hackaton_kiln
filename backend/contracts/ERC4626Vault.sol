// SPDX-License-Identifier: MIT

pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";

//@title Un contrat intelligent de Vault ERC4626
//@author Thibaut Baudry
//@notice Ce contrat intelligent représente un Vault permettant de rebalance les assets d'un utilisateur vers les Vaults de l'entreprise "Kiln" les plus rentables

contract ERC4626Vault is ERC4626 {

    struct Users {
        address userAddress;
        uint256 balanceUSDC;
        uint256 balanceOtherTokens;
    }

    struct DepositsUSDC {
        uint256 date;
        uint256 amount;
    }
    
    address payable public balanceTonVault;

    mapping (address => Users[] ) private users;
    uint256 balanceMegaVault;
    address[2] vaults;
    uint256[2] ratios;

    event Deposit (uint256 _amount, address tokenAddress);
    event Withdraw (uint256 _amount, address tokenAddress);
    event ReBalanced (address tokenAddress);

    /// CONSTRUCTOR ///

    constructor(IERC20 _asset, address _addressVault1, address _addressVault2, uint256 _ratioVault1, uint256 _ratioVault2) ERC4626(_asset) ERC20("MyToken", "") {
        balanceTonVault = payable(msg.sender);
        vaults[0] = _addressVault1;
        vaults[1] = _addressVault2;
        ratios[0] = _ratioVault1;
        ratios[1] = _ratioVault2;
    }

    function depositUSDCMegaVault(uint256 _amount, address _addressUSDC) external {
        require(_amount > 0, "amount = 0");
        require((keccak256(abi.encode(_addressUSDC))) == (keccak256(abi.encode("USDC"))), "NOT USDC");

        IERC20(_addressUSDC).transferFrom(msg.sender, balanceTonVault, _amount);
        balanceMegaVault += _amount;

        emit Deposit (_amount, _addressUSDC);
    }

    function withdrawUSDCMegaVault(uint256 _amount, address _addressUSDC) external {
        require(_amount > 0, "amount = 0");
        require((keccak256(abi.encode(_addressUSDC))) == (keccak256(abi.encode("USDC"))), "NOT USDC");

        IERC20(_addressUSDC).transferFrom(balanceTonVault, msg.sender, _amount);
        balanceMegaVault -= _amount;

        emit Withdraw (_amount, _addressUSDC);
    }

    function reBalance(uint256 _newRatioVault1, uint256 _newRatioVault2,address _addressUSDC) external {

        uint256 _diffRation;

        if (_newRatioVault1 > _newRatioVault2) {
            _diffRation = ratios[0] - _newRatioVault2;
            uint256 _amountWithDrawt = balanceMegaVault * ratios[0] * _diffRation;
            IERC20(_addressUSDC).transferFrom(vaults[0], balanceTonVault, _amountWithDrawt);
            IERC20(_addressUSDC).transferFrom(balanceTonVault, vaults[1], _amountWithDrawt);
            ratios[0] = _newRatioVault1;
            ratios[1] = _newRatioVault2;
            emit ReBalanced (_addressUSDC);
        }
        else if (_newRatioVault2 > _newRatioVault1) {
            _diffRation = ratios[1] - _newRatioVault1;
            uint256 _amountWithDrawt = balanceMegaVault * ratios[1] * _diffRation;
            IERC20(_addressUSDC).transferFrom(vaults[1], balanceTonVault, _amountWithDrawt);
            IERC20(_addressUSDC).transferFrom(balanceTonVault, vaults[0], _amountWithDrawt);
            ratios[0] = _newRatioVault1;
            ratios[1] = _newRatioVault2;
            emit ReBalanced (_addressUSDC);
        }
        else {
            emit ReBalanced (_addressUSDC);
        }
    }

    function getVault() public view returns (uint ratioI, uint ratioII, uint balance) {
        ratioI = ratios[0];
        ratioII = ratios[1];
        balance = balanceMegaVault;
    }
}
