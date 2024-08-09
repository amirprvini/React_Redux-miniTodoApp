import React from 'react'
import TaskManager from '../../components/TaskManager'

const HomePage : React.FC = () :JSX.Element => {
  return (
    <div className='homePage bg-white h-3/5'>
      <TaskManager />
    </div>
  )
}

export default HomePage
