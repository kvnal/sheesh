const mongoose = require("mongoose")
const schema = mongoose.Schema

const happeningSchema = schema({
    caption :{type :String},
    image : {type :String},
    likes : {type :Number},
    time : {type: String}, //random
},{timestamps:true})

module.exports = mongoose.model("happening",happeningSchema)
