const bodyParser = require("body-parser");

const express = require("express");

const { LocalStorage } = require("node-localstorage");

const app = express();

const port = 3000;

const mongoose = require("mongoose");

const bcrypt = require('bcrypt');

const { json } = require("body-parser");

const saltRounds = 10;

var localStorage = new LocalStorage("./scratch");

const patient = require("./models/patient");

const dentist = require("./models/dentist");

const clinic = require("./models/clinic");

const appointmentModel = require("./models/appointment");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/TBK_DB", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.set("views", __dirname + "/views")

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";

//---------------------functions--------------------------------------------------------
const { registerPatient } = require("./handlers/registerPatient");
const { registerDentist } = require("./handlers/registerDentist");
const { loginDentist } = require("./handlers/loginDentist");
const { loginPatient } = require("./handlers/loginPatient");
//--------------------------------------------------------------------------------------

//---------------------------------Errors-----------------------------------------------
var registerErrorPatient = "";
var registerErrorDentist = "";
var loginError = "";
//--------------------------------------------------------------------------------------

localStorage.clear();

// -----------------get routes----------------------------------------------------------
//main page
app.get("/", (req, res) => {  
        res.render("index", {user: JSON.parse(localStorage.getItem("user"))})
})

app.get("/loginOptions", (req, res) => {
    if (localStorage.getItem("user")) {
        res.render("index", {user: JSON.parse(localStorage.getItem("user"))})
    }
    else {
        res.render("loginOptions");
    }
})

app.get("/loginDentist", (req, res) => {
    if (localStorage.getItem("user")) {
        res.render("index", {user: JSON.parse(localStorage.getItem("user"))})
    }
    else {
        res.render("loginDentist", {error : loginError});
    }
})
app.get("/loginPatient", (req, res) => {
    if (localStorage.getItem("user")) {
        res.render("index", {user: JSON.parse(localStorage.getItem("user"))})
    }
    else {
        res.render("loginPatient", {error: loginError});
    }
})
app.get("/registerDentist", (req, res) => {
    if (localStorage.getItem("user")) {
        res.render("index", {user: JSON.parse(localStorage.getItem("user"))})
    }
    else {
        res.render("registerDentist", {exists : registerErrorDentist});
    }
});
app.get("/registerPatient", (req, res) => {
    if (localStorage.getItem("user")) {
        res.render("index", {user: JSON.parse(localStorage.getItem("user"))})
    }
    else {
        res.render("registerPatient",{exists: registerErrorPatient});
    }
});

app.get("dashboardPatient", (req, res) => {
    if (localStorage.getItem("user")) {
        res.render("index", {user: JSON.parse(localStorage.getItem("user"))})
    }
    else {
        res.render("index");
    }
})
app.get("dashboardDentist", (req, res) => {
    if (localStorage.getItem("user")) {
        res.render("index", {user: JSON.parse(localStorage.getItem("user"))})
    }
    else {
        res.render("index", {user: JSON.parse(localStorage.getItem("user"))})
    }
})

app.get("/logout", (req, res) => {
    if (localStorage.getItem("user")) {
        localStorage.clear();
        res.render("index", {user: user});
    }
    else {
        res.render("index",{user: user});
    }
})
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

//--------------post routes -------------------------------------------------------------

app.post("/registerPatient", (req, res) => {
    registerPatient(req,res,user,registerErrorPatient,localStorage);
});
app.post("/registerDentist", (req, res) => {
    registerDentist(req,res,user,registerErrorDentist,localStorage);
});
app.post("/loginDentist", (req, res) => {
    loginDentist(req, res,loginError,user,localStorage);
})
app.post("/loginPatient", (req, res) => {
    loginPatient(req, res,loginError,user,localStorage);
})
//---------------------------------------------------------------------------------------

app.listen(port || process.env.PORT, () => {
    console.log("the server is up and running!");
});