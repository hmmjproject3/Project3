import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Selection from '../Selection'
import ChoresContext from '../../utils/ChoresContext'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import ArrowDropDown from '@material-ui/icons/ExpandMore'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button'
import AddKidChores from '../AddKidChores'


import IconButton from '@material-ui/core/IconButton'


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto'
  },
  table: {
    width: '100%',
    overflowX: 'auto',
    minWidth: 300,
  },
}))

const ChildChores = _ => {



  const { childArr, selectChild, child, handleInputChange, addChore } = useContext(ChoresContext)
  const classes = useStyles()


  const [addView, toggleAddView] = useState(false)
  const [editing, updateEdits] = useState({
      id: false
  })

  function toggleEdit(id) {
      updateEdits({
          ...editing,
          [id]: !editing[id]
      })
  }

  const toggleThenAddChore = event => {
    toggleAddView(!addView)

    if (addView) {
    addChore(event)
  }
}




  return (
   
    <div>
    <Paper style={{marginTop: '10px'}} className={classes.root}>
    <Grid container spacing={3} style={{height: '60px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left'}}>
              <Grid item xs={6}>
              <p style={{color: 'white', padding: 0, marginTop: 0, marginLeft: 12, fontFamily: 'roboto', fontSize: '25px', }}>
              {child.name}
              </p>
              </Grid>

              <Grid item xs={6}  style={{height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'right', margin: 0}}>
              <Selection />
              </Grid>
     </Grid>


{ !addView ? (


     <Grid item id='bonusChoresBody' xs={12} style={{height: '250px', backgroundColor: 'white'}}>
            <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{color: '#153B69'}} align="left">Chores Title</TableCell>
              <TableCell style={{color: '#153B69'}} align="left">Cheddar</TableCell>
              <TableCell style={{color: '#153B69'}} align="left">Progress</TableCell>
              <TableCell style={{color: '#153B69'}} align="left"></TableCell>
              <TableCell style={{color: '#153B69'}} align="left"></TableCell>


            </TableRow>
            </TableHead>
            <TableBody>

     <>
   
                  {
                    child.chores ? 
                    child.chores.map(chore => {
                      console.log(chore)
                      return (
                      <>
                      <TableCell style={{color: '#153B69', width: '20px', paddingRight: '10px'}}>{chore.task}
                      </TableCell>
                      <TableCell style={{color: '#153B69', width: '20px', paddingRight: '10px'}}>{chore.points}</TableCell>
                      <TableCell style={{color: '#153B69', width: '20px', paddingRight: '10px'}}>
                      <IconButton>
                      <ArrowDropDown/>
                      </IconButton>
                      </TableCell>

                      <TableCell style={{color: '#153B69', width: '20px', paddingRight: '10px'}}>
                      <IconButton>
                      <Delete/>
                      </IconButton>
                      </TableCell>

                      <TableCell style={{color: '#153B69', width: '20px', paddingRight: '10px'}}>
                      <IconButton>
                      <Edit/>
                      </IconButton>
                      </TableCell>



                      {/* <h1 style={{ color: 'black', textAlign: 'left'}}>{chore.task}</h1>
                      <h1 style={{ color: 'black', textAlign: 'left'}}>{chore.points}</h1> */}
                      </>
                    )
                  }) : null

                  
                  }


       

               </>
               </TableBody>
          </Table>



          </Grid>


) : <AddKidChores/>

}

<Button variant="contained" className={classes.button}
onClick={() => toggleAddView(!addView)}
>
        Create New Chore
      </Button>


    </Paper>
  </div> 

  )
}

export default ChildChores
