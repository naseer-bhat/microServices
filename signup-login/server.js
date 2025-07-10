import express from "express";
import dbConnection  from "./config/db.js";
import router from "./routes/userRoute.js";
import {config}from 'dotenv'
config()
const app=express()
const URI= process.env.MONGODB_URI
const port= process.env.PORT
app.use('/api/auth',router)
const startServer= async ()=>{
    await dbConnection(URI)
  app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
  })
}
startServer()