<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Logo from '../../assets/logo.png'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    margin: 'auto',
    color:  "#153B69",

  },
  logoBox: {
    textAlign: 'auto',
}
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.main}>

    <div className={classes.logoBox}>
    <img className={classes.logo} src={Logo} />
    </div>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered

        >
          <Tab label="Register" />
          <Tab label="Sign In" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>

        <Typography>Name</Typography>
        <Input
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        />
        
        <Typography>Email</Typography>
        <Input
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        />

        <Typography>Username</Typography>
        <Input
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        />

        <Typography>Password</Typography>
        <Input
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        />
        
       <Button variant="contained" className={classes.button}>
        Register
       </Button>
        
        </TabContainer>

        <TabContainer dir={theme.direction}>
        
        <Typography>Username</Typography>
        <Input
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        />

        <Typography>Password</Typography>
        <Input
        placeholder="Placeholder"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        />

       <Button variant="contained" className={classes.button}>
        Sign In
       </Button>

        </TabContainer>



        
      </SwipeableViews>
    </div>
    </div>
  );
}
=======
import React from 'react'




const SignUpForm = _ => {


  return (
    <div>
      <h1>Sign Up!</h1>
    </div>
  )
}

export default SignUpForm
>>>>>>> ddcfc7be8c5f96ab8299a8c84043ca790f4d0fd0
