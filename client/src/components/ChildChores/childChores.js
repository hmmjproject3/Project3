import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Selection from '../Selection'
import ChoresContext from '../../utils/ChoresContext'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#153B69',
        padding: theme.spacing(0, 0),
        width: 'auto'
    },
  }))

const ChildChores = _ => {

  const { childArr, selectChild, child } = useContext(ChoresContext)
  const classes = useStyles()

  return (
    <div>
        <Paper className={classes.root}>
            <Grid style={{height: '50px', color: 'white', textAlign: 'left'}}>
                <h3 style={{padding: '10px', paddingTop: '13px'}}>{child.name}   <Selection /></h3>
               <>
                  {
                    child.chores ? 
                    child.chores.map(chore => {
                      console.log(chore)
                      return (
                      <>
                      <h1>{chore.task}</h1>
                      <h1>{chore.points}</h1>
                      </>
                    )
                  }) : null
                  }

               </>
                </Grid>
            <Grid xs={12} style={{height: '200px', backgroundColor: 'white'}} ></Grid>
        </Paper>
    </div>
  )
}

export default ChildChores



