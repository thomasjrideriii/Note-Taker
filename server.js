const express = require("express");
const app = express();
const path = require("path")
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML Routes

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
});


app.listen(PORT, function() {
    console.log("Listening on port : " + PORT)
})