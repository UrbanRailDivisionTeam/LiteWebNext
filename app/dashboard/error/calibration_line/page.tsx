'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { getCurrentTime } from '@/data/data'
import { getCalibrationLineTotalData, getCalibrationLineGroupData, getConfigurationErrorValue, getProjectErrorValue, getSectorErrorValue, getTypesErrorValue } from './data'
import NormCard from './NormCard'
import NormChart from './NormChart'
import NormPieChart from './NormPieChart'

export default function CalibrationLine() {
    const CalibrationLineTotalData = React.use(getCalibrationLineTotalData())
    const CalibrationLineGroupData = React.use(getCalibrationLineGroupData())
    const ConfigurationErrorValue = React.use(getConfigurationErrorValue())
    const ProjectErrorValue = React.use(getProjectErrorValue())
    const SectorErrorValue = React.use(getSectorErrorValue())
    const TypesErrorValue = React.use(getTypesErrorValue())
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
                校线异常处理流程情况
            </Typography>
            <Typography color="textSecondary" sx={{ mb: 2 }}>
                数据非实时更新，后台任务定时刷新，最近更新时间：{getCurrentTime()}
            </Typography>
            <Grid container spacing={2} columns={6} sx={{ mb: (theme) => theme.spacing(2) }}>
                {CalibrationLineTotalData.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 1 }}>
                        <NormCard {...card} />
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={2} columns={4} sx={{ mb: (theme) => theme.spacing(2) }}>
                <Grid size={{ xs: 12, sm: 6, lg: 1 }}>
                    <NormPieChart {...ConfigurationErrorValue} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 1 }}>
                    <NormPieChart {...ProjectErrorValue} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 1 }}>
                    <NormPieChart {...SectorErrorValue} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 1 }}>
                    <NormPieChart {...TypesErrorValue} />
                </Grid>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined" sx={{ width: '100%' }}>
                    <CardContent>
                        <Typography component="h2" variant="subtitle2" gutterBottom>
                            各组室流程及时转化率
                        </Typography>
                        {CalibrationLineGroupData.map((card, index) => (
                            <div key={index}>
                                {index !== 0 ? (
                                    <>
                                        <Divider sx={{ my: 2 }} />
                                        <NormChart {...card} />
                                    </>
                                ) : (
                                    <NormChart {...card} />
                                )}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </Grid>
        </Box>
    )
}
