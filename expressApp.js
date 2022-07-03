const express = require("express");
const userData = require("./data.json");

const app = express();

// Get request on root page
app.get("/", (req, res) => {
    res.send("Root Directory");
});

// Get request on /api endpoint
app.get("/api", (req, res) => {
    res.send("Welcome to the home page of Api!");
});

/**
 * description: Get request on /api/users endpoint
 * Get all users
 */
app.get("/api/users", (req, res) => {
    res.json(userData);
});

/**
 * Get request on /api/users/:id endpoint
 * Get information regarding a specific user
 * */

app.get("/api/users/:id", (req, res) => {
    const user = userData[req.params.id];
    if (user) {
        res.json(user);
    } else {
        res.json({ error: "User not found" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
