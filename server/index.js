// import { create } from "ipfs-http-client";

// async function addFile() {
//   // 1. Create IPFS instant
//   const ipfs = create("http://localhost:5001");
//   console.log(ipfs);

//   // 2. Add file to ipfs
//   const { cid } = await ipfs.add("something.txt");
//   console.log(cid);

//   // 3. Get file status from ipfs
// }

// addFile();

const ipfsClient = require("ipfs-http-client");
const express = require("express");
const bodyparser = require("body-parser");
const fileupload = require("express-fileupload");
const { default: axios } = require("axios");
// const twilio = require('./Twilio')

const fs = require("fs");

// const crust = require("./crust")



console.log(ipfsClient);
const ipfs = ipfsClient.create({
  host: "localhost",
  port: "5001",
  protocol: "http",
});


const PORT = 4000;

const app = express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(fileupload());


const API = require("./Routes/Api")
app.use("/api",API.route);
// app.use(express.json({extended:true}));

//
const mongo = require('./mongoDB')
const happeningSchema = require("./Schema/happening")

const random = (lowerlimit, upperlimit) =>{
  return Math.floor(Math.random()*(upperlimit-lowerlimit)) + lowerlimit
}



//happening entry
const storyPost =  async (caption, imageLink) =>{

  const name = await axios.get("https://api.namefake.com/").then(result =>{
    return result.data.name;
  })

  await happeningSchema.create({
    profileName: name,
    caption : caption,
    url : imageLink,
    likes : random(0,20),
    subheading : `Posted ${random(1,24)}h ago`,
    profileImage: `https://i.pravatar.cc/200?u=${caption}`
  })
  return console.log("story Posted!");;
}

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/create/community", (req, res) => {
  res.render("createcomm");
});
app.get("/community/:id/post", (req, res) => {
  res.render("createcommpost");
});

app.get("/promotions", (req,res) =>{
  
  // twilio.sendSMS("hello test");
})

var fileName;
app.post("/upload", (req, res) => { 
  const file = req.files.file;
  fileName = req.body.fileName;
  const filePath = "files/" + fileName;
  console.log("s1");
  //const filePath = "C:/Users/kings/Desktop/crustfile.txt";
  file.mv(filePath, async (err) => {
    if (err) {
      console.log("eRRor");
      return res.status(500).send(err);
    }
    const fileDetail = await addFileAuth(fileName, filePath);
    console.log(fileDetail);
    const size = fileDetail.cumulativeSize;
    const fileHash = fileDetail.cid;
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.render("upload", { fileName, fileHash, size });
  });
});

const addFile = async (file_name, file_path) => {
  const fileBuffer = fs.readFileSync(file_path);
  const fileAdded = await ipfs.add({
    path: file_path,
    content: fileBuffer,
  });

  console.log(fileAdded);
  const fileHash = fileAdded.cid;

  return fileHash;
};

const ethers = require("ethers");

async function addFileAuth(file_name, file_path) {
  const pair = ethers.Wallet.createRandom();
  console.log(pair);
  const sig = await pair.signMessage(pair.address);
  console.log(sig);
  const authHeaderRaw = `eth-${pair.address}:${sig}`;
  console.log(authHeaderRaw);
  const authHeader = Buffer.from(authHeaderRaw).toString("base64");
  console.log(authHeader);
  const ipfsW3GW = "https://crustipfs.xyz";

  const fileBuffer = fs.readFileSync(file_path);

  const ipfs = ipfsClient.create({
    url: `${ipfsW3GW}/api/v0`,
    headers: {
      authorization: `Basic ${authHeader}`,
    },
  });

  // // 2. Add file to ipfs
  const { cid } = await ipfs.add({
    path: file_path,
    content: fileBuffer,
  });
  console.log("CIDDDDD");
  console.log(cid);

  // // 3. Get file status from ipfs
  const fileStat = await ipfs.files.stat("/ipfs/" + cid);
  console.log("FILESTAT");
  console.log(fileStat);

  // return {
  //     cid: cid.path,
  //     size: fileStat.cumulativeSize
  // };
  // crust.placeStorageOrder(fileStat.cid);

  const link = "https://ipfs.io/ipfs/"+fileStat.cid+"/"+fileName;
  console.log(link);
  storyPost(caption = fileName, imageLink = link);
  return {
    cumulativeSize: fileStat.cumulativeSize,
    cid: fileStat.cid,
  };
}



const listen = () =>{
  app.listen(PORT,() => {console.log(`Listening @ ${PORT}`)})
}

// listen()
mongo.connect(listen)