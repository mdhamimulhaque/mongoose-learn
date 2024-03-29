import { Schema, model } from "mongoose";
import {IUser, IUserMethods, UserModel} from "./user.interface";

// =====> custom instance method
// type UserModel = Model<IUser, {}, IUserMethods>;
   
// --->step-2: creating schema using interface
    const userSchema = new Schema<IUser,UserModel,IUserMethods>({
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

    // ---> static
    userSchema.static("getAdminUsers", async function getAdminUsers() {
        const admins = await this.find({ role: "admin" });
        console.log(admins)
        return admins;
      });
      
      

    //   ---> custom method
      userSchema.method('fullName', function fullName() {
        return this.name.firstName + ' ' + this.name.lastName;
      });

    // =====> creating model
    const User = model<IUser,UserModel>('user',userSchema);

    export default User;