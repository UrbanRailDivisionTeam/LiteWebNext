'use client'
import * as React from 'react'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { BarChart } from '@mui/x-charts/BarChart'
import { getColorPalette } from '@/data/data'
import { AmeliorateSumbitProps, data_process, labelColors, labelTexts } from './data'

export default function SelfChart({ title, trend, children }: AmeliorateSumbitProps) {
    const colorPalette = getColorPalette()
    const { title_data, complete_data, not_complete_data, completed_index, children_len } = data_process(children)

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
                    全部组室 {children_len} / 完成组室 {completed_index} / 未完成组室 {children_len - completed_index}
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
                barLabel={(item, _) => {
                    return item.value?.toString()
                }}
            />
        </Stack>
    )
}
