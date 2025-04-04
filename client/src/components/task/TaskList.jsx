import React from 'react'
import { useState } from 'react'
import TaskCard from './TaskCard.jsx'

const TaskList = () => {

    // eslint-disable-next-line no-unused-vars
    const [task, setTask] = useState([
        {
            key : 1,
            name : "adam",
            finish : false,
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni labore tempora debitis, praesentium architecto repellat aut ab voluptas soluta exercitationem vero, id ipsa incidunt dolorum dignissimos nihil tenetur. Dolorum?",
            footer : "Father",
        },
        {
            key : 2,
            name : "Eve",
            finish : true,
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni labore tempora debitis, praesentium architecto repellat aut ab voluptas soluta exercitationem vero, id ipsa incidunt dolorum dignissimos nihil tenetur. Dolorum?",
            footer : "Mother",
        },
    ])

  return (
    <div className='grid gap-4'>
        {task.map((task)=>(
            <TaskCard key={task.key} {...task}/>
        ))}
    </div>
  )
}

export default TaskList