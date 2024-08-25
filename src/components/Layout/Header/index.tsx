import React from "react"

interface HeaderProps {}

export const Header : React.FC<HeaderProps> = () : JSX.Element =>{
    return <div className="header h-24 w-full flex justify-center items-center border border-b-2 py-8">
        <div className="titleWrapper w-max text-4xl sm:text-6xl lg:text-7xl">
            <h1 className="title text-black font-Poppins bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent font-semibold">
                Todo App 
            </h1>
        </div>
    </div>
}