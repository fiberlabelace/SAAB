const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Dynamic category pages
app.get("/:category", (req, res) => {
    const category = req.params.category.toLowerCase();
    const filePath = path.join(__dirname, `public/${category}.html`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("404 — Page Not Found");
        }
    });
});

app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});
