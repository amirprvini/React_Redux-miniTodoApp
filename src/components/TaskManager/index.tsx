import { useApplicationSelector } from '../../redux/store'
import { useFormik } from 'formik'
import { taskObject } from '../../types/task.type'
import TakList from '../TaskList'
import { useDispatch } from 'react-redux'
import { AddTask, FinishTask, RemoveTask } from '../../redux/features/tasks/taskSlice'
import { find } from '@reduxjs/toolkit/dist/utils'

interface TaskManagerProps {}
const TaskManager : React.FC<TaskManagerProps>= () : JSX.Element => {


    //--------------------- Redux Toolkit [addTask] --------------------- //
    
    const addTaskDispatch = useDispatch();

    //--------------------- Redux Toolkit [removeTask] --------------------- //

    const removeTaskDispatch = useDispatch();
        
    //--------------------- Redux Toolkit [FinishTask] --------------------- //

    const finishTaskDispatch = useDispatch();

    //--------------------- Redux Toolkit [Get state from redux] --------------------- //

    const state = useApplicationSelector(state=>state)

    //------------------------------------------------------------------------------------//


     const handleClick = ()=>{
      console.log('data in handle Click Function:');    
    }

    const formik = useFormik<taskObject>({
      
      initialValues : {
        id : 0 , 
        status : '' ,
        pendingDate : '' ,
        doneDate : '' ,
        taskText : '' ,
      },

      onSubmit:(data:taskObject , {resetForm}) =>{
          console.log('data: ' , data)
          
            const currDate = new Date().toLocaleDateString();
            const currTime = new Date().toLocaleTimeString();

          addTaskDispatch(AddTask({
            
            id : Date.now() , 
            status : 'pending' ,
            pendingDate : currDate + '  ساعت  ' + currTime ,
            doneDate : '' ,
            taskText : data.taskText,

          }))

          setTimeout(()=>{

            resetForm();
            
          },500)
      }

    })
    
  return (
    <div className='taskManagerWrapper w-4/5 sm:w-3/5 lg:w-1/2 h-min bg-neutral-100 border-neutral-300 shadow-2xl rounded-lg flex flex-col space-y-6 font-iranian-sans justify-center space-x-4 px-5 py-10 my-10' dir='rtl'>
        
        <div className="inputWrapper font-iranyekan w-full py-5 my-3">
              
        <form onSubmit={formik.handleSubmit} className='w-full flex justify-around gap-3'>
            <input type="text" placeholder='عنوان تسک' className=' w-4/5 text-black rounded-lg border px-2 py-1' name='taskText' id='taskText' onChange={formik.handleChange} value={formik.values.taskText} />
            <button className='w-1/5 rounded-lg px-2 py-1 border bg-gradient-to-l from-blue-700 to-blue-500 text-white' onClick={handleClick}>افزودن</button>
        </form>

        <div className="taskListContainer w-full">
          <TakList tasksProps={state.tasks.taskManager} onCompleteRemoveTask={(taskId)=>{
            console.log('state before remove task: ' , state);
            removeTaskDispatch(RemoveTask(taskId))
            console.log('action payload after remove task: ' , state );
          }} onCompleteFinishTask={(taskId)=>{

            const findTask = state.tasks.taskManager.find((task:taskObject)=>{
              return task.id === taskId
            })

        
            // const finishedTask = {

            //   id : findTask.id , 
            //   pendingDate : findTask.pendingDate ,
            //   taskText : findTask.taskText,
            //   status : 'done' , 
            //   doneDate : currDate + '  ساعت  ' + currTime,

            // }

            console.log('find task for Finishing: ' , findTask); 

            finishTaskDispatch(FinishTask(findTask!))

          }} />
        </div>

        </div>

    </div>
  )
}


export default TaskManager

