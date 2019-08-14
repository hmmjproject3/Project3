import React, { useContext } from 'react'
import ChoresContext from '../../utils/ChoresContext'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginRight: 5,
    },
    link: {
        textDecoration: 'none',
        cursor: 'hand'
    },
    toolbar: {
        paddingLeft: 0,
        paddingRight: 0,
    },
    avatar: {
        color: '#fff',
        height: 48,
        width: 48,
        marginRight: '5px',
        display: 'inline-flex',
        fontSize: '20px',
        [theme.breakpoints.down('sm')]: {
            height: 35,
            width: 35,
        },
    },
    menuBtnCont: {
        textAlign: 'right'
    },
    menuButton: {
        padding: 0,
        color: 'white',
        backgroundColor: '#24537f',
        height: 35,
        width: 35,
        textAlign: 'right',
    },
    menuItem: {
        color: '#24537f',
        '&:hover': {
            backgroundColor: '#24537f',
            color: 'white',
        }
    }
}))

const MobileNav = _ => {
    const classes = useStyles()
    const { profileArr, childArr, handleGetProfile } = useContext(ChoresContext)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }


    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#e4ecf2', boxShadow: 'none' }}>
                <Toolbar className={classes.toolbar}>
                    <Grid container>
                        <Grid item className={classes.leftMenu} xs={10}>
                            {childArr.map(({ name, color, _id }) => {
                                return (
                                    <Link className={classes.link} to='/profilepage'>
                                        <Avatar
                                            id={`${_id}`}
                                            onClick={_ => { handleGetProfile(_id) }}
                                            className={classes.avatar}
                                            style={{
                                                backgroundColor: `${color}`,
                                            }}
                                        >{name[0]}
                                        </Avatar>
                                    </Link>
                                )
                            }
                            )}
                        </Grid>
                        <Grid item xs={2} className={classes.menuBtnCont}>
                            <IconButton className={classes.menuButton}>
                                <MenuIcon
                                    aria-controls="fade-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                />
                            </IconButton>
                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                <Link className={classes.link} to='/Dashboard'>
                                    <MenuItem className={classes.menuItem} onClick={handleClose}>Dashboard</MenuItem>
                                </Link>
                                <Link className={classes.link} to='/Chorespage'>
                                    <MenuItem className={classes.menuItem} onClick={handleClose}>Chores</MenuItem>
                                </Link>
                                <Link className={classes.link} to='/Rewardspage'>
                                    <MenuItem className={classes.menuItem} onClick={handleClose}>Rewards</MenuItem>
                                </Link>
                                <Link className={classes.link} to='/Childrenform'>
                                    <MenuItem className={classes.menuItem} onClick={handleClose}>Children</MenuItem>
                                </Link>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MobileNav
