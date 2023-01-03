const mongoose = require("mongoose");
const Appointments = require("../models/appointment");

const getAppointment = (req, res, user) => {
    console.log(user);
    const patient = user.username;
    const dentist = req.body.doctor;
    const status = "pending";
    const clinic = req.body.clinicTitle;
    const date = req.body.date;
    const appt = new Appointments({ date : date, patient: patient, dentist: dentist, status: status, clinic: clinic.title });
    appt.save();
}


exports.getAppointment = getAppointment; 