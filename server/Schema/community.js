const mongoose = require("mongoose")
const schema = mongoose.Schema

const communitySchema = schema({
    dpImage : {type:String},
    bannerImage : {type:String},
    name : {type:String},
    description : {type:String},
    tags : {type:String},
    memberCount : {type:Number},
    university: {type :String} // origin belongs to which clg
},{timestamps:true})

module.exports = mongoose.model("community",communitySchema)
