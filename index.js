const expressUse = require("express");
const app = expressUse();
const PORT = 3000;
const HOSTNAME = "localhost"

// app.listen(number(port number), callBackFunction)

app.listen(PORT, HOSTNAME, ()=> {
    console.log("I am a server and am running on port 3000")
})

