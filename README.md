# Clean Your Tests

## Instructions

### Clean Your Tests
In the initial commit to this project, you have been provided with files that contain a JavaScript module and some associated tests. Currently all of the functions work and the tests all pass, however, there are no unit tests for most of the functions. You are to add tests for all of the currently untested functions.

### Deep Cover
In a new branch, continuing from Part 1 (Clean Your Tests), you are tasked with refactoring the tests for `calculateProductPrice`. Currently these tests are asserting return values but not that they are being calculated by the correct functions in the correct order. You should refactor these tests to conform to testing best practices.

### A Quick Commute
In a new branch, continuing from Part 2 (Deep Cover), you are tasked with using Test Driven Development to add the functionality required to calculate commuter products. Selected options for commuter products are of the form

```JSON
{ "electedCoverage": ["parking", "train"] }
```

where the array contains which coverage is being elected. This array can have both types, a single type, or even be empty (no coverage elected).

### A Trip to NYC
In a new branch, continuing from Part 3 (A Quick Commute), you are tasked with adding code coverage with NYC. Once you have your code coverage numbers, explore the code to explain why you got the result you got.

## Provided Files

**.eslintrc.js** - a config file for ES Lint

**.gitignore** - this file sets the project up to ignore the node_modules folder when committing to git

**package.json** - this file sets up the Node project including all the dev dependencies

**package-lock.json** - this file is used by NPM for tracking package installation

**pricing.js** - this file contains the functions for calculating the monthly price of a product based on a users enrollment options

**tests/employee.js** - this file contains test data used when running tests, specifically an example employee

**tests/products.js** - this file contains test data used when running tests, specifically example benefits products

**tests/tests.js** - this file contains tests for the functions in the `calculateProductPrice` function

## Exercise Submission

You should submit your working changes in a pull request.
