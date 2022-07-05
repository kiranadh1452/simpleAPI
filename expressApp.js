const express = require("express");
const userData = require("./data.json");

const app = express();

// Get request on root page
app.get("/", (req, res) => {
    res.sendFile(`${process.env.PWD}/README.md`);
});

// Get request on /api endpoint
app.get("/api", (req, res) => {
    res.sendFile(`${process.env.PWD}/index.html`);
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
app.get("/api/user/id=:id", (req, res) => {
    const user = userData[req.params.id];
    if (user) {
        res.json(user);
    } else {
        res.statusCode = 404;
        res.json({ error: "No user with such id" });
    }
});

app.get("/api/user/name=:name", (req, res) => {
    const user = Object.values(userData).find(
        (user) => user.name === req.params.name
    );

    if (user) {
        res.json(user);
    } else {
        res.statusCode = 404;
        res.json({ error: "No user with such name" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
