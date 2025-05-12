'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { labelTextColors, labelTexts, AmeliorateSumbitProps } from './data'

export default function SelfCard({ title, trend, total_data, complete_data }: AmeliorateSumbitProps) {
    const value = ((complete_data / total_data) * 100).toFixed(2) + '%'
    return (
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    {title}改善完成情况
                </Typography>
                <Stack direction="column" sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}>
                    <Stack sx={{ justifyContent: 'space-between' }}>
                        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography color={labelTextColors[trend]} variant="h4" component="p">
                                {value}
                            </Typography>
                        </Stack>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            已完成改善数 {complete_data} / 部门指标 {total_data} / {labelTexts[trend]}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
