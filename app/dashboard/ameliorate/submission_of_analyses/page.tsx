'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import SelfCard from './SelfCard'
import SelfChart from './SelfChart'
import { getCurrentTime } from '@/data/data'
import { AmeliorateSumbitData } from './data'

export default function SubmitAnalysis() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
                全员型改善提交完成情况
            </Typography>
            <Typography color="textSecondary" sx={{ mb: 2 }}>
                数据非实时更新，后台任务定时刷新，最近更新时间：{getCurrentTime()}
            </Typography>
            <Grid container spacing={2} columns={30} sx={{ mb: (theme) => theme.spacing(2) }}>
                {AmeliorateSumbitData.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 6 }}>
                        <SelfCard {...card} />
                    </Grid>
                ))}
                <Grid size={{ xs: 12, sm: 6, lg: 30 }}>
                    <Card variant="outlined" sx={{ width: '100%' }}>
                        <CardContent>
                            <Typography component="h2" variant="subtitle2" gutterBottom>
                                各组室改善指标完成情况
                            </Typography>
                            {AmeliorateSumbitData.map((card, index) => (
                                <div key={index}>
                                    {index !== 0 ? (
                                        <>
                                            <Divider sx={{ my: 2 }} />
                                            <SelfChart {...card} />
                                        </>
                                    ) : (
                                        <SelfChart {...card} />
                                    )}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
