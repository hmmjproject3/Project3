import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import MobileNav from '../../components/MobileNav'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import 'typeface-roboto'
import MenuBar from '../../components/MenuBar'
import ProgressChart from '../../components/ProgressChart'
import SquadGoals from '../../components/SqualGoals/SquadGoals'
import BonusChores from '../../components/BonusChores'
import Left from '../../assets/left.png';
import Right from '../../assets/right.png';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  mainCon: {
    backgroundColor: '#E4ECF2',
    boxShadow: 'none',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    height: 768,
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    },

    },
    date: {
        paddingTop: "30px",
        textAlign: "center",
        color: "#153B69",
    
    },
    root: {
        backgroundColor: '#24537f',
        padding: theme.spacing(0, 0),
    },
}))

export default function Dashboard () {
  const classes = useStyles()
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const menu = width < 1000 ? <MobileNav /> : <MenuBar />
    document.menu = menu
    return () => document.menu = ""
  }, [width])

    return (
        <div className={classes.mainCon}>   
        {document.menu}    
        <Typography className={classes.date}>
        {/* <h3> */}
          <img alt="Left Arrow" src={Left} />
          Aug 26 - Sep 1
        <img alt="Left Right" src={Right} />
        {/* </h3> */}
        </Typography>
                <Grid container id='dashContainer' spacing={3} style={{ textAlign: 'center', width: 'auto', marginTop: '15px', }}>
                <Grid item id='progressChartContainer' xs={12} style={{ marginBottom: '10px' }}>
                    <Paper className={classes.root}>
                        <Grid item id='progressHead' xs={12} style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
                            <p style={{ margin: '0px', padding: '10px' }}>Progress Chart</p>
                        </Grid>
                        <Grid item id='progressBody' xs={12} style={{ height: '200px', backgroundColor: 'white' }} >
                            <ProgressChart />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item id='squadGoalsContainer' xs={12} md={12}>
                    <SquadGoals />
                </Grid>
      </Grid>
    </div>
  )
}
