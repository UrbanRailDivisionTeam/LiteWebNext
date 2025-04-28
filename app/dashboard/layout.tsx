'use client'
import * as React from 'react'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-charts/themeAugmentation'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-tree-view/themeAugmentation'
import { alpha } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import AppNavbar from '@/components/sideMenu/AppNavbar'
import Header from '@/components/header/Header'
import SideMenu from '@/components/sideMenu/SideMenu'
import Copyright from '@/components/internals/Copyright'
import AppTheme from '@/theme/AppTheme'

export default function Dashboard({ children }: { children: React.ReactNode }) {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex' }}>
                <SideMenu />
                <AppNavbar />
                <Box
                    component="main"
                    sx={(theme) => ({
                        flexGrow: 1,
                        backgroundColor: theme.vars
                            ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                            : alpha(theme.palette.background.default, 1),
                        overflow: 'auto',
                    })}
                >
                    <Stack
                        spacing={2}
                        sx={{
                            alignItems: 'center',
                            mx: 3,
                            pb: 5,
                            mt: { xs: 8, md: 0 },
                        }}
                    >
                        <Header />
                        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
                            {children}
                            <Copyright sx={{ my: 4 }} />
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    )
}
