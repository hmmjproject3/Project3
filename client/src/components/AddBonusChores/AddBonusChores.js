import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#153B69',
        padding: theme.spacing(0, 0),
        width: 'auto'
    },
}))

const BonusChores = _ => {
    const classes = useStyles()
    const [addView, toggleAddView] = useState(false)
    return (
        <div>
            <Paper className={classes.root}>
                <Grid item id='bonusChoresHead' xs={12} style={{ height: '50px', color: 'white', textAlign: 'left' }}>
                    <h3 style={{ padding: '10px', paddingTop: '13px' }}>Get Some Extra Cheddar!</h3>
                </Grid>
                <Grid item id='bonusChoresBody' xs={12} style={{ height: '200px', backgroundColor: 'white' }} >
                    
                    {!addView ? <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: '#153B69', width: '20px', paddingRight: '10px' }}>Job</TableCell>
                                <TableCell style={{ color: '#153B69', width: '20px' }} align="left">Cheddar</TableCell>
                                <TableCell style={{ color: '#153B69', width: '20px' }} align="left">Claim</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {rows.map(row => ( */}
                            <TableRow key='row.name'>
                                <TableCell component="th" scope="row">marianna</TableCell>
                                <TableCell align="left" style={{ color: '#FF9300' }}>390</TableCell>
                                <TableCell align="left" style={{ color: '#60B0F5', fontWeight: 'bold' }}>Button1</TableCell>
                                <Fab color="primary" aria-label="Add" className={classes.fab}><AddIcon /></Fab>
                                <Fab color="secondary" aria-label="Edit" className={classes.fab}><Icon>edit_icon</Icon></Fab>
                                <Fab disabled aria-label="Delete" className={classes.fab}><DeleteIcon /></Fab>
                            </TableRow>
                            <TableRow key='row.name'>
                                <TableCell component="th" scope="row" style={{ color: '#153B69' }}>marianna</TableCell>
                                <TableCell align="left">390</TableCell>
                                <TableCell align="left">button</TableCell>
                            </TableRow>
                            <TableRow key='row.name'>
                                <TableCell component="th" scope="row">marianna</TableCell>
                                <TableCell align="left">390</TableCell>
                                <TableCell align="left">Bad & Bougie</TableCell>
                            </TableRow>
                            <TableRow key='row.name'>
                                <TableCell component="th" scope="row">marianna</TableCell>
                                <TableCell align="left">390</TableCell>
                                <TableCell align="left">Bad & Bougie</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table> : <div>
                        <form>
                            Job Name: <input type="text" id="jobName"></input>
                                    <br></br>
                            Cheddar Reward: <input type="text" id="cheddarReward"></input>
                                    <br></br>
                            Start Date: <input type="text" id="startDate"></input>
                            <br></br>
                        </form>
                    </div>}
                </Grid>
                <Button
                    variant="outlined"
                    size="large"
                    color="warning"
                    className={classes.margin}
                    onClick={() => toggleAddView(!addView)}>
                    Create
                </Button>
            </Paper>
        </div>
    )
}

export default BonusChores