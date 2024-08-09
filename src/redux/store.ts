import { configureStore } from "@reduxjs/toolkit";
import {taskSlice} from "./features/tasks/taskSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {taskListSlice} from "./features/tasks/taskListSlice";


export const store  = configureStore({
    reducer: {
        tasks : taskSlice.reducer , 
        taskList : taskListSlice.reducer
    },
})


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


export const useAppDispatch : ()=> typeof store.dispatch=useDispatch ;
export const useApplicationSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector ;