import { configureStore } from "@reduxjs/toolkit";
import {taskSlice} from "./features/tasks/taskSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store  = configureStore({
    reducer: {
        tasks : taskSlice.reducer
    },
})


export const useAppDispatch : ()=> typeof store.dispatch=useDispatch ;
export const useApplicationSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector ;