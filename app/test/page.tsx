'use client'
import * as React from 'react'
import type {} from '@mui/x-date-pickers/themeAugmentation'
import type {} from '@mui/x-charts/themeAugmentation'
import type {} from '@mui/x-data-grid-pro/themeAugmentation'
import type {} from '@mui/x-tree-view/themeAugmentation'
import { alpha } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import AppTheme from '@/theme/AppTheme'
import DashboardTreeView from '@/components/DashboardTreeView'


export default function Home() {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <DashboardTreeView/>
        </AppTheme>
    )
}