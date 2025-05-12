'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { getCurrentTime } from '@/components/data/data'
import IndexCard from './IndexCard'
import MonthLineChart from './MonthLineChart'
import DayLineChart from './DayLineChart'
import { InterestedPartyData } from './data'

export default function Export() {
    const [UpdateTime, setUpdateTime] = React.useState<string>('')
    React.useEffect(() => {
        async function fetchPosts() {
            const data = await getCurrentTime('interested_party_analysis')
            setUpdateTime(data)
        }
        fetchPosts()
    }, [])
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
                相关方管理情况分析
            </Typography>
            <Typography color="textSecondary" sx={{ mb: 2 }}>
                数据非实时更新，后台任务定时刷新，最近更新时间：{UpdateTime}
            </Typography>
            <Grid container spacing={2} columns={6} sx={{ mb: (theme) => theme.spacing(2) }}>
                {InterestedPartyData.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 2 }}>
                        <IndexCard {...card} />
                    </Grid>
                ))}
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                    <MonthLineChart />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                    <DayLineChart />
                </Grid>
            </Grid>
        </Box>
    )
}
