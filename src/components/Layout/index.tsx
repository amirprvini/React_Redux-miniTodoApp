import React from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Outlet } from "react-router-dom"

interface LayOutProps extends React.PropsWithChildren {}
export const LayOut : React.FC<LayOutProps> = () : JSX.Element =>{
    return <div className="layOut flex flex-col justify-between w-full h-full">
    
    <Header />
        <Outlet/>
    <Footer/>

    </div>
}