import React from 'react'
import { formatDistanceToNow } from "date-fns"
import { Card, 
    CardHeader, 
    CardFooter, 
    CardTitle, 
    CardDescription, 
    CardContent } from '../ui/card.jsx'
import { Badge } from '../ui/badge.jsx'

const TaskCard = ({name, description, finish, deadline }) => {

    let readableDate = "Invalid Date";
    try {
      readableDate = formatDistanceToNow(new Date(deadline), { addSuffix: true });
    } catch (err) {
      console.error("Date formatting error:", err);
    }
    

  return (



    <Card className="relative flex flex-col justify-between min-h-[300px] bg-zinc-950 border border-zinc-700 text-white rounded-xl 
    transition w-[350px] duration-500 hover:scale-105 text-left">

        <Badge className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full px-3 py-1"></Badge>

        <CardHeader className="justify-start">
            <CardTitle>{name}</CardTitle>
            <CardDescription className="text-zinc-400">
                {!finish ? "Not Completed" : "Completed"}
            </CardDescription>
        </CardHeader>
            
        <CardContent>
            <p className=" overflow-y-auto max-h-[120px] p-6 pt-0 pb-0 text-zinc-300">{description}</p>
        </CardContent>
        
        <CardFooter className=" align-middle" >
            <p>{readableDate}</p>
        </CardFooter>
    </Card>
  )
}

export default TaskCard