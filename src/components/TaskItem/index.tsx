/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import PendingStatus from '../buttons/PendingButton'
import DoneStatus from '../buttons/DoneButton'

interface TaskItemProps {
    taskText:string
    taskId:number
    taskStatus:string
    pendingDate : string 
    doneDate : string 
    onCompleteRemoveTask : (taskID:number)=> void 
    onCompleteFinishTask : (taskID:number)=> void 
}

const TaskItem :React.FC<TaskItemProps> = ({taskText,taskId,pendingDate,doneDate,taskStatus,onCompleteRemoveTask,onCompleteFinishTask}) : JSX.Element => {

    const handleRemoveButton = (ID:number)=> {
        onCompleteRemoveTask(ID);
    }

    const handleFinishButton = (ID:number)=> {
        onCompleteFinishTask(ID)
    }


  return (
    <div className={`taskItemWrapper text-black font-irasniansans w-full flex justify-around gap-1 mt-1 rounded-sm py-1 px-2 min-h-14 ${taskStatus === 'pending' ? 'bg-white' : 'bg-neutral-200'}`} >

        <div className="taskTextWrapper h-min flex flex-col gap-2 justify-center items-center border-l-2 border-gray-300 w-1/2 text-sm sm:text-md lg:text-lg" >
                <p className={`taskText flex flex-wrap text-center h-min ${taskStatus === 'pending' ? '' : 'line-through'}`}>{taskText}</p>
                <p className="pendingTime text-xs text-gray-600">ایجاد شده در {pendingDate}</p>
            </div>
            
            <div className="taskItemStatusWrapper flex flex-col gap-2 justify-center items-center border-l-2 border-gray-300 w-1/4" >
                { taskStatus === 'pending' ? <PendingStatus />:<DoneStatus />}
                {taskStatus === 'Done' && <p className="doneTime text-xs text-gray-600">در {doneDate}</p>}
            </div>

            <div className="taskActionButtonsWrapper w-1/4 flex justify-center px-10">

            {taskStatus === 'pending' && <div className="confirmBtnWrapper w-1/2 h-full flex justify-center">
                <button className="confirButton" onClick={()=>{handleFinishButton(taskId)}}> <img src="./images/icons8-done-96.png" alt="confirmBtn" width='30px'/> </button>
            </div>}

            <div className="closeBtnWrapper w-1/2 h-full flex justify-center">
                <button className="closeButton" onClick={()=>{handleRemoveButton(taskId)}}> <img src="./images/icons8-close-96.png" alt="closeBtn" width='30px'/> </button>
            </div>
            
            </div>

    </div>
  )
}

export default TaskItem
