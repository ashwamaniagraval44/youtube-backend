
import dotenv from "dotenv"
import connectDB from "./db/index.js";

//require('dotenv').config({path: './env'})

/* ye karke par bhi code pura run hoga koi error nhi aayegi but ye consisitency ko bigar rahi h 
*/


dotenv.config({
  path:'./env'
})


connectDB()
























/*
// IFFE bana ke hi file m means index file m 
sab include database connection and and listing also 

import express from "express"
const app = express()

(async() => {

try {
  await mongoose.connect(`$(process.env.MONGODB_URL)/${DB_NAME}`)

  app.on("error", (error)=> {
    console.log("ERROR:", error);
    throw error
  })


  app.listen(process.env.PORT,()=> {
    console.log(` App is listening on port &(process.env.PORT)`);
  })
  
} catch (error) {
  console.log("Error", error)
  throw error
}

})()
*/