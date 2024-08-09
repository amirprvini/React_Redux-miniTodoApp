import React from "react"

interface HeaderProps {}

export const Header : React.FC<HeaderProps> = () : JSX.Element =>{
    return <div className="header h-24 bg-blue-300 w-full flex justify-center items-center sticky top-0">
        <div className="titleWrapper w-max font-bold text-6xl">
            <h1 className="title text-black ">
                Todo App 
            </h1>
        </div>
    </div>
}