import * as React from 'react'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { BarChart } from '@mui/x-charts/BarChart'
import { useTheme } from '@mui/material/styles'
import { AmeliorateSumbitProps } from './data'

export default function SelfChart({ title, trend, children }: AmeliorateSumbitProps) {
    const theme = useTheme()
    const colorPalette = [
        (theme.vars || theme).palette.primary.dark, 
        (theme.vars || theme).palette.primary.light
    ]
    const labelColors = {
        completed: 'success' as const,
        not_completed: 'error' as const,
    }
    const labelTexts = {
        completed: '已完成' as const,
        not_completed: '未完成' as const,
    }
    let title_data = []
    let complete_data = []
    let not_complete_data = []
    let completed_index = 0
    let children_len = 0 
    if (children !== undefined) {
        children_len = children?.length
        for (let variable of children) {
            title_data.push(variable.title)
            complete_data.push(variable.complete_data)
            not_complete_data.push(variable.total_data - variable.complete_data)
            if (variable.complete_data >= variable.total_data) {
                completed_index += 1
            }
        }
    }

    return (
        <Stack>
            <Stack sx={{ justifyContent: 'space-between' }}>
                <Stack
                    direction="row"
                    sx={{
                        alignContent: { xs: 'center', sm: 'flex-start' },
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Typography variant="h4" component="p">
                        {title}
                    </Typography>
                    <Chip size="small" color={labelColors[trend]} label={labelTexts[trend]} />
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    全部组室 {children_len} / 完成组室 {completed_index} / 未完成组室 {children_len-completed_index}
                </Typography>
            </Stack>
            <BarChart
                borderRadius={8}
                colors={colorPalette}
                xAxis={
                    [
                        {
                            scaleType: 'band',
                            categoryGapRatio: 0.5,
                            data: title_data,
                        },
                    ] as any
                }
                series={[
                    {
                        id: 'complete',
                        label: '已完成改善数',
                        data: complete_data,
                        stack: 'A',
                    },
                    {
                        id: 'not_complete',
                        label: '未完成改善数',
                        data: not_complete_data,
                        stack: 'A',
                    },

                ]}
                height={260}
                margin={{ left: 50, right: 0, top: 20, bottom: 30 }}
                grid={{ horizontal: true }}
                slotProps={{
                    legend: {
                        hidden: true,
                    },
                }}
            />
            
        </Stack>
    )
}
