'use client'
import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function GenericLoading() {
    return (
        <Stack spacing={1}>
            {Array.from({ length: 10 }).map((_, index) => (
                <Skeleton key={index} />
            ))}
        </Stack>
    )
}
