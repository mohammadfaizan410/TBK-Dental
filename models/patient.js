const mongoose  = require("mongoose");

 patientSchema = new mongoose.Schema({
    first_name: {
        type: String,
        //required: true
     },
    last_name: {
        type: String,
        //required: true
     },
     email: {
         type: String,
         //required: true,
     },
     username: {
         type: String,
         //required: true,
     },
     password: {
         type: String,
         //required:true
     }, 
     type: {
         type: String
     }
})

module.exports = Patient = new mongoose.model("patient",patientSchema);