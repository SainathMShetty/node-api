const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    id: Number,
    name: String,
    designation: String,
    salary: Number,
    
});

module.exports = mongoose.model("Faculty",facultySchema);