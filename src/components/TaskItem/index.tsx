/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import RemoveButton from '../buttons/RemoveButton'
import EditButton from '../buttons/EditButton'
import AddButton from '../buttons/AddButton'
import PendingStatus from '../buttons/PendingButton'
import DoneStatus from '../buttons/DoneButton'

interface TaskItemProps {
    taskText:string
    taskId:number
    taskStatus:string
    taskDate : string 
    taskBackGround ?: string 
    onCompleteRemoveTask : (taskID:number)=> void 
    onCompleteEditTask ?: (taskID:string)=> void 
}

const TaskItem :React.FC<TaskItemProps> = ({taskText,taskId,taskDate,taskStatus,taskBackGround='white',onCompleteRemoveTask,onCompleteEditTask}) : JSX.Element => {

    const handleRemoveButton = (ID:number)=> {
        onCompleteRemoveTask(ID);
    }

    // const handleEditButton = (e:Event)=> {

    //     e.stopPropagation() ; 
    //     console.log('1- handle Edit Button')
    //     onCompleteEditTask(taskId);
    //     console.log('2- paeen handle Edit Button')
    
    // }


  return (
    <div className={`taskItemWrapper text-black font-irasniansans w-full flex justify-around gap-1 mt-1 rounded-sm py-1 px-2 min-h-14 bg-${taskBackGround}`} >

        <div className="taskTextWrapper flex justify-center items-center border-l-2 border-gray-300 w-1/2 text-sm sm:text-md lg:text-lg" >
                <p className="taskText">{taskText}</p>
            </div>
            
            <div className="taskItemStatusWrapper flex justify-center items-center border-l-2 border-gray-300 w-1/4" >
                { taskStatus === 'pending' ? <PendingStatus />:<DoneStatus />}
            </div>

            <div className="taskActionButtonsWrapper w-1/4 flex px-10">

            <div className="confirmBtnWrapper w-1/2 h-full flex justify-center">
                <button className="confirButton"> <img src="./images/icons8-done-96.png" alt="confirmBtn" width='30px'/> </button>
            </div>

            <div className="closeBtnWrapper w-1/2 h-full flex justify-center">
                <button className="closeButton" onClick={()=>{handleRemoveButton(taskId)}}> <img src="./images/icons8-close-96.png" alt="closeBtn" width='30px'/> </button>
            </div>
            
            </div>

    </div>
  )
}

export default TaskItem
