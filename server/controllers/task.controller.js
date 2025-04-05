import express from 'express';
import taskModel from '../models/task.model.js';


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


async function taskAdd(req, res) {
    const data = req.body;

    try{
        await taskModel.create({
            name : data.name,
            description : data.description,
            finish : data.finish,
            deadline : new Date(data.deadline),
        });

        res.status(201).json({messsage : "the task was created"});
    }catch(err){
        console.error(err)
        if(!res.headersSent){
            res.status(500).json({message : "some error occured"})
        }
    }
}

export { taskAdd };


