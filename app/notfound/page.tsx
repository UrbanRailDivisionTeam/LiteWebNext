'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

export default function NotFound() {
    const router = useRouter()
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '80vh',
                    textAlign: 'center',
                    gap: 2,
                }}
            >
                <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
                <Typography variant="h2" component="h1" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    找不到页面
                </Typography>
                <Typography variant="body1">抱歉，您访问的页面不存在。请检查URL是否正确，或返回看板首页。</Typography>
                <Button variant="contained" size="large" onClick={() => router.push('/')} sx={{ mt: 2 }}>
                    返回首页
                </Button>
            </Box>
        </Container>
    )
}
