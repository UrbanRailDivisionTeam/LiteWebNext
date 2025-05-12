'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { formatMinutes } from '@/components/data/data'
import { CalibrationLineTotalProps } from './data'

const CardTexts = {
    ontime: '良好' as const,
    overtime: '平均用时较长' as const,
}

const CardColors = {
    ontime: 'success' as const,
    overtime: 'error' as const,
}

export default function NormCard({ title_name, trend, request_value, request_time, average_time }: CalibrationLineTotalProps) {
    return (
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2" gutterBottom>
                    {title_name}
                </Typography>
                <Stack direction="column" sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}>
                    <Stack sx={{ justifyContent: 'space-between' }}>
                        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h4" component="p">
                                {request_value}
                            </Typography>
                            <Chip size="small" color={CardColors[trend]} label={CardTexts[trend]} />
                        </Stack>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            流程平均用时 / 流程要求时限
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {formatMinutes(average_time)} / {formatMinutes(request_time)}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
