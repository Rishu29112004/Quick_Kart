import express from "express";
import cors from "cors";
import { connectDb } from "./config/dbConnect.js";
import dotenv from "dotenv";
import authRouter from "./routes/authRouter.js"
dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

console.log("hehe",process.env.FRONTEND_URL)

app.use(express.json())

app.use("/api/auth",authRouter)

const PORT= process.env.PORT || 8000
const startServer = async ()=>{
    try{
        await connectDb()
        app.listen(PORT, ()=>{
            console.log(`server is running on http://localhost:${PORT}`)
        })
    }catch (error){
        console.log("Failed to connect to mongoDv, server not started",error)
        process.exit(1)
    }
}
startServer();