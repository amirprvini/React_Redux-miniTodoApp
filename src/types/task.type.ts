import { addTaskObj } from "../redux/features/tasks/taskSlice"

export interface taskObject {
    "id" : string , 
    "status" : string ,
    "pendingDate" : string ,
    "doneDate" : string ,
    "taskText" : string
}

export interface taskType {
    
    "id" : string , 
    "title" : string , 
    "slug" : string , 
    "tasks" : addTaskObj [] 
  
}