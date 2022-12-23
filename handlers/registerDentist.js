const mongoose = require("mongoose");
const Dentist = require("../models/dentist");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerDentist = (req, res, currentUser, registerError,localStorage) => {
    Dentist.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }, { diploma_number: req.body.diplomaNumber }, { kimlik : req.body.kimlik}] }).then((user) => {
        if (user) {
            registerError = "User with the same email, username, kimlik or diploma number already exists!";
            res.render("registerDentist", {exists : registerError})
        }
        else {
            registerError = "";
            bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                const newDentist = new Dentist({
                    first_name: req.body.firstName,
                    last_name: req.body.lastName,
                    email: req.body.email,
                    username: req.body.username,
                    password: hash,
                    kimlik: req.body.kimlik,
                    diploma_number: req.body.diplomaNumber,
                    completion_date: req.body.completionDate,
                    type: "dentist"
                });
                newDentist.save();

                res.render("index", {user : localStorage.getItem("user")})
            });
        }
    });
   
};

exports.registerDentist = registerDentist;