'use client'
import * as React from 'react'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { BarChart } from '@mui/x-charts/BarChart'
import { getColorPalette } from '@/data/data'
import { CalibrationLineGroup, CalibrationLineGroupProps } from './data'

const labelTexts = {
    inlimit: '及时率良好' as const,
    overlimit: '及时率较低' as const,
}

const labelColors = {
    inlimit: 'success' as const,
    overlimit: 'error' as const,
}

export function data_process(input_ch?: CalibrationLineGroupProps[]) {
    let title_data = []
    let complete_data = []
    let total_index = 0
    let complete_index = 0
    if (input_ch !== undefined) {
        for (let variable of input_ch) {
            title_data.push(variable.group_name)
            complete_data.push(Math.round((variable.ontime_value / variable.total_value) * 10000) / 100)
            complete_index += variable.ontime_value
            total_index += variable.total_value
        }
    }
    title_data.sort()
    return { title_data, complete_data, total_index, complete_index }
}

export default function NormChart({ title_name, trend, group }: CalibrationLineGroup) {
    const colorPalette = getColorPalette()
    const { title_data, complete_data, total_index, complete_index } = data_process(group)
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
                        {title_name}
                    </Typography>
                    <Chip size="small" color={labelColors[trend]} label={labelTexts[trend]} />
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    全部流程数 {total_index} / 及时数 {complete_index} / 超时数 {total_index - complete_index}
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
                        label: '及时率',
                        data: complete_data,
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
                barLabel={(item, context) => {
                    if (item.value === 0) {
                        return ''
                    }
                    return `${item.value?.toString()}%`
                }}
                sx={{
                    '& .MuiBarLabel-root': { 
                        fill: '#ffffff'
                    }
                }}
            >
            </BarChart>
        </Stack>
    )
}
