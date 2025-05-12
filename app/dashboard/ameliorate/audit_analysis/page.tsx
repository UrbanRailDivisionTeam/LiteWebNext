'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { getCurrentTime } from '@/components/data/data'
import AwaitingReviewPieChart from './components/AwaitingReviewPieChart'
import AuditedPieChart from './components/AuditedPieChart'
import AwaitingReviewBarChart from './components/AwaitingReviewBarChart'
import AuditedBarChart from './components/AuditedBarChart'

export default function AuditAnalysis() {
    const [UpdateTime, setUpdateTime] = React.useState<string>('')
    React.useEffect(() => {
        async function fetchPosts() {
            const data = await getCurrentTime('audit_analysis')
            setUpdateTime(data)
        }
        fetchPosts()
    }, [])

    
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
                全员型改善审核完成情况
            </Typography>
            <Typography color="textSecondary" sx={{ mb: 2 }}>
                数据非实时更新，后台任务定时刷新，最近更新时间：{UpdateTime}
            </Typography>
            <Grid container spacing={2} columns={2} sx={{ mb: (theme) => theme.spacing(2) }}>
                <Grid size={{ xs: 12, sm: 6, lg: 1 }}>
                    <AwaitingReviewPieChart />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 1 }}>
                    <AuditedPieChart />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 1 }}>
                    <AwaitingReviewBarChart />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 1 }}>
                    <AuditedBarChart />
                </Grid>
            </Grid>
        </Box>
    )
}
