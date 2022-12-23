const mongoose = require("mongoose");
const Patient = require("../models/patient");
const bcrypt = require('bcrypt');

const loginPatient = (req,res, error, currentUser, localStorage) => {
    Patient.findOne({ username: req.body.username }).then(user => {
        if (!user) {
            error = "user not found!";
            res.render("loginPatient", { error: error });
        }
        else {
            
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if (result===false) {
                    error = "incorrect password!";
                    res.render("loginPatient", { error: error });
                }
                else {
                    localStorage.setItem("user", JSON.stringify(user));
                    currentUser = JSON.parse(localStorage.getItem("user"));
                    res.render("index", { user: user});
                }
            });
        }
    })
}

exports.loginPatient = loginPatient;