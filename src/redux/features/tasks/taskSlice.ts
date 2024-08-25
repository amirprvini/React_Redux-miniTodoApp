import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskObject, taskType } from "../../../types/task.type";


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
    taskManager : taskType[] 
}
 
export interface addTaskObj {
    listId : string , 
    taskId : string , 
    taskText : string
}

// const initialState : TasksListState = {
//     id : '' ,
//     title : '' , 
//     slug : '' , 
//     tasks :[]
// }


export const taskSlice = createSlice({

    name:"tasks" , 
    initialState : {

    taskManager : [
{
    id : '3' ,
    title : 'پایان یافته' , 
    slug : 'Done' , 
    tasks :[
        
        {
            listId:'3',
            taskId:'1',
            taskText:'aaaaaa'
        }

    ]
}
,
{
    id : '2' ,
    title : 'در حال انجام' , 
    slug : 'InProgres' , 
    tasks :[
        
        {
            listId:'2',
            taskId:'1',
            taskText:'Sssssssssss'
        }
    ]
}
,{
    id : '1' ,
    title : 'انجام خواهد شد' , 
    slug : 'Todo' , 
    tasks :[
        {
            listId:'1',
            taskId:'1',
            taskText:'cccccccccc'
        }
    ]
}
        ]
    }, 



    reducers : {

        taskManager : (state:TasksManagerState,action:PayloadAction<taskType[]>)=>{
            state.taskManager = action.payload

            action.payload.map((taskList)=>{
                
              return state.taskManager.map((stateObj)=>{
                    if(stateObj.slug === taskList.slug)
                        stateObj = taskList
                })
            })

        },
        
        AddTask : (state:TasksManagerState,action:PayloadAction<addTaskObj>) => {

            console.log('state.taskManager: ' ,state.taskManager)
            console.log('add task in redux: ',action.payload.taskText)

                state.taskManager.map((taskList) => {

                    if(taskList.id === action.payload.listId){
                       
                        console.log("task list in [if]: " , taskList.slug)
                        console.log(action.payload.listId)
                        console.log(action.payload.taskId)
                        console.log(action.payload.taskText)
                        
                        console.log("taskList [before]: ",taskList.tasks.length)
                       return taskList.tasks.push({
                            listId:action.payload.listId,
                            taskId:action.payload.taskId,
                            taskText:action.payload.taskText
                        })

                        console.log("taskList [after]: ",taskList.tasks.length)
                    }
                })

        },

        RemoveTask : (state: TasksManagerState,action:PayloadAction<addTaskObj>)=>{

            console.log('state in remove task :' , state.taskManager);
            console.log('action in remove task :' , action.payload);

            state.taskManager.map((taskList)=>{
                console.log('task List in remove func redux: ' , taskList.slug) ; 
                if(taskList.id === action.payload.listId){

                    console.log('Found task List in remove func redux: ' , taskList.slug) ; 

                    const newList = taskList.tasks.filter((task)=>{
                        return task.taskId !== action.payload.taskId
                    })
                
                    console.log('new List: ' , newList) ; 
                return newList ;

                }
            })
        },
        
        EditTask : (state:TasksManagerState,action:PayloadAction<addTaskObj>) => {

            console.log('state.taskManager: ' ,state.taskManager)
            console.log('add task in redux: ',action.payload.taskText)

                state.taskManager.map((taskList) => {

                    if(taskList.id === action.payload.listId){
                       
                        console.log("task list in [if]: " , taskList.slug)
                        console.log(action.payload.listId)
                        console.log(action.payload.taskId)
                        console.log(action.payload.taskText)
                        
                        console.log("taskList [before]: ",taskList.tasks.length)
                       return taskList.tasks.push({
                            listId:action.payload.listId,
                            taskId:action.payload.taskId,
                            taskText:action.payload.taskText
                        })

                        console.log("taskList [after]: ",taskList.tasks.length)
                    }
                })

        },

    }
})


export const {taskManager,AddTask,RemoveTask} = taskSlice.actions

export default taskSlice.reducer

 