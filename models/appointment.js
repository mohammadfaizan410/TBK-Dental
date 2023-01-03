const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    date: Date,

    patient: {
        first_name: String,
        last_name: String,
        username : String
    },

    dentist: String,

    status: String,
    
    clinic: String,

});

module.exports = Appointments = new mongoose.model("appointment", appointmentSchema);