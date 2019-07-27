import React, { useContext } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import ChoresContext from '../../utils/ChoresContext'
import IconButton from '@material-ui/core/IconButton'
import ArrowDropDown from '@material-ui/icons/ExpandMore'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem)

export default function CustomizedMenus () {
  const { childArr, selectChild } = useContext(ChoresContext)

  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick (event) {
    console.log(childArr)
    setAnchorEl(event.currentTarget)
  }

  function handleClose () {
    setAnchorEl(null)
  }

  return (
    <>

      <IconButton
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        onClick={handleClick}
        style={{ color: '#FFBA00' }}

      >
        <ArrowDropDown />
      </IconButton>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {

          childArr.map(child => (
            <StyledMenuItem onClick={_ => selectChild(child)}>
              <ListItemText primary={child.name} id={child._id} onClick={handleClose} />
            </StyledMenuItem>
          ))

        }
      </StyledMenu>
    </>
  )
}
