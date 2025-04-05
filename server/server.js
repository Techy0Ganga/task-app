import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import SQConnect from './config/database.js';
import taskModel from './models/task.model.js';
import router from './routes/task.routes.js';

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

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

app.use('/api', router);

app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})