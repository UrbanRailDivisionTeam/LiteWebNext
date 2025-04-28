'use client'
import * as React from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import { useDrawingArea } from '@mui/x-charts/hooks'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { DepartmentData, DepartmentValue, TotalWaitData } from './data'

interface StyledTextProps {
    variant: 'primary' | 'secondary'
}

const StyledText = styled('text', {
    shouldForwardProp: (prop) => prop !== 'variant',
})<StyledTextProps>(({ theme }) => ({
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fill: (theme.vars || theme).palette.text.secondary,
    variants: [
        {
            props: {
                variant: 'primary',
            },
            style: {
                fontSize: theme.typography.h5.fontSize,
            },
        },
        {
            props: ({ variant }) => variant !== 'primary',
            style: {
                fontSize: theme.typography.body2.fontSize,
            },
        },
        {
            props: {
                variant: 'primary',
            },
            style: {
                fontWeight: theme.typography.h5.fontWeight,
            },
        },
        {
            props: ({ variant }) => variant !== 'primary',
            style: {
                fontWeight: theme.typography.body2.fontWeight,
            },
        },
    ],
}))

interface PieCenterLabelProps {
    primaryText: string
    secondaryText: string
}

function PieCenterLabel({ primaryText, secondaryText }: PieCenterLabelProps) {
    const { width, height, left, top } = useDrawingArea()
    const primaryY = top + height / 2 - 10
    const secondaryY = primaryY + 24

    return (
        <React.Fragment>
            <StyledText variant="primary" x={left + width / 2} y={primaryY}>
                {primaryText}
            </StyledText>
            <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
                {secondaryText}
            </StyledText>
        </React.Fragment>
    )
}

const colors = ['hsl(220, 20%, 65%)', 'hsl(220, 20%, 42%)', 'hsl(220, 20%, 35%)', 'hsl(220, 20%, 25%)']

export default function AuditedPieChart() {
    return (
        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
            <CardContent>
                <Typography component="h2" variant="subtitle2">
                    事业部本月改善情况
                </Typography>
                <Grid container spacing={2} columns={13}>
                    <Grid key="10" size={{ xs: 12, sm: 6, lg: 5 }}>
                        <PieChart
                            colors={colors}
                            margin={{
                                left: 20,
                                right: 20,
                                top: 80,
                                bottom: 80,
                            }}
                            series={[
                                {
                                    data: DepartmentValue,
                                    innerRadius: 75,
                                    outerRadius: 100,
                                    paddingAngle: 0,
                                    highlightScope: { faded: 'global', highlighted: 'item' },
                                },
                            ]}
                            height={260}
                            width={260}
                            slotProps={{
                                legend: { hidden: true },
                            }}
                        >
                            <PieCenterLabel primaryText={TotalWaitData.toLocaleString()} secondaryText="本月改善总数" />
                        </PieChart>
                    </Grid>
                    <Grid key="11" size={{ xs: 12, sm: 6, lg: 8 }}>
                        {DepartmentData.map((country, index) => (
                            <Stack key={`11${String(index)}`} direction="row" sx={{ alignItems: 'center', gap: 2, pb: 2 }}>
                                <Stack sx={{ gap: 1, flexGrow: 1 }}>
                                    <Stack
                                        direction="row"
                                        sx={{
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            gap: 2,
                                        }}
                                    >
                                        <Typography variant="body2" sx={{ fontWeight: '500' }}>
                                            {country.label}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {country.value}%
                                        </Typography>
                                    </Stack>
                                    <LinearProgress
                                        variant="determinate"
                                        aria-label="Number of users by country"
                                        value={country.value}
                                        sx={{
                                            [`& .${linearProgressClasses.bar}`]: {
                                                backgroundColor: country.color,
                                            },
                                        }}
                                    />
                                </Stack>
                            </Stack>
                        ))}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
