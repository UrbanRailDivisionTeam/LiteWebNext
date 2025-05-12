import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import FilePageTreeView from '@/components/sideMenu/FilePageTreeView'
import { secondaryListItems } from '@/components/data/menu'

export default function MenuContent() {
    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <FilePageTreeView />
            {/* <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Stack>
    )
}
