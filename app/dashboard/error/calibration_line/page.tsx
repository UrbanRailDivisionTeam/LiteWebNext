'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import GenericLoading from '@/components/GenericLoading'
import { getCurrentTime } from '@/data/data'
import {
    CalibrationLineTotalProps,
    transCalibrationLineTotalData,
    CalibrationLineGroup,
    transPieChartErrorType,
    transCalibrationLineGroupData,
    PieChartErrorType,
} from './data'
import NormCard from './NormCard'
import NormChart from './NormChart'
import { NormPieChart, NormPieChartOrthogonal } from './NormPieChart'

export default function CalibrationLine() {
    const [UpdateTime, setUpdateTime] = React.useState<string>('')
    const [CalibrationLineTotalData, setCalibrationLineTotalData] = React.useState<CalibrationLineTotalProps[]>([])
    const [CalibrationLineGroupData, setCalibrationLineGroupData] = React.useState<CalibrationLineGroup[]>([])
    const [PieChartNoErrorData, setPieChartNoErrorData] = React.useState<PieChartErrorType[]>([])
    const [PieChartErrorData, setPieChartErrorData] = React.useState<PieChartErrorType[]>([])
    React.useEffect(() => {
        async function fetchPosts() {
            const data = await getCurrentTime('calibration_line')
            setUpdateTime(data)
        }
        fetchPosts()
    }, [])
    React.useEffect(() => {
        async function fetchPosts() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URI}/liteweb/calibration_line_total_data`)
            const data = await res.json()
            setCalibrationLineTotalData(transCalibrationLineTotalData(data))
        }
        fetchPosts()
    }, [])
    React.useEffect(() => {
        async function fetchPosts() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URI}/liteweb/calibration_line_group_data`)
            const data = await res.json()
            setCalibrationLineGroupData(transCalibrationLineGroupData(data))
        }
        fetchPosts()
    }, [])
    React.useEffect(() => {
        async function fetchPosts() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URI}/liteweb/pie_chart_no_error_data`)
            const data = await res.json()
            setPieChartNoErrorData(transPieChartErrorType(data))
        }
        fetchPosts()
    }, [])
    React.useEffect(() => {
        async function fetchPosts() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URI}/liteweb/pie_chart_error_data`)
            const data = await res.json()
            setPieChartErrorData(transPieChartErrorType(data))
        }
        fetchPosts()
    }, [])

    if (
        CalibrationLineTotalData.length === 0 ||
        CalibrationLineGroupData.length === 0 ||
        PieChartNoErrorData.length === 0 ||
        PieChartErrorData.length === 0
    ) return <GenericLoading />

    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
                校线异常处理流程情况
            </Typography>
            <Typography color="textSecondary" sx={{ mb: 2 }}>
                数据非实时更新，后台任务定时刷新，最近更新时间：{UpdateTime}
            </Typography>
            <Grid container spacing={2} columns={CalibrationLineTotalData.length} sx={{ mb: (theme) => theme.spacing(2) }}>
                {CalibrationLineTotalData.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 1 }}>
                        <NormCard {...card} />
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={2} columns={PieChartNoErrorData.length} sx={{ mb: (theme) => theme.spacing(2) }}>
                {PieChartNoErrorData.map((card, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, lg: 1 }}>
                        <NormPieChart {...card} />
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={2} columns={1} sx={{ mb: (theme) => theme.spacing(2) }}>
                <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1, height: '100%' }}>
                    <CardContent>
                        <Typography color="h3" variant="h5" gutterBottom>
                            本月校线异常原因占比
                        </Typography>
                        <Grid container spacing={2} columns={3} sx={{ mb: (theme) => theme.spacing(2) }}>
                            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                                <NormPieChartOrthogonal {...PieChartErrorData[0]} have_card={false} />
                            </Grid>
                            {PieChartErrorData.slice(1).map((card, index) => (
                                <Grid key={index} size={{ xs: 12, sm: 6, lg: 1 }}>
                                    <NormPieChart {...card} have_card={false} />
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
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
