require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(require("cors")());

// Sample endpoint
app.get("/", (req, res) => {
    res.json({ message: "Welcome to CakeSystem!" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));