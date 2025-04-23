import * as React from 'react'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { BarChart } from '@mui/x-charts/BarChart'
import { useTheme } from '@mui/material/styles'
import { AmeliorateSumbitProps } from './data'

export default function SelfChart({ title, trend, total_data, complete_data, children }: AmeliorateSumbitProps) {
    const theme = useTheme()
    const colorPalette = [(theme.vars || theme).palette.primary.dark, (theme.vars || theme).palette.primary.main, (theme.vars || theme).palette.primary.light]
    const labelColors = {
        completed: 'success' as const,
        not_completed: 'error' as const,
    }
    const labelTexts = {
        completed: '已完成' as const,
        not_completed: '未完成' as const,
    }
    return (
        <div>
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
                    全部组室 {children?.length} / 完成组室 / 未完成总数
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
                            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        },
                    ] as any
                }
                series={[
                    {
                        id: 'page-views',
                        label: 'Page views',
                        data: [2234, 3872, 2998, 4125, 3357, 2789, 2998],
                        stack: 'A',
                    },
                    {
                        id: 'downloads',
                        label: 'Downloads',
                        data: [3098, 4215, 2384, 2101, 4752, 3593, 2384],
                        stack: 'A',
                    },
                    {
                        id: 'conversions',
                        label: 'Conversions',
                        data: [4051, 2275, 3129, 4693, 3904, 2038, 2275],
                        stack: 'A',
                    },
                ]}
                height={250}
                margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
                grid={{ horizontal: true }}
                slotProps={{
                    legend: {
                        hidden: true,
                    },
                }}
            />
        </div>
    )
}
