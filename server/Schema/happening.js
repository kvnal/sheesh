const mongoose = require("mongoose")
const schema = mongoose.Schema

const happeningSchema = schema({
    caption :{type :String},
    profileImage: {type:String},
    profileName : {type :String},
    url : {type :String},
    likes : {type :Number},
    subheading : {type: String}, //random
},{timestamps:true})

module.exports = mongoose.model("story",happeningSchema)
