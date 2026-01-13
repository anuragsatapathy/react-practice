import React, { useState } from 'react'
import { IconButton, Toolbar, Typography,AppBar, Drawer, Tooltip} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComponent from './DrawerComponent';

const TopBar = () => {
    const [open,setOpen] = useState(false);

    
   
   const toggleSideBar = () =>{

    setOpen(true);
    
   }
    return (
        <Tooltip title="Menu" arrow >
        <AppBar position='static'>
            <Toolbar sx={{
                display:'flex',
               justifyContent:'space-between',
            }}>
                <IconButton onClick={toggleSideBar}>
                

                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' >
                    AppBar
                </Typography>
            </Toolbar>
        </AppBar>
     
            <DrawerComponent open ={open} setOpen={setOpen} />

        </Tooltip>

    )
}

export default TopBar