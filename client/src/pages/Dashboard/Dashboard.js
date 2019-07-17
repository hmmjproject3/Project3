import React from 'react'
import './Dashboard.css'
import Grid from '@material-ui/core/Grid'
import ProgressChart from '../../components/ProgressChart'
import SquadGoals from '../../components/SqualGoals/SquadGoals';
import BonusChores from '../../components/BonusChores/BonusChores';

const Dashboard = _ => {
    return (
        <>
            <Grid container id='dashContainer' spacing={3} style={{textAlign: 'center', width: 'auto', margin: '50px'}}>
                <Grid item id='progressChart' xs={12} style={{marginBottom: '10px'}}>
                    <ProgressChart />
                </Grid>
                <Grid item id='squadGoals' xs={12} md={6}>
                    <SquadGoals />
                </Grid>
                <Grid item id='bonusChores' xs={12} md={6}>
                    <BonusChores />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard