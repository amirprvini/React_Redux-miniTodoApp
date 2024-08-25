import React, { useRef, useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import TaskItem from '../TaskItem';
import Modal from '../Modal';
import EditModal from '../EditModal';
import { useAppDispatch, useApplicationSelector } from '../../redux/store';
import { AddTask, addTaskObj, RemoveTask } from '../../redux/features/tasks/taskSlice' ;
import { useDispatch } from 'react-redux';

interface TaskListProps {
    title?:string
    taskListID ?: string 
    taskListSlug ?: string
    tasksProps ?: addTaskObj[]
    onComplete ?: ()=> void 
}

const TakList : React.FC<TaskListProps> = ({title,tasksProps,taskListID,taskListSlug,onComplete}) : JSX.Element => {
  
    const [taskIDState,settaskIDState] = useState<string>('');
    const [modalDisplay,setModalDisplay] = useState<string>('') ; 

    const ref = useRef<any>() ;
    const editModalref = useRef<any>() ;

    //--------------------- Redux Toolkit [addTask] --------------------- //

    const addTaskDispatch = useAppDispatch();

    const handleAddButton = ()=>{
        console.log('add button in: ' , title)
        setModalDisplay('');
        ref.current.showModal();
    }

    const handleAddRequest = (task:addTaskObj)=>{

        const taskoo = {
            listId : taskListID ,
            taskId : Date.now().toString() ,
            taskText : task.taskText
        }

        // addTaskDispatch(AddTask(taskoo))
        // onComplete() ; 
    }

    //--------------------- Redux Toolkit [Remove Task] --------------------- //

    const removeTaskDispatch = useDispatch();

    const handleRemoveRequest = (task:addTaskObj)=>{
        
        console.log('task for remove in handle remove func: ' , task); 
        removeTaskDispatch(RemoveTask(task))
        // onComplete() ;

    }

    const handleEditRequest = async (Updatedtask:string,taskID:string)=>{

        console.log('2- balaye handle Edit')
        
        // const updateTasks = tasksProps.map((task)=>{
        
        //     if(task.taskId === taskID)
        //     return {...task , text:Updatedtask}
            
        //     else 
        //     return task 

        // })

        // const newTaskList : taskType = {
        //     id:taskListID,
        //     title:title,
        //     slug:taskListSlug,
        //     tasks :[...updateTasks]
        // }

        // const tasl = await axios.put(`http://localhost:3000/tasks/${taskListID}`,newTaskList)
        // console.log('3- paeen handle Edit:' , tasl);


        // onComplete() ;

    }

    const handleCloseModal = ()=>{

        console.log('amir modal')
        setModalDisplay('hidden')
        
    } 
  
    return (
    <div className='taskListWrapper w-full'>
      
      <div className="taskListHeaderWrapper text-black font-iranyekan text-sm sm:text-md lg:text-lg w-full flex justify-around gap-1 mt-10 rounded-md bg-neutral-200 py-1 px-2">
            
            <div className="taskTitleWrapper flex justify-center items-center border-l-2 border-black w-1/2" >
                <h2 className="taskTitle">عنوان تسک</h2>
            </div>
            
            <div className="taskStatusWrapper flex justify-center items-center border-l-2 border-black w-1/4" >
                <h2 className="taskStatus">وضعیت</h2>
            </div>

            <div className="taskActionWrapper flex justify-center items-center w-1/4">
                <h2 className="taskAction">اکشن</h2>
            </div>

      </div>

      <div className="itemsContainer w-full">
        <ul className="itemsList w-full">
            <li> <TaskItem taskText='تسک اول' taskDate='1/1/1' taskId='1' taskStatus='در حال انجام' taskBackGround='white'/> </li>
        </ul>
      </div>



    </div>
  )
}

export default TakList
