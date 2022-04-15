const route = require("express").Router();

const studentSchema = require("../Schema/Student")
const happeningSchema = require('../Schema/happening')
const communityDataSchema = require("../Schema/communityData")
const communitySchema = require("../Schema/community")

const random = (lowerlimit, upperlimit) =>{
    return Math.floor(Math.random()*(upperlimit-lowerlimit)) + lowerlimit
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

//student db post / get
route.post("/student", async (req,res)=>{

    const response = await studentSchema.create({
        ...req.body, connectionCounts : random(0,20),
        dpImage : `https://i.pravatar.cc/200?u=${req.body.email}`
    })
    
    return res.json(response);
})

route.get("/student", async (req,res)=>{
    //get all students``````````````````````````````
    const response = await studentSchema.find()
    return res.json(response);
})

route.get("/student/:email", async (req,res)=>{
    //get specific student by email
    const {email} = req.params;
    const response = await studentSchema.find({email : email })
    return res.json(response);
})

//happening db
route.post("/story",async (req,res)=>{
    const response = await happeningSchema.create({...req.body , likes : random(40,150), time : random(1,10)})
    return res.json(response)
})

route.get("/story", async (req,res)=>{
    const response = await happeningSchema.find();
    return res.json(response)
    //latest first
})


// community data db
route.post("/community/:communityName", async (req, res)=>{
    const {communityName} = req.params;
    
    const response = await communityDataSchema.create({
        postedBy : "user123",
        caption : req.body.caption,
        image : req.body.image,
        likes : random(20,400),
        communityName : communityName
    }) ;

    return res.json(response);
})

route.get("/community/:communityName", async (req, res)=>{
    const response = await communityDataSchema.find({
        communityName : req.params.communityName
    });
    return res.json(response);
})


//community db
route.post("/create/community/", async (req, res)=>{
    const body =req.body;
    const response = await communitySchema.create({
       ...body,
        memberCount : 200
    }) ;
    return res.json(response); 
})

route.get("/get/community/:communityName" , async (req, res)=>{
    const response = await communitySchema.find({
        name: req.params.communityName
    });
    return res.json(response);
})

route.get("/get/community" , async (req, res)=>{
    const response = await communitySchema.find();
    return res.json(response);
})



module.exports ={route}