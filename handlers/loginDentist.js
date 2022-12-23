const mongoose = require("mongoose");
const Dentist = require("../models/dentist");
const bcrypt = require('bcrypt');

const loginDentist = (req,res, error, currentUser, localStorage) => {
    Dentist.findOne({ username: req.body.username }).then(user => {
        if (!user) {
            error = "user not found!";
            res.render("loginDentist", { error: error });
        }
        else {
            
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if (result === false) {
                    error = "incorrect password!";
                    res.render("loginDentist", { error: error });
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

exports.loginDentist = loginDentist;