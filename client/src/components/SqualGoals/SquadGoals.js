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
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto'
  },
  // root: {
  //     width: '100%',
  //     marginTop: theme.spacing(3),
  //     overflowX: 'auto',
  //   },
  table: {
    width: '100%',
    overflowX: 'auto',
    minWidth: 300,
  },
}))

const SquadGoals = _ => {
  const classes = useStyles()

  const { childArr } = useContext(ChoresContext)

  console.log(childArr.sort((a,b) => b.totalPoints-a.totalPoints))
  const ranking=[]

//   const ranking = childArr.map(child => {
//     const container = {};

//     container[item.name] = item.likes;
//     container.age = item.name.length * 10;

//     return container;
// })

  return (
    <div>
      <Paper style={{marginTop: '10px'}} className={classes.root}>
            <Grid item id='bonusChoresHead' xs={12} style={{height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left'}}>
                <p style={{margin: '0px', padding: '10px'}}>Squad Goals</p>
                </Grid>
            <Grid item id='bonusChoresBody' xs={12} style={{height: '250px', backgroundColor: 'white'}}>
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

          childArr.sort((a,b) => b.totalPoints-a.totalPoints).map((child,i) => {
            
            switch  (i) {
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
            console.log(ranking)

          return(  <TableRow key={child.name} id ={child._id}>
              <TableCell component="th" scope="row">
                {child.name}
              </TableCell>
              <TableCell align="left" style={{color: '#FF9300'}}>{child.totalPoints}</TableCell>
              <TableCell align="left" style={{color: '#60B0F5', fontWeight: 'bold'}}>{ranking[i]}</TableCell>
            </TableRow>
            )})
}
            </TableBody>
          </Table>
            </Grid>
        </Paper>
    </div>
          )
        }
        
export default SquadGoals