const fs = require("fs");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        console.log("GET!")
        const notesData = fs.readFile("./db/db.json", utf8, function(err, data) {
            if (err) {
                throw err
            }
            return(data)
        })
        res.json(notesData)
        console.log(notesData)
    })
    
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

}