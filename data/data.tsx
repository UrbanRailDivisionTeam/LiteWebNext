'use client'
import { useTheme } from '@mui/material/styles'

export async function getCurrentTime(label: string): Promise<string> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/update_time/${label}`)
    const data = await res.json()
    return data['time']
}
export function formatMinutes(minutes: number): string {
    // 计算小时数（向下取整）
    const hours = Math.floor(minutes / 60)
    // 计算剩余分钟数
    const remainingMinutes = minutes % 60
    // 根据小时和分钟数的情况返回不同格式
    if (hours === 0) {
        return `${remainingMinutes}分钟`
    } else if (remainingMinutes === 0) {
        return `${hours}小时`
    } else {
        return `${hours}小时${remainingMinutes.toFixed(0)}分钟`
    }
}

export function getColorPalette() {
    const theme = useTheme()
    return [(theme.vars || theme).palette.primary.dark, (theme.vars || theme).palette.primary.light]
}
