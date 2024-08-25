import TaskItem from '../TaskItem';
import { taskObject } from '../../types/task.type';

interface TaskListProps {
    tasksProps : taskObject[]
    onCompleteRemoveTask : (taskID:number)=> void 
}

const TakList : React.FC<TaskListProps> = ({tasksProps,onCompleteRemoveTask}) : JSX.Element => {
  
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
            {tasksProps.map((task:taskObject)=>{
                return <li key={task.id}> <TaskItem taskText={task.taskText} pendingDate={task.pendingDate} doneDate={task.doneDate} taskId={task.id} taskStatus={task.status} onCompleteRemoveTask={(taskId)=>{onCompleteRemoveTask(taskId)}}/> </li>
            })}
        </ul>
      </div>



    </div>
  )
}

export default TakList
