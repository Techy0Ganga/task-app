import React from 'react'
import { Card, 
    CardHeader, 
    CardFooter, 
    CardTitle, 
    CardDescription, 
    CardContent } from '../ui/card.jsx'
import { Badge } from '../ui/badge.jsx'

const TaskCard = ({name, finish, description, footer }) => {
  return (



    <Card className="relative justify-center bg-zinc-950 border border-zinc-700 text-white rounded-xl 
    transition w-[350px] duration-500 hover:scale-105 text-left">

        <Badge className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full px-3 py-1"></Badge>

        <CardHeader className="justify-start">
            <CardTitle>{name}</CardTitle>
            <CardDescription className="text-zinc-400">
                {!finish ? "Not Completed" : "Completed"}
            </CardDescription>
        </CardHeader>
            
        <CardContent>
            <p className=" p-6 pt-0 pb-0 text-zinc-300">{description}</p>
        </CardContent>
        
        <CardFooter className=" align-middle" >
            <p>{footer}</p>
        </CardFooter>
    </Card>
  )
}

export default TaskCard