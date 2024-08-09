import { addTaskObj } from "../redux/features/tasks/taskSlice"

export interface taskObject {
    "id" : string , 
    "text" : string
}

export interface taskType {
    
    "id" : string , 
    "title" : string , 
    "slug" : string , 
    "tasks" : addTaskObj [] 
  
}