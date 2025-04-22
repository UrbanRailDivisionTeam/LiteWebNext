'use client'
import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { inputsCustomizations } from '@/theme/customizations/inputs'
import { dataDisplayCustomizations } from '@/theme/customizations/dataDisplay'
import { feedbackCustomizations } from '@/theme/customizations/feedback'
import { navigationCustomizations } from '@/theme/customizations/navigation'
import { surfacesCustomizations } from '@/theme/customizations/surfaces'
import { chartsCustomizations } from '@/theme/customizations/charts'
import { dataGridCustomizations } from '@/theme/customizations/dataGrid'
import { datePickersCustomizations } from '@/theme/customizations/datePickers'
import { colorSchemes, typography, shadows, shape } from '@/theme/themePrimitives'

export default function AppTheme({ children }: { children: React.ReactNode }) {
    const theme = React.useMemo(() => {
        return createTheme({
                  cssVariables: {
                      colorSchemeSelector: 'data-mui-color-scheme',
                      cssVarPrefix: 'template',
                  },
                  colorSchemes,
                  typography,
                  shadows,
                  shape,
                  components: {
                      ...inputsCustomizations,
                      ...dataDisplayCustomizations,
                      ...feedbackCustomizations,
                      ...navigationCustomizations,
                      ...surfacesCustomizations,
                      ...chartsCustomizations,
                      ...dataGridCustomizations,
                      ...datePickersCustomizations,
                  },
              })
    }, [])
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
