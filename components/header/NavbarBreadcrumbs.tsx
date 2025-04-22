'use client'
import * as React from 'react'
import { usePathname } from 'next/navigation'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs'
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded'

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    [`& .${breadcrumbsClasses.separator}`]: {
        color: (theme.vars || theme).palette.action.disabled,
        margin: 1,
    },
    [`& .${breadcrumbsClasses.ol}`]: {
        alignItems: 'center',
    },
}))

export default function NavbarBreadcrumbs() {
    const pathname = usePathname()
    
    // 将路径转换为面包屑数组
    const pathSegments = pathname
        ?.split('/')
        .filter(segment => segment !== '')
        .map(segment => ({
            label: segment.charAt(0).toUpperCase() + segment.slice(1),
            path: segment
        })) || []

    return (
        <StyledBreadcrumbs aria-label="breadcrumb" separator={<NavigateNextRoundedIcon fontSize="small" />}>
            {pathSegments.map((segment, index) => (
                <Typography 
                    key={segment.path}
                    variant="body1" 
                    sx={{ 
                        color: index === pathSegments.length - 1 ? 'text.primary' : 'text.secondary',
                        fontWeight: index === pathSegments.length - 1 ? 600 : 400,
                        cursor: index === pathSegments.length - 1 ? 'default' : 'pointer'
                    }}
                >
                    {segment.label}
                </Typography>
            ))}
        </StyledBreadcrumbs>
    )
}
