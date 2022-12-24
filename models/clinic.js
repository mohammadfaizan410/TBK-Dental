
const mongoose = require("mongoose");

clinicSchema = new mongoose.Schema({
        title: {
            type: String,
            // required : true
        },
        description: {
            type: String,
            // required : true
        },
        address: {
            type: String,
            // required: true
        },
        cover_img: {
            type: String,
            // required: true
        },
        dentists: [
            {
                dentist_name: {
                    // type: String,
                    // required: true
            }
        }
    ]
})

module.exports = Clinics = new mongoose.model("clinic", clinicSchema);