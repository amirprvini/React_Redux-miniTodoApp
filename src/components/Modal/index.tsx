import { useFormik } from 'formik'
import React, { useRef } from 'react'
import { taskObject } from '../../types/task.type'
import * as yup from 'yup' ;
import { addTaskObj } from '../../redux/features/tasks/taskSlice';

interface ModalProps extends React.PropsWithRef<any> {
    onClickProp : ()=> void 
    onComplete  : (e:addTaskObj) => void 
}

const Modal : React.FC<ModalProps> = React.forwardRef(({onClickProp,onComplete},ref:any) : JSX.Element => {
  

    // const inputRef = useRef<HTMLInputElement>();

    const validationSchema = yup.object({
        taskText : yup.string().required('لطفا عنوان تسک را وارد کنید!')
    }) 

    const formik = useFormik<addTaskObj>({
        initialValues : {
            listId : '' ,
            taskText : '' , 
            taskId : ''
        } ,
        validationSchema , 
        onSubmit : (val, { resetForm }) => {
            console.log('value: ' , val)
            onComplete(val)
            // formik.values.task = '' ; 
            console.log('validate: ' , formik.errors.taskText)
            resetForm() ;
        } 
    })

    
    
    return (
    <dialog id="my_modal_1" className="modal px-2 py-1 rounded-lg fixed top-1/3 left-1/3 w-1/3 bg-slate-50" ref={ref} dir='rtl'>
  <div className="modal-box flex flex-col space-y-4">
    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
    <p className="py-4 font-bold">عنوان تسک جدید</p>
    <div className="modal-action">
      <form method="dialog" className='modalForm flex flex-col items-center space-y-4' onSubmit={formik.handleSubmit}>
        {/* if there is a button in form, it will close the modal */}
        
        <input className='modalInput rounded-sm w-full border-solid border-black ' type="text" name='taskText' id='taskText' 
        value={formik.values.taskText} onChange={formik.handleChange} placeholder='لطفا تسک مورد نظر خود را وارد کنید' />

        {
            formik.touched.taskText && formik.errors.taskText && ( <div className='errorWrapper w-full flex justify-start'>
                <h6 className='text-red-600 text-sm'>*{formik.errors.taskText}</h6>
            </div> )
        }
        <button className="btn font-bold rounded-sm px-4 py-1 text-white bg-black" type='submit' onClick={onClickProp}>تایید</button>
     
      </form>
    </div>
  </div>
</dialog> )
})

export default Modal
