import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    const numberOfPlayers = parseInt(req.body.players);
    const playerNames = [];

    for (let i = 1; i <= numberOfPlayers; i++) {
        playerNames.push(req.body[`nickname${i}`] || `Player ${i}`);
    }

    const queryParams = `?players=${numberOfPlayers}&names=${encodeURIComponent(playerNames.join(','))}`;
    res.redirect(`/dice${queryParams}`);
});

app.get("/dice", (req, res) => {
    const numberOfPlayers = parseInt(req.query.players);
    const playerNames = req.query.names ? req.query.names.split(',') : [];

    res.render("dice.ejs", { playerNames, numberOfPlayers });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});