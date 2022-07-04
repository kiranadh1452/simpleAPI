const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");

When('the user makes request for all users data', function () {
  // Write code here that turns the phrase above into concrete actions
});

When('the user makes request for a single user data with an id {string}', function (idValue) {
  // Write code here that turns the phrase above into concrete actions
});

When('the user makes request for a single user data with a name {string}', function (nameValue) {
  // Write code here that turns the phrase above into concrete actions
});

Then('the user should get a response code of {string}', function (responseCode) {
  // Write code here that turns the phrase above into concrete actions
});

Then('the user should see {string} and {string} in the response', function (param1, param2) {
  // Write code here that turns the phrase above into concrete actions
});

Then('the user should get a single entry in the response', function () {
  // Write code here that turns the phrase above into concrete actions
});
