import React from 'react'
import { drawerList } from '../constants'
import { Drawer } from '@mui/material'

const DrawerComponent = ({open,setOpen}) => {

  return (
    <div>
         <Drawer open={open} onClose={()=>setOpen(false)} anchor='right'>
        {drawerList}
      </Drawer>
    </div>
  )
}

export default DrawerComponent
