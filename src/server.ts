import mongoose from "mongoose";
import app from "./app";

const port:number = 5000 


// =====> database connection
async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/learn-mongoose');
        
    app.listen(port, () => {
     console.log(`server listening on port ${port}`)
  })
    }catch(err){
        console.log(`database is not connected`,err)
    }
  
  }

  main()

