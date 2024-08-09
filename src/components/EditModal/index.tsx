import { useFormik } from 'formik'
import React, { useRef } from 'react'
import { taskObject } from '../../types/task.type'
import { addTaskObj } from '../../redux/features/tasks/taskSlice'
import { string } from 'yup'

interface EditModalProps extends React.PropsWithRef<any> {
    onCompleteEditModal : (e:addTaskObj) => void 
}

const EditModal : React.FC<EditModalProps> = React.forwardRef(({onCompleteEditModal},ref:any) : JSX.Element => {
  

    // const inputRef = useRef<HTMLInputElement>() ; 

    const formik = useFormik<addTaskObj>({
        initialValues : {
            listId: '' ,
            taskText : '' , 
            taskId : ''
        } , 
        onSubmit : val => {
            
            console.log('value in edit modal: ' , val)
                onCompleteEditModal(val)
            
            // formik.values.task = '' ; 
        }
    })

    const handleCloseEditModal = ()=>{
        // const modal = document.getElementById('my_modal_1');
        // console.log('modal Element: ' , modal) ;   
    } 
    
    return (
    <dialog id="my_modal_1" className="modal px-2 py-1 rounded-lg fixed top-1/3 left-1/3 w-1/3 bg-slate-50" ref={ref} dir='rtl'>
  <div className="modal-box flex flex-col space-y-4">
    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
    <p className="py-4 font-bold">ویرایش تسک</p>
    <div className="modal-action">
      <form method="dialog" className='modalForm flex flex-col items-center space-y-4' onSubmit={formik.handleSubmit}>
        {/* if there is a button in form, it will close the modal */}
        
        <input className='modalInput rounded-sm w-full border-solid border-black ' type="text" name='taskText' id='taskText' 
        value={formik.values.taskText} onChange={formik.handleChange} placeholder='لطفا تسک مورد نظر خود را وارد کنید' />
        <button className="btn font-bold rounded-sm px-4 py-1 text-white bg-black" type='submit' onClick={(e)=>{
            e.preventDefault();
            handleCloseEditModal()
        }}>تایید</button>
     
      </form>
    </div>
  </div>
</dialog> )
})

export default EditModal
