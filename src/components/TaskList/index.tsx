import React, { useRef, useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import TaskItem from '../TaskItem';
import Modal from '../Modal';
import { taskObject, taskType } from '../../types/task.type';
import axios from 'axios';
import EditModal from '../EditModal';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useApplicationSelector } from '../../redux/store';
import { AddTask, addTaskObj } from '../../redux/features/tasks/taskSlice' ;

interface TaskListProps {
    title:string
    taskListID : string 
    taskListSlug : string
    tasksProps : addTaskObj[]
    onComplete : ()=> void 
}

const TakList : React.FC<TaskListProps> = ({title,tasksProps,taskListID,taskListSlug,onComplete}) : JSX.Element => {
  
    const [taskIDState,settaskIDState] = useState<string>('');

    const ref = useRef<any>() ;
    const editModalref = useRef<any>() ;

    //--------------------- Redux Toolkit --------------------- //

    const addTaskDispatch = useAppDispatch()
    const listRedux = useApplicationSelector(state=>state)

    //--------------------- Redux Toolkit --------------------- //

    const handleAddButton = ()=>{
        console.log('add button in: ' , title)
        ref.current.showModal();
    }

    const handleAddRequest = async (task:addTaskObj)=>{

        // const newTaskList : taskType = {
        //     id:taskListID,
        //     title:title,
        //     slug:taskListSlug,
        //     tasks :[...tasksProps,{
        //         ...task ,
        //         id: Date.now().toString()
        //         }
        //     ]
        // }

        // console.log('new taskList: ' , newTaskList) ; 

        // const tasl = await axios.put(`http://localhost:3000/tasks/${taskListID}`,newTaskList)
        // console.log('tas:' , tasl);


        //--------------------- Redux Toolkit --------------------- //

        const taskoo = {
            listId : taskListID ,
            taskId : Date.now().toString() ,
            taskText : task.taskText
        }

        console.log('task before dispatch: ' , taskoo )

        addTaskDispatch(AddTask(taskoo))

        console.log('list Redux [after]: ' , listRedux) ; 

        onComplete() ; 
    }

    const handleRemoveRequest = async (taskID : string)=>{
        
        // const newTasks = tasksProps.filter((task)=>{
        //     return task.id !== taskID
        // })

        // const newTaskList : taskType = {
        //     id:taskListID,
        //     title:title,
        //     slug:taskListSlug,
        //     tasks :[...newTasks]
        // }

        // const tasl = await axios.put(`http://localhost:3000/tasks/${taskListID}`,newTaskList)
        // console.log('tas in handle Remove :' , tasl);

        onComplete() ;

    }

    const handleEditRequest = async (Updatedtask:string,taskID:string)=>{

        console.log('2- balaye handle Edit')
        
        const updateTasks = tasksProps.map((task)=>{
        
            if(task.taskId === taskID)
            return {...task , text:Updatedtask}
            
            else 
            return task 

        })

        // const newTaskList : taskType = {
        //     id:taskListID,
        //     title:title,
        //     slug:taskListSlug,
        //     tasks :[...updateTasks]
        // }

        // const tasl = await axios.put(`http://localhost:3000/tasks/${taskListID}`,newTaskList)
        // console.log('3- paeen handle Edit:' , tasl);


        onComplete() ;

    }

    const handleCloseModal = ()=>{

        console.log('in handle close modal')
        ref.current.close() ;
        
        
    } 
  
    return (
    <div className='taskListWrapper shadow-xl w-1/3 flex flex-col bg-gray-400 px-2 py-4 justify-around rounded-lg h-min'>
      
      <div className="taskListHeader flex w-full ">
         
        <div className="taskListButtonWrapper cursor-pointer flex justify-around space-x-2 px-2 py-1 bg-white rounded-lg w-1/3" onClick={handleAddButton}>
           
            <div className="addIconWrapper h-full flex items-center text-2xl ">
                <IoIosAddCircle />
            </div>
            <p className="buttonTitle font-bold h-full flex items-center ">اضافه کردن</p>
            
            <Modal ref={ref} onComplete={(task)=>{

                console.log('task in on Complete: ' , task);
                console.log('Id task list: ' , taskListID);
                
                handleAddRequest(task) ; 
            }} onClickProp={handleCloseModal} />

            <EditModal ref={editModalref} onCompleteEditModal={(updateTask)=>{
                console.log('1- on Complete Edit modal: ')
                handleEditRequest(updateTask.taskText,taskIDState)
            }} />

        </div>

        <div className="taskListTitleWrapper text-2xl font-bold font-mono w-2/3 flex justify-center flex-wrap" dir='rtl'>
            {title}
        </div>
      
      </div>

      <div className="taskListItemsWrapper w-full bg-slate-400">
        <ul className='taskListItems w-full flex flex-col space-y-3 mt-8'>
            {
                tasksProps.map((task)=>{
                    return <li key={task.taskId}> <TaskItem title={task.taskText} taskId={task.taskId}
                    onCompleteRemoveTask={()=>{
                        console.log('remove btn , task ID: ' , task.taskId)
                        handleRemoveRequest(task.taskId)
                    }}
                    
                    onCompleteEditTask={(taskID)=>{  

                        
                        settaskIDState(taskID);
                        editModalref.current.showModal();   
                        console.log('edit btn , task ID: ' , task.taskId);

                    }}/></li>
                })
            }
        </ul>
      </div>

    </div>
  )
}

export default TakList
