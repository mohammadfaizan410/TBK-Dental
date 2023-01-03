const mongoose = require("mongoose");


dentistSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
    },

    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },

    kimlik: {
        type: String,
        required: true
    },

    diploma_number: {
        type: String,
        required: true
    },
    completion_date: {
        type: Date,
         required: true
    },
    clinics: [
        {
            clinic_id: {
                type: String,
            }
        }
    ],
    image: {
        type: String
    },
    type: {
        type: String
    }
})


module.exports = Dentist = new mongoose.model("dentist", dentistSchema);