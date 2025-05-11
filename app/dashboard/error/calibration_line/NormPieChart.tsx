'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import LinearProgress from '@mui/material/LinearProgress'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { PieChartErrorType } from './data'

const colors = ['hsl(221, 60%, 75%)', 'hsl(220, 60%, 60%)', 'hsl(220, 60%, 45%)', 'hsl(220, 60%, 30%)', 'hsl(220, 60%, 15%)']

interface CardOrProps {
    have_card: boolean
    children: React.ReactNode
}

const CardOr: React.FC<CardOrProps> = ({ have_card, children }) => {
    if (have_card) {
        return (
            <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1, height: '100%' }}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        )
    }
    return <>{children}</>
}

export type NormPieChartProps = PieChartErrorType & {
    have_card?: boolean
}

export function NormPieChart({ title_name, data, have_card = true }: NormPieChartProps) {
    const temp_max = Math.max(...data.map((item) => item.value))
    const temp_sum = data.reduce((acc, item) => acc + item.value, 0)
    return (
        <CardOr have_card={have_card}>
            <Typography component="h2" variant="subtitle2">
                {title_name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PieChart
                    colors={colors}
                    margin={{
                        left: 20,
                        right: 20,
                        top: 80,
                        bottom: 80,
                    }}
                    series={[
                        {
                            data: data,
                            arcLabel: (item) => `${item.value}`,
                            arcLabelMinAngle: 20,
                            highlightScope: { fade: 'global', highlight: 'item' },
                            innerRadius: 25,
                            outerRadius: 100,
                            paddingAngle: 5,
                            cornerRadius: 5,
                        },
                    ]}
                    height={260}
                    width={260}
                    slotProps={{
                        legend: { hidden: true },
                    }}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fill: 'white',
                            fontSize: 14,
                        },
                    }}
                />
            </Box>
            {data.map((item, index) => (
                <Stack key={index} direction="row" sx={{ alignItems: 'center', gap: 2, pb: 2 }}>
                    <Stack sx={{ gap: 1, flexGrow: 1 }}>
                        <Stack
                            direction="row"
                            sx={{
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: '500' }}>
                                {item.label}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                当前值:{item.value} / 占比:{((item.value / temp_sum) * 100).toFixed(2)}%
                            </Typography>
                        </Stack>
                        <LinearProgress variant="determinate" value={(item.value / temp_max) * 100} />
                    </Stack>
                </Stack>
            ))}
        </CardOr>
    )
}

export function NormPieChartOrthogonal({ title_name, data, have_card = true }: NormPieChartProps) {
    const temp_max = Math.max(...data.map((item) => item.value))
    const temp_sum = data.reduce((acc, item) => acc + item.value, 0)
    const chart_length = Math.max(50 * data.length, 260)
    return (
        <CardOr have_card={have_card}>
            <Typography component="h2" variant="subtitle2">
                {title_name}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 4 }}>
                <Box sx={{ flex: '0 0 auto', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <PieChart
                        colors={colors}
                        margin={{
                            left: 20,
                            right: 20,
                            top: 20,
                            bottom: 20,
                        }}
                        series={[
                            {
                                data: data,
                                arcLabel: (item) => `${item.value}`,
                                arcLabelMinAngle: 20,
                                highlightScope: { fade: 'global', highlight: 'item' },
                                innerRadius: 40,
                                outerRadius: 120,
                                paddingAngle: 5,
                                cornerRadius: 5,
                            },
                        ]}
                        height={chart_length}
                        width={chart_length}
                        slotProps={{
                            legend: { hidden: true },
                        }}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                                fill: 'white',
                                fontSize: 14,
                            },
                        }}
                    />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {data.map((item, index) => (
                        <Stack key={index} direction="row" sx={{ alignItems: 'center', gap: 2 }}>
                            <Stack sx={{ gap: 1, flexGrow: 1 }}>
                                <Stack
                                    direction="row"
                                    sx={{
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Typography variant="body2" sx={{ fontWeight: '500' }}>
                                        {item.label}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        当前值:{item.value} / 占比:{((item.value / temp_sum) * 100).toFixed(2)}%
                                    </Typography>
                                </Stack>
                                <LinearProgress variant="determinate" value={(item.value / temp_max) * 100} />
                            </Stack>
                        </Stack>
                    ))}
                </Box>
            </Box>
        </CardOr>
    )
}