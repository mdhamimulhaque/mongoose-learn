import express, { Application,NextFunction,Request,Response } from "express";
import cors from "cors";
import { Schema,model } from "mongoose";

const app:Application = express()

// ===> using cors
app.use(cors())

// ===> parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!');
    // next()

    // ---> inserting a test data into mongodb
    /*
    step-1: interface
    step-2: schema
    step-3: Model
    step-4: Database Query
    */ 

    // ---> step-1: create interface
    interface IUser{
        id:string;
        role:"student";
        password:string;
        name:{
            firstName:string;
            middleName?:string;
            lastName:string
        };
       dateOfBirth?:string;
       gender:"male" | "female"; 
       email?:string;
       contactNo:string;
       emergencyContactNo:string;
       presentAddress:string;
       permanentAddress:string;
    }

    // --->step-2: creating schema using interface
    const userSchema = new Schema<IUser>({
        id:{
            type:String,
            required:true,
            unique:true,
        },
        role:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true
        },
        name:{
            firstName:{
                type:String,
                required:true
            },
            middleName:{
                type:String,
            },
           lastName:{
                type:String,
                required:true
            },
        },
        dateOfBirth:{
            type:String,
        },
   gender:{
        type:String,
        enum:['male','female']
    }, 
   email:{
       type:String,
    },
   contactNo:{
       type:String,
       required:true,
    },
   emergencyContactNo:{
       type:String,
       required:true,
    },
   presentAddress:{
        type:String,
        required:true,
    },
   permanentAddress:{
        type:String,
        required:true,
    },
        
      });

    // =====> creating model
    const User = model<IUser>('user',userSchema);
    
    // =====> query on model
    const createUserToDB=async()=>{
        const user = new User({
            id:'1343',
            role:"student",
            password:"123456",
            name:{
                firstName:"Md",
                middleName:"Hamimul",
                lastName:"Haque",
            },
           dateOfBirth:"20th january",
           gender:"male",
           email:"hhh@gmail.com",
           contactNo:"+023308223",
           emergencyContactNo:"+023308234",
           presentAddress:"Jashore",
           permanentAddress:"Narail"
        });
          await user.save();
          console.log(user)
    }
    createUserToDB()

})


export default app;