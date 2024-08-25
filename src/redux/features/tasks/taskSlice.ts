import { taskObject } from './../../../types/task.type';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TasksManagerState {
    taskManager : taskObject[] 
}
 

export const taskSlice = createSlice({

    name:"tasks" , 
    initialState : {
        taskManager : []
    }, 

    reducers : {

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
        
        FinishTask : (state:TasksManagerState,action:PayloadAction<taskObject>) => {

            console.log('finished Task: ' , action.payload);

            const currDate = new Date().toLocaleDateString();
            const currTime = new Date().toLocaleTimeString();

            state.taskManager = state.taskManager.map((task)=>{
                if(task.id === action.payload.id)
                    return {
                        ...action.payload,
                        status: 'Done' , 
                        doneDate: currDate + '  ساعت  ' + currTime 
                    }

                else
                return task
            })
        },

    }
})


export const {AddTask,RemoveTask,FinishTask} = taskSlice.actions

export default taskSlice.reducer

 