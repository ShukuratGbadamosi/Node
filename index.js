const expressUse = require("express");

const app = expressUse();
const PORT = 3000;
const HOSTNAME = "localhost"
const name = "shukkie"

// app.listen(number(port number), callBackFunction)

app.get("/", (req,res)=>{
    res.send(`"welcome to my website  ${name}"`)
    console.log(`"hello shukkie`)
})

app.listen(PORT, HOSTNAME, ()=> {
    console.log("I am a server and am running on port 3000")
})

