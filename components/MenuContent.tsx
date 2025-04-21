import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'

import DashboardTreeView from '@/components/DashboardTreeView'

const mainListItems = [
    {
        text: '主页',
        icon: <HomeRoundedIcon />,
        href: '/dashboard',
    },
    {
        text: '相关方',
        icon: <AnalyticsRoundedIcon />,
        href: '/dashboard/',
    },
    {
        text: '异常',
        icon: <PeopleRoundedIcon />,
        href: '/dashboard',
    },
    {
        text: '人员效能',
        icon: <AssignmentRoundedIcon />,
    },
    {
        text: '工作量',
        icon: <AssignmentRoundedIcon />,
    },
    {
        text: '差旅',
        icon: <AssignmentRoundedIcon />,
    },
    {
        text: '差旅',
        icon: <AssignmentRoundedIcon />,
    },
]

const secondaryListItems = [
    { text: '设置', icon: <SettingsRoundedIcon /> },
    { text: '关于', icon: <InfoRoundedIcon /> },
]

export default function MenuContent() {
    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <DashboardTreeView />
            <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    )
}
