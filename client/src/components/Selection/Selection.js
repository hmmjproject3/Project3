import React, {useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChoresContext from '../../utils/ChoresContext'


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {

  const { childArr, selectChild } = useContext(ChoresContext)

  

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    console.log(childArr)
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       

          {

            childArr.map((child,i)=> (
              <StyledMenuItem onClick = {_ => {selectChild(child)}}>
              <ListItemText primary={child.name} id={child._id}/>
              </StyledMenuItem>
              ))

          }
          </StyledMenu>

       
        {/* <StyledMenuItem>

        <ListItemText primary="Matthew" />
        </StyledMenuItem>
        <StyledMenuItem>

        <ListItemText primary="Marianna" />
        </StyledMenuItem>
        <StyledMenuItem>

          <ListItemText primary="Jennifer" />
        </StyledMenuItem> */}
      


      
    </div>
  );
}