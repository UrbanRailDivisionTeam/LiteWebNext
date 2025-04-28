'use client'
export type CalibrationLineTotalProps = {
    index : number
    title_name: string
    trend: 'overtime' | 'ontime'
    request_value: number
    request_time: number
    acerage_time: number
}

export const transCalibrationLineTotalData = (data: any): CalibrationLineTotalProps[] => {
    if (!Array.isArray(data)) {
        console.error('API返回的数据不是数组格式')
        return []
    }
    let temp_data = data.map((item) => ({
        index: Number(item.index || 0),
        title_name: String(item.title_name || ''),
        trend: String(item.trend || '') as 'overtime' | 'ontime',
        request_value: Number(item.request_value || 0),
        request_time: Number(item.request_time || 0),
        acerage_time: Number(item.acerage_time || 0),
    }))
    temp_data.sort((a, b) => a.index - b.index)
    return temp_data
}

export type CalibrationLineGroup = {
    title_name: string
    trend: 'inlimit' | 'overlimit'
    group: CalibrationLineGroupProps[]
}

export type CalibrationLineGroupProps = {
    group_name: string
    ontime_value: number
    total_value: number
}

export const transCalibrationLineGroupData = (data: any): CalibrationLineGroup[] => {
    if (!Array.isArray(data)) {
        console.error('API返回的数据不是数组格式')
        return []
    }
    let temp_data = data.map((item) => ({
        title_name: String(item.title_name || ''),
        trend: String(item.trend || '') as 'inlimit' | 'overlimit',
        group: item.group.map(
            (groupItem: any): CalibrationLineGroupProps => ({
                group_name: String(groupItem.group_name || ''),
                ontime_value: Number(groupItem.ontime_value || 0),
                total_value: Number(groupItem.total_value || 0),
            })
        ),
    }))
    temp_data.sort((a, b) => a.title_name.localeCompare(b.title_name))
    return temp_data
}

export interface PieChartErrorProps {
    id?: number
    label: string
    value: number
}

export interface PieChartErrorType {
    title_name: string
    data: PieChartErrorProps[]
}

export const transPieChartErrorType = (data: any): PieChartErrorType[] => {
    if (!Array.isArray(data)) {
        console.error('API返回的数据不是数组格式')
        return []
    }
    let temp_data = data.map((item) => ({
        title_name: String(item.title_name || ''),
        data: item.data.map(
            (groupItem: any): PieChartErrorProps => ({
                label: String(groupItem.label || ''),
                value: Number(groupItem.value || 0),
            })
        ),
    }))
    temp_data.sort((a, b) => a.title_name.localeCompare(b.title_name))
    return temp_data
}

