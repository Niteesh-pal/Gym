import dotenv from "dotenv"
import connectDB from "./config/db/index.js";
import { app } from "./app.js";

const directory = process.cwd();


dotenv.config({
    path: `${directory}/src/config/env/dev.env`
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`App is listening on port ${process.env.PORT || 8000}`)
    })
})
.catch((err)=>{
    console.log("Mogodb Failed", err)
})