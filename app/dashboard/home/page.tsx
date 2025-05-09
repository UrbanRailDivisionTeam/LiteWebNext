'use client'
import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SelfGrid from './SelfGrid'
import { navigator_links, office_links, business_links, tools_links, other_links} from './data'

export default function Dashboard() {
    return (
        <>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                常用导航网址
            </Typography>
            <Grid container spacing={2} columns={6} sx={{ mb: (theme) => theme.spacing(2) }}>
                {
                    navigator_links.map((item, index) => {
                        return (
                            <Grid key={index} size={{ xs: 12, sm: 6, lg: 1 }}>
                                <SelfGrid {...item} />
                            </Grid>
                        )
                    })
                }
            </Grid>

            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                常用办公系统导航
            </Typography>
            <Grid container spacing={2} columns={6} sx={{ mb: (theme) => theme.spacing(2) }}>
                {
                    office_links.map((item, index) => {
                        return (
                            <Grid key={index} size={{ xs: 12, sm: 6, lg: 1 }}>
                                <SelfGrid {...item} />
                            </Grid>
                        )
                    })
                }
            </Grid>

            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                常用业务系统导航
            </Typography>
            <Grid container spacing={2} columns={6} sx={{ mb: (theme) => theme.spacing(2) }}>
                {
                    business_links.map((item, index) => {
                        return (
                            <Grid key={index} size={{ xs: 12, sm: 6, lg: 1 }}>
                                <SelfGrid {...item} />
                            </Grid>
                        )
                    })
                }
            </Grid>

            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                常用工具类系统导航
            </Typography>
            <Grid container spacing={2} columns={6} sx={{ mb: (theme) => theme.spacing(2) }}>
                {
                    tools_links.map((item, index) => {
                        return (
                            <Grid key={index} size={{ xs: 12, sm: 6, lg: 1 }}>
                                <SelfGrid {...item} />
                            </Grid>
                        )
                    })
                }
            </Grid>

            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                其他系统导航
            </Typography>
            <Grid container spacing={2} columns={6} sx={{ mb: (theme) => theme.spacing(2) }}>
                {
                    other_links.map((item, index) => {
                        return (
                            <Grid key={index} size={{ xs: 12, sm: 6, lg: 1 }}>
                                <SelfGrid {...item} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}
