import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'typeface-roboto'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import ChoresContext from '../../utils/ChoresContext'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#24537f',
    padding: theme.spacing(0, 0),
    width: 'auto'
  },
  table: {
    width: '100%',
    overflowX: 'auto',
    minWidth: 300
  }, 
  points: {
    color: '#FF9300',
  },
  rank: {
    color: '#68247f',
    fontWeight: 'bold',
  }
}))

const SquadGoals = _ => {
  const classes = useStyles()

  const { childArr } = useContext(ChoresContext)

  let childArrToSort = JSON.parse(JSON.stringify(childArr))

  const ranking = []

  return (
    <div>
      <Paper className={classes.root}>
            <Grid item id='bonusChoresHead' xs={12} style={{height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left'}}>
                <p style={{margin: '0px', padding: '10px'}}>Squad Goals</p>
                </Grid>
            <Grid item id='bonusChoresBody' xs={12} style={{height: '220px', backgroundColor: 'white', overflowY: "auto"}}>
            <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{color: '#153B69', width: '20px', paddingRight: '10px'}}>Name</TableCell>
              <TableCell style={{color: '#153B69', width: '20px'}} align="left">Cheddar</TableCell>
              <TableCell style={{color: '#153B69', width: '20px'}} align="left">Ranking</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map(row => ( */}
              {

                childArrToSort.sort((a, b) => b.totalPoints - a.totalPoints).map((child, i) => {
                  switch (i) {
                    case 0:
                      ranking.push('Bad & Bougie')
                      break
                    case 1:
                      ranking.push('On Fleek')
                      break
                    case 2: ranking.push('Mood')
                      break
                    default:
                      ranking.push('BRUH')
                      break
                  }

                  return (<TableRow key={child.name} id={child._id}>
                    <TableCell component='th' scope='row'>
                      {child.name}
                    </TableCell>
                    <TableCell className={classes.points} align='left'>{child.totalPoints}</TableCell>
                    <TableCell className={classes.rank} align='left'>{ranking[i]}</TableCell>
                  </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    </div>
  )
}

export default SquadGoals
