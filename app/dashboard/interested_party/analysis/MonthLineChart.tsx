import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { LineChart } from '@mui/x-charts/LineChart'

function AreaGradient({ color, id }: { color: string; id: string }) {
    return (
        <defs>
            <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor={color} stopOpacity={0.5} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
        </defs>
    )
}

function getLast12Months() {
    const months = [];
    const today = new Date();
    
    for (let i = 11; i >= 0; i--) {
        const date = new Date();
        date.setMonth(today.getMonth() - i);
        const monthName = date.toLocaleDateString('zh-CN', {
            year:'numeric',
            month: 'short',
        });
        months.push(monthName);
    }
    
    return months;
}

export default function MonthLineChart() {
    const theme = useTheme()
    const data = getLast12Months()

    const colorPalette = [theme.palette.primary.light, theme.palette.primary.main, theme.palette.primary.dark]

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    每月相关方流动趋势
                </Typography>
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
                            进入 13,277 人
                        </Typography>
                        <Chip size="small" color="success" label="+35%" />
                    </Stack>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        仅显示最近12月
                    </Typography>
                </Stack>
                <LineChart
                    colors={colorPalette}
                    xAxis={[
                        {
                            scaleType: 'point',
                            data,
                            tickInterval: (index, i) => (i + 1) % 5 === 0,
                        },
                    ]}
                    series={[
                        {
                            id: 'direct',
                            label: '进入事业部',
                            showMark: false,
                            curve: 'linear',
                            stack: 'total',
                            area: true,
                            stackOrder: 'ascending',
                            data: [
                                300, 900, 600, 1200, 1500, 1800, 2400, 2100, 2700, 3000, 1800, 3300, 
                            ],
                        },
                        {
                            id: 'referral',
                            label: '临时外出',
                            showMark: false,
                            curve: 'linear',
                            stack: 'total',
                            area: true,
                            stackOrder: 'ascending',
                            data: [
                                500, 900, 700, 1400, 1100, 1700, 2300, 2000, 2600, 2900, 2300, 3200, 
                            ],
                        },
                        {
                            id: 'organic',
                            label: '离开事业部',
                            showMark: false,
                            curve: 'linear',
                            stack: 'total',
                            stackOrder: 'ascending',
                            data: [
                                1000, 1500, 1200, 1700, 1300, 2000, 2400, 2200, 2600, 2800, 2500, 3000,
                            ],
                            area: true,
                        },
                    ]}
                    height={250}
                    margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
                    grid={{ horizontal: true }}
                    sx={{
                        '& .MuiAreaElement-series-organic': {
                            fill: "url('#organic')",
                        },
                        '& .MuiAreaElement-series-referral': {
                            fill: "url('#referral')",
                        },
                        '& .MuiAreaElement-series-direct': {
                            fill: "url('#direct')",
                        },
                    }}
                    slotProps={{
                        legend: {
                            hidden: true,
                        },
                    }}
                >
                    <AreaGradient color={theme.palette.primary.dark} id="organic" />
                    <AreaGradient color={theme.palette.primary.main} id="referral" />
                    <AreaGradient color={theme.palette.primary.light} id="direct" />
                </LineChart>
            </CardContent>
        </Card>
    )
}
