const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Db Connection Successful ! "))
.catch((err)=>{
    console.log(err)
})

app.use(express.json())
app.use("/api/user",userRoute);

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on port 3000")
})

