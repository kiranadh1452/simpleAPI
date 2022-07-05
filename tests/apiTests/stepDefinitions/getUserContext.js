const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");

let response = null;

When("the user makes request for all users data", async function () {
    try {
        response = await GET("/api/users");
    } catch {
        console.log(
            "If you are seeing this, then there was some issue with your request"
        );
    }
});

When(
    "the user makes request for a single user data with an id {string}",
    async function (idValue) {
        try {
            response = await GET(`/api/user/id=${idValue}`);
        } catch {
            console.log(
                "If you are seeing this, then there was some issue with your request"
            );
        }
    }
);

When(
    "the user makes request for a single user data with a name {string}",
    async function (nameValue) {
        try {
            response = await GET(`/api/user/name=${nameValue}`);
        } catch {
            console.log(
                "If you are seeing this, then there was some issue with your request"
            );
        }
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
    "the user should see {string} and {string} for all objects in the response",
    async function (param1, param2) {
        const objectArray = Object.values(await response.data);

        for (let dataObj of objectArray) {
            const keys = Object.keys(dataObj);
            assert.equal(keys.includes(param1), true, `${param1} not found`);
            assert.equal(keys.includes(param2), true, `${param2} not found`);
        }
    }
);

Then(
    "the user should get {string} and {string} of a single user in the response",
    async function (keyValue1, keyValue2) {
        const dataObject = await response.data;

        // checking if the response is an valid object
        if (!dataObject[keyValue1] || !dataObject[keyValue2]) {
            assert.fail(`No ${keyValue1} or ${keyValue2} found in response`);
        }
    }
);
