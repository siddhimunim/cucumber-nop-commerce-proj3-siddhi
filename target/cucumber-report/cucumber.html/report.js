$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As a User I am verifying Computer page test\r\nGiven I am on home page",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4565868000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verify User Should Navigate To ComputerPage Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-computerpage-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify computer text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 692099100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyComputerText()"
});
formatter.result({
  "duration": 61365600,
  "status": "passed"
});
formatter.after({
  "duration": 675721500,
  "status": "passed"
});
formatter.before({
  "duration": 2864622700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify User Should Navigate To DesktopsPage Successfully",
  "description": "",
  "id": "computer-test;verify-user-should-navigate-to-desktopspage-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Desktops\" link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify desktops text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 907841500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnLink(String)"
});
formatter.result({
  "duration": 395093800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyDesktopsText()"
});
formatter.result({
  "duration": 57373400,
  "status": "passed"
});
formatter.after({
  "duration": 690011300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify That User Should BuildYouOwnComputer And Add ThemToCart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Desktops\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I  verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 31,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 32,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 33,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 34,
      "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2231246400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify That User Should BuildYouOwnComputer And Add ThemToCart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Desktops\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I  verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 905628900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnLink(String)"
});
formatter.result({
  "duration": 421728600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 779712300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 123657400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 130268900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 81000000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 82174600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 89958400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 92426600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 674508400,
  "status": "passed"
});
formatter.after({
  "duration": 741535500,
  "status": "passed"
});
formatter.before({
  "duration": 2227153200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify That User Should BuildYouOwnComputer And Add ThemToCart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Desktops\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I  verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 933753300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnLink(String)"
});
formatter.result({
  "duration": 428597500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 840001900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 91410900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 122925500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 98183200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 103844900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 113086900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 74668500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 290213700,
  "status": "passed"
});
formatter.after({
  "duration": 758610600,
  "status": "passed"
});
formatter.before({
  "duration": 2680450400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify That User Should BuildYouOwnComputer And Add ThemToCart Successfully",
  "description": "",
  "id": "computer-test;verify-that-user-should-buildyouowncomputer-and-add-themtocart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click on \"Computers\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on \"Desktops\" link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Build your own computer\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I  verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 922482800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 12
    }
  ],
  "location": "ComputerSteps.iClickOnLink(String)"
});
formatter.result({
  "duration": 393762800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 801656200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 81898800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 115402900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 84662800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 76242500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 121478000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 71200000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 252365600,
  "status": "passed"
});
formatter.after({
  "duration": 768515400,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "\r\nAs user I want to login in nop commerce",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2200045400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 416313500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 56082800,
  "status": "passed"
});
formatter.after({
  "duration": 715128000,
  "status": "passed"
});
formatter.before({
  "duration": 2587352700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify TheError Message With InValid Credentials",
  "description": "",
  "id": "login-test;verify-theerror-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter emailId \"siddhi.mun1@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password \"siddh123\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify error massage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 829234400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddhi.mun1@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 139752200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddh123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 105898000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1317841600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyErrorMassage()"
});
formatter.result({
  "duration": 55496300,
  "status": "passed"
});
formatter.after({
  "duration": 705024500,
  "status": "passed"
});
formatter.before({
  "duration": 2174252600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify That User Should logInSuccessFully With Valid Credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-loginsuccessfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I filled all regestration details",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter emailId \"jennu.smith@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter password \"katiebruno\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify that logout link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 442678600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 378708600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iFilledAllRegestrationDetails()"
});
formatter.result({
  "duration": 497579000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 81517800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 327687400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jennu.smith@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 121234100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "katiebruno",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 111043500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1592529800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyThatLogoutLinkIsDisplay()"
});
formatter.result({
  "duration": 1069553100,
  "status": "passed"
});
formatter.after({
  "duration": 734629400,
  "status": "passed"
});
formatter.before({
  "duration": 2264342200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I filled all regestration details",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter emailId \"jennu.smith@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter password \"katiebruno\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on LogOut button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I verify that Login link display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 419294000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 359753500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iFilledAllRegestrationDetails()"
});
formatter.result({
  "duration": 497306500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 87584200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 314551700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jennu.smith@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginSteps.iEnterEmailId(String)"
});
formatter.result({
  "duration": 123371200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "katiebruno",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 106909700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1593660200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogOutButton()"
});
formatter.result({
  "duration": 548696500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyThatLoginLinkDisplay()"
});
formatter.result({
  "duration": 1062041600,
  "status": "passed"
});
formatter.after({
  "duration": 716776600,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Regester Test",
  "description": "As A user I register in nop commerce site",
  "id": "regester-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2652153400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As User I am on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 59300,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify User Should NavigateTo Register Page Successfully",
  "description": "",
  "id": "regester-test;verify-user-should-navigateto-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Sanity"
    },
    {
      "line": 7,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on LoginIn link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify register text",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnLoginInLink()"
});
formatter.result({
  "duration": 400357400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 381371900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iVerifyRegisterText()"
});
formatter.result({
  "duration": 46996600,
  "status": "passed"
});
formatter.after({
  "duration": 684466400,
  "status": "passed"
});
formatter.before({
  "duration": 2134978900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As User I am on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "verify That FirstName LastName Email password And ConfirmPassword Fields Are Mandetory",
  "description": "",
  "id": "regester-test;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandetory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Smoke"
    },
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click on LoginIn link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should verify errorMassage",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnLoginInLink()"
});
formatter.result({
  "duration": 414608600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 341614800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 96054200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldVerifyErrorMassage()"
});
formatter.result({
  "duration": 344285900,
  "status": "passed"
});
formatter.after({
  "duration": 692930400,
  "status": "passed"
});
formatter.before({
  "duration": 2842194900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "As User I am on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "regester-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I click on LoginIn link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on register link",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select gender \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter firstname \"siddhi\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter lastname \"Munim\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select date of birth \"23\",\"March\",\"1990\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"siddhi.mun\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter passWord \"siddh123\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I confirm password \"siddh123\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify message your registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnLoginInLink()"
});
formatter.result({
  "duration": 398183500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 331924700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 91632800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddhi",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 84304500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Munim",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 93134900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 24
    },
    {
      "val": "March",
      "offset": 29
    },
    {
      "val": "1990",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 351267800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddhi.mun",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 92041700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddh123",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassWord(String)"
});
formatter.result({
  "duration": 96313600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "siddh123",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iConfirmPassword(String)"
});
formatter.result({
  "duration": 91532600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 544748700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iVerifyMessageYourRegistrationCompleted()"
});
formatter.result({
  "duration": 53241700,
  "status": "passed"
});
formatter.after({
  "duration": 688901100,
  "status": "passed"
});
});