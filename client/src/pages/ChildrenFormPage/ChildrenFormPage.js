import React from 'react'
import './ChildrenForm.css'
import { makeStyles } from '@material-ui/core/styles'
import ChildrenForm from '../../components/childrenForm'

const childrenFormPage = _ => {
  return (
    <div className='overlay' id='childrenFormContainer'>
      <div styles={{overflowX: 'auto'}}>
        <ChildrenForm />
      </div>
    </div>
  )
}

export default childrenFormPage
