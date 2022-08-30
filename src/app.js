const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;


// public sttaic path
const path = require("path");

const staticPath = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath))



// routing
app.get("/", (req, res) => {
    // res.send("Welcome to WEATHER APP PAGE");
    res.render("index")
})

app.get("/about", (req, res) => {
    // res.send("Welcome to WEATHER APP's <b>about us</b> page");
    res.render("about")
})

app.get("/about/*", (req, res) => {
    // res.send("Welcome to WEATHER APP's <b>about us</b> page");
    res.render("404error")
})

app.get("/weather", (req, res) => {
    // res.send("Welcome to WEATHER APP's weather page");
    res.render("weather");
});

app.get("/weather/*", (req, res) => {
    // res.send("Welcome to WEATHER APP's weather page");
    res.render("404error");
});

app.get("*", (req, res) => {
    // res.send("404 error page!! ");
    res.render("404error", {
        errormsg: "The Page Your are Searching for Not Exist!!"
    });
});

app.listen(port, () => {
    console.log(`listeninh to port no : ${port}`);
});