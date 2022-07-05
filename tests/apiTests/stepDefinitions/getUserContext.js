const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");

let response = null;

When("the user makes request for all users data", async function () {
    response = await GET("/api/users");
});

When(
    "the user makes request for a single user data with an id {string}",
    async function (idValue) {
        response = await GET(`/api/user/id=${idValue}`);
    }
);

When(
    "the user makes request for a single user data with a name {string}",
    async function (nameValue) {
        response = await GET(`/api/user/name=${nameValue}`);
    }
);

Then(
    "the user should get a response code of {string}",
    async function (responseCode) {
        const statusCode = await response.status;

        assert.equal(
            statusCode,
            responseCode,
            `Expected status code ${responseCode} but got ${statusCode}`
        );
    }
);

Then(
    "the user should see {string} and {string} in the response",
    function (param1, param2) {
        // code here to check if the response has param1 and param2
    }
);

Then("the user should get a single entry in the response", async function () {
    // code here to check that response has only one object
});
