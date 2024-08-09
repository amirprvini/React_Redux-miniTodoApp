import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskObject} from "../../../types/task.type";
import { addTaskObj } from "./taskSlice";


export interface TasksListState {
    id : string , 
    title : string , 
    slug : string , 
    tasks : addTaskObj[] 
}

const initialState : TasksListState = {
    id : '' ,
    title : '' , 
    slug : '' , 
    tasks :[]
}
  

export const taskListSlice = createSlice({
    
    name:"taskList",
    initialState,
    reducers : {

        GetAllTasks : (state,action:PayloadAction<TasksListState>)=>{
            state.id = action.payload.id || ''
            state.slug = action.payload.slug || ''
            state.title = action.payload.title || ''
            state.tasks = action.payload.tasks || []
        } ,

        // AddTask : (state:TasksListState,action:PayloadAction<taskObject>) => {
        //     state.tasks = [...state.tasks,{
        //         id : action.payload.id , 
        //         text : action.payload.text
        //     }]
        // },

    }
})


export const {GetAllTasks} = taskListSlice.actions

export default taskListSlice.reducer

 