import React from 'react'
import { FaEdit } from "react-icons/fa";

interface EditButtonProps {
   onclickProp : any 
}

const EditButton : React.FC<EditButtonProps> = ({onclickProp}) : JSX.Element => {
  return (
    <div className='editButtonWrapper' onClick={onclickProp}>
        <FaEdit />
    </div>
  )
}

export default EditButton