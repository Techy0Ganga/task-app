import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import SQConnect from './config/database.js';
import sequelize from "./config/database.js";
import taskModel from './models/task.model.js';
import { Sequelize } from 'sequelize';

const app = express();

app.use(cors())

app.get("/", (req, res) =>{
    res.send("backend working just fine")
})

await SQConnect();

(async () => {
    try{
        await taskModel.sync({alter : true});
        console.log("task database created/updated");
    }catch{
        console.log("error in syncing")
    }
})();

app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})