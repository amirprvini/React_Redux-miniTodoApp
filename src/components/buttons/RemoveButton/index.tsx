import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";

interface RemoveButtonProps {
     onclickProp : ()=> void 
}

const RemoveButton : React.FC<RemoveButtonProps> = ({onclickProp}) : JSX.Element => {
  return (
    <div className='removeButtonWrapper' onClick={onclickProp}>
        <IoIosRemoveCircle />
    </div>
  )
}

export default RemoveButton