'use client'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { SelfGridProps } from './data'


export default function SelfGrid({ title, url, description }: SelfGridProps) {
    return (
        <>
            <Card
                sx={{
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4
                    }
                }}
            >
                <CardContent>
                    <Link
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        underline="none"
                        color="primary"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1
                        }}
                    >
                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>
                        <OpenInNewIcon sx={{ ml: 1, fontSize: 16 }} />
                    </Link>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}