const express = require("express")
const serverLess  = require("serverless-http")
const app = express() 
const router = express.Router()

router.get("/hello",(req,res)=>{res.send("This App is wroking well and responding with HEllo!")})
app.use("/.netlify/functions/api",router)

app.listen(3000,()=>{console.log("Started")})
  module.exports.handler = serverLess(app)  