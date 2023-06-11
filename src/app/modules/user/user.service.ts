import User from "./user.model";

export const createUserToDB=async()=>{
    const user = await new User({
        id:'13276',
        role:"student",
        password:"123456",
        name:{
            firstName:"Md",
            middleName:"Rownok",
            lastName:"Emon",
        },
       dateOfBirth:"5th march",
       gender:"male",
       email:"rrr@gmail.com",
       contactNo:"+023308223",
       emergencyContactNo:"+023308234",
       presentAddress:"Jashore",
       permanentAddress:"Narail"
    });
      await user.save();
      return user;
}