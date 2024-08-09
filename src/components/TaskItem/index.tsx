/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import RemoveButton from '../buttons/RemoveButton'
import EditButton from '../buttons/EditButton'

interface TaskItemProps {
    title:string
    taskId : string
    onCompleteRemoveTask : ()=> void 
    onCompleteEditTask : (taskID:string)=> void 
}

const TaskItem :React.FC<TaskItemProps> = ({title,taskId,onCompleteRemoveTask,onCompleteEditTask}) : JSX.Element => {

    const handleRemoveButton = (ID:string)=> {
        onCompleteRemoveTask();
        
    }

    const handleEditButton = (e:Event)=> {

        e.stopPropagation() ; 
        console.log('1- handle Edit Button')
        onCompleteEditTask(taskId);
        console.log('2- paeen handle Edit Button')
    
    }


  return (
    <div className='taskItemWrapper w-full flex justify-around bg-white rounded-sm text-xl px-4 py-2'>
      
      <div className="taskButtonsWrapper w-1/4 flex items-bottom space-x-3 h-full text-2xl">
            <RemoveButton  onclickProp={()=>handleRemoveButton(taskId)} />
            <EditButton onclickProp={handleEditButton} />
      </div>

      <div className="taskTitleWrparr w-3/4 flex flex-wrap justify-end h-full items-center">
            {title}
      </div>


    </div>
  )
}

export default TaskItem
