'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { getCurrentTime } from '@/data/refresh_time'
import ChartUser from './ChartUser'

export default function AuditAnalysis() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
                全员型改善审核完成情况
            </Typography>
            <Typography color="textSecondary" sx={{ mb: 2 }}>
                数据非实时更新，后台任务定时刷新，最近更新时间：{getCurrentTime()}
            </Typography>
            <Grid container spacing={2} columns={2} sx={{ mb: (theme) => theme.spacing(2) }}>
                <Grid key={0} size={{ xs: 12, sm: 6, lg: 1 }}>
                    <ChartUser/>
                </Grid>
            </Grid>
        </Box>
    )
}
