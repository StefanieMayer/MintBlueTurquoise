import express from "express";
import axios from "axios";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./public"));

let locationIss;
let locationIssPositions;

// API of the weather? 
app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://api.wheretheiss.at/v1/satellites" + "/25544")
        console.log(result);
        res.render("index.ejs", {
            locationIss: result,
        });
    }catch(error){
        console.error("Failed to make a request", error.message)
        res.render("index.ejs", {
            eror: error.message,
        });
    }
});

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://api.wheretheiss.at/v1/satellites" + "/25544" + "/postitions")
        console.log(result);
        res.render("index.ejs", {
            locationIssPositions: result,
        });
    }catch(error){
        console.error("Failed to make a request", error.message)
        res.render("index.ejs", {
            eror: error.message,
        });
    }
});


app.get("/page2", (req, res) => {
    res.render("page2.ejs");
});

app.get("/page3", (req, res) => {
    res.render("page3.ejs");
});

app.get("/one", (req, res) => {
    res.render("partials/status.ejs");
    res.status(Q&A);
});

app.get("/two", (req, res) => {
    res.render("partials/request.ejs");
    res.send(request);
});

app.get("/three", (req, res) => {
    res.render("partials/response.ejs");
    res.send(response);
});


app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});