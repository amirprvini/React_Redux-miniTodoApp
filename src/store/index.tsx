import React, { createContext, useReducer } from "react";
import { taskObject } from "../types/task.type";
// import { AppAction } from "../types/context.type";
// import { taskReducer } from "./reducer/taskReducer";

interface IAppContext {
    tasks : taskObject[] ; 
}

const initialState : IAppContext = {
    tasks : []
}

export const AppContext = createContext<{
    state : IAppContext ,
    dispatch : ()=>void
}>({
    state : initialState , 
    dispatch : ()=> null
})


// const combineReducer = ({tasks}:IAppContext,action:AppAction<string>)=>{
//     task: taskReducer(); 
// }

// interface IAppProvider extends React.PropsWithChildren {}
// export const AppProvider : React.FC<IAppProvider> = ({children}):JSX.Element=>{
//     const [state,dispatch] = useReducer<any>(combineReducer,{})
//     return <AppContext.Provider value={{
    
//         state,
//         dispatch
    
//     }}> {children} </AppContext.Provider>
// }