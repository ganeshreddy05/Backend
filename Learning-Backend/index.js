import express from "express";
import demoRouter from './src/routes/demoRoute.js';
import userRouter from './src/routes/userRoute.js';
import connectDB from './src/config/mongoDB.js';

const app=express();
app.use(express.json());

const PORT=3000;
 app.use("/demo",demoRouter)
app.use("/users",userRouter)


async function startingBackendApplication(){//this function is used because after connecting DB only the servee should start
    await connectDB();
    runningServer();
}

function runningServer(){
    app.listen(PORT,()=>{
    console.log("server is running ")
})

}
startingBackendApplication();