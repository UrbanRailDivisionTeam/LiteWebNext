'use client'
import FilePageTreeView from '@/components/sideMenu/FilePageTreeView'

import AppTheme from '@/theme/AppTheme'
import CssBaseline from '@mui/material/CssBaseline'

export default function Test() {
    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <FilePageTreeView />
        </AppTheme>
    )
}
