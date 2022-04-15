const mongoose = require("mongoose")
const schema = mongoose.Schema

const studentSchema = schema({
    name :{type : String},
    email :{type : String},
    dob : {type: String}, 
    yoa : {type: Number},
    degree : {type:String},
    dpImage : {type:String},
    connectionCounts :{type: Number},
    
},{timestamps:true})

module.exports = mongoose.model("student",studentSchema)
