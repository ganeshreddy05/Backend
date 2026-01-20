import user from "../models/userModel.js"


async function createUser(req,res){
    try{
        const newUser = await user.create(req.body)
        console.log(newUser);
        res.status(200).json({
            message : "data has been recieved succesfully",
            data : newUser
        })
    }catch(error){
        res.status(401).json({
            message : error.message,
            error : true
        })
    }

}
async function getUser(req,res){
    try{
        const userDetails  = await user.find(); 
        console.log(userDetails);
        res.status(200).json({
            message : "data fetched succesfully",
            count : userDetails.length,
            data : userDetails
        })
     }catch(error){
        res.status(400).json({
            error : true,
            message :error.message
,
        })
     }

}
export {createUser,getUser}