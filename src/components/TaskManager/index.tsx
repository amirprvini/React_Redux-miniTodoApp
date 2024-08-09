import React, { useEffect, useState } from 'react'
import TakList from '../TaskList'
import axios from 'axios'
import { taskType } from '../../types/task.type'
import { useAppDispatch,useApplicationSelector} from '../../redux/store'
import {taskManager, TasksListState } from '../../redux/features/tasks/taskSlice'


// import type { RootState } from '../../app/store'

interface TaskManagerProps {}
const TaskManager : React.FC<TaskManagerProps>= () : JSX.Element => {

    const [taskList,setTaskList] = useState<taskType>() ; 
    const [taskApp,setTaskApp] = useState<taskType[]>() ;

    const [update , setUpdate] = useState<boolean>(false) ; 

    const state = useApplicationSelector(state=>state)
    const dispatch = useAppDispatch();

    
    const fetchTasks = async ()=>{
        const response = await axios.get('http://localhost:3000/tasks');
        
        console.log('response data: ' , response.data);

        // let findList ;
        //    findList = response.data.find(( list:TasksListState )=>{
        //     return list?.id === '' })

        // console.log('findList',findList)

        // dispatch(taskManager(response.data));

        // setTaskList(response.data);

        setTaskApp(response.data)

    }

    useEffect(()=>{

        fetchTasks();
        // dispatch(GetAllTasks(taskList!))
        console.log('tasks from redux: ' , state.tasks);
        console.log('res: ' , taskManager);

    },[])

  return (
    <div className='taskManagerWrapper w-full h-min flex justify-center space-x-4 px-5 py-10'>
        
                {
                    state.tasks.taskManager.map((list)=>{
                        return <TakList title={list.title} taskListSlug={list.slug} tasksProps={list.tasks} 
                        taskListID={list.id} onComplete={()=>{
                            fetchTasks()
                            
                            console.log('tasks from redux: ' , state.tasks);
                            // console.log('tasks from redux: ' , list.tasks);
                        }}/>
                    })
                }
                
    </div>
  )
}


export default TaskManager

