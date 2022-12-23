const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    date: Date,

    patient: String,

    dentist: String,

    status: String

});

module.exports = Appointments = new mongoose.model("appointment", appointmentSchema);