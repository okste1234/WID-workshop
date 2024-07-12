// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract SetterGetter{

    struct Person {
        string name;
        uint256 age;
        string sex;
    }

    Person[] public persons;

    function setDetails(string memory _name, uint256 _age, string memory _sex) public {
        Person memory newPerson = Person({
            name: _name,
            age: _age,
            sex: _sex
        });

        persons.push(newPerson);
    }

    function getDetails() public view returns (Person[] memory) {
        
        return persons;
    }
}
