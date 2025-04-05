import React, { useEffect } from 'react'
import { useState } from 'react'
import TaskCard from './TaskCard.jsx'
import axios from 'axios'

const TaskList = () => {

    // eslint-disable-next-line no-unused-vars
    const [task, setTask] = useState([
        {
            key : "",
            name : "",
            description : "",
            finish : false,
            deadline : "",
        },
    ])

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/task-get");
                setTask(response.data);
                console.log(task)
            } catch (error) {
                console.error("Error fetching tasks:", error.message);
            }
        };
    
        fetchTasks();
    }, []);

  return (
    <div className='flex column gap-4'>
        {task.map((task)=>(
            <TaskCard key={task.key} {...task}/>
        ))}
    </div>
  )
}

export default TaskList