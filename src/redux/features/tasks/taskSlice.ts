import { taskObject } from './../../../types/task.type';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {taskType } from "../../../types/task.type";


export interface addTaskObj {
    listId : string , 
    taskId : string , 
    taskText : string
}

export interface TasksListState {
    id : string , 
    title : string , 
    slug : string , 
    tasks : addTaskObj[] 
}

export interface TasksManagerState {
    taskManager : taskObject[] 
}
 
export interface addTaskObj {
    listId : string , 
    taskId : string , 
    taskText : string
}

export const taskSlice = createSlice({

    name:"tasks" , 
    initialState : {
        taskManager : []
    }, 



    reducers : {

        taskManager:(state:TasksManagerState,action:PayloadAction<taskObject[]>)=>{
            state.taskManager = action.payload

            action.payload.map((taskList)=>{
                
              return state.taskManager.map((stateObj:taskObject)=>{
                    if(stateObj.status === taskList.status)
                        stateObj = taskList
                })
            })

        },
        
        AddTask:(state:TasksManagerState,action:PayloadAction<taskObject>) => {
            console.log('state before add task: ' , state.taskManager);
            state.taskManager.push(action.payload);
            console.log('state after add task: ' , state.taskManager);
        },

        RemoveTask : (state: TasksManagerState,action:PayloadAction<number>)=>{
            state.taskManager = state.taskManager.filter((taskObj)=>{
                return taskObj.id !== action.payload
            })
            console.log('state after remove task: ' , state.taskManager);
        },
        
        EditTask : (state:TasksManagerState,action:PayloadAction<addTaskObj>) => {

        },

    }
})


export const {taskManager,AddTask,RemoveTask} = taskSlice.actions

export default taskSlice.reducer

 