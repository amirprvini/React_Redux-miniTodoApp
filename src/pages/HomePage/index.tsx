import React from 'react'
import TaskManager from '../../components/TaskManager'

const HomePage : React.FC = () :JSX.Element => {
  return (
    <div className='homePage bg-white min-h-screen w-full flex justify-center items-start'>
      <TaskManager />
    </div>
  )
}

export default HomePage
