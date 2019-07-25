import React, { useContext, useState, useRef, useEffect } from 'react'
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
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton'


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto',
    fontFamily: 'roboto',
  },
  table: {
    width: '100%',
    overflowX: 'auto',
    minWidth: 300,
  },
}))

const ChildChores = _ => {



  const { childArr, selectChild, child, handleInputChange, addChore, choreName, cheddarReward } = useContext(ChoresContext)
  const classes = useStyles()


  const [addView, toggleAddView] = useState(false)
  const [editing, updateEdits] = useState({
    id: false
  })
  const [currentChore, setCurrentChore] = useState(undefined)

  function toggleEdit(id) {
    setCurrentChore(id)
    console.log(editing[id])
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

  let rows = [0, 1 , 2, 3, 4]



  return (

    <div >
      <Paper style={{ marginTop: '32px' }} className={classes.root} >
        <Grid container spacing={2} style={{ height: '60px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
          <Grid>
            <p style={{ color: 'white', padding: 10, marginTop: 0, marginLeft: 12, fontFamily: 'roboto', fontSize: '25px', }}>
              {child.name}
            </p>
          </Grid>

          <Grid style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'right', margin: 0 }}>
            <Selection />
          </Grid>
        </Grid>


        {

          !addView ? (


            <Grid item id='bonusChoresBody' xs={12} style={{ height: '400px', backgroundColor: 'white', overflowY: "auto" }}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                  <TableCell style={{ color: '#153B69', width: '250px', paddingRight: '15px' }}>Task</TableCell>
                  <TableCell style={{ color: '#153B69', width: '100px', paddingRight: '15px' }} align="left">Cheddar</TableCell>
                  <TableCell style={{ color: '#153B69', width: '80px', paddingRight: '20px', paddingLeft: '5px' }} align="left">Status</TableCell>
                  <TableCell style={{ color: '#153B69', width: '5px', paddingRight: '0px' }} align="left"></TableCell>
                  <TableCell style={{ color: '#153B69', width: '5px' }} align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ maxHeight: '100%', overflow: 'hidden' }}>

                  <>

                    {

                      child.chores ?
                      
                        
                          child.chores.map((chore, i) => {
                          return   !editing[i] ?
                           
                

                              <TableRow style={{ maxHeight: '100%', overflow: 'hidden' }}>
                                <TableCell style={{ color: '#153B69', width: '20px', paddingRight: '10px' }}>{chore.name}
                                </TableCell>
                                
                                <TableCell style={{ color: '#153B69', width: '20px', paddingRight: '10px' }}>{chore.points}</TableCell>

                                <TableCell style={{ color: '#153B69', width: '20px', paddingRight: '10px' }}>{chore.points}</TableCell>

                                <TableCell style={{ color: '#153B69', width: '20px', paddingRight: '10px' }}>
                                  <IconButton>
                                    <Delete />
                                  </IconButton>
                                </TableCell>

                                <TableCell style={{ color: '#153B69', width: '20px', paddingRight: '10px' }}>
                                  <IconButton onClick = {_=>toggleEdit(i)}>
                                    <Edit />
                                  </IconButton>
                                </TableCell>
                              </TableRow>


                             :  
                              <h3>Hellloooo</h3>
                            
                          }) 

                          ///ENTER UPDATE CHORES FORM ROWS HERE
                          // child.chores.map((chore, i) => {
                           
                          // })

                       


                        : null

                    }


                  </>
                </TableBody>
              </Table>



            </Grid>


          ) : <AddKidChores />


        }


      </Paper>
      <div style={{textAlign: 'center'}}>
      <Fab className={classes.fab}
       onClick={toggleThenAddChore}
       style={{
       padding: 'auto',
       color: 'white',
       backgroundColor: '#FFBA00',
       marginTop: '15px',
       }}
        >
      <AddIcon />

      </Fab>
      </div>
    </div>

  )
}

export default ChildChores



