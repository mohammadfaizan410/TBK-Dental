const mongoose = require("mongoose");
const Patient = require("../models/patient");
const bcrypt = require('bcrypt');
const e = require("express");
const saltRounds = 10;

const registerPatient = (req, res, currentUser,registerError, localStorage) => {
    Patient.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] }).then(user => {
        if (user) {
            registerError= "user with the same email or username already exists!";
            res.render("registerPatient", { exists: registerError});
        }
        else {
            registerError = "";
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                const newPatient = new Patient({
                    first_name: req.body.firstName,
                    last_name: req.body.lastName,
                    email: req.body.email,
                    username: req.body.username,
                    password: hash,
                    type: "patient"
                });
                newPatient.save();
                res.render("index", {user : localStorage.getItem("user")});
            });
        }
    })
   
}

exports.registerPatient = registerPatient;