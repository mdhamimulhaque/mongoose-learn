import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB=async(payload:IUser):Promise<IUser>=>{
    const user = new User(payload) //---> User = class, user ---> instance
      await user.save(); //---> .save ---> instance methods (build in methods)
     console.log(user.fullName()) ///---> custom method
      return user;
}
// ---> get users
export const getUsersFromDB=async():Promise<IUser[]>=>{
   const users = await User.find()
   return users;
}

// ---> get user
export const getUserByIdFromDB=async (payload:string):Promise<IUser | null>=>{
  const user = await User.findOne({id:payload},{name:1,dateOfBirth:1})
  return user;
}

// ---> get admin users'
export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers();
    console.log(admins)
    return admins;
  };
  
