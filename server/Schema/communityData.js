const mongoose = require("mongoose")
const schema = mongoose.Schema

const communityDataSchema = schema({
    postedBy :{type : String}, 
    caption : {type :String},
    image : {type:String},
    likes : {type : Number},
    communityName :{type:String}
},{timestamps:true})


module.exports = mongoose.model("communityData",communityDataSchema)
