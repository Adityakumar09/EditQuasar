import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

    function Card(props) {
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

        return  <React.Fragment>
       <Button variant="outlined" onClick={handleClickOpen}>
      <p className='text-black'> <h2>{props.name}</h2></p>
      
        {props.butt}
      </Button>


      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            <p>{props.center}</p>
            </Typography>
            
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="" secondary="" />
          </ListItemButton>
          <p>{props.active}</p> 
       
          <Divider />
          <ListItemButton>
            <ListItemText
            
              primary=""
              secondary=""
            />
             <img className="h-2xl w-3xl"  src={props.img}/>
          </ListItemButton>
        </List>
      </Dialog>
    </React.Fragment>
      
      
        
      }

     


export default Card;