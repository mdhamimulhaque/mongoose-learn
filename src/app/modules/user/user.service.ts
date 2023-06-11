import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB=async(payload:IUser):Promise<IUser>=>{
    const user = new User(payload)
      await user.save();
      return user;
}

export const getUsersFromDB=async():Promise<IUser[]>=>{
   const users = await User.find()
   return users;
}

// id:'13276',
// role:"student",
// password:"123456",
// name:{
//     firstName:"Md",
//     middleName:"Rownok",
//     lastName:"Emon",
// },
// dateOfBirth:"5th march",
// gender:"male",
// email:"rrr@gmail.com",
// contactNo:"+023308223",
// emergencyContactNo:"+023308234",
// presentAddress:"Jashore",
// permanentAddress:"Narail"