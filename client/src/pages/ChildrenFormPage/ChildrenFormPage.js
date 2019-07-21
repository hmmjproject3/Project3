import React from 'react'
import './ChildrenForm.css'
import {makeStyles} from '@material-ui/core/styles'
import ChildrenForm from '../../components/childrenForm'

const childrenFormPage = _ => {

  return (
    <div className='overlay' id='childrenFormContainer' style={{height: '100%', width: '100%', backgroundColor: '#153B69'}}>
         <ChildrenForm/>
    </div>
  )
}

export default childrenFormPage