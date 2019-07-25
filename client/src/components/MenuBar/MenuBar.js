import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Settings from '@material-ui/icons/Settings';
import LocalAtm from '@material-ui/icons/LocalAtm';
import Home from '@material-ui/icons/Home';
import LocalLaundryService from '@material-ui/icons/LocalLaundryService';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Quinton from '../../assets/quinton.png';
import Hamza from '../../assets/hamza.png';
import Jennifer from '../../assets/jennifer.png';
import Matthew from '../../assets/matthew.png';
import Marianna from '../../assets/marianna.png';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom' 

const useStyles = makeStyles({
  root: {
    marginTop: 15,
  },
  con: {
    flexGrow: 1,
  },
  // left: {
  //   textAlign: "left",
  // },
  right: {
    textAlign: "right",
  },
  iconsright: {
    backgroundColor: "#153B69",
    color: "#E4ECF2",
    marginRight: 10,
    height: 48,
    width: 48,
    display: 'inline-flex',
  },
  peachAvatar: {
    color: '#fff',
    backgroundColor: "#FFBA00",
    height: 48,
    width: 48,
    display: "inline",
    marginRight: '5px',
    display: 'inline-flex',
    fontSize: '25px'
  },
  orangeAvatar: {
    color: '#fff',
    backgroundColor: "#FF9300",
    height: 48,
    width: 48,
    marginRight: '5px',
    display: 'inline-flex',
    fontSize: '25px'
  },
  blueAvatar: {
    color: '#fff',
    backgroundColor: "#60B0F5",
    height: 48,
    width: 48,
    marginRight: '5px',
    display: 'inline-flex',
    fontSize: '25px',
  },
  purpleAvatar: {
    color: '#fff',
    backgroundColor: "#968AF2",
    height: 48,
    width: 48,
    marginRight: '5px',
    display: 'inline-flex',
    fontSize: '25px'
  },
  link: {
    textDecoration: 'none'
  },
  appBar: {
    backgroundColor: "#E4ECF2",
    boxShadow: "none",
    position: 'initial',
    
  }
})

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        <div className={classes.con}>
        <Grid container spacing={3}>

        <Grid className={classes.left} item xs={8}>

         <Link className={classes.link} to='/hamza'>
         <Avatar className={classes.peachAvatar}>H</Avatar>
        </Link>

        <Avatar className={classes.blueAvatar}>M</Avatar>

        <Avatar className={classes.orangeAvatar}>J</Avatar>

        <Avatar className={classes.purpleAvatar}>M</Avatar>

         </Grid>
        

        <Grid className={classes.right} item xs={4}>

        <Link className={classes.link} to='/'>
        <IconButton className={classes.iconsright}>
          <Home />
        </IconButton>
        </Link>


        <Link className={classes.link} to='/chores'>
        <IconButton className={classes.iconsright}>
          <LocalLaundryService />
        </IconButton>
        </Link>

        <Link className={classes.link} to='/rewards'>
        <IconButton className={classes.iconsright}>
        <LocalAtm />
        </IconButton>
        </Link>

   

        <Link className={classes.link} to='/'>
        <IconButton className={classes.iconsright}>
        <Settings />
        </IconButton> 
        </Link>


        </Grid>
        </Grid>
        </div>
      

    </div>
  );
}
