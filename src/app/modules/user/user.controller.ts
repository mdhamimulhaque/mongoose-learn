import { Request, Response } from "express";
import { createUserToDB, getUsersFromDB } from "./user.service";

//===> pattern::route -> controller -> service
export const createUser=async(req:Request, res:Response) => {
    const data = req.body;
    const user = await createUserToDB(data)
    res.status(200).json({
        status:'success',
        data:user
    })
};

export const getUsers=async(req:Request,res:Response)=>{
const user = await getUsersFromDB()
res.status(200).json({
    status:"success",
    data:user
})
}



