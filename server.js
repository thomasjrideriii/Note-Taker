const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 8080;


// const crypto = require("crypto");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));
// HTML Routes

require("./routes/htmlRoutes")(app);


// API Routes


// require("./routes/apiRoutes")

app.get("/api/notes", function(req, res) {
    console.log("GET!")
    const notesData = fs.readFile("./db/db.json", "utf8", function(err, notes) {
        console.log(notes)
        if (err) {
            throw err
        }
        res.json(notes)
    })
});

app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    newNote.id = crypto.randomBytes(10).toString("hex");

    console.log(newNote);

    res.json(newNote)
    fs.appendFile("./db/db.json", JSON.stringify(newNote), function(err) {
        if (err) {
            throw err
        }
    })
    
})

app.delete("/app/notes/:id", function(req, res) {
    res.end()
})



app.listen(PORT, function() {
    console.log("Listening on port : " + PORT)
})