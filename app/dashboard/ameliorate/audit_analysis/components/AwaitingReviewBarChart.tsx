'use client'
import * as React from 'react'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import { BarChart } from '@mui/x-charts/BarChart'
import { getColorPalette } from '@/components/data/data'
import { AmeliorateAuditData, AmeliorateAuditProps, labelColors, labelTexts, data_process } from './data'

function GroupChart({ trend, department, children }: AmeliorateAuditProps) {
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
                        {department}
                    </Typography>
                    <Chip size="small" color={labelColors[trend]} label={labelTexts[trend]} />
                </Stack>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    全部负责人 {children_len} / 审核全部完成负责人 {completed_index} / 未完成负责人 {children_len - completed_index}
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
                        label: '已审批改善数',
                        data: complete_data,
                        stack: 'A',
                    },
                    {
                        id: 'not_complete',
                        label: '待审批改善数',
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

export default function AuditedBarChart() {
    return (
        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    部门改善待审核情况
                </Typography>
                {AmeliorateAuditData.map((card, index) => (
                    <div key={index}>
                        {index !== 0 ? (
                            <div>
                                <Divider sx={{ my: 2 }} />
                                <GroupChart {...card} />
                            </div>
                        ) : (
                            <GroupChart {...card} />
                        )}
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
