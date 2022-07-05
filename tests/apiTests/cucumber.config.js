require("dotenv").config();
const axios = require("axios");
const { BeforeAll, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(1000 * 1000);

BeforeAll(async function () {
    // creating base URL
    axios.defaults.baseURL = process.env.BASE_URL || "http://localhost:3000";

    global.GET = axios.get;
});
