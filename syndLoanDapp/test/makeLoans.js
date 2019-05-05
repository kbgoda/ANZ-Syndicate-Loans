// pragma solidity >=0.4.22 <0.6.0;
pragma solidity ^0.5.0;

// necessary because some functions return structs
// pragma experimental ABIEncoderV2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SynLoanData.sol";

contract TestLoan {
    // Address of the loan contract to be tested
    SynLoanData loan = SynLoanData(DeployedAddresses.SynLoanData());

    // id of test loan
    uint loanId = 0;

    // Expected name of loan to be made
    string loanName = "First";

    // Testing the createLoan() function
    function testUserCanCreateLoan() public {

        loan.createLoan(loanName, "Description random");
        // Assert.equal(returnedId, expectedPetId, "Adoption of the expected pet should match what is returned.");
    }

    // Testing retrieval of a single loan's name
    // function testGetLoanDetails() public {

    //     address adopter = loan.seeLoan(loanId);
    //     Assert.equal(adopter, expectedAdopter, "Owner of the expected pet should be this contract");
    // }
}