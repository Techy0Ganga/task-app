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

async function taskFetch (req, res){
    try{
        const data = await taskModel.findAll();
        res.status(201).json(data);
    }catch(error){
        console.error(error);
        return res.status(500).json({message : "something wrong", details : error.message})
    }
}

export { taskAdd, taskFetch };


