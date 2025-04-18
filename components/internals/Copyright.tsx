import * as React from 'react'
import Typography from '@mui/material/Typography'

export default function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            align="center"
            {...props}
            sx={[
                {
                    color: 'text.secondary',
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
        >
            Copyright © 城轨事业部精益信息化组
        </Typography>
    )
}
